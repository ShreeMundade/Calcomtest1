import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HostServiceBase } from "./base/host.service.base";

@Injectable()
export class HostService extends HostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
