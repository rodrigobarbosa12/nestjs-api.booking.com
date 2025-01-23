import { Controller, Get, Post, Body } from '@nestjs/common'
import { BookingService } from 'src/applications/booking.service'
import { BookingCreate } from 'src/infrastructure/dtos/booking'
import { Result, Rooms } from 'src/infrastructure/types/booking'

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('create-booking')
  async createBooking(@Body() body: BookingCreate): Promise<Result> {
    const { roomId } = body
    return await this.bookingService.createBooking(roomId)
  }

  @Get('bookings')
  async getBookings(): Promise<Rooms[]> {
    return await this.bookingService.getBookings()
  }
}
