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
import { SelectedSlotController } from "../selectedSlot.controller";
import { SelectedSlotService } from "../selectedSlot.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  eventTypeId: 42,
  id: 42,
  isSeat: "true",
  releaseAt: new Date(),
  slotUtcEndDate: new Date(),
  slotUtcStartDate: new Date(),
  uid: "exampleUid",
  userId: 42,
};
const CREATE_RESULT = {
  eventTypeId: 42,
  id: 42,
  isSeat: "true",
  releaseAt: new Date(),
  slotUtcEndDate: new Date(),
  slotUtcStartDate: new Date(),
  uid: "exampleUid",
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    eventTypeId: 42,
    id: 42,
    isSeat: "true",
    releaseAt: new Date(),
    slotUtcEndDate: new Date(),
    slotUtcStartDate: new Date(),
    uid: "exampleUid",
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  eventTypeId: 42,
  id: 42,
  isSeat: "true",
  releaseAt: new Date(),
  slotUtcEndDate: new Date(),
  slotUtcStartDate: new Date(),
  uid: "exampleUid",
  userId: 42,
};

const service = {
  createSelectedSlot() {
    return CREATE_RESULT;
  },
  selectedSlots: () => FIND_MANY_RESULT,
  selectedSlot: ({ where }: { where: { id: string } }) => {
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

describe("SelectedSlot", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SelectedSlotService,
          useValue: service,
        },
      ],
      controllers: [SelectedSlotController],
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

  test("POST /selectedSlots", async () => {
    await request(app.getHttpServer())
      .post("/selectedSlots")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        releaseAt: CREATE_RESULT.releaseAt.toISOString(),
        slotUtcEndDate: CREATE_RESULT.slotUtcEndDate.toISOString(),
        slotUtcStartDate: CREATE_RESULT.slotUtcStartDate.toISOString(),
      });
  });

  test("GET /selectedSlots", async () => {
    await request(app.getHttpServer())
      .get("/selectedSlots")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          releaseAt: FIND_MANY_RESULT[0].releaseAt.toISOString(),
          slotUtcEndDate: FIND_MANY_RESULT[0].slotUtcEndDate.toISOString(),
          slotUtcStartDate: FIND_MANY_RESULT[0].slotUtcStartDate.toISOString(),
        },
      ]);
  });

  test("GET /selectedSlots/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/selectedSlots"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /selectedSlots/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/selectedSlots"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        releaseAt: FIND_ONE_RESULT.releaseAt.toISOString(),
        slotUtcEndDate: FIND_ONE_RESULT.slotUtcEndDate.toISOString(),
        slotUtcStartDate: FIND_ONE_RESULT.slotUtcStartDate.toISOString(),
      });
  });

  test("POST /selectedSlots existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/selectedSlots")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        releaseAt: CREATE_RESULT.releaseAt.toISOString(),
        slotUtcEndDate: CREATE_RESULT.slotUtcEndDate.toISOString(),
        slotUtcStartDate: CREATE_RESULT.slotUtcStartDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/selectedSlots")
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
