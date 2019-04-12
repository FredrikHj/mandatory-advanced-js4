import React, { PureComponent } from 'react';
import { mainWindowCSS, inGameCSS } from './fourInARowCSS';
//let rowCount = 0;
function GameColummStructure(props) {
  console.log(props);
  let colRowId = props.colKey;
  return(
    <div key={ colRowId }>
      { props.colContent }
    </div>
  );
  
} 
function GameCell(props) {
  return(
    <div className={ inGameCSS.cell } key={ props.cell }></div>
    );
  }
  class FourInARow extends PureComponent {
    constructor(props) {
      super(props);
      
      this.createGameGrid = this.createGameGrid.bind(this);
    }
    componentDidMount() {
      
    }
    createGameGrid() {
      let arrColContent = [];
      let arrGameGrid = [];
      let countCol  = 0;
      let rowInCol = 0;
      let totRow = 6;
      let totCol = 7;
      rowInCol = 1;
      
      /* Creating a col and give it name col1/2/3...............
      Inside the cols it are creating a couple of rows with the nr of row I need for the game*/
      
      for (let row = 1; row <= totRow; row++) {  
        arrColContent.push( <GameCell 
          key={ 
            //rowInCol + 'x' + 
            row }
        /> );  
      }
      
      // Save the whole col in a array and multiply it which I need for the game
    //countCol = 0;
    for (let col = 1; col <= totCol; col++) {
      countCol += 1;
      arrGameGrid.push(<GameColummStructure colKey={ 'col'+ countCol } colContent={ arrColContent }/> );
      rowInCol += 1;
    }
    return arrGameGrid;
    // ======================================================
  }
  render() {
    return (
      <section className={ mainWindowCSS.bodyFrame }>
        <p className={  mainWindowCSS.pagesHeadLine }> Connect four</p>
        <hr className={ mainWindowCSS.topLine }/>
        <p className={  mainWindowCSS.wonSubLine }> Player ? Won</p>
        <section className={ mainWindowCSS.gameGridFrame }>
          <section className={  mainWindowCSS.playerContainer }>
            <p>Player 1</p>
            <p>Player 2</p>
          </section>
          <div className={ mainWindowCSS.gameGrid }>
            { 
              this.createGameGrid()
            }
          </div>
          <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
        </section>
          <div className={ inGameCSS.player1Disc }></div>
          <div className={ inGameCSS.player2Disc }></div>
      </section>
    );
  }
}

export default FourInARow;
