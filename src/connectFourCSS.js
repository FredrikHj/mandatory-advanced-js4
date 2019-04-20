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

  // identical CSS
/*   inPlace: css({


  }), */
  gameDiscPlace: css({
    'position': 'relative',
    'top': '-40',
    'left': 'calc(57% - 175px)',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',
    'width': '350px',
    'height': '20px',
    'border': '1px solid lightgrey',
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
/* ========================= GameGrid ========================= */
export const gameGridCSS = {
  gameGridFrame: css({
    'marginTop': '-60px',
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
  discCell: css({
    'marginLeft': '15px',
    'width': '20px',
    'zIndex': '1',
  }),
  cell: css({
    'position': 'relative',
    'margin': '14.3px',
    'width': '20px',
    'height': '20px',
    'borderRadius': '20px', 
    'backgroundColor': 'white',
  }),
}
/* ========================= Gamecell ========================= */
export const inGameCSS = {
  generallPlayerDisc: css({
    'width': '17.5px',
    'height': '17.5px',
    'marginBottom': '-51.1px',
    'marginLeft': '1px',
    'borderRadius': '20px',
    'zIndex': '1',
  }),
}