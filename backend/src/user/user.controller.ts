import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {UserCredentialDTO} from "../dto/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getUser(): string {
        return 'I am an User';
    }

    @Post('login')
    userLogin(@Body() userCredential: UserCredentialDTO): any {
        return this.userService.userAuth(userCredential);
    }
}