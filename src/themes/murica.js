import { unflatten } from 'flat';

const palette = {
  red: 'rgb(179,25,66)',
  blue: 'rgb(10,49,97)',
  black: 'black',
  white: 'rgb(233,233,233)',
  gold: 'rgb(241,184,45)'
};

export default (({
  red,
  blue,
  black,
  white,
  gold
}) => unflatten({
  app: {
    font: '14pt "Americana W03 Bold", serif',
    color: white,
    backgroundColor: blue,
    borderRadius: 6
  },
  header: {
    color: black,
    backgroundColor: red
  },
  'config.picker': {
    backgroundColor: gold,
    borderWidth: 2
  },
  board: {
    color: blue,
    backgroundColor: white,
    winBackgroundColor: gold,
    borderColor: red,
    borderWidth: 5
  },
  'history.button': {
    color: black,
    backgroundColor: gold,
    disabledBackgroundColor: blue,
    borderColor: black,
    borderWidth: 2
  }
}))(palette);
