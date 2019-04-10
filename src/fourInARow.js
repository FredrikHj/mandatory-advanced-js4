import React, { PureComponent } from 'react';
import { mainWindowCSS, gameCellCSS } from './fourInARowCSS';
import './App.css';

class GameCell extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={ gameCellCSS.cell }>
  lnk

      </div>

    );
  }
}

class FourInARow extends PureComponent {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <div className={ mainWindowCSS.bodyFrame }>
        <GameCell/>
     
      </div>
    );
  }
}

export default FourInARow;
