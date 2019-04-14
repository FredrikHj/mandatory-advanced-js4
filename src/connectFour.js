import React, { PureComponent } from 'react';
import { mainWindowCSS, inGameCSS } from './connectFourCSS';
//import { rowInCol$, updateRowInCol } from './store';
import { css } from 'glamor';

let test = 0;

 class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totRow: 6,
      rowContent: '',
      totCol: 7,
      gameGrid: '',
    }
    this.createGameGrid = this.createGameGrid.bind(this);
    this.createDisc = this.createDisc.bind(this);
  }
  componentDidMount() {
    this.createGameGrid();
  }
  createGameGrid() {
    //debugger;
    let colformat, colLineName, disc1;
    let totRow = this.state.totRow;
    let totCol = this.state.totCol;
    let arrColContent = [];
    let arrGameGrid = [];
    let colLineCSS = 0;
    let rowInCol = 1;
    let colLineNr = 99;
    let arrCol = [];
    let colNr = 0;
    /* Creating a col and give it name col1/2/3...............
    I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
    for (let countCol = 1; countCol <= totCol; countCol++) {   
      for (let countRow = 1; countRow <= totRow; countRow++) {
      // Creating one cell in each turn and give it a rowNr, row is rowNr in the col

        let row = <div className={ inGameCSS.cell } key={ countRow } id={ rowInCol + 'x' + countRow }>{  }</div>;
        arrColContent.push(row);

        // Add the rows in a arrCol after the couple of rows needed for a single col
          if (countRow === 6) {
            colNr += 1;
            let gameCol = <div key={ colNr } id={ 'col' + colNr }>{ arrColContent }</div>;
            arrCol.push(gameCol);
            
            // Creating some CSS for eatch col 
            colLineNr += 49 + 'px';
            colLineCSS += 1;

            
            colLineName = colformat + colLineCSS;
            colLineName = {
              colLineName: css({
                'width': '17.5px',
                'height': '17.5px',
                'borderRadius': '20px', 
                'backgroundColor': 'red',
                'zIndex': '1',
                'marginLeft': colLineNr,
              }),
            };
            //arrCol.push(disc1);
            console.log(colLineName.colLineName);
          }
        // ========================================================================  
        }
      arrColContent = [];
      rowInCol += 1;
    }     
    arrGameGrid.push(arrCol); 
    this.setState({ gameGrid: arrGameGrid});
  }
  createDisc() {
    <div className={ inGameCSS.player1Disc } id="disc1"></div>
    <div className={ inGameCSS.player2Disc } id="disc2"></div>
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
        <section>
          { this.createDisc() }
        </section>
          { this.state.gameGrid }
        </div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;