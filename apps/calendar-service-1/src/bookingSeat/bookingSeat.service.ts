import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookingSeatServiceBase } from "./base/bookingSeat.service.base";

@Injectable()
export class BookingSeatService extends BookingSeatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
