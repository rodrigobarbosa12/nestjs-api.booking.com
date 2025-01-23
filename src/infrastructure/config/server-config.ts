import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cors from 'cors'
import { ConfigModule } from './config.module'

export async function configapp() {
  const app = await NestFactory.create(ConfigModule, {
    bufferLogs: true,
    cors: true,
  })

  app.use(cors())
  app.useGlobalPipes(new ValidationPipe())

  return app
}
