import * as graphql from "@nestjs/graphql";
import { HostResolverBase } from "./base/host.resolver.base";
import { Host } from "./base/Host";
import { HostService } from "./host.service";

@graphql.Resolver(() => Host)
export class HostResolver extends HostResolverBase {
  constructor(protected readonly service: HostService) {
    super(service);
  }
}
