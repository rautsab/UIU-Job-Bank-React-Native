import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../../models/user.models";
import {MailerModule} from "@nestjs-modules/mailer";

@Module({
    imports: [TypeOrmModule.forFeature([Users]), MailerModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
}