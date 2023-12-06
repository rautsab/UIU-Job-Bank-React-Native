import {Injectable} from '@nestjs/common';
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
}