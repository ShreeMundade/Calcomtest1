import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppRoutingFormsFormServiceBase } from "./base/appRoutingFormsForm.service.base";

@Injectable()
export class AppRoutingFormsFormService extends AppRoutingFormsFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
