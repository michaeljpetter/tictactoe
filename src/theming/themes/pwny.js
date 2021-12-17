import { createTheme } from '../internal';

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
}) => createTheme({
  borderRadius: 15,
  app: {
    font: '16pt "Londrina Solid", sans-serif',
    letterSpacing: .5,
    color: pink,
    backgroundColor: darkPurple
  },
  config: {
    color: darkPurple,
    backgroundColor: hotPink,
    borderWidth: 2,
    'select.backgroundColor': lightBlue,
    input: {
      backgroundColor: lightBlue,
      editBackgroundColor: white
    },
    toggle: {
      backgroundColor: darkPurple,
      offColor: pink,
      onColor: lightBlue,
      'thumb.borderWidth': 1
    }
  },
  game: {
    board: {
      color: purple,
      backgroundColor: white,
      winBackgroundColor: lightBlue,
      borderColor: lightBlue,
      borderWidth: 5,
      heat: {
        startColor: lightBlue,
        endColor: purple,
        opacity: .6
      }
    },
    button: {
      color: darkPurple,
      backgroundColor: pink,
      disabledBackgroundColor: darkPurple,
      borderColor: pink
    },
    slider: {
      color: pink,
      trackScale: 1,
      'thumb.borderColor': darkPurple,
      'thumb.borderWidth': 2
    },
    toggle: {
      offColor: pink,
      onColor: pink,
      'thumb.borderColor': darkPurple,
      'thumb.borderWidth': 2
    }
  }
}))(palette);
