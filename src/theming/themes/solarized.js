import { createTheme } from '../internal';

const palette = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#d30102',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900'
};

export default (({
  base03,
  base02,
  base01,
  base1,
  base2,
  yellow,
  orange,
  magenta,
  cyan,
  green
}) => createTheme({
  borderWidth: 0,
  borderRadius: 7,
  app: {
    font: '14pt "Century Gothic", Futura, sans-serif',
    color: base1,
    backgroundColor: base03,
    borderWidth: 1
  },
  config: {
    color: base03,
    backgroundColor: base1,
    'select.backgroundColor': orange,
    input: {
      backgroundColor: orange,
      editBackgroundColor: base2
    },
    toggle: {
      backgroundColor: base03,
      offColor: base01,
      onColor: orange
    },
  },
  game: {
    board: {
      color: base02,
      backgroundColor: base2,
      winBackgroundColor: cyan,
      borderColor: yellow,
      borderWidth: 3,
      heat: {
        startColor: green,
        endColor: magenta,
        opacity: .5
      }
    },
    button: {
      color: base03,
      backgroundColor: yellow,
      disabledBackgroundColor: base01
    },
    slider: {
      backgroundColor: base01,
      color: yellow,
      trackScale: 1,
      fillTrack: true
    },
    toggle: {
      backgroundColor: base01,
      offColor: base1,
      onColor: yellow
    }
  }
}))(palette);
