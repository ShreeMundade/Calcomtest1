import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstantMeetingTokenServiceBase } from "./base/instantMeetingToken.service.base";

@Injectable()
export class InstantMeetingTokenService extends InstantMeetingTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
