import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CV} from "../../models/cv.model";
import {CvController} from "./cv.controller";
import {CvService} from "./cv.service";

@Module({
    imports: [TypeOrmModule.forFeature([CV])],
    controllers: [CvController],
    providers: [CvService]
})
export class CvModule {}