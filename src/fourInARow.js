import React, { PureComponent } from 'react';
import { mainWindowCSS, gameCellCSS } from './fourInARowCSS';
let countCol = 0;
let arrColummContent = [];
let gameGrids = [];
let countRow = 0;

 function GameColummStructure(props) {
  console.log(props);
  return(
    <div key={ props.colKey }>
      { props.colContent }
    </div>
  );

} 
function GameCell(props) {
  console.log(props);
  return(
    <div className={ gameCellCSS.cell } key={ props.cell }></div>
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

    this.createRow = this.createRow.bind(this);
  }
  createRow() {
    countCol += 1;
    for (let row = 1; row <= 6; row++) {
      countRow += 1;      
      arrColummContent.push(
        <GameCell
          key={ countCol + 'x' +countRow }

        />
      );
    }
    return <GameColummStructure
      colKey={ 'col'+ countCol }
      colContent={ arrColummContent }
    />

    return arrColummContent;
  }
  render() {
    gameGrids.push(this.createRow());
    console.log(arrColummContent);
    
    return (
      <div className={ mainWindowCSS.bodyFrame }>
        { gameGrids }
      </div>
    );
  }
}

export default FourInARow;
