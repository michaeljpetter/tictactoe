import { unflatten } from 'flat';

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
}) => unflatten({
  app: {
    font: '16pt "Londrina Solid", sans-serif',
    letterSpacing: .5,
    color: pink,
    backgroundColor: darkPurple,
    borderRadius: 15
  },
  config: {
    color: darkPurple,
    backgroundColor: hotPink,
    borderWidth: 2,
    'picker.backgroundColor': lightBlue,
    input: {
      backgroundColor: lightBlue,
      editBackgroundColor: white
    },
    toggle: {
      backgroundColor: darkPurple,
      offColor: pink,
      onColor: lightBlue
    }
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
