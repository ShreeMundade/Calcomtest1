/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DeploymentService } from "../deployment.service";
import { DeploymentCreateInput } from "./DeploymentCreateInput";
import { Deployment } from "./Deployment";
import { DeploymentFindManyArgs } from "./DeploymentFindManyArgs";
import { DeploymentWhereUniqueInput } from "./DeploymentWhereUniqueInput";
import { DeploymentUpdateInput } from "./DeploymentUpdateInput";

export class DeploymentControllerBase {
  constructor(protected readonly service: DeploymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Deployment })
  async createDeployment(
    @common.Body() data: DeploymentCreateInput
  ): Promise<Deployment> {
    return await this.service.createDeployment({
      data: data,
      select: {
        agreedLicenseAt: true,
        id: true,
        licenseKey: true,
        logo: true,
        theme: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Deployment] })
  @ApiNestedQuery(DeploymentFindManyArgs)
  async deployments(@common.Req() request: Request): Promise<Deployment[]> {
    const args = plainToClass(DeploymentFindManyArgs, request.query);
    return this.service.deployments({
      ...args,
      select: {
        agreedLicenseAt: true,
        id: true,
        licenseKey: true,
        logo: true,
        theme: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Deployment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deployment(
    @common.Param() params: DeploymentWhereUniqueInput
  ): Promise<Deployment | null> {
    const result = await this.service.deployment({
      where: params,
      select: {
        agreedLicenseAt: true,
        id: true,
        licenseKey: true,
        logo: true,
        theme: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Deployment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeployment(
    @common.Param() params: DeploymentWhereUniqueInput,
    @common.Body() data: DeploymentUpdateInput
  ): Promise<Deployment | null> {
    try {
      return await this.service.updateDeployment({
        where: params,
        data: data,
        select: {
          agreedLicenseAt: true,
          id: true,
          licenseKey: true,
          logo: true,
          theme: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Deployment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeployment(
    @common.Param() params: DeploymentWhereUniqueInput
  ): Promise<Deployment | null> {
    try {
      return await this.service.deleteDeployment({
        where: params,
        select: {
          agreedLicenseAt: true,
          id: true,
          licenseKey: true,
          logo: true,
          theme: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
