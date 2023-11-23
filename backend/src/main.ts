import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {INestApplication} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

class APIDocument {
    static setup(app: INestApplication) {
        const options = new DocumentBuilder()
            .setTitle('MAD API')
            .setDescription(
                'This Application exposes some APIs for academic purposes',
            )
            .build();

        const document = SwaggerModule.createDocument(app, options, {
            ignoreGlobalPrefix: true,
        });
        SwaggerModule.setup('docs', app, document);
    }
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});
    APIDocument.setup(app);
    await app.listen(3000);
}

bootstrap();