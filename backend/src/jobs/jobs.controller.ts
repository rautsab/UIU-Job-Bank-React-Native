import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
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

    // @Get() // Assuming you're fetching all jobs
    // async getAllJobs(): Promise<any[]> {
    //     return await this.jobService.getAll();
    // }

    @Get('query/:search')
    async getAllJobs(@Param('search') search: string): Promise<any[]> {
        return await this.jobService.getAll(search);
    }

    @Get('getFiltered/:email') // Assuming you're fetching filtered jobs by email
    async getAllJobsFiltered(@Param('email') email: string): Promise<any[]> {
        return await this.jobService.getAllFiltered(email); // Pass 'email' to your service
    }


    @Post('insert') // Assuming you're fetching a user by ID
    insertJob(@Body() jobDTO : JobDTO): any {
        return this.jobService.insert(jobDTO);
    }
}