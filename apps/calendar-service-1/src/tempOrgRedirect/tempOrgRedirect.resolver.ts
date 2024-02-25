import * as graphql from "@nestjs/graphql";
import { TempOrgRedirectResolverBase } from "./base/tempOrgRedirect.resolver.base";
import { TempOrgRedirect } from "./base/TempOrgRedirect";
import { TempOrgRedirectService } from "./tempOrgRedirect.service";

@graphql.Resolver(() => TempOrgRedirect)
export class TempOrgRedirectResolver extends TempOrgRedirectResolverBase {
  constructor(protected readonly service: TempOrgRedirectService) {
    super(service);
  }
}
