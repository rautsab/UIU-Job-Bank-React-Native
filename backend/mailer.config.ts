// mailer.config.ts
import {MailerOptions} from '@nestjs-modules/mailer';

export const mailerConfig: MailerOptions = {
    transport: {
        host: 'smtp.gmail.com', // e.g., smtp.example.com
        port: 587,
        secure: false,
        auth: {
            user: 'uiujobbank@gmail.com',
            pass: 'uajvwbglayrweath',
        },
    },
    defaults: {
        from: '"No Reply" <uiujobbank@gmail.com>',
    },
};