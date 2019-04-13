import {BehaviorSubject} from "rxjs";
let rowInCol = 0;
let countRow = '';
export const rowInCol$ = new BehaviorSubject(rowInCol);

export function updateRowInCol(rowInCol){
    console.log(rowInCol);
    if(rowInCol) rowInCol$.next(rowInCol);
}
