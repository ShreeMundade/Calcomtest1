import * as graphql from "@nestjs/graphql";
import { AppRoutingFormsFormResolverBase } from "./base/appRoutingFormsForm.resolver.base";
import { AppRoutingFormsForm } from "./base/AppRoutingFormsForm";
import { AppRoutingFormsFormService } from "./appRoutingFormsForm.service";

@graphql.Resolver(() => AppRoutingFormsForm)
export class AppRoutingFormsFormResolver extends AppRoutingFormsFormResolverBase {
  constructor(protected readonly service: AppRoutingFormsFormService) {
    super(service);
  }
}
