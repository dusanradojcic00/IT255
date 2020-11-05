import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  room: Room;
  @Output() add = new EventEmitter<Room>();
  constructor() { }

  addRoom(name: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement, image: HTMLInputElement, score: HTMLInputElement) {
    this.room = new Room(name.value, description.value, parseInt(price.value), image.value, parseFloat(score.value));
    name.value = description.value = price.value = image.value = score.value = '';
    this.add.emit(this.room);
  }



  ngOnInit(): void {
  }

}
