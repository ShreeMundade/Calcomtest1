/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Job } from "./Job";
import { JobCountArgs } from "./JobCountArgs";
import { JobFindManyArgs } from "./JobFindManyArgs";
import { JobFindUniqueArgs } from "./JobFindUniqueArgs";
import { CreateJobArgs } from "./CreateJobArgs";
import { UpdateJobArgs } from "./UpdateJobArgs";
import { DeleteJobArgs } from "./DeleteJobArgs";
import { BidFindManyArgs } from "../../bid/base/BidFindManyArgs";
import { Bid } from "../../bid/base/Bid";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { User } from "../../user/base/User";
import { JobService } from "../job.service";
@graphql.Resolver(() => Job)
export class JobResolverBase {
  constructor(protected readonly service: JobService) {}

  async _jobsMeta(
    @graphql.Args() args: JobCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Job])
  async jobs(@graphql.Args() args: JobFindManyArgs): Promise<Job[]> {
    return this.service.jobs(args);
  }

  @graphql.Query(() => Job, { nullable: true })
  async job(@graphql.Args() args: JobFindUniqueArgs): Promise<Job | null> {
    const result = await this.service.job(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Job)
  async createJob(@graphql.Args() args: CreateJobArgs): Promise<Job> {
    return await this.service.createJob({
      ...args,
      data: {
        ...args.data,

        client: {
          connect: args.data.client,
        },
      },
    });
  }

  @graphql.Mutation(() => Job)
  async updateJob(@graphql.Args() args: UpdateJobArgs): Promise<Job | null> {
    try {
      return await this.service.updateJob({
        ...args,
        data: {
          ...args.data,

          client: {
            connect: args.data.client,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Job)
  async deleteJob(@graphql.Args() args: DeleteJobArgs): Promise<Job | null> {
    try {
      return await this.service.deleteJob(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Bid], { name: "bids" })
  async findBids(
    @graphql.Parent() parent: Job,
    @graphql.Args() args: BidFindManyArgs
  ): Promise<Bid[]> {
    const results = await this.service.findBids(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Review], { name: "reviews" })
  async findReviews(
    @graphql.Parent() parent: Job,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  async findTransactions(
    @graphql.Parent() parent: Job,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "client",
  })
  async getClient(@graphql.Parent() parent: Job): Promise<User | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
