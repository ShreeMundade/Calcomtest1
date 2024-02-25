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
import { AccessCodeController } from "../accessCode.controller";
import { AccessCodeService } from "../accessCode.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  expiresAt: new Date(),
  id: 42,
};
const CREATE_RESULT = {
  code: "exampleCode",
  expiresAt: new Date(),
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    expiresAt: new Date(),
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  expiresAt: new Date(),
  id: 42,
};

const service = {
  createAccessCode() {
    return CREATE_RESULT;
  },
  accessCodes: () => FIND_MANY_RESULT,
  accessCode: ({ where }: { where: { id: string } }) => {
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

describe("AccessCode", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccessCodeService,
          useValue: service,
        },
      ],
      controllers: [AccessCodeController],
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

  test("POST /accessCodes", async () => {
    await request(app.getHttpServer())
      .post("/accessCodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
      });
  });

  test("GET /accessCodes", async () => {
    await request(app.getHttpServer())
      .get("/accessCodes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expiresAt: FIND_MANY_RESULT[0].expiresAt.toISOString(),
        },
      ]);
  });

  test("GET /accessCodes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accessCodes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accessCodes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accessCodes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expiresAt: FIND_ONE_RESULT.expiresAt.toISOString(),
      });
  });

  test("POST /accessCodes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accessCodes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/accessCodes")
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
