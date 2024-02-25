import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AppRoutingFormsFormResponseController } from "../appRoutingFormsFormResponse.controller";
import { AppRoutingFormsFormResponseService } from "../appRoutingFormsFormResponse.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  formFillerId: "exampleFormFillerId",
  id: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  formFillerId: "exampleFormFillerId",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    formFillerId: "exampleFormFillerId",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  formFillerId: "exampleFormFillerId",
  id: 42,
};

const service = {
  createAppRoutingFormsFormResponse() {
    return CREATE_RESULT;
  },
  appRoutingFormsFormResponses: () => FIND_MANY_RESULT,
  appRoutingFormsFormResponse: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AppRoutingFormsFormResponse", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AppRoutingFormsFormResponseService,
          useValue: service,
        },
      ],
      controllers: [AppRoutingFormsFormResponseController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /appRoutingFormsFormResponses", async () => {
    await request(app.getHttpServer())
      .post("/appRoutingFormsFormResponses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /appRoutingFormsFormResponses", async () => {
    await request(app.getHttpServer())
      .get("/appRoutingFormsFormResponses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /appRoutingFormsFormResponses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appRoutingFormsFormResponses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /appRoutingFormsFormResponses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appRoutingFormsFormResponses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /appRoutingFormsFormResponses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/appRoutingFormsFormResponses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/appRoutingFormsFormResponses")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
