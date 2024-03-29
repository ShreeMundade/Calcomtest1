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
import { JobService } from "../job.service";
import { JobCreateInput } from "./JobCreateInput";
import { Job } from "./Job";
import { JobFindManyArgs } from "./JobFindManyArgs";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";
import { JobUpdateInput } from "./JobUpdateInput";
import { BidFindManyArgs } from "../../bid/base/BidFindManyArgs";
import { Bid } from "../../bid/base/Bid";
import { BidWhereUniqueInput } from "../../bid/base/BidWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class JobControllerBase {
  constructor(protected readonly service: JobService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Job })
  async createJob(@common.Body() data: JobCreateInput): Promise<Job> {
    return await this.service.createJob({
      data: {
        ...data,

        client: {
          connect: data.client,
        },
      },
      select: {
        budget: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Job] })
  @ApiNestedQuery(JobFindManyArgs)
  async jobs(@common.Req() request: Request): Promise<Job[]> {
    const args = plainToClass(JobFindManyArgs, request.query);
    return this.service.jobs({
      ...args,
      select: {
        budget: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async job(@common.Param() params: JobWhereUniqueInput): Promise<Job | null> {
    const result = await this.service.job({
      where: params,
      select: {
        budget: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateJob(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() data: JobUpdateInput
  ): Promise<Job | null> {
    try {
      return await this.service.updateJob({
        where: params,
        data: {
          ...data,

          client: {
            connect: data.client,
          },
        },
        select: {
          budget: true,

          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJob(
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Job | null> {
    try {
      return await this.service.deleteJob({
        where: params,
        select: {
          budget: true,

          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
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

  @common.Get("/:id/bids")
  @ApiNestedQuery(BidFindManyArgs)
  async findBids(
    @common.Req() request: Request,
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Bid[]> {
    const query = plainToClass(BidFindManyArgs, request.query);
    const results = await this.service.findBids(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        proposal: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bids")
  async connectBids(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        connect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bids")
  async updateBids(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        set: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bids")
  async disconnectBids(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        disconnect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        rating: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  async connectReviews(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  async updateReviews(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  async disconnectReviews(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,

        client: {
          select: {
            id: true,
          },
        },

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        transactionDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  async connectTransactions(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  async updateTransactions(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  async disconnectTransactions(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateJob({
      where: params,
      data,
      select: { id: true },
    });
  }
}
