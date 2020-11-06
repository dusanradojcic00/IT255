import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from '../room/room.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {
  numberOfNights: number;
  constructor(public dialogRef: MatDialogRef<FormReservationComponent>, @Inject(MAT_DIALOG_DATA) private room: Room, private roomService: RoomService) {

  }

  ngOnInit(): void {
    this.numberOfNights = 1;
  }

  reserveRoom(numberOfNights: number): void {
    let price = this.roomService.getPrice(numberOfNights, this.room);
    this.dialogRef.close({ room: this.room, price: price, nights: numberOfNights });
  }

}
