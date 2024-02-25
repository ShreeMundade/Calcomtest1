import * as graphql from "@nestjs/graphql";
import { OutOfOfficeEntryResolverBase } from "./base/outOfOfficeEntry.resolver.base";
import { OutOfOfficeEntry } from "./base/OutOfOfficeEntry";
import { OutOfOfficeEntryService } from "./outOfOfficeEntry.service";

@graphql.Resolver(() => OutOfOfficeEntry)
export class OutOfOfficeEntryResolver extends OutOfOfficeEntryResolverBase {
  constructor(protected readonly service: OutOfOfficeEntryService) {
    super(service);
  }
}
