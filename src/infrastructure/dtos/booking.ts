import { IsNotEmpty } from 'class-validator'

export class BookingCreate {
  @IsNotEmpty({
    message: 'roomId is required',
  })
  roomId: number
}
