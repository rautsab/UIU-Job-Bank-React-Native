import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDTO, UserCredentialDTO} from '../dto/user.dto';
import {Users} from "../../models/user.models";
import {getRepository, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import * as nodemailer from 'nodemailer';
import {MailerService} from "@nestjs-modules/mailer";
import {text} from "express";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>,
        private readonly mailerService: MailerService, // Inject MailerService
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
        console.log("called name");
        try {
            const user = await this.userRepository.findOne({where: {email}});
            console.log(user.name);
            return user.name;
        } catch (error) {
            return "Not Found";
        }
    }

    async send(email: string): Promise<string> {
        try {
            const code = this.generateRandomCode();
            console.log('Generating code:', code);


            const mailOptions = {
                    to: email,
                    from: "uiujobbank@gmail.com",
                    subject:
                        'Your 6-digit verification code',
                    text:
                        'Subject: Welcome to UIU Job Bank - Verify Your Email Address\n' +
                        'Thank you for joining UIU Job Bank! We\'re thrilled to have you on board.\n' +
                        '\n' +
                        'To ensure the security of your account and activate your UIU Job Bank membership, please use the following verification code:\n' +
                        '\n' +
                        'Verification Code: ' + code +
                        '\n' +
                        'Simply enter this code in the verification section on our website to complete the process.\n' +
                        '\n' +
                        'If you didn\'t create an account on UIU Job Bank, please disregard this email. Your account will remain inactive.\n' +
                        '\n' +
                        'Welcome to the UIU Job Bank community! We look forward to helping you explore exciting job opportunities.\n' +
                        '\n' +
                        'Best regards,\n' +
                        'The UIU Job Bank Team\n', // Create a Handlebars template file named 'verification-code.hbs'
                    html:
                        {
                            code
                        }
                    ,
                }
            ;

            await this.mailerService.sendMail({
                to: email,
                from: "UIU JOB BANK",
                subject: 'Welcome to UIU Job Bank - Verify Your Email Address',
                html: `
                <p>Thank you for joining UIU Job Bank! We're thrilled to have you on board.</p>
                <p>To ensure the security of your account and activate your UIU Job Bank membership, please use the following verification code:</p>
                <h3>Verification Code: ${code}</h3>
                <p>Simply enter this code in the verification section on our website to complete the process.</p>
                <p>If you didn't create an account on UIU Job Bank, please disregard this email. Your account will remain inactive.</p>
                <p>Welcome to the UIU Job Bank community! We look forward to helping you explore exciting job opportunities.</p>
                <p>Best regards,<br>The UIU Job Bank Team</p>
            `,
            });
            console.log('Email sent successfully');

            return code;
        } catch (error) {
            console.error('Error sending email:', error);
            return "";
        }
    }

    private generateRandomCode(): string {
        return String(Math.floor(100000 + Math.random() * 900000)); // Generates a random 6-digit code as a string
    }

}