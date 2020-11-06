import { Injectable } from '@angular/core';
import { Room } from '../room/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getPrice(numberOfNights: number, room: Room) {
    if (numberOfNights > 0) {
      return room.price * numberOfNights;
    } else {
      return 0;
    }
  }
}
