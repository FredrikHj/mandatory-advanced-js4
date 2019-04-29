import { css } from 'glamor';
import { relative } from 'path';

/* let indenticalCSS = {
  containerRegLogin:  css({
    
  })
  
} */
/* ========================= Generall ========================= */
export const mainWindowCSS = {
  bodyFrame: css({
    'height': '380px',
    'marginLeft': 'calc(50% - 275px)',
    'marginTop': '10%',
    'backgroundColor': 'orange',
    'borderRadius': '10px',
    'border': '1px solid lightgrey',
    'width': '450px',
  }),
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
  winnerContainer: css({
    'position': 'absolute',
    'left': '48px',
    'top': '-60px',
    'textAlign': 'center',
    'fontSize': '30px',
    'width': '400px',
    'height': '185px',
    'zIndex': '1',
    'lineHeight': '130px',
    'letterSpacing': '3px',
    'backgroundColor': 'grey',
    //'boxShadow': '45px 14px 274px 261px grey',
  }),
  playerContainer: css({
    'position': 'relative',
    'left': '10px',
    'top': '150px',
    'width': '100px',
  }),

  rstBtn: css({
    'position': 'relative',
    'left': 'calc(50% - 50px)',
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
  gameDiscPlace: css({
    'position': 'relative',
    'top': '-48.5px',
    'left': 'calc(57% - 175px)',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'spaceAround',
    'width': '350px',
    'height': '20px',
  }),
  discCell: css({
    'margin': '14.3px',
    'width': '20px',
    'zIndex': '1',
  }),
  emtyCell: css({
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
    'marginLeft': '1.5px',
    'borderRadius': '20px',
    'zIndex': '1',
  }),
}