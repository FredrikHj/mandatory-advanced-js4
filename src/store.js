import {BehaviorSubject} from "rxjs";

let colDiscHandler = {};
let totCol = 0;
export const colDiscHandler$ = new BehaviorSubject(colDiscHandler);
export const totCol$ = new BehaviorSubject(totCol);

export function updateColDiscHandler(colDiscHandler) {
    console.log(colDiscHandler);
    colDiscHandler$.next(colDiscHandler);
}

export function updateTotCol(totCol) {
    console.log(totCol);
    totCol$.next(totCol);
}