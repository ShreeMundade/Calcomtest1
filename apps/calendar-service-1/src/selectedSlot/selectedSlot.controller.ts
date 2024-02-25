import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SelectedSlotService } from "./selectedSlot.service";
import { SelectedSlotControllerBase } from "./base/selectedSlot.controller.base";

@swagger.ApiTags("selectedSlots")
@common.Controller("selectedSlots")
export class SelectedSlotController extends SelectedSlotControllerBase {
  constructor(protected readonly service: SelectedSlotService) {
    super(service);
  }
}
