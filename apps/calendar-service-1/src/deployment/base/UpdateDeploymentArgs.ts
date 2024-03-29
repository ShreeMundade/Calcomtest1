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
import { DeploymentWhereUniqueInput } from "./DeploymentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DeploymentUpdateInput } from "./DeploymentUpdateInput";

@ArgsType()
class UpdateDeploymentArgs {
  @ApiProperty({
    required: true,
    type: () => DeploymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeploymentWhereUniqueInput)
  @Field(() => DeploymentWhereUniqueInput, { nullable: false })
  where!: DeploymentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DeploymentUpdateInput,
  })
  @ValidateNested()
  @Type(() => DeploymentUpdateInput)
  @Field(() => DeploymentUpdateInput, { nullable: false })
  data!: DeploymentUpdateInput;
}

export { UpdateDeploymentArgs as UpdateDeploymentArgs };
