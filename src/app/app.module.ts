import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormAddComponent } from './form-add/form-add.component';
import { FormAddValidateComponent } from './form-add-validate/form-add-validate.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { RoomService } from './services/room.service';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/room.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FilterPipePipe,
    EditRoomDialogComponent,
    FormAddComponent,
    FormAddValidateComponent,
    FormReservationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    StoreModule.forRoot({ rooms: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
