import * as graphql from "@nestjs/graphql";
import { CalendarCacheResolverBase } from "./base/calendarCache.resolver.base";
import { CalendarCache } from "./base/CalendarCache";
import { CalendarCacheService } from "./calendarCache.service";

@graphql.Resolver(() => CalendarCache)
export class CalendarCacheResolver extends CalendarCacheResolverBase {
  constructor(protected readonly service: CalendarCacheService) {
    super(service);
  }
}
