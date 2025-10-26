import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Swagger konfiguracija
  const config = new DocumentBuilder()
    .setTitle('Baby Monitor API')
    .setDescription('API za baby monitoring aplikaciju')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('routes', app, document);


  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
