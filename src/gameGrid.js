import React, { PureComponent, useState, useEffect } from 'react';
import { updateColDiscHandler, updateTotCol } from './store';
import { gameGridCSS } from './connectFourCSS';
import { create } from 'domain';
let arrColContent = [];
let arrGameGrid = [];
let arrCol = [];

export class GameGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totRow: 6,
      totCol: 7,
      gameGrid: [],

    }
    this.createGameGrid = this.createGameGrid.bind(this);
  }
  componentDidMount() {
      
      this.createGameGrid();
  }
  createGameGrid() {
    let totRow = this.state.totRow; // Minimum 4 row index 0-3
    let totCol = this.state.totCol;
    let rowInCol = 1;
    let colNr = 0;
    let row = 0;
    let colDiscHandler = {};
    /* Creating a col and give the names col1/2/3...............
    I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
    for (let countCol = 1; countCol <= totCol; countCol++) {   
      // Creating and setting tthe states of col arrays            
      colDiscHandler['col' + countCol] = [];
      
      updateColDiscHandler(colDiscHandler);
      updateTotCol(totCol);
      for (let countRow = 1; countRow <= totRow; countRow++) {
        // Creating one cell in each turn and give it a rowNr 
        row = <div className={ gameGridCSS.cell } key={ countRow } id={ rowInCol + 'x' + countRow } onClick={ this.props.createDisc }></div>;
        arrColContent.push(row);
        
        // Add the rows in a arrCol after the couple of rows needed for a single col
        if (countRow === totRow) {
          countRow += 1;
          colNr += 1;
          
          let gameCol = <div key={ colNr } id={ 'col' + rowInCol }>{ arrColContent.reverse() }</div>;
          arrCol.push(gameCol);
        }
        // ========================================================================  
      }
      // Emptying the row array
      arrColContent = [];
      
      rowInCol += 1;
      /* Step for the state working
      1 - create
      2 - Linking
      3 - Insurt
      */
    }
    arrGameGrid.push(arrCol);
    this.setState({ gameGrid: arrGameGrid });
  }
  render() {
      return(
          <>
              { this.state.gameGrid }
          </>
      );
  }
}