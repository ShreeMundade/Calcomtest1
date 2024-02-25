import * as graphql from "@nestjs/graphql";
import { AvatarResolverBase } from "./base/avatar.resolver.base";
import { Avatar } from "./base/Avatar";
import { AvatarService } from "./avatar.service";

@graphql.Resolver(() => Avatar)
export class AvatarResolver extends AvatarResolverBase {
  constructor(protected readonly service: AvatarService) {
    super(service);
  }
}
