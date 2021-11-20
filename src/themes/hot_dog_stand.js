import { unflatten } from 'flat';

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
}) => unflatten({
  app: {
    font: 'bold 12pt Monaco, sans-serif',
    letterSpacing: -1,
    color: black,
    backgroundColor: red
  },
  config: {
    color: black,
    backgroundColor: yellow,
    'picker.backgroundColor': red,
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
  board: {
    color: black,
    backgroundColor: white,
    winBackgroundColor: yellow,
    borderWidth: 1
  },
  'history.button': {
    color: black,
    backgroundColor: yellow,
    disabledBackgroundColor: white
  }
}))(palette);
