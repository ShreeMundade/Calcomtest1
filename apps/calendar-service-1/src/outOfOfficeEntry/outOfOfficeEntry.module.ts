import { Module } from "@nestjs/common";
import { OutOfOfficeEntryModuleBase } from "./base/outOfOfficeEntry.module.base";
import { OutOfOfficeEntryService } from "./outOfOfficeEntry.service";
import { OutOfOfficeEntryController } from "./outOfOfficeEntry.controller";
import { OutOfOfficeEntryResolver } from "./outOfOfficeEntry.resolver";

@Module({
  imports: [OutOfOfficeEntryModuleBase],
  controllers: [OutOfOfficeEntryController],
  providers: [OutOfOfficeEntryService, OutOfOfficeEntryResolver],
  exports: [OutOfOfficeEntryService],
})
export class OutOfOfficeEntryModule {}
