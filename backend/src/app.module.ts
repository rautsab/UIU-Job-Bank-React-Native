import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AccountsModule } from './accounts/accounts.module';
import { JobsModule } from './jobs/jobs.module';
import { CvController } from './cv/cv.controller';
import { CvService } from './cv/cv.service';
import { CvModule } from './cv/cv.module';
import { AppliedService } from './applied/applied.service';
import { AppliedModule } from './applied/applied.module';
import DatabaseConnection from './database/connection';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: DatabaseConnection,
            inject: [ConfigService],
        }),
        AccountsModule,
        JobsModule,
        CvModule,
        AppliedModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
