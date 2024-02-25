import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarCacheServiceBase } from "./base/calendarCache.service.base";

@Injectable()
export class CalendarCacheService extends CalendarCacheServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
