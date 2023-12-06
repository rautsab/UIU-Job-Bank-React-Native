import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Jobs} from "../../models/job.model";
import {Repository} from "typeorm";
import {useDebugValue} from "react";
import {JobDTO} from "../dto/job.dto";

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(Jobs) private readonly jobsRepository: Repository<Jobs>,
    ) {
    }


    async getSingle(id: number) {
        console.log(id);
        return Promise.resolve(undefined);

    }

    async insert(jobDTO: JobDTO) {
        try {
            const jobToInsert = this.jobsRepository.create(jobDTO);
            const result = await this.jobsRepository.save(jobToInsert);

            console.log(jobDTO.jobTitle);

            if(result) return true;
            else return false;
        } catch (error) {
            console.error('Error occurred while inserting job:', error);
            return false; // Indicating failure due to an error
        }
    }


}