import React, { PureComponent } from 'react';
import { mainWindowCSS, inGameCSS } from './fourInARowCSS';
//import { rowInCol$, updateRowInCol } from './store';
let test = 0;

//let rowCount = 0;
/* class GameColummStructure extends PureComponent {
  constructor(props) {
    super(props);
  }
   componentDidMount() {
    let getRows = this.props.colContent;
    for (const getRowsvs of getRows) {
      console.log(getRowsvs);
      
    }
    
    //fixRowInCol();
   }
  //fixRowInCol() {
    
 // }
  render() {
      console.log(this.props.colContent);
      
    //console.log(rowInCol$.value);
    return(   
      <div key={ this.props.Key }>
        { this.props.colContent }
      </div>
    );
  }
  
}  */

  class FourInARow extends PureComponent {
    constructor(props) {
      super(props);
        this.state = {
          row: 0,
          totRow: 6,
          rowContent: '',
          arrColContent: [],
          col: 0,
          totCol: 7,
          arrGameGrid: [],

        }
      this.row = this.row;

      this.modIdRowInCol = this.modIdRowInCol.bind(this);
      this.createGameGrid = this.createGameGrid.bind(this);
    }
    componentDidMount() {
      
    }
    createCell() {
      let rowInCol = <div className={ inGameCSS.cell } key={ this.row += 1 }></div>;

      this.setState({ arrColContent: [...this.state.arrColContent, rowInCol] });

    }
    createCol() {
      this.col += 1;
      let gameCol = <div key={  this.col } id={ 'col' + this.col }>{ this.state.arrColContent }</div>;

    }
    createGameGrid() {
      let arrGameCol = [];
      let arrGameGrid = [];
      let countCol  = 0;
      let rowInCol = 1;
      let totRow = this.state.totRow;
      let gameCol;
      let countRow = 1
      let totCol = this.state.totCol;
      let gameColContent;
         /* Creating a col and give it name col1/2/3...............
      Inside the cols it are creating a couple of rows with the nr of row I need for the game*/
      for (; countRow <= totRow; countRow++) {
        // Creating one cell and give it a rowNr, rowInCol is rowNr in the col
         
      }
      
      for (let col = 1; col <= totCol; col++) {

      }        

      arrGameGrid.push(arrGameCol);
      return arrGameGrid;
    }
  
    // ======================================================
  
    modIdRowInCol(arrGameColContent, rowInCol, countRow) {
      let col;
      let newRowId = rowInCol + 'x' + countRow;
      console.log(newRowId);
      
      for (let index = 0; index < arrGameColContent.length; index++) {
        
        col = arrGameColContent;
      }
      
      return this.state.arrColContent;
    }
    render() {
      console.log(this.state.arrColContent);
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
          <div className={ mainWindowCSS.gameGrid }>
            { 
              this.createGameGrid()
            }
          </div>
          <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
        </section>
          <div className={ inGameCSS.player1Disc }></div>
          <div className={ inGameCSS.player2Disc }></div>
      </section>
    );
  }
}

export default FourInARow;
