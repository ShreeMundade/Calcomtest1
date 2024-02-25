import * as graphql from "@nestjs/graphql";
import { AppRoutingFormsFormResponseResolverBase } from "./base/appRoutingFormsFormResponse.resolver.base";
import { AppRoutingFormsFormResponse } from "./base/AppRoutingFormsFormResponse";
import { AppRoutingFormsFormResponseService } from "./appRoutingFormsFormResponse.service";

@graphql.Resolver(() => AppRoutingFormsFormResponse)
export class AppRoutingFormsFormResponseResolver extends AppRoutingFormsFormResponseResolverBase {
  constructor(protected readonly service: AppRoutingFormsFormResponseService) {
    super(service);
  }
}
