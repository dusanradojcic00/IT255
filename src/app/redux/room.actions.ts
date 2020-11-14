import { createAction, props } from '@ngrx/store';
import { Room } from '../room/room.model';

export const addRoom = createAction('[Room] Add', props<{ room: Room }>());

export const deleteRoom = createAction('[Room] Delete', props<{ room: Room }>());

export const editRoom = createAction('[Room] Edit', props<{ oldRoom: Room, newRoom: Room}>());

export const randomize = createAction('[Room] Randomize');