import {BehaviorSubject} from "rxjs";

let gameBoard = [];
let totCol = 0;
let totRow = 0;

let setWinnerState = 0;

export const gameBoard$ = new BehaviorSubject(gameBoard);
export const totCol$ = new BehaviorSubject(totCol);
export const totRow$ = new BehaviorSubject(totRow);

export const winnerState$ = new BehaviorSubject(setWinnerState);

export function updateGameBoard(gameBoard) {
    gameBoard$.next(gameBoard);
  }
export function updateTotCol(totCol) {
  totCol$.next(totCol);
}
export function updateTotRow(totRow) {
  totRow$.next(totRow);
}

export function updateWinnerState(setWinnerState) {
  winnerState$.next(setWinnerState);
}
