import { flatten } from 'flat';

const palette = {
  darkPurple: '#351858',
  purple: '#822b99',
  hotPink: '#ec058e',
  pink: '#f140a9',
  lightBlue: '#37b0c9',
  white: 'white'
};

export default (({
  darkPurple,
  purple,
  hotPink,
  pink,
  lightBlue,
  white
}) => flatten({
  app: {
    font: '14pt "Comic Sans MS", cursive',
    color: pink,
    backgroundColor: darkPurple,
    borderRadius: 15
  },
  header: {
    color: darkPurple,
    backgroundColor: hotPink
  },
  'config.selector': {
    backgroundColor: pink,
    borderWidth: 2
  },
  board: {
    color: purple,
    backgroundColor: white,
    winBackgroundColor: lightBlue,
    borderColor: lightBlue,
    borderWidth: 5
  },
  'history.button': {
    color: darkPurple,
    backgroundColor: pink,
    disabledBackgroundColor: darkPurple,
    borderColor: pink
  }
}))(palette);
