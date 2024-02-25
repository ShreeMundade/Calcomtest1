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
import { AccessCodeWhereInput } from "./AccessCodeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccessCodeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccessCodeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessCodeWhereInput)
  @IsOptional()
  @Field(() => AccessCodeWhereInput, {
    nullable: true,
  })
  every?: AccessCodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessCodeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessCodeWhereInput)
  @IsOptional()
  @Field(() => AccessCodeWhereInput, {
    nullable: true,
  })
  some?: AccessCodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessCodeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessCodeWhereInput)
  @IsOptional()
  @Field(() => AccessCodeWhereInput, {
    nullable: true,
  })
  none?: AccessCodeWhereInput;
}
export { AccessCodeListRelationFilter as AccessCodeListRelationFilter };