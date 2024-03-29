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
import { Host } from "./Host";
import { HostCountArgs } from "./HostCountArgs";
import { HostFindManyArgs } from "./HostFindManyArgs";
import { HostFindUniqueArgs } from "./HostFindUniqueArgs";
import { CreateHostArgs } from "./CreateHostArgs";
import { UpdateHostArgs } from "./UpdateHostArgs";
import { DeleteHostArgs } from "./DeleteHostArgs";
import { EventType } from "../../eventType/base/EventType";
import { User } from "../../user/base/User";
import { HostService } from "../host.service";
@graphql.Resolver(() => Host)
export class HostResolverBase {
  constructor(protected readonly service: HostService) {}

  async _hostsMeta(
    @graphql.Args() args: HostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Host])
  async hosts(@graphql.Args() args: HostFindManyArgs): Promise<Host[]> {
    return this.service.hosts(args);
  }

  @graphql.Query(() => Host, { nullable: true })
  async host(@graphql.Args() args: HostFindUniqueArgs): Promise<Host | null> {
    const result = await this.service.host(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Host)
  async createHost(@graphql.Args() args: CreateHostArgs): Promise<Host> {
    return await this.service.createHost({
      ...args,
      data: {
        ...args.data,

        eventType: {
          connect: args.data.eventType,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Host)
  async updateHost(@graphql.Args() args: UpdateHostArgs): Promise<Host | null> {
    try {
      return await this.service.updateHost({
        ...args,
        data: {
          ...args.data,

          eventType: {
            connect: args.data.eventType,
          },

          user: {
            connect: args.data.user,
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

  @graphql.Mutation(() => Host)
  async deleteHost(@graphql.Args() args: DeleteHostArgs): Promise<Host | null> {
    try {
      return await this.service.deleteHost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => EventType, {
    nullable: true,
    name: "eventType",
  })
  async getEventType(
    @graphql.Parent() parent: Host
  ): Promise<EventType | null> {
    const result = await this.service.getEventType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Host): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
