import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class JobDTO {
    @ApiProperty({
        name: 'jobTitle',
        description: "User's Job Title",
        type: String,
        example: 'Software Engineer',
    })
    readonly jobTitle: string;

    @ApiProperty({
        name: 'companyTitle',
        description: "User's Company Title",
        type: String,
        example: 'ABC Company',
    })
    readonly companyTitle: string;

    @ApiProperty({
        name: 'location',
        description: "User's Location",
        type: String,
        example: 'City, Country',
    })
    readonly location: string;

    @ApiProperty({
        name: 'status',
        description: "User's Job Status",
        type: String,
        example: 'Full-time',
    })
    readonly status: string;

    @ApiProperty({
        name: 'salary',
        description: "User's Salary",
        type: String,
        example: '50000 USD',
    })
    readonly salary: string;

    @ApiProperty({
        name: 'vacancy',
        description: 'Number of Vacancies',
        type: String,
        example: '5',
    })
    readonly vacancy: string;

    @ApiProperty({
        name: 'experience',
        description: "User's Experience",
        type: String,
        example: '2 years',
    })
    readonly experience: string;

    @ApiProperty({
        name: 'gender',
        description: "User's Gender",
        type: String,
        example: 'Male',
    })
    readonly gender: string;

    @ApiProperty({
        name: 'skills',
        description: "User's Skills",
        type: String,
        example: 'JavaScript, React, Node.js',
    })
    readonly skills: string;

    @ApiProperty({
        name: 'deadline',
        description: "Application Deadline",
        type: String,
        example: '2023-12-31',
    })
    readonly deadline: string;

    @ApiProperty({
        name: 'academic',
        description: "Academic Qualifications",
        type: String,
        example: 'Bachelor’s degree in Computer Science',
    })
    readonly academic: string;

    @ApiProperty({
        name: 'responsibilities',
        description: "Job Responsibilities",
        type: String,
        example: 'Developing new software applications...',
    })
    readonly responsibilities: string;

    @ApiProperty({
        name: 'description',
        description: "Job Description",
        type: String,
        example: 'We are looking for a skilled Software Engineer...',
    })
    readonly description: string;
}
