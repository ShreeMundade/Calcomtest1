/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BidWhereUniqueInput } from "../../bid/base/BidWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BidUpdateManyWithoutUsersInput {
  @Field(() => [BidWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BidWhereUniqueInput],
  })
  connect?: Array<BidWhereUniqueInput>;

  @Field(() => [BidWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BidWhereUniqueInput],
  })
  disconnect?: Array<BidWhereUniqueInput>;

  @Field(() => [BidWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BidWhereUniqueInput],
  })
  set?: Array<BidWhereUniqueInput>;
}

export { BidUpdateManyWithoutUsersInput as BidUpdateManyWithoutUsersInput };
