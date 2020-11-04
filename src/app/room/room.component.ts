import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-sm-12 col-md-6 room';

  @Input() room: Room;

  constructor() { }

  ngOnInit(): void {
  }

}
