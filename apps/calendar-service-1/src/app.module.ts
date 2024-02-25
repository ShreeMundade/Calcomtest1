import { Module } from "@nestjs/common";
import { HostModule } from "./host/host.module";
import { EventTypeModule } from "./eventType/eventType.module";
import { CredentialModule } from "./credential/credential.module";
import { DestinationCalendarModule } from "./destinationCalendar/destinationCalendar.module";
import { UserPasswordModule } from "./userPassword/userPassword.module";
import { UserModule } from "./user/user.module";
import { ProfileModule } from "./profile/profile.module";
import { TeamModule } from "./team/team.module";
import { MembershipModule } from "./membership/membership.module";
import { VerificationTokenModule } from "./verificationToken/verificationToken.module";
import { InstantMeetingTokenModule } from "./instantMeetingToken/instantMeetingToken.module";
import { BookingReferenceModule } from "./bookingReference/bookingReference.module";
import { AttendeeModule } from "./attendee/attendee.module";
import { BookingModule } from "./booking/booking.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { AvailabilityModule } from "./availability/availability.module";
import { SelectedCalendarModule } from "./selectedCalendar/selectedCalendar.module";
import { EventTypeCustomInputModule } from "./eventTypeCustomInput/eventTypeCustomInput.module";
import { ResetPasswordRequestModule } from "./resetPasswordRequest/resetPasswordRequest.module";
import { ReminderMailModule } from "./reminderMail/reminderMail.module";
import { PaymentModule } from "./payment/payment.module";
import { WebhookModule } from "./webhook/webhook.module";
import { ImpersonationModule } from "./impersonation/impersonation.module";
import { ApiKeyModule } from "./apiKey/apiKey.module";
import { HashedLinkModule } from "./hashedLink/hashedLink.module";
import { AccountModule } from "./account/account.module";
import { SessionModule } from "./session/session.module";
import { AppModelModule } from "./appModel/appModel.module";
import { AppRoutingFormsFormModule } from "./appRoutingFormsForm/appRoutingFormsForm.module";
import { AppRoutingFormsFormResponseModule } from "./appRoutingFormsFormResponse/appRoutingFormsFormResponse.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { WorkflowStepModule } from "./workflowStep/workflowStep.module";
import { WorkflowModule } from "./workflow/workflow.module";
import { WorkflowsOnEventTypeModule } from "./workflowsOnEventType/workflowsOnEventType.module";
import { DeploymentModule } from "./deployment/deployment.module";
import { WorkflowReminderModule } from "./workflowReminder/workflowReminder.module";
import { WebhookScheduledTriggerModule } from "./webhookScheduledTrigger/webhookScheduledTrigger.module";
import { BookingSeatModule } from "./bookingSeat/bookingSeat.module";
import { VerifiedNumberModule } from "./verifiedNumber/verifiedNumber.module";
import { FeatureModule } from "./feature/feature.module";
import { SelectedSlotModule } from "./selectedSlot/selectedSlot.module";
import { OAuthClientModule } from "./oAuthClient/oAuthClient.module";
import { AccessCodeModule } from "./accessCode/accessCode.module";
import { CalendarCacheModule } from "./calendarCache/calendarCache.module";
import { TempOrgRedirectModule } from "./tempOrgRedirect/tempOrgRedirect.module";
import { AvatarModule } from "./avatar/avatar.module";
import { OutOfOfficeEntryModule } from "./outOfOfficeEntry/outOfOfficeEntry.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    HostModule,
    EventTypeModule,
    CredentialModule,
    DestinationCalendarModule,
    UserPasswordModule,
    UserModule,
    ProfileModule,
    TeamModule,
    MembershipModule,
    VerificationTokenModule,
    InstantMeetingTokenModule,
    BookingReferenceModule,
    AttendeeModule,
    BookingModule,
    ScheduleModule,
    AvailabilityModule,
    SelectedCalendarModule,
    EventTypeCustomInputModule,
    ResetPasswordRequestModule,
    ReminderMailModule,
    PaymentModule,
    WebhookModule,
    ImpersonationModule,
    ApiKeyModule,
    HashedLinkModule,
    AccountModule,
    SessionModule,
    AppModelModule,
    AppRoutingFormsFormModule,
    AppRoutingFormsFormResponseModule,
    FeedbackModule,
    WorkflowStepModule,
    WorkflowModule,
    WorkflowsOnEventTypeModule,
    DeploymentModule,
    WorkflowReminderModule,
    WebhookScheduledTriggerModule,
    BookingSeatModule,
    VerifiedNumberModule,
    FeatureModule,
    SelectedSlotModule,
    OAuthClientModule,
    AccessCodeModule,
    CalendarCacheModule,
    TempOrgRedirectModule,
    AvatarModule,
    OutOfOfficeEntryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
