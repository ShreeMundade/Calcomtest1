import * as graphql from "@nestjs/graphql";
import { VerifiedNumberResolverBase } from "./base/verifiedNumber.resolver.base";
import { VerifiedNumber } from "./base/VerifiedNumber";
import { VerifiedNumberService } from "./verifiedNumber.service";

@graphql.Resolver(() => VerifiedNumber)
export class VerifiedNumberResolver extends VerifiedNumberResolverBase {
  constructor(protected readonly service: VerifiedNumberService) {
    super(service);
  }
}
