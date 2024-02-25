import * as graphql from "@nestjs/graphql";
import { BookingSeatResolverBase } from "./base/bookingSeat.resolver.base";
import { BookingSeat } from "./base/BookingSeat";
import { BookingSeatService } from "./bookingSeat.service";

@graphql.Resolver(() => BookingSeat)
export class BookingSeatResolver extends BookingSeatResolverBase {
  constructor(protected readonly service: BookingSeatService) {
    super(service);
  }
}
