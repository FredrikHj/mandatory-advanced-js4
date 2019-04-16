import React, { PureComponent } from 'react';
import { mainWindowCSS, inGameCSS } from './connectFourCSS';
//import { rowInCol$, updateRowInCol } from './store';
import { css } from 'glamor';
let discKey = 0;

let arrColContent = [];
let arrGameGrid = [];
let colLineNr = 99;
let arrDisc = [];
let arrCol = [];
let test = 0;

 class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totRow: 6,
      rowContent: '',
      totCol: 7,
      gameGrid: [],
      currentPlayer: { value: 'player1', css: {} },
      notClickingOutsideCells: [],
      leftMarginDiscColValue: '',
    }
    //this.getNotClickingOutside = this.getNotClickingOutside;
    this.createGameGrid = this.createGameGrid.bind(this);
    this.createDisc = this.createDisc.bind(this);
  }
  componentDidMount() {
    this.createGameGrid();
  }
  createGameGrid() {
    //debugger;

    let totRow = this.state.totRow;
    let totCol = this.state.totCol;
    let rowInCol = 1;
    let colNr = 0;
    let leftMarginDiscColValue = 99;
    /* Creating a col and give the names col1/2/3...............
    I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
    for (let countCol = 1; countCol <= totCol; countCol++) {   
      // createRow();
      for (let countRow = 1; countRow <= totRow; countRow++) {
        
        /* Creating one cell in each turn and give it a rowNr, row is rowNr in the col. 
        Handle click in the gameGrid is onlu allowed into the cell */   
        let row = <div className={ inGameCSS.cell } key={ countRow } id={ rowInCol + 'x' + countRow }
        data-marginleft-value={ leftMarginDiscColValue } onClick={ this.createDisc }></div>;
        arrColContent.push(row);
        // Add the rows in a arrCol after the couple of rows needed for a single col
        if (countRow === totRow) {
          colNr += 1;

          // Hook a marginLeft value for a col
          leftMarginDiscColValue += 49;

          let gameCol = <div key={ colNr } id={  rowInCol + 'x' + 0 } value={ leftMarginDiscColValue }>{ arrColContent.reverse() }</div>;
          arrCol.push(gameCol);

          // Creating the disc sections as a div for each col which is the place for the disc for one col. 
          arrDisc.push(<div className={ mainWindowCSS.discCell } key={ colNr }>efw</div>);
          
          
          //arrCol.push(disc1);
        }
        // ========================================================================  
      }
      arrColContent = [];
      rowInCol += 1;
    }
    
    arrGameGrid.push(arrCol);
    
    this.setState({ 
      gameGrid: arrGameGrid, currentPlayer: { ...this.state.currentPlayer, discToPlace: arrDisc } });
    }
    createDisc(e) {
      let getTargetId = e.target.id;
      let getLMarginLeftColValue = e.target.dataset.marginleftValue;
      console.log(getLMarginLeftColValue);

     let colLineName;
      discKey += 1;
      
    // Creating some CSS for eatch col disc
    let strPx = getLMarginLeftColValue.toString() + 'px';

    colLineName = {
      player1: css({
        'marginLeft': strPx,
        'backgroundColor': 'green',
      }),
      player2: css({
        'marginLeft': strPx,
        'backgroundColor': 'red',
      }),
    };
      // Creating the disc
      let getDisc = <div key={ discKey } className={ inGameCSS.generallPlayerDisc } style={(this.state.currentPlayer.value === 'player1') 
      ? {backgroundColor: 'green'} : {backgroundColor: 'red'} }></div>
       arrDisc.push(getDisc);
     this.setState({ currentPlayer: { ...this.state.currentPlayer, discToPlace: arrDisc } });
      
      console.log(arrColContent);
  }
  render() {
    console.log(this.state.currentPlayer.discToPlace);
    
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
          <section className={ mainWindowCSS.gameDiscPlace }>{ this.state.currentPlayer.discToPlace }</section>
        <div className={ mainWindowCSS.gameGrid }>
          { this.state.gameGrid }
        </div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
