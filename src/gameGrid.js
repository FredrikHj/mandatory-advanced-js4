import React, { PureComponent, useState, useEffect } from 'react';
import { rowNr$, colNr$, colDiscHandlerState$, updateColDiscHandlerState, } from './store';
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
        let totRow = this.state.totRow;
        let totCol = this.state.totCol;
        let rowInCol = 1;
        let colNr = 0;
        let row = 0;
        let colDiscHandlerObj = {};
        /* Creating a col and give the names col1/2/3...............
        I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
        for (let countCol = 1; countCol <= totCol; countCol++) {   
            // Creating and setting tthe states of col arrays            
            colDiscHandlerObj['col' + countCol] = [];
            updateColDiscHandlerState(colDiscHandlerObj);
            
            // Create a col dynamic name nr according the col I click in
            let colName = 'col' + countCol;
            for (let countRow = 1; countRow <= totRow; countRow++) {
                // Creating one cell in each turn and give it a rowNr 
                
                if (countRow === 1) {
                    row = <div 
                    className={ gameGridCSS.cell } 
                    key={ countRow } 
                    id={ rowInCol + 'x' + countRow } 
                    onClick={ this.props.createDisc 
                    }>{/* this.props.colDiscHandler.col1 */}</div>;
                }
                else {
                    row = <div 
                    className={ gameGridCSS.cell } 
                    key={ countRow } 
                    id={ rowInCol + 'x' + countRow } 
                    onClick={ this.props.createDisc 
                    }></div>;
                }
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
        console.log(this.props);
        return(
            <>
                { this.state.gameGrid }
            </>
        );
    }
}

    /*<>
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
      <div
        <div key="2">
          <div className={ gameGridCSS.cell } key="6" id="2x6" onClick={ this.props.createDisc }></div>
          <div className={ gameGridCSS.cell } key="5" id="2x5" onClick={ this.props.createDisc }></div>
          <div className={ gameGridCSS.cell } key="4" id="2x4" onClick={ this.props.createDisc }></div>
          <div className={ gameGridCSS.cell } key="3" id="2x3" onClick={ this.props.createDisc }></div>
          <div className={ gameGridCSS.cell } key="2" id="2x2" onClick={ this.props.createDisc }></div>
          <div className={ gameGridCSS.cell } key="1" id="2x1" onClick={ this.props.createDisc }>{ this.props.colDiscHandler.col2 }</div>
        </div>
      </div>  
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
    </>*/