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
import { CalendarCacheWhereInput } from "./CalendarCacheWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CalendarCacheListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CalendarCacheWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarCacheWhereInput)
  @IsOptional()
  @Field(() => CalendarCacheWhereInput, {
    nullable: true,
  })
  every?: CalendarCacheWhereInput;

  @ApiProperty({
    required: false,
    type: () => CalendarCacheWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarCacheWhereInput)
  @IsOptional()
  @Field(() => CalendarCacheWhereInput, {
    nullable: true,
  })
  some?: CalendarCacheWhereInput;

  @ApiProperty({
    required: false,
    type: () => CalendarCacheWhereInput,
  })
  @ValidateNested()
  @Type(() => CalendarCacheWhereInput)
  @IsOptional()
  @Field(() => CalendarCacheWhereInput, {
    nullable: true,
  })
  none?: CalendarCacheWhereInput;
}
export { CalendarCacheListRelationFilter as CalendarCacheListRelationFilter };
