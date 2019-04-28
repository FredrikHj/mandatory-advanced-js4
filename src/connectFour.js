import React, { PureComponent, useState, useEffect } from 'react';
import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { colDiscHandler$, totCol$, totRow$, winnerState$, updateWinnerState} from './store';

import { CSSTransition } from 'react-transition-group';
import { GameGrid } from './gameGrid';
/* let countColRowBcGreenHori = 0;
let countColRowBcGreenVer = 0;
let countColRowBcRedHori = 0; */
let countColRowBcRedVer = 0;
let playGridWinnerCalc = {};
//let lastPushrdColNr = 0;
let discKey = 100;

class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCol: '',
      currentColNr: 1,
      gameStart: false,
      colDiscHandler: [],
      gameBoard: [],
      totCol: 0,
      totRow: 0,
      lastPlayer: { str: 'Player 1', winner: false },
      currentPlayer: { value: 'Player 1', nr: 1 },
      //discPoss: 0,
    }
    this.checkVertical = this.checkVertical.bind(this);
    this.createDisc = this.createDisc.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.createDiscPlace = this.createDiscPlace.bind(this);
    this.checkCurrentPlayer = this.checkCurrentPlayer.bind(this);
    this.winnerCheckVertical = this.winnerCheckVertical.bind(this);
    this.winnerCheckHorizontal = this.winnerCheckHorizontal.bind(this);
    this.createPlayGridWinnerObj = this.createPlayGridWinnerObj.bind(this) ;
  }
  componentDidMount() { 
    this.subscription = colDiscHandler$.subscribe((colDiscHandler) => {      
      if (colDiscHandler) {
        this.setState({ colDiscHandler: colDiscHandler$.value });
      } 
    });
    this.subscription = totCol$.subscribe((totCol) => {           
      if (totCol) {
        this.setState({ totCol: totCol$.value });
      }
    });
    this.subscription = totRow$.subscribe((totRow) => {      
      if (totRow) {
        this.setState({ totRow: totRow$.value });
      } 
    });
    this.subscription = winnerState$.subscribe((winnerState) => {      
      if (winnerState) {
        this.setState({ lastPlayer: {...this.state.lastPlayer, winner: true }});
      } 
    });

       //Create a gameBoard for the calculation of the winner
      let gameBoard = [];
      for (let r = 0; r <= totRow$.value; r++) {
        let row = [];
        for (let c = 0; c < totCol$.value; c++) { row.push(null) }
        gameBoard.push(row);
      }
      this.setState({gameBoard});
   
  }
  
  componentDidUpdate() {
    if (!this.state.lastPlayer.winner) {
      this.checkWinner();
    }
  }
  createPlayGridWinnerObj() {
    
  }
  createDisc(e) {
    
    let getTargetColRow = e.target.id;   
    
    discKey += 1;
    // Clean the id to only show the col nr      
    let indexedLetter = getTargetColRow.split('');
    let getColNr = indexedLetter.shift();

    // Get row nr, hande with a error mess if wrong cell is pushed not implement yet!!!
    let getColRowNr = indexedLetter.pop();
    
    // Get last player who placed a disc
    let getLastPlayer = this.state.currentPlayer.value;
    
    let getLengtInArr = this.state.colDiscHandler['col' + getColNr].length;
    let getDiscRowPoss = getLengtInArr;
    console.log(getDiscRowPoss);
    
    
    // Get the highest index of an array + 1 to get nicer calc
    
    // Create a col dynamic name nr according the col I click in
    let colName = 'col' + getColNr;
    
    // Creating the disc 
    let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } //id={ getDiscRowPoss } 
    style={(this.state.currentPlayer.value === 'Player 1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
    </div>;

    // Get player nr 1 or 2    
    let currentPlayerNr = this.state.currentPlayer.nr;
    console.log(currentPlayerNr);
    
    /* Get the created color from the disc
    insurt the color str in the correct place at object which needing for calculation of the winner */
    let getDiscBc  = getDisc.props.style.backgroundColor; 

   // playGridWinnerCalc[getDiscRowPoss].objCol[getColNr].color = getDiscBc;
    
    if (getColNr === getColNr) {
      this.checkCurrentPlayer();
      // Col array name
      this['col' + getColNr] = [];
      
      this.setState({
        colDiscHandler: { ...this.state.colDiscHandler, [colName]: [...this.state.colDiscHandler[colName], getDisc] },
        gameBoard: { ...this.state.gameBoard, ...this.state.gameBoard[getColRowNr - 1 ][getColNr] = currentPlayerNr},
/* ===================== skumt med -1, ovan diskutera det!
Hur fixa så man kan trycka var som i col? Tryck i rätt cel ger rad nr enlight e.target i creatDisc funktionen! */
      })
    }
    this.setState({
      gameStart: true, // Give the if in the function checkWinner cleared to checking if a winner is found
      currentCol: colName,
      currentColNr: getColNr,
      lastPlayer: {...this.state.lastPlayer, str: getLastPlayer, },
      //discPoss: getDiscRowColPoss
    });
  }
  
  checkWinner() {
    this.checkVertical();

    //if (this.state.gameStart === true) { 
    /* let getColObject = this.state.colDiscHandler;
      for (let getColArr in getColObject) {
        let getIntoColArr = getColObject[getColArr];      
        countCol++;
        for (const getColArr of getIntoColArr) {
          console.log(getIntoColArr);
          
          let catchRow = getColArr.props;
          
          let getColDiscPoss = catchRow.id;
          getColDiscBc = catchRow.style.backgroundColor;
        }
      }
    } */
  }
  checkVertical() {
    let gameBoard = this.state.gameBoard;
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (gameBoard[r][c]) {
          if (gameBoard[r][c] === gameBoard[r - 1][c] &&
            gameBoard[r][c] === gameBoard[r - 2][c] &&
            gameBoard[r][c] === gameBoard[r - 3][c]) {
            let fakeValueForWinerState = 1;
            updateWinnerState(fakeValueForWinerState);
              
            return gameBoard[r][c];    
          }
        }
      }
    }

  }
  winnerCheckVertical(colRowBc, getCol, presentPushColNr) {
    
  }
  winnerCheckHorizontal() {
    
  }
  checkCurrentPlayer() { 
    let currentPlayer = this.state.currentPlayer.value;
    if (currentPlayer === 'Player 1') {
      this.setState({currentPlayer: {
        ...this.state.currentPlayer,
        value: 'Player 2',
        nr: 2
        }
      })
    }
    if (currentPlayer === 'Player 2') {
      this.setState({currentPlayer: {
        ...this.state.currentPlayer,
        value: 'Player 1',
        nr: 1,
      }
    })
  }
}
createDiscPlace(){
  let getPlace = [];
  let count = 0;
  for (let col = 0; col < this.state.totCol; col++) {
    count++;
    getPlace.push( <div key={ count } className={ gameGridCSS.discCell}>{ this.state.colDiscHandler['col' + col]} </div> );     
  }
  return getPlace;
}
startNewGame() {
  this.setState({
    lastPlayer: { ...this.state.lastPlayer, winner: false }
  });
  window.location.reload();
}
render() {
  console.log(this.state);
  
  return (
    <section className={ mainWindowCSS.bodyFrame }>
      <p className={  mainWindowCSS.pagesHeadLine }> Connect four</p>
      <hr className={ mainWindowCSS.topLine }/>
       <CSSTransition
        in={ this.state.lastPlayer.winner }
        timeout={300}
        className={ mainWindowCSS.winnerContainer }
        unmountOnExit
      >
        <section>
          <div>{ this.state.lastPlayer.str + ' Vinner!'}</div>
          <button onClick={ this.startNewGame }>
            Nytt parti ?
          </button>
        </section>
      </CSSTransition>
      <section className={ gameGridCSS.gameGridFrame }>
        <section className={  mainWindowCSS.playerContainer }>
          <p style={(this.state.currentPlayer.value === 'Player 1') ? {color: 'green', fontWeight: 'bold'} : null}>Spelare 1</p>
          <p style={(this.state.currentPlayer.value === 'Player 2') ? {color: 'red', fontWeight: 'bold'} : null}>Spelare 2</p>
         </section>
          <div className={ gameGridCSS.gameGrid }>
            <GameGrid createDisc={ this.createDisc }/>     
          </div>
          <section className={ gameGridCSS.gameDiscPlace } //style={(this.state.lastPlayer.winner === true) ? {display: 'none'} : null}
          >
            { this.createDiscPlace()}
          </section>
        <button className={ mainWindowCSS.rstBtn } onClick={ this.startNewGame }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
