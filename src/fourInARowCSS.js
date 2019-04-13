import { css } from 'glamor';

/* let indenticalCSS = {
  containerRegLogin:  css({

  })

} */
/* ========================= Generall ========================= */
export const mainWindowCSS = {
  pagesHeadLine: css({
   'textAlign': 'center',
   'width': '100%',
   'letterSpacing': '5px',
   'fontWeight': 'bold',
   'fontSize': '20px',
  }),
  topLine: css({
    'width': '75%',
  }),
  wonSubLine: css({
    'textAlign': 'center',
    'width': '100%',
    'letterSpacing': '3px',
  }),
  playerContainer: css({
    'position': 'relative',
    'left': '10px',
    'top': '150px',
    'width': '100px',

  }),
  bodyFrame: css({
    'marginLeft': 'calc(50% - 275px)',
    'marginTop': '10%',
    'backgroundColor': 'orange',
    'borderRadius': '10px',
    'border': '1px solid lightgrey',
    'width': '450px',
    'height': '396px',
  }),
  gameGridFrame: css({
    'position': 'relative',
    'top': '-64px',

  }),
  gameGrid: css({
    'position': 'relative',
    'left': 'calc(57% - 175px)',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',
    'backgroundColor': 'darkblue',
    'borderRadius': '10px',
    'border': '1px solid lightgrey',
    'width': '350px',
  }),
  rstBtn: css({
    'position': 'relative',
    'left': 'calc(50% - 50px)',
    'top': '16px',
    'width': '100px',
  })
}
  
/* ========================= Header ========================= */
/* export const headerCSS = {  

} */
/* ========================= Gamecell ========================= */
export const inGameCSS = {
  cell: css({
    'margin': '15px',
    'width': '20px',
    'height': '20px',
    'borderRadius': '20px', 
    'backgroundColor': 'white',
  }),
  player1Disc: css({
    'width': '17.5px',
    'height': '17.5px',
    'borderRadius': '20px', 
    'backgroundColor': 'red',
    'zIndex': '1',
  }),
  player2Disc: css({
    'width': '17.5px',
    'height': '17.5px',
    'borderRadius': '20px', 
    'backgroundColor': 'green',
    'zIndex': '1',
    'position': 'relative',
    'left': '99px',
    'top': '-348',
  }),
  // Col poss, left to right: col1 = |
}