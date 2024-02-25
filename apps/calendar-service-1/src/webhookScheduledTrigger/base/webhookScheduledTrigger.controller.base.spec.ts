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
import { WebhookScheduledTriggerController } from "../webhookScheduledTrigger.controller";
import { WebhookScheduledTriggerService } from "../webhookScheduledTrigger.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: 42,
  jobName: "exampleJobName",
  payload: "examplePayload",
  retryCount: 42,
  startAfter: new Date(),
  subscriberUrl: "exampleSubscriberUrl",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: 42,
  jobName: "exampleJobName",
  payload: "examplePayload",
  retryCount: 42,
  startAfter: new Date(),
  subscriberUrl: "exampleSubscriberUrl",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: 42,
    jobName: "exampleJobName",
    payload: "examplePayload",
    retryCount: 42,
    startAfter: new Date(),
    subscriberUrl: "exampleSubscriberUrl",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: 42,
  jobName: "exampleJobName",
  payload: "examplePayload",
  retryCount: 42,
  startAfter: new Date(),
  subscriberUrl: "exampleSubscriberUrl",
};

const service = {
  createWebhookScheduledTrigger() {
    return CREATE_RESULT;
  },
  webhookScheduledTriggers: () => FIND_MANY_RESULT,
  webhookScheduledTrigger: ({ where }: { where: { id: string } }) => {
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

describe("WebhookScheduledTrigger", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WebhookScheduledTriggerService,
          useValue: service,
        },
      ],
      controllers: [WebhookScheduledTriggerController],
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

  test("POST /webhookScheduledTriggers", async () => {
    await request(app.getHttpServer())
      .post("/webhookScheduledTriggers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startAfter: CREATE_RESULT.startAfter.toISOString(),
      });
  });

  test("GET /webhookScheduledTriggers", async () => {
    await request(app.getHttpServer())
      .get("/webhookScheduledTriggers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          startAfter: FIND_MANY_RESULT[0].startAfter.toISOString(),
        },
      ]);
  });

  test("GET /webhookScheduledTriggers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webhookScheduledTriggers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /webhookScheduledTriggers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webhookScheduledTriggers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        startAfter: FIND_ONE_RESULT.startAfter.toISOString(),
      });
  });

  test("POST /webhookScheduledTriggers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/webhookScheduledTriggers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startAfter: CREATE_RESULT.startAfter.toISOString(),
      })
      .then(function () {
        agent
          .post("/webhookScheduledTriggers")
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
