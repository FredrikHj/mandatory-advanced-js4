import { totCol$, totRow$, updateWinnerState } from './store';

export function CheckVertical(gameBoard) {
  // Check only if row is 3 or greater
  for (let r = 3; r < totRow$.value; r++) {
    for (let c = 0; c < totCol$.value; c++) {
      if (gameBoard[r][c]) {
        if (gameBoard[r][c] === gameBoard[r - 1][c] &&
          gameBoard[r][c] === gameBoard[r - 2][c] &&
          gameBoard[r][c] === gameBoard[r - 3][c]) {
          setWinnerMess();
          return gameBoard[r][c];    
        }
      }
    }
  }
}
export function CheckHorizontal(gameBoard) {
  // Check only if column is 3 or less
  for (let r = 0; r < totRow$.value; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c]) {
        if (gameBoard[r][c] === gameBoard[r][c + 1] && 
            gameBoard[r][c] === gameBoard[r][c + 2] &&
            gameBoard[r][c] === gameBoard[r][c + 3]) {
          setWinnerMess();            
          return gameBoard[r][c];
        }
      }
    }
  }
}
export function CheckDiagonalRight(gameBoard) {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let r = 3; r < totRow$.value; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c]) {
        if (gameBoard[r][c] === gameBoard[r - 1][c + 1] &&
            gameBoard[r][c] === gameBoard[r - 2][c + 2] &&
            gameBoard[r][c] === gameBoard[r - 3][c + 3]) {
          setWinnerMess();    
          return gameBoard[r][c];
        }
      }
    }
  }
}
export function CheckDiagonalLeft(gameBoard) {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let r = 3; r < totRow$.value; r++) {
    for (let c = 3; c < totCol$.value; c++) {
      if (gameBoard[r][c]) {
        if (gameBoard[r][c] === gameBoard[r - 1][c - 1] &&
            gameBoard[r][c] === gameBoard[r - 2][c - 2] &&
            gameBoard[r][c] === gameBoard[r - 3][c - 3]) {
          setWinnerMess();
          return gameBoard[r][c];
        }
      }
    }
  }
}
export function CheckDraw(gameBoard) {
  for (let r = 0; r < totRow$.value; r++) {
    for (let c = 0; c < totCol$.value; c++) {
      if (gameBoard[r][c] === null) {
        return null;
      }
    }
  }
  return 'draw';
}
function setWinnerMess() {
  console.log('Vinnaren är?');
  
  let fakeValueForWinerState = 1;
  updateWinnerState(fakeValueForWinerState);
}