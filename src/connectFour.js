import React, { PureComponent, useState, useEffect } from 'react';
import { mainWindowCSS, inGameCSS } from './connectFourCSS';
import { rowNr$, colNr$, colDiscHandlerState$, updateGameGridStructure, colDiscHandlerState } from './store';

import { css } from 'glamor';
import { create } from 'domain';
let discKey = 100;
let col1 = [];
let col2 = [];

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
        <> 
          <div className={ mainWindowCSS.discCell } key="1">
            {
              col1
              //props.colDiscHandler.discColName 
            }
          </div>
          <div key="1">
            <div className={ inGameCSS.cell } key="1" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="2" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="3" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="4" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="5" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="6" id="1x1" onClick={ this.props.createDisc }></div>
          </div>
        </>
        <>
          <div className={ mainWindowCSS.discCell } key="2">
            {
              col2
              //props.colDiscHandler.discColName 
            }
          </div>
          <div key="2">
            <div className={ inGameCSS.cell } key="1" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="2" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="3" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="4" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="5" id="1x1" onClick={ this.props.createDisc }></div>
            <div className={ inGameCSS.cell } key="6" id="1x1" onClick={ this.props.createDisc }></div>
          </div>
        </>
      </>
    );
  }
}
 class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colDiscHandler: [],
      currentPlayer: { value: 'player1', css: {} },
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
    // Clean the id to onsly show the col nr
    let getTargetCol = e.target;
    //let indexedLetter = getTargetId.split('');
    //let getColNr = indexedLetter.shift();
    console.log(getTargetCol);

    let colLineName = {
      playerDisc: css({
        'position': 'absolute',
        'width': '17.5px',
        'height': '17.5px',
        'zIndex': '1',
        'top': '-19px',
        'borderRadius': '20px', 
        'marginBottom': '-18px',
        'backgroundColor': 'green',
        }),
    }
    // Creating the disc
    let getDisc = <div key={ discKey } className={ colLineName.playerDisc } id={ getTargetCol.id } //style={(this.state.currentPlayer.value === 'player1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'} }
    >rg</div>
    col2.push('f');
    let colName = 'col' + discKey;
     this.setState({
      colDiscHandler: [...this.state.colDiscHandler, colName ]
    });

  }
  
  render() {
    console.log(this.state.test);
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
        <section className={ mainWindowCSS.gameDiscPlace }>{ this.state.colDiscHandler }</section>
          <div className={ mainWindowCSS.gameGrid }>
            <GameGrid createDisc={ this.createDisc } />            
          </div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
