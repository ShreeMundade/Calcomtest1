/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppRoutingFormsFormWhereUniqueInput } from "../../appRoutingFormsForm/base/AppRoutingFormsFormWhereUniqueInput";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class AppRoutingFormsFormResponseCreateInput {
  @ApiProperty({
    required: true,
    type: () => AppRoutingFormsFormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppRoutingFormsFormWhereUniqueInput)
  @Field(() => AppRoutingFormsFormWhereUniqueInput)
  form!: AppRoutingFormsFormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  formFillerId!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  response!: InputJsonValue;
}

export { AppRoutingFormsFormResponseCreateInput as AppRoutingFormsFormResponseCreateInput };
