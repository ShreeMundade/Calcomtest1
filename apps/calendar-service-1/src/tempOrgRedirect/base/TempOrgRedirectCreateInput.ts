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
import { IsBoolean, IsString, IsInt, IsEnum } from "class-validator";
import { EnumTempOrgRedirectType } from "./EnumTempOrgRedirectType";

@InputType()
class TempOrgRedirectCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  enabled!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fromField!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  fromOrgId!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  toUrl!: string;

  @ApiProperty({
    required: true,
    enum: EnumTempOrgRedirectType,
  })
  @IsEnum(EnumTempOrgRedirectType)
  @Field(() => EnumTempOrgRedirectType)
  type!: "UserEventType" | "TeamEventType" | "User" | "Team";
}

export { TempOrgRedirectCreateInput as TempOrgRedirectCreateInput };
