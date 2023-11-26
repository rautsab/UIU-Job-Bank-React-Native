import {ApiProperty} from '@nestjs/swagger';
import {IsString} from "class-validator";

export class UserCredentialDTO {
    @ApiProperty({
        name: 'email',
        description: "User's Email",
        type: String,
        example: 'dev@company.com',
    })
    readonly email: string;

    @ApiProperty({
        name: 'password',
        description: "User's Password",
        type: String,
        example: 'abcsergfoeirngoi',
    })
    readonly password: string;
}


export class CreateUserDTO {
    @ApiProperty({
        name: 'firstname',
        description: "User's Firstname",
        type: String,
        example: 'Redwan Ahmed',
    })
    @IsString()
    readonly firstname: string;

    @ApiProperty({
        name: 'lastname',
        description: "User's Lastname",
        type: String,
        example: 'Utsab',
    })
    @IsString()
    readonly lastname: string;

    @ApiProperty({
        name: 'email',
        description: "User's Email",
        type: String,
        example: 'dev@company.com',
    })
    @IsString()
    readonly email: string;

    @ApiProperty({
        name: 'password',
        description: "User's Password",
        type: String,
        example: '12345678',
    })
    @IsString()
    readonly password: string;
}