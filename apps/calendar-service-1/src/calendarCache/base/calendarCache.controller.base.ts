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
import { CalendarCacheService } from "../calendarCache.service";
import { CalendarCacheCreateInput } from "./CalendarCacheCreateInput";
import { CalendarCache } from "./CalendarCache";
import { CalendarCacheFindManyArgs } from "./CalendarCacheFindManyArgs";
import { CalendarCacheWhereUniqueInput } from "./CalendarCacheWhereUniqueInput";
import { CalendarCacheUpdateInput } from "./CalendarCacheUpdateInput";

export class CalendarCacheControllerBase {
  constructor(protected readonly service: CalendarCacheService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CalendarCache })
  async createCalendarCache(
    @common.Body() data: CalendarCacheCreateInput
  ): Promise<CalendarCache> {
    return await this.service.createCalendarCache({
      data: {
        ...data,

        credential: data.credential
          ? {
              connect: data.credential,
            }
          : undefined,
      },
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        expiresAt: true,
        id: true,
        key: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CalendarCache] })
  @ApiNestedQuery(CalendarCacheFindManyArgs)
  async calendarCaches(
    @common.Req() request: Request
  ): Promise<CalendarCache[]> {
    const args = plainToClass(CalendarCacheFindManyArgs, request.query);
    return this.service.calendarCaches({
      ...args,
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        expiresAt: true,
        id: true,
        key: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CalendarCache })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async calendarCache(
    @common.Param() params: CalendarCacheWhereUniqueInput
  ): Promise<CalendarCache | null> {
    const result = await this.service.calendarCache({
      where: params,
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        expiresAt: true,
        id: true,
        key: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: CalendarCache })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCalendarCache(
    @common.Param() params: CalendarCacheWhereUniqueInput,
    @common.Body() data: CalendarCacheUpdateInput
  ): Promise<CalendarCache | null> {
    try {
      return await this.service.updateCalendarCache({
        where: params,
        data: {
          ...data,

          credential: data.credential
            ? {
                connect: data.credential,
              }
            : undefined,
        },
        select: {
          credential: {
            select: {
              id: true,
            },
          },

          expiresAt: true,
          id: true,
          key: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: CalendarCache })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCalendarCache(
    @common.Param() params: CalendarCacheWhereUniqueInput
  ): Promise<CalendarCache | null> {
    try {
      return await this.service.deleteCalendarCache({
        where: params,
        select: {
          credential: {
            select: {
              id: true,
            },
          },

          expiresAt: true,
          id: true,
          key: true,
          value: true,
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
