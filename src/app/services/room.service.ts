import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Room } from '../room/room.model';
import { map, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private dataSource = new BehaviorSubject([new Room("EAST Miami", "With 4 pools, an on-site restaurant, and a 24-hour fitness center, there's something for everyone at EAST Miami.", 299, "https://cf.bstatic.com/xdata/images/hotel/square200/74559707.webp?k=f8f45d9de7a51edca2862f2b85af46077c6999f0e1a8b4b2b1dcc128963a012e&o=", 8.9)]);
  currentData = this.dataSource.asObservable();

  addRoom(room: Room) {
    let arr = this.dataSource.getValue();
    arr.push(room);
    this.dataSource.next(arr);
  }

  deleteRoom(room: Room): void {
    let arr = this.dataSource.getValue();
    const index = arr.indexOf(room);
    if (index > -1) {
      arr.splice(index, 1);
    }
    this.dataSource.next(arr);
  }

  getPrice(numberOfNights: number, room: Room) {
    if (numberOfNights > 0) {
      return room.price * numberOfNights;
    } else {
      return 0;
    }
  }

  randomize() {
    let arr = this.dataSource.getValue();
    let currentIndex = arr.length;
    let randomIndex;
    let temp;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    this.dataSource.next(arr);
  }
}
