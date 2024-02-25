import * as graphql from "@nestjs/graphql";
import { OAuthClientResolverBase } from "./base/oAuthClient.resolver.base";
import { OAuthClient } from "./base/OAuthClient";
import { OAuthClientService } from "./oAuthClient.service";

@graphql.Resolver(() => OAuthClient)
export class OAuthClientResolver extends OAuthClientResolverBase {
  constructor(protected readonly service: OAuthClientService) {
    super(service);
  }
}
