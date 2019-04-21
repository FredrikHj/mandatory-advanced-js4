import React, { PureComponent, useState, useEffect } from 'react';

import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { colDiscHandler$, totCol$ } from './store';
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
      colDiscHandler: [],
      currentPlayer: { value: 'player1', bC: 'green', css: {} },
    }
    this.createDisc = this.createDisc.bind(this);
    this.createDiscPlace = this.createDiscPlace.bind(this);
    this.checkCurrentPlayer = this.checkCurrentPlayer.bind(this);
  }
  componentDidMount() {
    this.subscription = colDiscHandler$.subscribe((colDiscHandler) => {
      console.log(colDiscHandler);
      
      if (colDiscHandler) {
        console.log('Lyssna och sätter antalet colummer via en store');
        this.setState({ colDiscHandler: colDiscHandler$.value });
      } 
    });
    this.subscription = totCol$.subscribe((totCol) => {
      console.log(totCol);
      
      if (totCol) {
        console.log('Lyssna och sätter antalet colummer via en store');
        this.setState({ totCol: totCol$.value });
      } 
    });
  }
  createDisc(e) {
    let getTargetColRow = e.target.id;

    console.log(getTargetColRow);
    
    discKey += 1;
    // Clean the id to only show the col nr      
    let indexedLetter = getTargetColRow.split('');
    let getColNr = indexedLetter.shift();
    console.log(typeof getColNr);

    
    console.log(this['col' + getColNr]);
    
    // Create a col dynamic name nr according the col I click in
    let colName = 'col' + getColNr;
    
    // Creating the disc 
    let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } id={ getTargetColRow.id } 
    style={(this.state.currentPlayer.value === 'player1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      </div>;
 
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
  }
  checkCurrentPlayer() { 
    let currentPlayer = this.state.currentPlayer.value;
    if (currentPlayer === 'player1') {
      this.setState({currentPlayer: {
          ...this.state.currentPlayer,
          value: 'player2'
        }
      })
    }
    if (currentPlayer === 'player2') {
          this.setState({currentPlayer: {
          ...this.state.currentPlayer,
          value: 'player1'
        }
      })
    }
  }
  createDiscPlace(){
    let getPlace = [];
    let count = 0;
    for (let col = 1; col <= this.state.totCol; col++) {
      getPlace.push( <div className={ gameGridCSS.discCell}> v { this.state.colDiscHandler['col' + col]} </div> );     
    }
    return getPlace;
  }
  checkWinner() {
    
  }
  render() {
    console.log(this.state.totCol);
    return (
      <section className={ mainWindowCSS.bodyFrame }>
      <p className={  mainWindowCSS.pagesHeadLine }> Connect four</p>
      <hr className={ mainWindowCSS.topLine }/>
      <p className={  mainWindowCSS.wonSubLine }> Player ? Won</p>
      <section className={ gameGridCSS.gameGridFrame }>
        <section className={  mainWindowCSS.playerContainer }>
          <p style={(this.state.currentPlayer.value === 'player1') ? {color: 'green', fontWeight: 'bold'} : null}>Player 1</p>
          <p style={(this.state.currentPlayer.value === 'player2') ? {color: 'red', fontWeight: 'bold'} : null}>Player 2</p>
         </section>
          <div className={ gameGridCSS.gameGrid }>
            <GameGrid createDisc={ this.createDisc }/>     
          </div>
          <section className={ gameGridCSS.gameDiscPlace }>
            {
              this.createDiscPlace()
            }
          </section>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
