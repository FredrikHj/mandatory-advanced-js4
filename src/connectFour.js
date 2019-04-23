import React, { PureComponent, useState, useEffect } from 'react';

import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { colDiscHandler$, totCol$, winnerState$, updateWinnerState} from './store';
import { GameGrid } from './gameGrid';
import { css } from 'glamor';
import { create } from 'domain';
let discKey = 100;
let arrDisc = [];

// Arrays for my col is created
let col1 = [];
let col2 = [];
let col3 = [];
let col4 = [];
let col5 = [];
let col6 = [];
let col7 = [];

 class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      currentCol: '',
      currentColNr: 1,
      colDiscHandler: [],
      lastPlayer: { str: 'Player 1', winner: false, },
      currentPlayer: { value: 'Player 1', bC: 'green', },
    }
    this.createDisc = this.createDisc.bind(this);
    this.createDiscPlace = this.createDiscPlace.bind(this);
    this.checkCurrentPlayer = this.checkCurrentPlayer.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.checkCurrentColState =this.checkCurrentColState.bind(this);
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
        
    // Create a col dynamic name nr according the col I click in
    let colName = 'col' + getColNr;
    
    // Creating the disc 
    let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } id={ getTargetColRow.id } 
    style={(this.state.currentPlayer.value === 'Player 1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      </div>;
    // Get last player who placed a disc
    let getLastPlayer = this.state.currentPlayer.value;

    if (getColNr === getColNr) {
      this.checkCurrentPlayer();
      // Col array name
     this['col' + getColNr] = [];
     console.log();
     
     this.setState({
        colDiscHandler: { ...this.state.colDiscHandler, [colName]: [...this.state.colDiscHandler[colName], getDisc] }
      });
      //arrDisc = [];
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
    let colRowBcRed = 0;
    let colRowBcGreen = 0;
    let colNrToInt = parseInt(this.state.currentColNr);
    if (this.state.gameStart === true) {
      let getColDiscHandlerObj = this.state.colDiscHandler;
      for (const getIntoColDiscHandler in getColDiscHandlerObj) {
        getCol++;
        let getColArr = getColDiscHandlerObj[getIntoColDiscHandler];
        for (let i = 0; i < getColArr.length; i++) {
          const getColRow = getColArr[i];

          let colRowBc = getColRow.props.style.backgroundColor;
          // Vertical check
          if (colRowBc === 'red' && getCol === colNrToInt) {
            colRowBcRed++;/* 
            if (colRowBcRed === 4) {
              let setWinnerState = 2;
              updateWinnerState(setWinnerState);
             } */

             console.log(colRowBcRed); 
          }

        }
      }      
      let getCurrentCol = this.state.colDiscHandler[this.state.currentCol]
      colRowBcRed = 0;
    }
  }
  checkCurrentColState() {
    //return this.state.colDiscHandler.col1;
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
      getPlace.push( <div className={ gameGridCSS.discCell}>{ this.state.colDiscHandler['col' + col]} </div> );     
    }
    return getPlace;
  }
  render() {
    return (
      <section className={ mainWindowCSS.bodyFrame }>
      <p className={  mainWindowCSS.pagesHeadLine }> Connect four</p>
      <hr className={ mainWindowCSS.topLine }/>
      <p className={  mainWindowCSS.wonSubLine } style={(this.state.lastPlayer.winner === true) ? {display: 'block'} : {display: 'none'}}>{ this.state.lastPlayer.str + ' Won!'}</p>
      <section className={ gameGridCSS.gameGridFrame }>
        <section className={  mainWindowCSS.playerContainer }>
          <p style={(this.state.currentPlayer.value === 'Player 1') ? {color: 'green', fontWeight: 'bold'} : null}>Player 1</p>
          <p style={(this.state.currentPlayer.value === 'Player 2') ? {color: 'red', fontWeight: 'bold'} : null}>Player 2</p>
         </section>
          <div className={ gameGridCSS.gameGrid }>
            <GameGrid createDisc={ this.createDisc }/>     
          </div>
          <section className={ gameGridCSS.gameDiscPlace }>
            { this.createDiscPlace() }
          </section>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
