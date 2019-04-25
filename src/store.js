import {BehaviorSubject} from "rxjs";

let totCol = 0;
let totRow = 0;
let setWinnerState = 0;
let colDiscHandler = {};

export const totCol$ = new BehaviorSubject(totCol);
export const totRow$ = new BehaviorSubject(totRow);
export const winnerState$ = new BehaviorSubject(setWinnerState);
export const colDiscHandler$ = new BehaviorSubject(colDiscHandler);

export function updateColDiscHandler(colDiscHandler) {
    colDiscHandler$.next(colDiscHandler);
}
export function updateTotCol(totCol) {
    totCol$.next(totCol);
}
export function updateTotRow(totRow) {
    totRow$.next(totRow);
}
export function updateWinnerState(setWinnerState) {
    console.log(setWinnerState);
    winnerState$.next(setWinnerState);
}
