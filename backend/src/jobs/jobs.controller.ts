import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {JobService} from "./jobs.service";
import {JobDTO} from "../dto/job.dto";

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService: JobService) {
    }

    @Get(':id') // Assuming you're fetching a user by ID
    async getUserById(@Param('id') id: number): Promise<any> {
        return await this.jobService.getSingle(id);
    }

    @Get() // Assuming you're fetching all jobs
    async getAllJobs(): Promise<any[]> {
        return await this.jobService.getAll();
    }

    @Post('insert') // Assuming you're fetching a user by ID
    insertJob(@Body() jobDTO : JobDTO): any {
        return this.jobService.insert(jobDTO);
    }
}