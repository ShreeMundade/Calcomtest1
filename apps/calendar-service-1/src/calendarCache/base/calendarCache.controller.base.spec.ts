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
import { CalendarCacheController } from "../calendarCache.controller";
import { CalendarCacheService } from "../calendarCache.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  expiresAt: new Date(),
  id: 42,
  key: "exampleKey",
};
const CREATE_RESULT = {
  expiresAt: new Date(),
  id: 42,
  key: "exampleKey",
};
const FIND_MANY_RESULT = [
  {
    expiresAt: new Date(),
    id: 42,
    key: "exampleKey",
  },
];
const FIND_ONE_RESULT = {
  expiresAt: new Date(),
  id: 42,
  key: "exampleKey",
};

const service = {
  createCalendarCache() {
    return CREATE_RESULT;
  },
  calendarCaches: () => FIND_MANY_RESULT,
  calendarCache: ({ where }: { where: { id: string } }) => {
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

describe("CalendarCache", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CalendarCacheService,
          useValue: service,
        },
      ],
      controllers: [CalendarCacheController],
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

  test("POST /calendarCaches", async () => {
    await request(app.getHttpServer())
      .post("/calendarCaches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
      });
  });

  test("GET /calendarCaches", async () => {
    await request(app.getHttpServer())
      .get("/calendarCaches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expiresAt: FIND_MANY_RESULT[0].expiresAt.toISOString(),
        },
      ]);
  });

  test("GET /calendarCaches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/calendarCaches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /calendarCaches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/calendarCaches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expiresAt: FIND_ONE_RESULT.expiresAt.toISOString(),
      });
  });

  test("POST /calendarCaches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/calendarCaches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/calendarCaches")
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
