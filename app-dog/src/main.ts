import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as expressHbs from 'express-handlebars'
import * as handlebarsHelpers from 'handlebars-helpers'
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const hbs = expressHbs.create({
    helpers: handlebarsHelpers(),
    extname: '.hbs',
    partialsDir: [
      join(__dirname, '..', 'views')
    ]
  });

  app.engine('hbs', hbs.engine);
  app.setViewEngine('hbs');
  app.useStaticAssets(join(__dirname, '..', 'public'));

  const options = new DocumentBuilder()
    .setTitle("Docs")
    .setDescription("Docs for DOG API")
    .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();