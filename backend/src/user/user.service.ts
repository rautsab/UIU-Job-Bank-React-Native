import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDTO, UserCredentialDTO} from '../dto/user.dto';
import {Users} from "../../models/user.models";
import {getRepository, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    ) {
    }

    async userAuth(userCredential: UserCredentialDTO): Promise<boolean> {
        try {
            const user = await this.getUser(userCredential.email, userCredential.password);
            if (user && user.name) {
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


    async createUser(createUserDTO: CreateUserDTO): Promise<boolean> {
        try {
            console.log(createUserDTO.name);
            console.log(createUserDTO.email);
            console.log(createUserDTO.password);
            const users = this.userRepository.create(createUserDTO);
            const result = this.userRepository.save(users);

            if (result) {
                return true; // Success indication
            } else {
                return false; // Failure indication
            }
        } catch (error) {
            console.error('Error creating user:', error);
            return false; // Return a failure indication in case of an error
        }
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

            if (user && user.name) {
                return user.name;
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
            return user.name;
        } catch (error) {
            throw new NotFoundException('User not found');
        }
    }
}