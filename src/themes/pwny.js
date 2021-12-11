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
    picker: {
      backgroundColor: lightBlue,
      borderWidth: 2
    },
    input: {
      backgroundColor: lightBlue,
      editBackgroundColor: white,
      borderWidth: 2
    },
    toggle: {
      backgroundColor: darkPurple,
      offColor: pink,
      onColor: lightBlue,
      borderWidth: 2
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
    'history.button': {
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
