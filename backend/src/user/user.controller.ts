import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDTO, UserCredentialDTO} from "../dto/user.dto";
import {Users} from "../../models/user.models";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('get/:email')
    getUser(@Param('email') userId: string): Promise<string> {
        return this.userService.find(userId);
    }

    @Post('login')
    userLogin(@Body() userCredential: UserCredentialDTO): any {
        return this.userService.userAuth(userCredential);
    }

    @Post('send_code')
    async sendCode(@Body('email') email: string): Promise<any> {
        return this.userService.send(email);
    }

    @Post('register')
    userRegister(@Body() createUserDTO: CreateUserDTO): any {
        return this.userService.createUser(createUserDTO);
    }

    @Post('getUser')
    async userInformation(@Body() userCredential: UserCredentialDTO): Promise<any> {
        try {
            const username = await this.userService.getUsernameByEmail(userCredential);
            if (!username) {
                return { message: 'User not found' };
            }

            return { username };
        } catch (error) {
            return { error: 'An error occurred while fetching user information' };
        }
    }
}