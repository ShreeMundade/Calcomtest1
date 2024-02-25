import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebhookScheduledTriggerServiceBase } from "./base/webhookScheduledTrigger.service.base";

@Injectable()
export class WebhookScheduledTriggerService extends WebhookScheduledTriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
