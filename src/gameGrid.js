import React, { PureComponent, useState, useEffect } from 'react';
import {  updateTotCol, updateTotRow, updateGameBoard} from './store';
import { gameGridCSS, inGameCSS } from './connectFourCSS';

export class GameGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totRow: 6,
      totCol: 7,
      gameBoard: [],
    }
    this.createGameBoard = this.createGameBoard.bind(this);
  }
  componentDidMount() {
    this.createGameBoard();
  }
  createGameBoard() {
    let gameBoard = [];
    let totRow = this.state.totRow; // Minimum 4 row index 0-3
    let totCol = this.state.totCol;
    
    //Create a gameBoard for calculation of a winner
    for (let r = 0; r < totRow; r++) {
      let gameRow = [];
      updateTotRow(totRow);
      for (let c = 0; c < totCol; c++) {
        updateTotCol(totCol);
        gameRow.push(null);
      }
     gameBoard.push(gameRow);
     }
   this.setState({ gameBoard, });
   updateGameBoard(gameBoard);
  }
  render() {
    return(
      <table>
        <thead>
        </thead>
        <tbody>
          { this.state.gameBoard.map((countRow, key) => 
            ( <GridRow 
                key={ key } 
                countRow={ countRow } 
                placeDisc={ this.props.placeDisc }
                changeCurrentPlayer={ this.props.changeCurrentPlayer}
              />))
             }
        </tbody>
      </table>
    );
  }
}
const GridRow = ({countRow, placeDisc, changeCurrentPlayer }) => {
  return (
    <tr> 
      { countRow.map((cell, index) =>
        <Cell
          key={ index }
          placeDisc={ placeDisc }
          colIndex={ index }
          changeCurrentPlayer={ cell }
        /> )
      }
    </tr>
  );
};
const Cell = ({placeDisc, colIndex, changeCurrentPlayer}) => {
  let cssRule;
  if (changeCurrentPlayer === 0) {
    cssRule = inGameCSS.player0CSS;
  }
  if (changeCurrentPlayer === 1) {
    cssRule = inGameCSS.player1CSS;
  }
  if (changeCurrentPlayer === 2) {
    cssRule = inGameCSS.player2CSS;
  }
  return (
    <td>
      <div className={gameGridCSS.playerCell } onClick={ placeDisc } id={ colIndex }>
        <div className={ cssRule }></div>
      </div>
    </td>
  );
};