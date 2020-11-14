import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Room } from '../room/room.model';
import { map, scan } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './../redux/room.reducer';
import * as RoomActions from '../redux/room.actions';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private store: Store<{ rooms: AppState }>) {

  }

  addRoom(room: Room) {
    this.store.dispatch(RoomActions.addRoom({ room }));
  }

  deleteRoom(room: Room): void {
    this.store.dispatch(RoomActions.deleteRoom({ room }));
  }

  editRoom(oldRoom: Room, newRoom: Room): void {
    this.store.dispatch(RoomActions.editRoom({ oldRoom, newRoom}));
  }

  getPrice(numberOfNights: number, room: Room) {
    if (numberOfNights > 0) {
      return room.price * numberOfNights;
    } else {
      return 0;
    }
  }

  randomize() {
    this.store.dispatch(RoomActions.randomize());
  }
}
