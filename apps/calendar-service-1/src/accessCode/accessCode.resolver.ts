import * as graphql from "@nestjs/graphql";
import { AccessCodeResolverBase } from "./base/accessCode.resolver.base";
import { AccessCode } from "./base/AccessCode";
import { AccessCodeService } from "./accessCode.service";

@graphql.Resolver(() => AccessCode)
export class AccessCodeResolver extends AccessCodeResolverBase {
  constructor(protected readonly service: AccessCodeService) {
    super(service);
  }
}
