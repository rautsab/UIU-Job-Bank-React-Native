import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Applied} from "../../models/applied.model";
import {AppliedDTO} from "../dto/applied.dto";
import {Jobs} from "../../models/job.model";

@Injectable()
export class AppliedService {
    constructor(
        @InjectRepository(Applied) private readonly appliedRepository: Repository<Applied>,
    ) {
    }

    async insert(appliedDTO: AppliedDTO): Promise<boolean> {
        try {
            const existingEntry = await this.appliedRepository.findOne({
                where: {
                    job_id: appliedDTO.job_id,
                    user_email: appliedDTO.user_email,
                },
            });

            if (existingEntry) {
                console.log('Data already exists');
                return false; // Data already exists, so no insertion is performed
            } else {
                const data = this.appliedRepository.create(appliedDTO);
                const result = await this.appliedRepository.save(data);

                if (result) return true; // Successful insertion
                else return false; // Failed insertion
            }
        } catch (error) {
            console.error('Error occurred while inserting job:', error);
            return false; // Indicating failure due to an error
        }
    }

    async getAllFiltered(user_email: string): Promise<Applied[]> {
        console.log(user_email);
        return await this.appliedRepository.find({where: {user_email}});
    }

    async getSingle(job_id: number): Promise<Applied[]> {
        console.log("called form backend " + job_id);
        return await this.appliedRepository.find({where: {job_id}});
    }
}