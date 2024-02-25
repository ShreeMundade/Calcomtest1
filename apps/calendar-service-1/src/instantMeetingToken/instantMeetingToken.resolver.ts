import * as graphql from "@nestjs/graphql";
import { InstantMeetingTokenResolverBase } from "./base/instantMeetingToken.resolver.base";
import { InstantMeetingToken } from "./base/InstantMeetingToken";
import { InstantMeetingTokenService } from "./instantMeetingToken.service";

@graphql.Resolver(() => InstantMeetingToken)
export class InstantMeetingTokenResolver extends InstantMeetingTokenResolverBase {
  constructor(protected readonly service: InstantMeetingTokenService) {
    super(service);
  }
}
