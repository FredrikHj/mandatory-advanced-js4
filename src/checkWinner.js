import { colDiscHandler$, totCol$, totRow$} from './store';

function checkVertical(gameBoard) {
    // Check only if row is 3 or greater
    for (let r = 3; r < totRow$.value; r++) {
      for (let c = 0; c < totCol$.value; c++) {
        if (gameBoard[r][c]) {
          if (gameBoard[r][c] === gameBoard[r - 1][c] &&
            gameBoard[r][c] === gameBoard[r - 2][c] &&
            gameBoard[r][c] === gameBoard[r - 3][c]) {
            this.setWinnerMess();
            return gameBoard[r][c];    
          }
        }
      }
    }
  }
  function checkHorizontal(gameBoard) {
    // Check only if column is 3 or less
    for (let r = 0; r < totRow$.value; r++) {
      for (let c = 0; c < 4; c++) {
        if (gameBoard[r][c]) {
          if (gameBoard[r][c] === gameBoard[r][c + 1] && 
              gameBoard[r][c] === gameBoard[r][c + 2] &&
              gameBoard[r][c] === gameBoard[r][c + 3]) {
            this.setWinnerMess();            
            return gameBoard[r][c];
          }
        }
      }
    }
  }
  function checkDiagonalRight(gameBoard) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < totRow$.value; r++) {
      for (let c = 0; c < 4; c++) {
        if (gameBoard[r][c]) {
          if (gameBoard[r][c] === gameBoard[r - 1][c + 1] &&
              gameBoard[r][c] === gameBoard[r - 2][c + 2] &&
              gameBoard[r][c] === gameBoard[r - 3][c + 3]) {
            this.setWinnerMess();
            return gameBoard[r][c];
          }
        }
      }
    }
  }
  function checkDiagonalLeft(gameBoard) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < totRow$.value; r++) {
      for (let c = 3; c < totCol$.value; c++) {
        if (gameBoard[r][c]) {
          if (gameBoard[r][c] === gameBoard[r - 1][c - 1] &&
              gameBoard[r][c] === gameBoard[r - 2][c - 2] &&
              gameBoard[r][c] === gameBoard[r - 3][c - 3]) {
            this.setWinnerMess();
            return gameBoard[r][c];
          }
        }
      }
    }
  }
  function checkDraw(gameBoard) {
    for (let r = 0; r < totRow$.value; r++) {
      for (let c = 0; c < totCol$.value; c++) {
        if (gameBoard[r][c] === null) {
          this.setWinnerMess();
          return null;
        }
      }
    }
  }

  export default {
    checkVertical,
    checkHorizontal,
    checkDiagonalRight,
    checkDiagonalLeft,
    checkDraw,
  }