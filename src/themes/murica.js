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
    font: '14pt "Americana W 03 Bold", serif',
    color: white,
    backgroundColor: blue,
    borderRadius: 6
  },
  config: {
    color: black,
    backgroundColor: red,
    picker: {
      backgroundColor: gold,
      borderWidth: 2
    },
    input: {
      backgroundColor: gold,
      editBackgroundColor: white,
      borderWidth: 2
    },
    toggle: {
      backgroundColor: black,
      offColor: blue,
      onColor: gold,
      borderWidth: 2,
      'thumb.borderWidth': 1,
      'thumb.borderColor': black
    }
  },
  game: {
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
    'history.button': {
      color: black,
      backgroundColor: gold,
      disabledBackgroundColor: blue,
      borderColor: black,
      borderWidth: 2
    },
    slider: {
      color: gold,
      fillTrack: true,
      borderWidth: [4, 2],
      borderColor: black,
      'thumb.borderWidth': 2
    },
    toggle: {
      backgroundColor: black,
      offColor: blue,
      onColor: gold,
      borderColor: black,
      borderWidth: 2,
      'thumb.borderWidth': 1,
      'thumb.borderColor': black
    }
  }
}))(palette);
