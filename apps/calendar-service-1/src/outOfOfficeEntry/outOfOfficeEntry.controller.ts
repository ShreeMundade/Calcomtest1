import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutOfOfficeEntryService } from "./outOfOfficeEntry.service";
import { OutOfOfficeEntryControllerBase } from "./base/outOfOfficeEntry.controller.base";

@swagger.ApiTags("outOfOfficeEntries")
@common.Controller("outOfOfficeEntries")
export class OutOfOfficeEntryController extends OutOfOfficeEntryControllerBase {
  constructor(protected readonly service: OutOfOfficeEntryService) {
    super(service);
  }
}
