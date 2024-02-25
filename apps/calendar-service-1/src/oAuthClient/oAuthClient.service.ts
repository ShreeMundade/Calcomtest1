import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OAuthClientServiceBase } from "./base/oAuthClient.service.base";

@Injectable()
export class OAuthClientService extends OAuthClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
