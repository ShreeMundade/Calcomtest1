import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppRoutingFormsFormResponseServiceBase } from "./base/appRoutingFormsFormResponse.service.base";

@Injectable()
export class AppRoutingFormsFormResponseService extends AppRoutingFormsFormResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
