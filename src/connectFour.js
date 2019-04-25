import React, { PureComponent, useState, useEffect } from 'react';
import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { colDiscHandler$, totCol$, winnerState$, updateWinnerState} from './store';

import { CSSTransition } from 'react-transition-group';
import { GameGrid } from './gameGrid';
let countColRowBcGreenVer = 0;
let countColRowBcRedVer = 0;
let countColRowBcRedHori = 0;
let countColRowBcGreenHori = 0;
let countColRow = 0;
let discKey = 100;

class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      currentCol: '',
      currentColNr: 1,
      colDiscHandler: [],
      lastPlayer: { str: 'Player 1', winner: false },
      currentPlayer: { value: 'Player 1', bC: 'green', },
    }
    this.createDisc = this.createDisc.bind(this);
    this.createDiscPlace = this.createDiscPlace.bind(this);
    this.checkCurrentPlayer = this.checkCurrentPlayer.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.winnerCheckVertical = this.winnerCheckVertical.bind(this);
    this.winnerCheckHorizontal = this.winnerCheckHorizontal.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
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
    this.subscription = winnerState$.subscribe((winnerState) => {      
      if (winnerState) {
        this.setState({
          lastPlayer: {...this.state.lastPlayer, winner: true }})
        } 
      });
      this.setState({
      });  
    }
    componentDidUpdate() {
      if (!this.state.lastPlayer.winner) {
        this.checkWinner();
      }
    }
    createDisc(e) {
      let getTargetColRow = e.target.id;   
      
      discKey += 1;
      // Clean the id to only show the col nr      
      let indexedLetter = getTargetColRow.split('');
      let getColNr = indexedLetter.shift();
      let getColRowNr = indexedLetter.pop();
      
      // Create a col dynamic name nr according the col I click in
      let colName = 'col' + getColNr;

      // Creating the disc 
      let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } id={ getColRowNr } 
      style={(this.state.currentPlayer.value === 'Player 1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      </div>;
    // Get last player who placed a disc
    let getLastPlayer = this.state.currentPlayer.value;
    
    if (getColNr === getColNr) {
      this.checkCurrentPlayer();
      // Col array name
      this['col' + getColNr] = [];
      
      this.setState({
        colDiscHandler: { ...this.state.colDiscHandler, [colName]: [...this.state.colDiscHandler[colName], getDisc] }
      });
    }
    
    this.setState({
      gameStart: true, // Give the if in the function checkWinner cleared to checking if a winner is found
      currentCol: colName,
      currentColNr: getColNr,
      lastPlayer: {...this.state.lastPlayer, str: getLastPlayer, }
    });
  }
  checkWinner() {
    let getCol = 0;
    let getIndexOfArrForColRow = 0;
    let presentPushColNr = parseInt(this.state.currentColNr);
    
    if (this.state.gameStart === true) {
      let getColDiscHandlerObj = this.state.colDiscHandler;
      for (const getIntoColDiscHandler in getColDiscHandlerObj) {      
        getCol++;   
        
        let getColArr = getColDiscHandlerObj[getIntoColDiscHandler];
        
        for (let i = 0; i < getColArr.length; i++) {
          const getColRow = getColArr[i];
          
          countColRow++;
          // Get the colRowNr of the cols array for calculation of the Horizontal winner          
          let colRowId = getColRow.props.id;  
          
          // Get the colRowB
          let colRowBc = getColRow.props.style.backgroundColor;         
          
          // Vertical check
          //this.winnerCheckVertical(colRowBc, getCol, presentPushColNr);         
          
          
          //Horizontal check
          //console.log('Color ' + colRowBc + ' har index nr ' + getIndexOfArrForColRow + ' i col ' + getCol);
                    

          if (colRowBc === 'red' && colRowBc != 'green' && getCol != presentPushColNr
          ) {
            console.log('Röd adderas');
            
            countColRowBcRedHori++;    
            if (countColRowBcRedHori === 4) {      
              let fakeValueForWinerState = 1;
              updateWinnerState(fakeValueForWinerState);
            }
          }
          else if (colRowBc === 'green' && getCol === presentPushColNr) countColRowBcRedHori = 0;
          console.log(countColRowBcRedHori);

            
          //countColRow = 0; 
        }

        //Red    
        
        //this.winnerCheckHorizontal();
      }     
    }
    
  }
  winnerCheckVertical(colRowBc, getCol, presentPushColNr) {
    //Red     
    if (colRowBc === 'red' && getCol === presentPushColNr
    ) {      
      countColRowBcRedVer++;      
      if (countColRowBcRedVer === 4) {      
        let fakeValueForWinerState = 1;
        updateWinnerState(fakeValueForWinerState);
      }
    }
    else countColRowBcRedVer = 0;
    
    // Green
    if (colRowBc === 'green' && getCol === presentPushColNr
    ) {
      countColRowBcGreenVer++;
      if (countColRowBcGreenVer === 4) {
        let fakeValueForWinerState = 1;
        updateWinnerState(fakeValueForWinerState);
      }
    }
    else countColRowBcGreenVer = 0;
    let arrCountColRowBc = [countColRowBcRedVer];
    return arrCountColRowBc;
  }
  winnerCheckHorizontal() {

  }
  checkCurrentPlayer() { 
    let currentPlayer = this.state.currentPlayer.value;
    if (currentPlayer === 'Player 1') {
      this.setState({currentPlayer: {
        ...this.state.currentPlayer,
        value: 'Player 2'
      }
    })
  }
  if (currentPlayer === 'Player 2') {
    this.setState({currentPlayer: {
      ...this.state.currentPlayer,
      value: 'Player 1'
    }
  })
}
}
createDiscPlace(){
  let getPlace = [];
  let count = 0;
  for (let col = 1; col <= this.state.totCol; col++) {
    count++;
    getPlace.push( <div key={ count } className={ gameGridCSS.discCell}>{ this.state.colDiscHandler['col' + col]} </div> );     
  }
  return getPlace;
}
startNewGame() {
  this.setState({
    lastPlayer: { ...this.state.lastPlayer, winner: false }
    });
    //window.location.reload();
  }
  render() {   
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
          <div>{ this.state.lastPlayer.str + ' Won!'}</div>
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
            { this.createDiscPlace() }
          </section>
        <button className={ mainWindowCSS.rstBtn } onClick={ this.startNewGame }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
