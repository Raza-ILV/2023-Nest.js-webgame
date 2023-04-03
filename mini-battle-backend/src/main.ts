import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const whiteList = ["http://localhost:3000"]
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: (origin, callback) => {

// if "origin" existing in [whiteList] then allow
      if (whiteList.indexOf(origin) !== -1) {
        console.log("---> Allowed cors for:", origin)
        callback(null, true)
// else block
      } else {
        console.log("---> blocked cors for:", origin)
        callback(new Error('Not allowed by CORS'))
      }


    },
    allowedHeaders: "Content-Type",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
