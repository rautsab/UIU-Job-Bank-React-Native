import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDTO, UserCredentialDTO} from '../dto/user.dto';
import {Users} from "../../models/user.models";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
    private readonly email: string = 'rutsab222063@bscse.uiu.ac.bd';
    private readonly password: string = '12345678';

    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    ) {
    }

    async userAuth(userCredential: UserCredentialDTO): Promise<boolean> {
        try {
            const user = await this.getUser(userCredential.email, userCredential.password);

            if (user && user.firstname && user.lastname) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getUser(email: string, password: string): Promise<Users | undefined> {
        try {
            const user = await this.userRepository.findOne({where: {email}});

            if (user.email === email && user.password === password) {
                return user;
            } else {
                return undefined;
            }
        } catch (error) {
            throw new NotFoundException('User not found');
        }
    }


    async createUser(createUserDTO: CreateUserDTO) {
        const result = this.userRepository.insert(createUserDTO);
        return result;
    }

    async getUserByEmail(email: string): Promise<Users | undefined> {
        try {
            const user = await this.userRepository.findOne({where: {email}});
            return user;
        } catch (error) {
            throw new NotFoundException('User not found');
        }
    }

    async getUsernameByEmail(userCredentialDTO: UserCredentialDTO): Promise<string | null> {
        try {
            const user = await this.getUserByEmail(userCredentialDTO.email);

            if (user && user.firstname && user.lastname) {
                return user.firstname + ' ' + user.lastname;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching username:', error);
            throw error;
        }
    }

    async find(email: string) {
        try {
            const user = await this.userRepository.findOne({where: {email}});
            return user.firstname + " " + user.lastname;
        } catch (error) {
            throw new NotFoundException('User not found');
        }
    }
}