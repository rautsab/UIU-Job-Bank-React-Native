import { ApiProperty } from '@nestjs/swagger';

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