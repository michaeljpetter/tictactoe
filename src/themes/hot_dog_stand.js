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
  header: {
    color: black,
    backgroundColor: yellow
  },
  'config.picker.backgroundColor': red,
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
