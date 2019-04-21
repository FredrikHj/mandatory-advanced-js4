import {BehaviorSubject} from "rxjs";

let colDiscHandler = {};
export const colDiscHandler$ = new BehaviorSubject(colDiscHandler);

export function updateColDiscHandler(colDiscHandler) {
    console.log(colDiscHandler);
    colDiscHandler$.next(colDiscHandler);
}