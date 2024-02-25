import { Module } from "@nestjs/common";
import { SelectedSlotModuleBase } from "./base/selectedSlot.module.base";
import { SelectedSlotService } from "./selectedSlot.service";
import { SelectedSlotController } from "./selectedSlot.controller";
import { SelectedSlotResolver } from "./selectedSlot.resolver";

@Module({
  imports: [SelectedSlotModuleBase],
  controllers: [SelectedSlotController],
  providers: [SelectedSlotService, SelectedSlotResolver],
  exports: [SelectedSlotService],
})
export class SelectedSlotModule {}
