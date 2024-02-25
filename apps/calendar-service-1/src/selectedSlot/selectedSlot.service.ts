import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SelectedSlotServiceBase } from "./base/selectedSlot.service.base";

@Injectable()
export class SelectedSlotService extends SelectedSlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
