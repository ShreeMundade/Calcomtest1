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
import { OAuthClientController } from "../oAuthClient.controller";
import { OAuthClientService } from "../oAuthClient.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  clientSecret: "exampleClientSecret",
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  redirectUri: "exampleRedirectUri",
};
const CREATE_RESULT = {
  clientSecret: "exampleClientSecret",
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  redirectUri: "exampleRedirectUri",
};
const FIND_MANY_RESULT = [
  {
    clientSecret: "exampleClientSecret",
    id: "exampleId",
    logo: "exampleLogo",
    name: "exampleName",
    redirectUri: "exampleRedirectUri",
  },
];
const FIND_ONE_RESULT = {
  clientSecret: "exampleClientSecret",
  id: "exampleId",
  logo: "exampleLogo",
  name: "exampleName",
  redirectUri: "exampleRedirectUri",
};

const service = {
  createOAuthClient() {
    return CREATE_RESULT;
  },
  oAuthClients: () => FIND_MANY_RESULT,
  oAuthClient: ({ where }: { where: { id: string } }) => {
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

describe("OAuthClient", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OAuthClientService,
          useValue: service,
        },
      ],
      controllers: [OAuthClientController],
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

  test("POST /oAuthClients", async () => {
    await request(app.getHttpServer())
      .post("/oAuthClients")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /oAuthClients", async () => {
    await request(app.getHttpServer())
      .get("/oAuthClients")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /oAuthClients/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/oAuthClients"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /oAuthClients/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/oAuthClients"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /oAuthClients existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/oAuthClients")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/oAuthClients")
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
