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
import { FeatureService } from "../feature.service";
import { FeatureCreateInput } from "./FeatureCreateInput";
import { Feature } from "./Feature";
import { FeatureFindManyArgs } from "./FeatureFindManyArgs";
import { FeatureWhereUniqueInput } from "./FeatureWhereUniqueInput";
import { FeatureUpdateInput } from "./FeatureUpdateInput";

export class FeatureControllerBase {
  constructor(protected readonly service: FeatureService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Feature })
  async createFeature(
    @common.Body() data: FeatureCreateInput
  ): Promise<Feature> {
    return await this.service.createFeature({
      data: data,
      select: {
        createdAt: true,
        description: true,
        enabled: true,
        id: true,
        lastUsedAt: true,
        stale: true,
        type: true,
        updatedAt: true,
        updatedBy: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Feature] })
  @ApiNestedQuery(FeatureFindManyArgs)
  async features(@common.Req() request: Request): Promise<Feature[]> {
    const args = plainToClass(FeatureFindManyArgs, request.query);
    return this.service.features({
      ...args,
      select: {
        createdAt: true,
        description: true,
        enabled: true,
        id: true,
        lastUsedAt: true,
        stale: true,
        type: true,
        updatedAt: true,
        updatedBy: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Feature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async feature(
    @common.Param() params: FeatureWhereUniqueInput
  ): Promise<Feature | null> {
    const result = await this.service.feature({
      where: params,
      select: {
        createdAt: true,
        description: true,
        enabled: true,
        id: true,
        lastUsedAt: true,
        stale: true,
        type: true,
        updatedAt: true,
        updatedBy: true,
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
  @swagger.ApiOkResponse({ type: Feature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFeature(
    @common.Param() params: FeatureWhereUniqueInput,
    @common.Body() data: FeatureUpdateInput
  ): Promise<Feature | null> {
    try {
      return await this.service.updateFeature({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          enabled: true,
          id: true,
          lastUsedAt: true,
          stale: true,
          type: true,
          updatedAt: true,
          updatedBy: true,
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
  @swagger.ApiOkResponse({ type: Feature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFeature(
    @common.Param() params: FeatureWhereUniqueInput
  ): Promise<Feature | null> {
    try {
      return await this.service.deleteFeature({
        where: params,
        select: {
          createdAt: true,
          description: true,
          enabled: true,
          id: true,
          lastUsedAt: true,
          stale: true,
          type: true,
          updatedAt: true,
          updatedBy: true,
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