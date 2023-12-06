import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Jobs} from "../../models/job.model";
import {JobsController} from "./jobs.controller";
import {JobService} from "./jobs.service";

@Module({
  imports: [TypeOrmModule.forFeature([Jobs])],
  controllers: [JobsController],
  providers: [JobService]
})
export class JobsModule {}