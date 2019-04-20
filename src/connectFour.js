import React, { PureComponent, useState, useEffect } from 'react';

import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { rowNr$, colNr$, colDiscHandlerState$ } from './store';
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
      currentPlayer: { value: 'player1', bC: 'green', css: {} },
    }
    this.createDisc = this.createDisc.bind(this);
    this.checkCurrentPlayer = this.checkCurrentPlayer.bind(this);
  }
  componentDidMount() {
    this.subscription = colDiscHandlerState$.subscribe((colDiscHandler) => {
      console.log(colDiscHandler);
      
      if (colDiscHandler) {
        console.log('Lyssna och sätter antalet colummer via en store');
        this.setState({ colDiscHandler: colDiscHandlerState$.value });
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
    
    
    // Handle the current player
      console.log('bfd');
  
    // Create a col dynamic name nr according the col I click in
    let colName = 'col' + getColNr;
    
    // Creating the disc 
    let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } id={ getTargetColRow.id } 
    style={(this.state.currentPlayer.value === 'player1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
      </div>;
    if (getColNr === '1') {
      this.checkCurrentPlayer();
      col1.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col1
        }
      });
    }
    if (getColNr === '2') {
      this.checkCurrentPlayer();
      col2.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col2
        }
      });
    }
    if (getColNr === '3') {
      this.checkCurrentPlayer();
      col3.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col3
        }
      });
    }
    if (getColNr === '4') {
      this.checkCurrentPlayer();
      col4.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col4
        }
      });
    }
    if (getColNr === '5') {
      this.checkCurrentPlayer();
      col5.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col5
        }
      });
    }
    if (getColNr === '6') {
      this.checkCurrentPlayer();
      col6.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col6
        }
      });
    }
    if (getColNr === '7') {
      this.checkCurrentPlayer();
      col7.push(getDisc);
      this.setState({
          colDiscHandler: { ...this.state.colDiscHandler, [colName]: col7
        }
      });
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
  checkWinner() {
    
  }
  render() {
    console.log(this.state.colDiscHandler);
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
            <GameGrid createDisc={ this.createDisc } colDiscHandler={ this.state.colDiscHandler }/>     
          <section className={ mainWindowCSS.gameDiscPlace }>{ this.state.colDiscHandler }</section>
          </div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
