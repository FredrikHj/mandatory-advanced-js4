import {BehaviorSubject} from "rxjs";

let colDiscHandler = {};
let setWinnerState = 0;
let totCol = 0;
export const colDiscHandler$ = new BehaviorSubject(colDiscHandler);
export const totCol$ = new BehaviorSubject(totCol);
export const winnerState$ = new BehaviorSubject(setWinnerState);

export function updateColDiscHandler(colDiscHandler) {
   // console.log(colDiscHandler);
    colDiscHandler$.next(colDiscHandler);
}

export function updateTotCol(totCol) {
    //console.log(totCol);
    totCol$.next(totCol);
}
export function updateWinnerState(setWinnerState) {
    console.log(setWinnerState);
    winnerState$.next(setWinnerState);
}