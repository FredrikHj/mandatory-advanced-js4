import { css } from 'glamor';
import { relative } from 'path';

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
    'top': '-80px',
  }),
  // identical CSS
/*   inPlace: css({


  }), */
  gameDiscPlace: css({
    'position': 'relative',
    'left': 'calc(57% - 175px)',
    'top': '0',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',
    'width': '350px',
    'height': '20px',
    'border': '1px solid lightgrey',
  }),
  discCell: css({
    //'position': 'relative',
    'marginTop': '-20px',
    'marginLeft': '15px',
    'width': '20px',
   // 'height': '103%',
    'zIndex': '1',
    'border': '1px solid red',
  }),
  test: css({
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',

  }),
  gameGrid: css({
    'position': 'relative',
    'left': 'calc(57% - 175px)',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',
    'width': '350px',
    'border': '1px solid lightgrey',
    'backgroundColor': 'darkblue',
    'borderRadius': '10px',
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
    'position': 'relative',
    //'top': '-245px',
    'margin': '15px',
    'width': '20px',
    'height': '20px',
    'borderRadius': '20px', 
    'backgroundColor': 'white',
  }),
  generallPlayerDisc: css({
    'position': 'relative',
    'width': '17.5px',
    'height': '17.5px',
    'borderRadius': '20px', 
    'zIndex': '1',
    'top': '-19px',
    'marginBottom': '-18px',
    'backgroundColor': 'green',
  }),
  // Col poss, left to right: col1 = |
}
// Expanding CSS rouls for gameCol1 -->
export let gameStartedCSS = {}