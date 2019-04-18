import {BehaviorSubject} from "rxjs";
let x = 0;
let y = 0;
export const rowNr$ = new BehaviorSubject(x);
export const colNr$ = new BehaviorSubject(y);
export const colDiscHandlerState$ = new BehaviorSubject(colDiscHandlerState);

export function updateGameGridStructure(x, y){
    console.log(x + ' & ' + y);
    //if(x) rowNr$.next(x);
    rowNr$.next(x);
    colNr$.next(y);
}

export function colDiscHandlerState(colDiscHandlerState) {
    console.log(colDiscHandlerState);
    colDiscHandlerState$.next(colDiscHandlerState);
}