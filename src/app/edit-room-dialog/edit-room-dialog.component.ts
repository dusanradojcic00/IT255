import { Component, Inject, OnInit } from '@angular/core';
import { Room } from '../room/room.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-room-dialog',
  templateUrl: './edit-room-dialog.component.html',
  styleUrls: ['./edit-room-dialog.component.css']
})
export class EditRoomDialogComponent {

  room: Room;

  constructor(public dialogRef: MatDialogRef<EditRoomDialogComponent>, @Inject(MAT_DIALOG_DATA) private data) {
    this.room = data.room;
   }

  editRoom(name: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement, image: HTMLInputElement, score: HTMLInputElement) {
    this.room.name = name.value;
    this.room.description = description.value;
    this.room.price = parseInt(price.value);
    this.room.score = parseFloat(score.value);
    this.room.image = image.value;
    this.dialogRef.close(this.room);
  }

}

