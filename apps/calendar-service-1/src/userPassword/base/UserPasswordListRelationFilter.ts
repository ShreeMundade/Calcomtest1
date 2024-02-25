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
import { UserPasswordWhereInput } from "./UserPasswordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPasswordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPasswordWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPasswordWhereInput)
  @IsOptional()
  @Field(() => UserPasswordWhereInput, {
    nullable: true,
  })
  every?: UserPasswordWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPasswordWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPasswordWhereInput)
  @IsOptional()
  @Field(() => UserPasswordWhereInput, {
    nullable: true,
  })
  some?: UserPasswordWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPasswordWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPasswordWhereInput)
  @IsOptional()
  @Field(() => UserPasswordWhereInput, {
    nullable: true,
  })
  none?: UserPasswordWhereInput;
}
export { UserPasswordListRelationFilter as UserPasswordListRelationFilter };