import { createReducer, on, Action } from '@ngrx/store';
import { Room } from '../room/room.model';
import * as RoomActions from './room.actions';

const initialState: AppState = {
    rooms: [new Room("Hampton Inn & Suites by Hilton", "Located in downtown Miami, this Hampton Inn is a 1 minute walk from the free Brickell Metromover Station.", 399, "https://cf.bstatic.com/xdata/images/hotel/square200/143033854.webp?k=9aa39dbef24e6c3645d893f49652ffb9d2245d858b6e70376f8937b8018310c4&o=", 9.0)]
}

export interface AppState {
    readonly rooms: Room[];
}

const roomReducer = createReducer(
    initialState,
    on(RoomActions.addRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.concat(room)
    })),
    on(RoomActions.deleteRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.filter(item => item !== room)
    })),
    on(RoomActions.editRoom, (state, { oldRoom, newRoom }) => ({
        ...state,
        rooms: state.rooms.map(item => item !== oldRoom ? item : newRoom)
    })),
    on(RoomActions.randomize, (state) => ({
        ...state,
        rooms: shuffle(state.rooms)
    }))
)


export function reducer(state: AppState | undefined, action: Action) {
    return roomReducer(state, action);
}

function shuffle(input: Array<any>): Array<any> {
    let arr = [...input];
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
    return arr;
}