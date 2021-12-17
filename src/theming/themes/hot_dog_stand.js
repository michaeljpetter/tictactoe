import { createTheme } from '../internal';

const palette = {
  red: 'red',
  yellow: 'yellow',
  black: 'black',
  white: 'white'
};

export default (({
  red,
  yellow,
  black,
  white
}) => createTheme({
  app: {
    font: 'bold 12pt Monaco, sans-serif',
    letterSpacing: -1,
    color: black,
    backgroundColor: red
  },
  config: {
    color: black,
    backgroundColor: yellow,
    'select.backgroundColor': red,
    input: {
      backgroundColor: red,
      editBackgroundColor: white
    },
    toggle: {
      backgroundColor: black,
      offColor: white,
      onColor: red
    }
  },
  game: {
    board: {
      color: black,
      backgroundColor: white,
      winBackgroundColor: yellow,
      borderColor: black,
      borderWidth: 1,
      heat: {
        startColor: yellow,
        endColor: red,
        opacity: .6
      }
    },
    button: {
      color: black,
      backgroundColor: yellow,
      disabledBackgroundColor: white
    },
    slider: {
      backgroundColor: black,
      color: yellow
    },
    toggle: {
      backgroundColor: black,
      offColor: white,
      onColor: yellow
    }
  }
}))(palette);
