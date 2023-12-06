import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CvService} from "./cv.service";
import {CvDTO} from "../dto/cv.dto";

@Controller('cv')
export class CvController {
    constructor(private readonly cvService: CvService) {
    }

    @Post('insert') // Assuming you're fetching a user by ID
    insertCV(@Body() cvDTO: CvDTO): any {
        return this.cvService.insert(cvDTO);
    }
}