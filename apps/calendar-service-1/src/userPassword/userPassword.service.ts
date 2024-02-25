import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPasswordServiceBase } from "./base/userPassword.service.base";

@Injectable()
export class UserPasswordService extends UserPasswordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
