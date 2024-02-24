import * as graphql from "@nestjs/graphql";
import { JobResolverBase } from "./base/job.resolver.base";
import { Job } from "./base/Job";
import { JobService } from "./job.service";

@graphql.Resolver(() => Job)
export class JobResolver extends JobResolverBase {
  constructor(protected readonly service: JobService) {
    super(service);
  }
}
