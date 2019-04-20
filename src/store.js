import {BehaviorSubject} from "rxjs";
let x = 0;
let y = 0;
let colDiscHandlerState = {};

export const colDiscHandlerState$ = new BehaviorSubject(colDiscHandlerState);
export function updateColDiscHandlerState(colDiscHandlerState) {
    console.log(colDiscHandlerState);
    colDiscHandlerState$.next(colDiscHandlerState);
}