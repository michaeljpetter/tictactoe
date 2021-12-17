import { createTheme } from '../internal';

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
}) => createTheme({
  borderWidth: 2,
  borderRadius: 6,
  app: {
    font: '14pt "Americana W 03 Bold", serif',
    color: white,
    backgroundColor: blue,
    borderWidth: 1
  },
  config: {
    color: black,
    backgroundColor: red,
    'select.backgroundColor': gold,
    input: {
      backgroundColor: gold,
      editBackgroundColor: white
    },
    toggle: {
      backgroundColor: black,
      offColor: blue,
      onColor: gold,
      'thumb.borderWidth': 1,
      'thumb.borderColor': black
    }
  },
  game: {
    borderColor: black,
    board: {
      color: blue,
      backgroundColor: white,
      winBackgroundColor: gold,
      borderColor: red,
      borderWidth: 5,
      heat: {
        startColor: gold,
        endColor: red,
        opacity: .6
      }
    },
    button: {
      color: black,
      backgroundColor: gold,
      disabledBackgroundColor: blue
    },
    slider: {
      color: gold,
      fillTrack: true,
      borderWidth: [4, 2],
      'thumb.borderWidth': 2
    },
    toggle: {
      backgroundColor: black,
      offColor: blue,
      onColor: gold,
      'thumb.borderWidth': 1
    }
  }
}))(palette);
