/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  VerificationToken, // @ts-ignore
  Team,
} from "@prisma/client";

export class VerificationTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VerificationTokenCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenCountArgs>
  ): Promise<number> {
    return this.prisma.verificationToken.count(args);
  }

  async verificationTokens<T extends Prisma.VerificationTokenFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>
  ): Promise<VerificationToken[]> {
    return this.prisma.verificationToken.findMany(args);
  }
  async verificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>
  ): Promise<VerificationToken | null> {
    return this.prisma.verificationToken.findUnique(args);
  }
  async createVerificationToken<T extends Prisma.VerificationTokenCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>
  ): Promise<VerificationToken> {
    return this.prisma.verificationToken.create<T>(args);
  }
  async updateVerificationToken<T extends Prisma.VerificationTokenUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>
  ): Promise<VerificationToken> {
    return this.prisma.verificationToken.update<T>(args);
  }
  async deleteVerificationToken<T extends Prisma.VerificationTokenDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>
  ): Promise<VerificationToken> {
    return this.prisma.verificationToken.delete(args);
  }

  async getTeam(parentId: number): Promise<Team | null> {
    return this.prisma.verificationToken
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}