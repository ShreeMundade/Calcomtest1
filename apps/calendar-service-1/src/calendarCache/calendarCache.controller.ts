import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarCacheService } from "./calendarCache.service";
import { CalendarCacheControllerBase } from "./base/calendarCache.controller.base";

@swagger.ApiTags("calendarCaches")
@common.Controller("calendarCaches")
export class CalendarCacheController extends CalendarCacheControllerBase {
  constructor(protected readonly service: CalendarCacheService) {
    super(service);
  }
}
