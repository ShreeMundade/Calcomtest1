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
import { AccessCodeWhereInput } from "./AccessCodeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AccessCodeCountArgs {
  @ApiProperty({
    required: false,
    type: () => AccessCodeWhereInput,
  })
  @Field(() => AccessCodeWhereInput, { nullable: true })
  @Type(() => AccessCodeWhereInput)
  where?: AccessCodeWhereInput;
}

export { AccessCodeCountArgs as AccessCodeCountArgs };
