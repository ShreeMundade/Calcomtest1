/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VerifiedNumberWhereInput } from "./VerifiedNumberWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VerifiedNumberCountArgs {
  @ApiProperty({
    required: false,
    type: () => VerifiedNumberWhereInput,
  })
  @Field(() => VerifiedNumberWhereInput, { nullable: true })
  @Type(() => VerifiedNumberWhereInput)
  where?: VerifiedNumberWhereInput;
}

export { VerifiedNumberCountArgs as VerifiedNumberCountArgs };