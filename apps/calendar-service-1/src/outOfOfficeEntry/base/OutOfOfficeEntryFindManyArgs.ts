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
import { OutOfOfficeEntryWhereInput } from "./OutOfOfficeEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OutOfOfficeEntryOrderByInput } from "./OutOfOfficeEntryOrderByInput";

@ArgsType()
class OutOfOfficeEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OutOfOfficeEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OutOfOfficeEntryWhereInput, { nullable: true })
  @Type(() => OutOfOfficeEntryWhereInput)
  where?: OutOfOfficeEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [OutOfOfficeEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OutOfOfficeEntryOrderByInput], { nullable: true })
  @Type(() => OutOfOfficeEntryOrderByInput)
  orderBy?: Array<OutOfOfficeEntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OutOfOfficeEntryFindManyArgs as OutOfOfficeEntryFindManyArgs };