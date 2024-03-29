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
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsString,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { AppModelWhereUniqueInput } from "../../appModel/base/AppModelWhereUniqueInput";
import { Type } from "class-transformer";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPaymentPaymentOption } from "./EnumPaymentPaymentOption";

@InputType()
class PaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: () => AppModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppModelWhereUniqueInput)
  @IsOptional()
  @Field(() => AppModelWhereUniqueInput, {
    nullable: true,
  })
  appField?: AppModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookingWhereUniqueInput)
  @IsOptional()
  @Field(() => BookingWhereUniqueInput, {
    nullable: true,
  })
  booking?: BookingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  externalId?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fee?: number;

  @ApiProperty({
    required: false,
    enum: EnumPaymentPaymentOption,
  })
  @IsEnum(EnumPaymentPaymentOption)
  @IsOptional()
  @Field(() => EnumPaymentPaymentOption, {
    nullable: true,
  })
  paymentOption?: "ON_BOOKING" | "HOLD" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  refunded?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  success?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uid?: string;
}

export { PaymentUpdateInput as PaymentUpdateInput };
