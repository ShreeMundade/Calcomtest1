/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MembershipService } from "../membership.service";
import { MembershipCreateInput } from "./MembershipCreateInput";
import { Membership } from "./Membership";
import { MembershipFindManyArgs } from "./MembershipFindManyArgs";
import { MembershipWhereUniqueInput } from "./MembershipWhereUniqueInput";
import { MembershipUpdateInput } from "./MembershipUpdateInput";

export class MembershipControllerBase {
  constructor(protected readonly service: MembershipService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Membership })
  async createMembership(
    @common.Body() data: MembershipCreateInput
  ): Promise<Membership> {
    return await this.service.createMembership({
      data: {
        ...data,

        team: {
          connect: data.team,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        accepted: true,
        disableImpersonation: true,
        id: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Membership] })
  @ApiNestedQuery(MembershipFindManyArgs)
  async memberships(@common.Req() request: Request): Promise<Membership[]> {
    const args = plainToClass(MembershipFindManyArgs, request.query);
    return this.service.memberships({
      ...args,
      select: {
        accepted: true,
        disableImpersonation: true,
        id: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Membership })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async membership(
    @common.Param() params: MembershipWhereUniqueInput
  ): Promise<Membership | null> {
    const result = await this.service.membership({
      where: params,
      select: {
        accepted: true,
        disableImpersonation: true,
        id: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Membership })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMembership(
    @common.Param() params: MembershipWhereUniqueInput,
    @common.Body() data: MembershipUpdateInput
  ): Promise<Membership | null> {
    try {
      return await this.service.updateMembership({
        where: params,
        data: {
          ...data,

          team: {
            connect: data.team,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          accepted: true,
          disableImpersonation: true,
          id: true,
          role: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Membership })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMembership(
    @common.Param() params: MembershipWhereUniqueInput
  ): Promise<Membership | null> {
    try {
      return await this.service.deleteMembership({
        where: params,
        select: {
          accepted: true,
          disableImpersonation: true,
          id: true,
          role: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
