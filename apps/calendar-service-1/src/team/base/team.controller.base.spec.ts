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
import { TeamController } from "../team.controller";
import { TeamService } from "../team.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  appIconLogo: "exampleAppIconLogo",
  appLogo: "exampleAppLogo",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  calVideoLogo: "exampleCalVideoLogo",
  createdAt: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  hideBookATeamMember: "true",
  hideBranding: "true",
  id: 42,
  isPrivate: "true",
  logo: "exampleLogo",
  logoUrl: "exampleLogoUrl",
  name: "exampleName",
  pendingPayment: "true",
  slug: "exampleSlug",
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
};
const CREATE_RESULT = {
  appIconLogo: "exampleAppIconLogo",
  appLogo: "exampleAppLogo",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  calVideoLogo: "exampleCalVideoLogo",
  createdAt: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  hideBookATeamMember: "true",
  hideBranding: "true",
  id: 42,
  isPrivate: "true",
  logo: "exampleLogo",
  logoUrl: "exampleLogoUrl",
  name: "exampleName",
  pendingPayment: "true",
  slug: "exampleSlug",
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
};
const FIND_MANY_RESULT = [
  {
    appIconLogo: "exampleAppIconLogo",
    appLogo: "exampleAppLogo",
    bio: "exampleBio",
    brandColor: "exampleBrandColor",
    calVideoLogo: "exampleCalVideoLogo",
    createdAt: new Date(),
    darkBrandColor: "exampleDarkBrandColor",
    hideBookATeamMember: "true",
    hideBranding: "true",
    id: 42,
    isPrivate: "true",
    logo: "exampleLogo",
    logoUrl: "exampleLogoUrl",
    name: "exampleName",
    pendingPayment: "true",
    slug: "exampleSlug",
    theme: "exampleTheme",
    timeFormat: 42,
    timeZone: "exampleTimeZone",
    weekStart: "exampleWeekStart",
  },
];
const FIND_ONE_RESULT = {
  appIconLogo: "exampleAppIconLogo",
  appLogo: "exampleAppLogo",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  calVideoLogo: "exampleCalVideoLogo",
  createdAt: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  hideBookATeamMember: "true",
  hideBranding: "true",
  id: 42,
  isPrivate: "true",
  logo: "exampleLogo",
  logoUrl: "exampleLogoUrl",
  name: "exampleName",
  pendingPayment: "true",
  slug: "exampleSlug",
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
};

const service = {
  createTeam() {
    return CREATE_RESULT;
  },
  teams: () => FIND_MANY_RESULT,
  team: ({ where }: { where: { id: string } }) => {
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

describe("Team", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeamService,
          useValue: service,
        },
      ],
      controllers: [TeamController],
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

  test("POST /teams", async () => {
    await request(app.getHttpServer())
      .post("/teams")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /teams", async () => {
    await request(app.getHttpServer())
      .get("/teams")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /teams/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teams"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teams/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teams"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /teams existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teams")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/teams")
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
