import { Component, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { Room } from './room/room.model';
import { RoomService } from './services/room.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchText: string;
  rooms: Observable<any>
  subscription: Subscription;
  data: any;


  constructor(private dialog: MatDialog, public roomService: RoomService) {
    this.searchText = "";
    this.rooms = this.roomService.currentData;
  }


  ngOnInit() {
    let rooms2 = [
      new Room("Hampton Inn & Suites by Hilton", "Located in downtown Miami, this Hampton Inn is a 1 minute walk from the free Brickell Metromover Station.", 399, "https://cf.bstatic.com/xdata/images/hotel/square200/143033854.webp?k=9aa39dbef24e6c3645d893f49652ffb9d2245d858b6e70376f8937b8018310c4&o=", 9.0),
      new Room("Staybridge Suites", "Staybridge Suites - Miami International Airport features air-conditioned rooms in Miami. With an outdoor swimming pool, the property also has a fitness center, as well as barbecue facilities.", 199, "https://cf.bstatic.com/xdata/images/hotel/square200/251167161.webp?k=c7b59b242a8f9fe083153c99a757669515dee5b62f900df2bdeece3f3dac5cb6&o=", 8.6),
      new Room("Kimpton EPIC Hotel", "This luxury Miami hotel is in the center of the city’s financial district and offers views of the Miami River and Biscayne Bay.", 549, "https://cf.bstatic.com/xdata/images/hotel/square200/234689771.webp?k=0d44f2cb785ab3f56944d7b55e85acbd1c1ad7e20e534368c902be2748dfa5bd&o=", 8.6)
    ]
    for (let room of rooms2) {
      this.roomService.addRoom(room);
    }

  }

  randomize() {
    if (this.searchText !== '') {
      alert(`Can't use randomize with search bar`);
    } else {
      this.roomService.randomize();
    }
  }

  onDelete(room: Room): void {
    this.roomService.deleteRoom(room);
  }

  onEdit(room: Room): void {
    this.dialog.open(EditRoomDialogComponent, {
      data: {
        room: room
      }
    });
  }

  addRoom(room: Room) {
    this.roomService.addRoom(room);
  }

  onReserve(room: Room) {
    const dialogRef = this.dialog.open(FormReservationComponent, {
      data: room
    });
    dialogRef.afterClosed().subscribe((data) => {
      alert(`You reserved room "${data.room.name}" for ${data.nights} nights for the price of ${data.price} $`);
    })
  }
}
