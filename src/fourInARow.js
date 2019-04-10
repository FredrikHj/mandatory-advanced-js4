import React, { PureComponent } from 'react';
import { mainWindowCSS, gameCellCSS } from './fourInARowCSS';

function GameCell() {
  return(
    <div className={ gameCellCSS.cell }></div>
  );

}
/* class GameBoard extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (

    );
  }
} */

class FourInARow extends PureComponent {
  constructor(props) {
    super(props);

    this.gameBoard = this.gameBoard.bind(this);
  }
  gameBoard() {
    let ArrCollum1 = [];
    let totCollum = 7;
    let totRow = 6;
    let newCollum = 0;
    let newArrNr = 0;
    for (let i = 0; i <= totCollum*totRow; i++) {
      i += 6;
      ArrCollum1.push(<GameCell/>);
      console.log(newCollum);
      
      
    }
    
    //return ArrCollum1, newArr;
  }
  render() {
    let gameColumm = [GameCell, GameCell]
    return (
      <div className={ mainWindowCSS.bodyFrame }>
        { this.gameBoard() }
        
        
      </div>
    );
  }
}

export default FourInARow;
