import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessCodeServiceBase } from "./base/accessCode.service.base";

@Injectable()
export class AccessCodeService extends AccessCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
