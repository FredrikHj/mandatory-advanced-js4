import React, { PureComponent, useState, useEffect } from 'react';
import { updateColDiscHandler, updateTotCol, updateTotRow } from './store';
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
    let colDiscHandler = {};
    let rowInCol = 0;
    let colNr = 0;
    let row = 0;
    let rowKey = 0;
    /* Creating a col and give the names col1/2/3...............
    I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
    for (let countCol = 0; countCol < totCol; countCol++) {   
      // Creating and setting the states of col arrays            
      colDiscHandler['col' + countCol] = [];
      updateColDiscHandler(colDiscHandler);
      updateTotCol(totCol);
      for (let countRow = 1; countRow <= totRow; countRow++) {
        rowKey++;
        // Creating one cell in each turn and give it a rowNr start by 0        
        row = <div className={ gameGridCSS.emtyCell } key={ rowKey } id={ rowInCol + 'x' + countRow } onClick={ this.props.createDisc }></div>;
        arrColContent.push(row);
        
        // Add the rows in a arrCol after the couple of rows needed for a single col
        if (countRow === totRow) {
          colNr += 1;
          
          let gameCol = <div key={ colNr } id={ 'col' + rowInCol }>{ arrColContent.reverse() }</div>;
          arrCol.push(gameCol);
          
        }
        // ========================================================================  
        updateTotRow(totRow);
        rowKey = 0;
      }
      // Emptying the row array
      arrColContent = [];
      rowInCol += 1;
      
    }
    arrGameGrid.push(arrCol);
    this.setState({ gameGrid: arrGameGrid });
    console.log(colDiscHandler);
  }
  render() {
    console.log(this.state.gameGrid);
    
    return(
      <>
              { this.state.gameGrid }
          </>
      );
  }
}