import * as graphql from "@nestjs/graphql";
import { FeatureResolverBase } from "./base/feature.resolver.base";
import { Feature } from "./base/Feature";
import { FeatureService } from "./feature.service";

@graphql.Resolver(() => Feature)
export class FeatureResolver extends FeatureResolverBase {
  constructor(protected readonly service: FeatureService) {
    super(service);
  }
}
