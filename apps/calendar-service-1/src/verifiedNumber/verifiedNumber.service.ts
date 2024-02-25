import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VerifiedNumberServiceBase } from "./base/verifiedNumber.service.base";

@Injectable()
export class VerifiedNumberService extends VerifiedNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
