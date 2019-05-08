import React, { PureComponent } from 'react';
import { mainWindowCSS, gameGridCSS} from './connectFourCSS';
import { gameBoard$, totCol$, totRow$, winnerState$ } from './store';

import { CSSTransition } from 'react-transition-group';
import { GameGrid } from './gameGrid';
import { CheckVertical, CheckHorizontal, CheckDiagonalRight, CheckDiagonalLeft, CheckDraw } from './checkWinner'

class Connect4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      totCol: 0,
      totRow: 0,
      
      players: { player1: 1, player2: 2, winner: false, draw: false },
      currentPlayer: { value: 1, str: '' },
    }
    this.placeDisc = this.placeDisc.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.changeCurrentPlayer = this.changeCurrentPlayer.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }
  componentDidMount() { 
    this.subscription = gameBoard$.subscribe((gameBoard) => {           
      if (gameBoard) {
        this.setState({ gameBoard: gameBoard$.value });
      }
    });
    this.subscription = totCol$.subscribe((totCol) => {           
      if (totCol) {
        this.setState({ totCol: totCol$.value });
      }
    });
    this.subscription = totRow$.subscribe((totRow) => {      
      if (totRow) {
        this.setState({ totRow: totRow$.value });
      } 
    });
    this.subscription = winnerState$.subscribe((winnerState) => {      
      if (winnerState) {
        this.setState({ players: {...this.state.players, winner: true }});
      } 
    });
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  placeDisc(e) {  
    let gameBoard = this.state.gameBoard;
    // Get the colnr when click
    let getTargetCol = e.target.id;
    let c = getTargetCol;
    
  
    for (let r = 5; r >= 0; r--) {
      console.log('Rad ' + r + ' i ' + c);      
      if (!gameBoard[r][c]) {
        // Check a full col
        if (gameBoard[0][c] === undefined) {
          return;
        }
        
        gameBoard[r][c] = this.state.currentPlayer.value;
        break;
      }
    }
    console.log(gameBoard[0][c]);
    // Check currentPlayer and change to the other player 
    this.changeCurrentPlayer();
    
    // WinnerChecker
    this.checkWinner(gameBoard);
  }
  changeCurrentPlayer() { 
    let currentPlayer = this.state.currentPlayer.value;
    
    if (currentPlayer === 1) {
      this.setState({currentPlayer: {
        value: 2,
        str: 'Player 2',
      }
    })
    }
    else if (currentPlayer === 2) {
      this.setState({currentPlayer: {
        value: 1,
        str: 'Player 1',
        }
      })
    }
  }
  checkWinner(gameBoard) {
    CheckVertical(gameBoard);
    CheckHorizontal(gameBoard);
    CheckDiagonalRight(gameBoard);
    CheckDiagonalLeft(gameBoard);
    // If equal
    let isDraw = CheckDraw(gameBoard);
    if (isDraw === 'draw') {      
      this.setState({
        players: { ...this.state.players, draw: true }
      });
    }
  }

  startNewGame() {
    this.setState({
      players: { ...this.state.players, winner: false }
    });
    window.location.reload();
  }
  render() {
    console.log(this.state.gameBoard);
    
    return (
      <section className={ mainWindowCSS.bodyFrame }>
        <p className={  mainWindowCSS.pagesHeadLine }> Connect 4</p>
        <hr className={ mainWindowCSS.topLine }/>
        <CSSTransition
          in={ this.state.players.winner }
          timeout={300}
          className={ mainWindowCSS.winnerContainer }
          unmountOnExit
        >
          <section>
              { 
                // The winner mess
                (this.state.currentPlayer.value === 1) ? 'Spelare 2' : 'Spelare 1'
              } vinnaren :)
            <button onClick={ this.startNewGame }>
              Nytt parti ?
            </button>
          </section>
        </CSSTransition>
        <section className={ gameGridCSS.gameGridFrame }>
          <section className={  mainWindowCSS.playerContainer }>
            <p style={(this.state.currentPlayer.value === 1) ? {color: 'green', fontWeight: 'bold'} : null}>Spelare 1</p>
            <p style={(this.state.currentPlayer.value === 2) ? {color: 'red', fontWeight: 'bold'} : null}>Spelare 2</p>
          </section>
            <div className={ gameGridCSS.gameGrid }>
              <GameGrid
                placeDisc={ this.placeDisc }
                changeCurrentPlayer={ this.state.currentPlayer.value } />     
            </div>
          <button className={ mainWindowCSS.rstBtn } onClick={ this.startNewGame }>Nytt Spel</button>
          {/* Game equal? */ }
        </section>
          <div className={ mainWindowCSS.draw }
          style={(this.state.players.draw === true) ? {display: 'block'} : {display: 'none'} }> Lika - Ingen vann </div>
      </section>
    );
  } 
}

export default Connect4;
