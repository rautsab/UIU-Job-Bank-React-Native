import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CvDTO {
    @ApiProperty({
        name: 'firstname',
        description: "User's First Name",
        type: String,
        example: 'John',
    })
    readonly firstname: string;

    @ApiProperty({
        name: 'lastname',
        description: "User's Last Name",
        type: String,
        example: 'Doe',
    })
    readonly lastname: string;

    @ApiProperty({
        name: 'email',
        description: "User's Email",
        type: String,
        example: 'example@email.com',
    })
    readonly email: string;

    @ApiProperty({
        name: 'phone',
        description: "User's Phone Number",
        type: String,
        example: '123-456-7890',
    })
    readonly phone: string;

    @ApiProperty({
        name: 'address',
        description: "User's Address",
        type: String,
        example: '123 Street, City, Country',
    })
    readonly address: string;

    @ApiProperty({
        name: 'summary',
        description: "User's Summary",
        type: String,
        example: 'Experienced software developer...',
    })
    readonly summary: string;

    @ApiProperty({
        name: 'education',
        description: "User's Education",
        type: [String],
        example: ['Bachelor of Science in Computer Science', 'MBA in Marketing'],
    })
    readonly education: string[];

    @ApiProperty({
        name: 'experience',
        description: "User's Experience",
        type: [String],
        example: ['Software Engineer at Company X', 'Project Manager at Company Y'],
    })
    readonly experience: string[];

    @ApiProperty({
        name: 'skills',
        description: "User's Skills",
        type: [String],
        example: ['JavaScript', 'React', 'Node.js'],
    })
    readonly skills: string[];

    @ApiProperty({
        name: 'languages',
        description: "User's Languages",
        type: [String],
        example: ['English', 'Spanish', 'French'],
    })
    readonly languages: string[];

    // constructor(data: Partial<CvDTO>) {
    //     Object.assign(this, data);
    // }
}
