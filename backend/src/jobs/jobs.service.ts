import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Jobs} from "../../models/job.model";
import {Like, Repository} from "typeorm";
import {useDebugValue} from "react";
import {JobDTO} from "../dto/job.dto";

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(Jobs) private readonly jobsRepository: Repository<Jobs>,
    ) {
    }


    async getSingle(id: number): Promise<Jobs> {
        const job = await this.jobsRepository.findOne({where: {id}});
        if (!job) {
            throw new NotFoundException(`Job with ID ${id} not found`);
        }

        return job;
    }

    async insert(jobDTO: JobDTO) {
        try {
            const jobToInsert = this.jobsRepository.create(jobDTO);
            const result = await this.jobsRepository.save(jobToInsert);

            console.log(jobDTO.jobTitle);

            if (result) return true;
            else return false;
        } catch (error) {
            console.error('Error occurred while inserting job:', error);
            return false; // Indicating failure due to an error
        }
    }


    // async getAll(): Promise<any[]> {
    //     try {
    //         const jobs = await this.jobsRepository.find();
    //         return jobs; // Return the array of jobs
    //     } catch (error) {
    //         console.error('Error occurred while fetching all jobs:', error);
    //         return []; // Return an empty array in case of an error
    //     }
    // }

    async getAll(searchQuery?: string): Promise<any[]> {
        console.log('Received searchQuery:', searchQuery);

        try {
            let jobs;

            if (searchQuery && searchQuery !== "all") {
                jobs = await this.jobsRepository.find({
                    where: {
                        jobTitle: Like(`%${searchQuery}%`),
                        // Add more criteria for other fields if needed
                    },
                });
                console.log('Filtered jobs:', jobs);
                console.log('Search success');
            } else {
                jobs = await this.jobsRepository.find();
                console.log('All jobs fetched');
            }

            return jobs;
        } catch (error) {
            console.error('Error occurred while fetching jobs:', error);
            return [];
        }
    }

    async getAllFiltered(author_email: string): Promise<Jobs[]> {
        return await this.jobsRepository.find({where: {author_email}});
    }
}