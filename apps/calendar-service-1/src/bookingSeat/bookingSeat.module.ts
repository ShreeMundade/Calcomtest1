import { Module } from "@nestjs/common";
import { BookingSeatModuleBase } from "./base/bookingSeat.module.base";
import { BookingSeatService } from "./bookingSeat.service";
import { BookingSeatController } from "./bookingSeat.controller";
import { BookingSeatResolver } from "./bookingSeat.resolver";

@Module({
  imports: [BookingSeatModuleBase],
  controllers: [BookingSeatController],
  providers: [BookingSeatService, BookingSeatResolver],
  exports: [BookingSeatService],
})
export class BookingSeatModule {}
