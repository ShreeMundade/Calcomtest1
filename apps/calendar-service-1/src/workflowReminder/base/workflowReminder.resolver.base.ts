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
import { WorkflowReminder } from "./WorkflowReminder";
import { WorkflowReminderCountArgs } from "./WorkflowReminderCountArgs";
import { WorkflowReminderFindManyArgs } from "./WorkflowReminderFindManyArgs";
import { WorkflowReminderFindUniqueArgs } from "./WorkflowReminderFindUniqueArgs";
import { CreateWorkflowReminderArgs } from "./CreateWorkflowReminderArgs";
import { UpdateWorkflowReminderArgs } from "./UpdateWorkflowReminderArgs";
import { DeleteWorkflowReminderArgs } from "./DeleteWorkflowReminderArgs";
import { Booking } from "../../booking/base/Booking";
import { WorkflowStep } from "../../workflowStep/base/WorkflowStep";
import { WorkflowReminderService } from "../workflowReminder.service";
@graphql.Resolver(() => WorkflowReminder)
export class WorkflowReminderResolverBase {
  constructor(protected readonly service: WorkflowReminderService) {}

  async _workflowRemindersMeta(
    @graphql.Args() args: WorkflowReminderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WorkflowReminder])
  async workflowReminders(
    @graphql.Args() args: WorkflowReminderFindManyArgs
  ): Promise<WorkflowReminder[]> {
    return this.service.workflowReminders(args);
  }

  @graphql.Query(() => WorkflowReminder, { nullable: true })
  async workflowReminder(
    @graphql.Args() args: WorkflowReminderFindUniqueArgs
  ): Promise<WorkflowReminder | null> {
    const result = await this.service.workflowReminder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WorkflowReminder)
  async createWorkflowReminder(
    @graphql.Args() args: CreateWorkflowReminderArgs
  ): Promise<WorkflowReminder> {
    return await this.service.createWorkflowReminder({
      ...args,
      data: {
        ...args.data,

        booking: args.data.booking
          ? {
              connect: args.data.booking,
            }
          : undefined,

        workflowStep: args.data.workflowStep
          ? {
              connect: args.data.workflowStep,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => WorkflowReminder)
  async updateWorkflowReminder(
    @graphql.Args() args: UpdateWorkflowReminderArgs
  ): Promise<WorkflowReminder | null> {
    try {
      return await this.service.updateWorkflowReminder({
        ...args,
        data: {
          ...args.data,

          booking: args.data.booking
            ? {
                connect: args.data.booking,
              }
            : undefined,

          workflowStep: args.data.workflowStep
            ? {
                connect: args.data.workflowStep,
              }
            : undefined,
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

  @graphql.Mutation(() => WorkflowReminder)
  async deleteWorkflowReminder(
    @graphql.Args() args: DeleteWorkflowReminderArgs
  ): Promise<WorkflowReminder | null> {
    try {
      return await this.service.deleteWorkflowReminder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Booking, {
    nullable: true,
    name: "booking",
  })
  async getBooking(
    @graphql.Parent() parent: WorkflowReminder
  ): Promise<Booking | null> {
    const result = await this.service.getBooking(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => WorkflowStep, {
    nullable: true,
    name: "workflowStep",
  })
  async getWorkflowStep(
    @graphql.Parent() parent: WorkflowReminder
  ): Promise<WorkflowStep | null> {
    const result = await this.service.getWorkflowStep(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}