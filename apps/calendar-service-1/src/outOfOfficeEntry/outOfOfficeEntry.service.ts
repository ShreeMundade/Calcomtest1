import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutOfOfficeEntryServiceBase } from "./base/outOfOfficeEntry.service.base";

@Injectable()
export class OutOfOfficeEntryService extends OutOfOfficeEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
