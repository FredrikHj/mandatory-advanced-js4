import React, { PureComponent, useState, useEffect } from 'react';
import { CSSTransition//, TransitionGroup 
} from 'react-transition-group';
import { mainWindowCSS, inGameCSS, gameGridCSS } from './connectFourCSS';
import { rowNr$, colNr$, colDiscHandlerState$, updateGameGridStructure, colDiscHandlerState } from './store';

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

class GameGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log(this.state.colDiscHandler);
    return(
      <>
        {/* =============================== Col 1 =============================== */}
        <div> 
          <div key="1">
            <div className={ gameGridCSS.cell } key="6" id="1x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="1x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="1x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="1x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="1x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="1x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col1 }</div>
          </div>
        </div>
        {/* =============================== Col 2 =============================== */}
        <div>
          <div key="2">
            <div className={ gameGridCSS.cell } key="6" id="2x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="2x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="2x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="2x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="2x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="2x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col2 }</div>
          </div>
        </div>  
        {/* =============================== Col 3 =============================== */}
        <div>
          <div key="3">
            <div className={ gameGridCSS.cell } key="6" id="3x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="3x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="3x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="3x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="3x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="3x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col3 }</div>
          </div>
        </div>
        {/* =============================== Col 4 =============================== */}
        <div> 
          <div key="4">
            <div className={ gameGridCSS.cell } key="6" id="4x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="4x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="4x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="4x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="4x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="4x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col4 }</div>
          </div>
        </div>
        {/* =============================== Col 5 =============================== */}
        <div> 
          <div key="5">
            <div className={ gameGridCSS.cell } key="6" id="5x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="5x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="5x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="5x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="5x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="5x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col5 }</div>
          </div>
        </div>
        {/* =============================== Col 6 =============================== */}
        <div> 
          <div key="6">
            <div className={ gameGridCSS.cell } key="6" id="6x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="6x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="6x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="6x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="6x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="6x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col6 }</div>
          </div>
        </div>
        {/* =============================== Col 7 =============================== */}
        <div> 
          <div key="7">
            <div className={ gameGridCSS.cell } key="6" id="7x6" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="5" id="7x5" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="4" id="7x4" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="3" id="7x3" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="2" id="7x2" onClick={ this.props.createDisc }></div>
            <div className={ gameGridCSS.cell } key="1" id="7x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col7 }</div>
          </div>
        </div>
      </>
    );
  }
}
 class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colDiscHandler: { col1: [], col2: [], col3: [], col4: [], col5: [], col6: [], col7: [] },
      currentPlayer: { value: 'player1', bC: 'green', css: {} },
    }
    this.createDisc = this.createDisc.bind(this);
  }
  componentDidMount() {
    this.createGameGridStructure(6, 7);
  }
  createGameGridStructure(x, y) {
    updateGameGridStructure(x, y);
  }
  createDisc(e) {
    console.log(e);
    
    discKey += 1;
    // Clean the id to only show the col nr
    let getTargetCol = e.target.id;
    let indexedLetter = getTargetCol.split('');
    let getColNr = indexedLetter.shift();
    console.log(getColNr);
    
    let currentPlayer = this.state.currentPlayer.value;

    // Handle the current player
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

    /* How much should the margin top be at the disk for the col?
    Intial value is top: -19px and the max value is +191px, every row upp decrease the value with -35px
    CSS based animation */
      
    // Create a col dynamic name according the col I click in
    let colName = 'col' + getColNr;
    
    // CSS style for the disc

    // Creating the disc 
    let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } id={ getTargetCol.id } 
    style={(this.state.currentPlayer.value === 'player1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
    </div>;
      
   eval('col' + getColNr).push(getDisc);
    
    //getTargetCol.textContent = 'vdz';
 
    this.setState({
       colDiscHandler: {...this.state.colDiscHandler, [colName]: eval('col' + getColNr) }
    });
    getColNr = 0;
      //arrDisc = [];
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
          <p>Player 1</p>
          <p>Player 2</p>
        </section>
          <div className={ gameGridCSS.gameGrid }>
            <GameGrid createDisc={ this.createDisc } colDiscHandler={ this.state.colDiscHandler }/>      
          </div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}
//<section className={ mainWindowCSS.gameDiscPlace }></section>

export default Connect4;
