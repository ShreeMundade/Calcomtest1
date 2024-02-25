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
import { AppRoutingFormsFormResponseService } from "../appRoutingFormsFormResponse.service";
import { AppRoutingFormsFormResponseCreateInput } from "./AppRoutingFormsFormResponseCreateInput";
import { AppRoutingFormsFormResponse } from "./AppRoutingFormsFormResponse";
import { AppRoutingFormsFormResponseFindManyArgs } from "./AppRoutingFormsFormResponseFindManyArgs";
import { AppRoutingFormsFormResponseWhereUniqueInput } from "./AppRoutingFormsFormResponseWhereUniqueInput";
import { AppRoutingFormsFormResponseUpdateInput } from "./AppRoutingFormsFormResponseUpdateInput";

export class AppRoutingFormsFormResponseControllerBase {
  constructor(protected readonly service: AppRoutingFormsFormResponseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AppRoutingFormsFormResponse })
  async createAppRoutingFormsFormResponse(
    @common.Body() data: AppRoutingFormsFormResponseCreateInput
  ): Promise<AppRoutingFormsFormResponse> {
    return await this.service.createAppRoutingFormsFormResponse({
      data: {
        ...data,

        form: {
          connect: data.form,
        },
      },
      select: {
        createdAt: true,

        form: {
          select: {
            id: true,
          },
        },

        formFillerId: true,
        id: true,
        response: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AppRoutingFormsFormResponse] })
  @ApiNestedQuery(AppRoutingFormsFormResponseFindManyArgs)
  async appRoutingFormsFormResponses(
    @common.Req() request: Request
  ): Promise<AppRoutingFormsFormResponse[]> {
    const args = plainToClass(
      AppRoutingFormsFormResponseFindManyArgs,
      request.query
    );
    return this.service.appRoutingFormsFormResponses({
      ...args,
      select: {
        createdAt: true,

        form: {
          select: {
            id: true,
          },
        },

        formFillerId: true,
        id: true,
        response: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AppRoutingFormsFormResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async appRoutingFormsFormResponse(
    @common.Param() params: AppRoutingFormsFormResponseWhereUniqueInput
  ): Promise<AppRoutingFormsFormResponse | null> {
    const result = await this.service.appRoutingFormsFormResponse({
      where: params,
      select: {
        createdAt: true,

        form: {
          select: {
            id: true,
          },
        },

        formFillerId: true,
        id: true,
        response: true,
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
  @swagger.ApiOkResponse({ type: AppRoutingFormsFormResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAppRoutingFormsFormResponse(
    @common.Param() params: AppRoutingFormsFormResponseWhereUniqueInput,
    @common.Body() data: AppRoutingFormsFormResponseUpdateInput
  ): Promise<AppRoutingFormsFormResponse | null> {
    try {
      return await this.service.updateAppRoutingFormsFormResponse({
        where: params,
        data: {
          ...data,

          form: {
            connect: data.form,
          },
        },
        select: {
          createdAt: true,

          form: {
            select: {
              id: true,
            },
          },

          formFillerId: true,
          id: true,
          response: true,
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
  @swagger.ApiOkResponse({ type: AppRoutingFormsFormResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAppRoutingFormsFormResponse(
    @common.Param() params: AppRoutingFormsFormResponseWhereUniqueInput
  ): Promise<AppRoutingFormsFormResponse | null> {
    try {
      return await this.service.deleteAppRoutingFormsFormResponse({
        where: params,
        select: {
          createdAt: true,

          form: {
            select: {
              id: true,
            },
          },

          formFillerId: true,
          id: true,
          response: true,
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