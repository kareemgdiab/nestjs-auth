import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Setup swagger dashboard, please run the project and head over to `/api`,
 * There is also a json api specification `/api-json` that can be imported in rest-api apps such as (`insomnia`,`postman`).
 */
function setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('NestJS Auth Service')
        .setDescription('Auth Service for NestJS')
        .setVersion(process.env.npm_package_version)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}

/**
 * Main entry point for the application.
 */
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    await app.listen(3000);
}

bootstrap();
