import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstantMeetingTokenService } from "./instantMeetingToken.service";
import { InstantMeetingTokenControllerBase } from "./base/instantMeetingToken.controller.base";

@swagger.ApiTags("instantMeetingTokens")
@common.Controller("instantMeetingTokens")
export class InstantMeetingTokenController extends InstantMeetingTokenControllerBase {
  constructor(protected readonly service: InstantMeetingTokenService) {
    super(service);
  }
}
