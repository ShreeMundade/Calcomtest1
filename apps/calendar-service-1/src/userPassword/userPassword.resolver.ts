import * as graphql from "@nestjs/graphql";
import { UserPasswordResolverBase } from "./base/userPassword.resolver.base";
import { UserPassword } from "./base/UserPassword";
import { UserPasswordService } from "./userPassword.service";

@graphql.Resolver(() => UserPassword)
export class UserPasswordResolver extends UserPasswordResolverBase {
  constructor(protected readonly service: UserPasswordService) {
    super(service);
  }
}
