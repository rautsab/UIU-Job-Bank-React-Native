import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CvService} from "./cv.service";
import {CvDTO} from "../dto/cv.dto";
import {CV} from "../../models/cv.model";

@Controller('cv')
export class CvController {
    constructor(private readonly cvService: CvService) {
    }

    @Get('email/:email')
    async getAllJobs(@Param('email') email: string): Promise<CV> {
        return await this.cvService.getSingleInfo(email);
    }

    @Get(':email')
    async getUserById(@Param('email') email: string): Promise<any> {
        return await this.cvService.getSingle(email);
    }

    @Post('insert')
    insertCV(@Body() cvDTO: CvDTO): any {
        return this.cvService.insert(cvDTO);
    }
}