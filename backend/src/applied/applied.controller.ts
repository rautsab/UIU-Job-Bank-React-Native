import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AppliedService} from "./applied.service";
import {AppliedDTO} from "../dto/applied.dto";
import {Applied} from "../../models/applied.model";
import {Jobs} from "../../models/job.model";

@Controller('applied')
export class AppliedController {
    constructor(private readonly appliedService: AppliedService) {
    }

    @Get(':id') // Assuming you're fetching a user by ID
    async getUserById(@Param('id') id: number): Promise<Applied[]> {
        return await this.appliedService.getSingle(id);
    }

    @Post('insert')
    getUser(@Body() appliedDTO: AppliedDTO): Promise<boolean> {
        return this.appliedService.insert(appliedDTO);
    }


    @Get('getFiltered/:email') // Assuming you're fetching filtered jobs by email
    async getAllJobsFiltered(@Param('email') email: string): Promise<Applied[]> {
        return await this.appliedService.getAllFiltered(email); // Pass 'email' to your service
    }

}