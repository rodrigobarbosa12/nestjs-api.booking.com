import { Injectable } from '@nestjs/common'
import { ExceptionError } from 'src/infrastructure/utils'
import { Result, Rooms } from 'src/infrastructure/types/booking'

@Injectable()
export class BookingService {
  private rooms = [
    {
      id: 1,
      name: 'Single Room',
      capacity: 1,
      price: 100,
      reviews: 23,
      guest: 4,
      imageUrl: '/images/room1.jpeg',
    },
    {
      id: 2,
      name: 'Double Room',
      capacity: 2,
      price: 150,
      reviews: 9,
      guest: 4,
      imageUrl: '/images/room2.jpeg',
    },
    {
      id: 3,
      name: 'Family Suite',
      capacity: 4,
      price: 250,
      reviews: 15,
      guest: 4,
      imageUrl: '/images/room3.jpeg',
    },
  ]

  async createBooking(roomId: number): Promise<Result> {
    const room = this.rooms.find((room) => room.id === roomId)

    if (!room) throw ExceptionError('Room not found', 404)

    return { message: 'Room booked with success' }
  }

  async getBookings(): Promise<Rooms[]> {
    return this.rooms
  }
}
