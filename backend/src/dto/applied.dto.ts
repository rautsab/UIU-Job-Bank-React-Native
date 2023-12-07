import {ApiProperty} from "@nestjs/swagger";

export class AppliedDTO {
    @ApiProperty({
        name: 'job_id',
        description: "Job ID",
        type: Number,
        example: 1,
    })
    readonly job_id: number;

    @ApiProperty({
        name: 'user_email',
        description: "User's Email",
        type: String,
        example: 'example@email.com',
    })
    readonly user_email: string;
}