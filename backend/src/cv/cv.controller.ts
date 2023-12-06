import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CvService} from "./cv.service";
import {CvDTO} from "../dto/cv.dto";

@Controller('cv')
export class CvController {
    constructor(private readonly cvService: CvService) {
    }

    @Get(':email') // Assuming you're fetching a user by ID
    async getUserById(@Param('email') email: string): Promise<any> {
        return await this.cvService.getSingle(email);
    }

    @Post('insert') // Assuming you're fetching a user by ID
    insertCV(@Body() cvDTO: CvDTO): any {
        return this.cvService.insert(cvDTO);
    }
}