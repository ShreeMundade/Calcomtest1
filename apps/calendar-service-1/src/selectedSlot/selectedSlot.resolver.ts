import * as graphql from "@nestjs/graphql";
import { SelectedSlotResolverBase } from "./base/selectedSlot.resolver.base";
import { SelectedSlot } from "./base/SelectedSlot";
import { SelectedSlotService } from "./selectedSlot.service";

@graphql.Resolver(() => SelectedSlot)
export class SelectedSlotResolver extends SelectedSlotResolverBase {
  constructor(protected readonly service: SelectedSlotService) {
    super(service);
  }
}
