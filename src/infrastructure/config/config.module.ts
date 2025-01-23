import { Module } from '@nestjs/common'
import { BookingModule } from 'src/interfaces/booking.module'

@Module({
  imports: [BookingModule],
})
export class ConfigModule {}
