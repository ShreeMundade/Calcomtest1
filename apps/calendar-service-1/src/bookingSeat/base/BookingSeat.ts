/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendee } from "../../attendee/base/Attendee";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Booking } from "../../booking/base/Booking";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class BookingSeat {
  @ApiProperty({
    required: true,
    type: () => Attendee,
  })
  @ValidateNested()
  @Type(() => Attendee)
  attendee?: Attendee;

  @ApiProperty({
    required: true,
    type: () => Booking,
  })
  @ValidateNested()
  @Type(() => Booking)
  booking?: Booking;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data!: JsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  referenceUid!: string;
}

export { BookingSeat as BookingSeat };
