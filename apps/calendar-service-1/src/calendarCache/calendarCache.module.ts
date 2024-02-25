import { Module } from "@nestjs/common";
import { CalendarCacheModuleBase } from "./base/calendarCache.module.base";
import { CalendarCacheService } from "./calendarCache.service";
import { CalendarCacheController } from "./calendarCache.controller";
import { CalendarCacheResolver } from "./calendarCache.resolver";

@Module({
  imports: [CalendarCacheModuleBase],
  controllers: [CalendarCacheController],
  providers: [CalendarCacheService, CalendarCacheResolver],
  exports: [CalendarCacheService],
})
export class CalendarCacheModule {}
