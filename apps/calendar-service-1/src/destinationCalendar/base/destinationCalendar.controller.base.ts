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
import { DestinationCalendarService } from "../destinationCalendar.service";
import { DestinationCalendarCreateInput } from "./DestinationCalendarCreateInput";
import { DestinationCalendar } from "./DestinationCalendar";
import { DestinationCalendarFindManyArgs } from "./DestinationCalendarFindManyArgs";
import { DestinationCalendarWhereUniqueInput } from "./DestinationCalendarWhereUniqueInput";
import { DestinationCalendarUpdateInput } from "./DestinationCalendarUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

export class DestinationCalendarControllerBase {
  constructor(protected readonly service: DestinationCalendarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DestinationCalendar })
  async createDestinationCalendar(
    @common.Body() data: DestinationCalendarCreateInput
  ): Promise<DestinationCalendar> {
    return await this.service.createDestinationCalendar({
      data: {
        ...data,

        credential: data.credential
          ? {
              connect: data.credential,
            }
          : undefined,

        eventType: data.eventType
          ? {
              connect: data.eventType,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        externalId: true,
        id: true,
        integration: true,
        primaryEmail: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DestinationCalendar] })
  @ApiNestedQuery(DestinationCalendarFindManyArgs)
  async destinationCalendars(
    @common.Req() request: Request
  ): Promise<DestinationCalendar[]> {
    const args = plainToClass(DestinationCalendarFindManyArgs, request.query);
    return this.service.destinationCalendars({
      ...args,
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        externalId: true,
        id: true,
        integration: true,
        primaryEmail: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DestinationCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async destinationCalendar(
    @common.Param() params: DestinationCalendarWhereUniqueInput
  ): Promise<DestinationCalendar | null> {
    const result = await this.service.destinationCalendar({
      where: params,
      select: {
        credential: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        externalId: true,
        id: true,
        integration: true,
        primaryEmail: true,

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
  @swagger.ApiOkResponse({ type: DestinationCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDestinationCalendar(
    @common.Param() params: DestinationCalendarWhereUniqueInput,
    @common.Body() data: DestinationCalendarUpdateInput
  ): Promise<DestinationCalendar | null> {
    try {
      return await this.service.updateDestinationCalendar({
        where: params,
        data: {
          ...data,

          credential: data.credential
            ? {
                connect: data.credential,
              }
            : undefined,

          eventType: data.eventType
            ? {
                connect: data.eventType,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          credential: {
            select: {
              id: true,
            },
          },

          eventType: {
            select: {
              id: true,
            },
          },

          externalId: true,
          id: true,
          integration: true,
          primaryEmail: true,

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
  @swagger.ApiOkResponse({ type: DestinationCalendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDestinationCalendar(
    @common.Param() params: DestinationCalendarWhereUniqueInput
  ): Promise<DestinationCalendar | null> {
    try {
      return await this.service.deleteDestinationCalendar({
        where: params,
        select: {
          credential: {
            select: {
              id: true,
            },
          },

          eventType: {
            select: {
              id: true,
            },
          },

          externalId: true,
          id: true,
          integration: true,
          primaryEmail: true,

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

  @common.Get("/:id/booking")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBooking(
    @common.Req() request: Request,
    @common.Param() params: DestinationCalendarWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBooking(params.id, {
      ...query,
      select: {
        cancellationReason: true,
        createdAt: true,
        customInputs: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        fromReschedule: true,
        iCalSequence: true,
        iCalUID: true,
        id: true,

        instantMeetingToken: {
          select: {
            id: true,
          },
        },

        isRecorded: true,
        location: true,
        metadata: true,
        paid: true,
        recurringEventId: true,
        rejectionReason: true,
        rescheduled: true,
        responses: true,
        scheduledJobs: true,
        smsReminderNumber: true,
        startTime: true,
        status: true,
        title: true,
        uid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userPrimaryEmail: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/booking")
  async connectBooking(
    @common.Param() params: DestinationCalendarWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      booking: {
        connect: body,
      },
    };
    await this.service.updateDestinationCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/booking")
  async updateBooking(
    @common.Param() params: DestinationCalendarWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      booking: {
        set: body,
      },
    };
    await this.service.updateDestinationCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/booking")
  async disconnectBooking(
    @common.Param() params: DestinationCalendarWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      booking: {
        disconnect: body,
      },
    };
    await this.service.updateDestinationCalendar({
      where: params,
      data,
      select: { id: true },
    });
  }
}
