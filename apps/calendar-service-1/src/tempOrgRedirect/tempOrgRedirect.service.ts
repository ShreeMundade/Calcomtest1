import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TempOrgRedirectServiceBase } from "./base/tempOrgRedirect.service.base";

@Injectable()
export class TempOrgRedirectService extends TempOrgRedirectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
