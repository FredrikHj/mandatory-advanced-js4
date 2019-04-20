import React, { PureComponent } from 'react';
import { mainWindowCSS, inGameCSS } from './connectFourCSS';
//import { rowInCol$, updateRowInCol } from './store';
import { css } from 'glamor';
let discKey = 100;

let arrColDiscHandler = [];
let arrColContent = [];
let arrGameGrid = [];
let arrDiscPlace = [];
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
      colDiscHandler: [],
      currentPlayer: { value: 'player1', css: {} },
      notClickingOutsideCells: [],
      leftMarginDiscColValue: '',
      test: [],
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
    let leftMarginDiscColValue = 0;
    /* Creating a col and give the names col1/2/3...............
    I am creating a couple of rows with the nr of row I need for the game, Inside the cols*/
    for (let countCol = 1; countCol <= totCol; countCol++) {   
      
      /*       let  ["discCol"+countCol] = [];
      
      discCol1.push('dews');
      discCol2.push('jyhtg');
      console.log(discCol2);
      
      
      console.log(countCol); */
      
      // createRow();
      for (let countRow = 1; countRow <= totRow; countRow++) {
        /* Creating one cell in each turn and give it a rowNr, row is rowNr in the col. 
        Handle click in the gameGrid is onlu allowed into the cell */   
        let row = <div className={ inGameCSS.cell } key={ countRow } id={ rowInCol + 'x' + countRow } onClick={ this.createDisc }
        data-marginleft-value={ leftMarginDiscColValue }></div>;
        arrColContent.push(row);
        // Add the rows in a arrCol after the couple of rows needed for a single col
        if (countRow === totRow) {
          countRow += 1;
          colNr += 1;
          
          // Hook a marginLeft value for a col
          
          /* Creating the disc section as a div for each col which is the place for the disc for one col.
          Creating name for the object keys as I had sett in the this.state above. The name is holder a value as an array wish will be part of the winner player calculation */ 
          // Creating custom Array names for the colDiscPlaces
          //let arrNameDiscForCol = 'discCol' + colNr;
          //colDiscHandlerObj[arrNameDiscForCol] = [];
          //arrNameDiscForCol = [];
          
         // let accessColDiscState = this.state; 
         // let accessColDiscObjName = 'discCol' + colNr;
         // let accessColDisc = accessColDiscState.accessColDiscObjName;
          
         // console.log(this.state.colDiscHandler);

          
          //let discPlace = <div className={ mainWindowCSS.discCell } key={ countCol } id={ 'discCol' + colNr } data-marginleft-value={ leftMarginDiscColValue }
          //>{ arrDiscPlace }</div>
          //arrColDiscHandler.push(discPlace);
          
          let gameCol = <div key={ colNr } id={  rowInCol } value={ leftMarginDiscColValue }>{ arrColContent.reverse() }</div>;
          arrCol.push(gameCol);
          
          leftMarginDiscColValue += -20;
        }
        // ========================================================================  
      }
      arrColContent = [];
      rowInCol += 1;      
    }
    
    arrGameGrid.push(arrCol);
    
    this.setState({ gameGrid: arrGameGrid });
  }
    createDisc(e) {
      console.log(e);
      
      // Clean the id to onsly show the col nr
      let getTargetCol = e.target;
      //let indexedLetter = getTargetId.split('');
      //let getColNr = indexedLetter.shift();
      console.log(getTargetCol);
      
      let getLMarginLeftColValue = e.target.dataset.marginleftValue;
      //console.log(getLMarginLeftColValue);

     let colLineName;
     discKey += 1;
     let colName = 'discCol' + discKey;
     // console.log(colDiscHandlerObj.[colName]);
     console.log(colName);
     
     // Creating some CSS for eatch col disc
     let strPx = getLMarginLeftColValue.toString() + 'px';
     
     colLineName = {
       player1: css({
         'position': 'absolute',
         'width': '17.5px',
         'height': '17.5px',
         'zIndex': '1',
         'left': strPx,
         'top': '-19px',
         'borderRadius': '20px', 
         'marginBottom': '-18px',
         'backgroundColor': 'green',
        }),
        player2: css({
          'marginLeft': strPx,
          'backgroundColor': 'red',
        }),
      }; 
      // Creating the disc
      let getDisc = <div key={ discKey } className={ colLineName.player1 } id={ getTargetCol.id } //style={(this.state.currentPlayer.value === 'player1') ? {backgroundColor: 'green'} : {backgroundColor: 'red'} }
      >rg</div>
      let discPlace = <div className={ mainWindowCSS.discCell } key={ discKey } id={ getTargetCol }
      >{ getDisc }</div>
      
      console.log(getDisc.props.children);
      
    //let discCorrectPlace = 'discCol' + getColNr;
    //console.log(discCorrectPlace);
    //arrDiscPlace.push(getDisc);
    
    //getTargetId.textContent = getDisc.props.children;
    
    this.setState({ colDiscHandler: [...this.state.colDiscHandler, getDisc ] });
    
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
          <div className={ mainWindowCSS.gameGrid }>{ this.state.gameGrid }</div>
        <button className={ mainWindowCSS.rstBtn }>Reset Game</button>
      </section>
    </section>
    );
  }
}

export default Connect4;
