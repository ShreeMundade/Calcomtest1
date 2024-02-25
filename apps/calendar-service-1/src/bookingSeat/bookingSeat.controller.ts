import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookingSeatService } from "./bookingSeat.service";
import { BookingSeatControllerBase } from "./base/bookingSeat.controller.base";

@swagger.ApiTags("bookingSeats")
@common.Controller("bookingSeats")
export class BookingSeatController extends BookingSeatControllerBase {
  constructor(protected readonly service: BookingSeatService) {
    super(service);
  }
}
