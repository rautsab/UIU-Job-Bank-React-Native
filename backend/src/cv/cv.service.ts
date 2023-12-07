import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CV} from "../../models/cv.model";
import {CvDTO} from "../dto/cv.dto";

@Injectable()
export class CvService {
    constructor(
        @InjectRepository(CV) private readonly cvRepository: Repository<CV>,
    ) {
    }

    async insert(cvDTO: CvDTO) {
        try {
            console.log(cvDTO.firstname);
            const cvToInsert = this.cvRepository.create(cvDTO);
            const result = await this.cvRepository.save(cvToInsert);

            if (result) return true;
            else return false;
        } catch (error) {
            console.error('Error occurred while inserting job:', error);
            return false; // Indicating failure due to an error
        }
    }

    async getSingle(email: string) {
        const job = await this.cvRepository.findOne({where: {email}});
        if (!job) {
            return false;
        }

        return true;
    }

    async getSingleInfo(email: string) {
        try {
            const jobs = await this.cvRepository.findOne({where: {email}});
            console.log(jobs);
            return jobs; // Return the jobs data
        } catch (error) {
            console.error('Error occurred while fetching single info:', error);
            return null; // Return null or handle the error as needed
        }
    }

    async delete(email: string) {
        try {
            const entityToDelete = await this.cvRepository.findOne({where: {email}});

            if (!entityToDelete) {
                return false;
            }

            await this.cvRepository.remove(entityToDelete);
            return true;
        } catch (error) {
            return false;
        }
    }
}