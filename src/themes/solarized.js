import { unflatten } from 'flat';

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
  cyan
}) => unflatten({
  app: {
    font: '14pt "Century Gothic", Futura, sans-serif',
    color: base1,
    backgroundColor: base03,
    borderRadius: 7
  },
  header: {
    color: base03,
    backgroundColor: base1
  },
  'config.picker': {
    backgroundColor: orange,
    borderWidth: 0
  },
  board: {
    color: base02,
    backgroundColor: base2,
    winBackgroundColor: cyan,
    borderColor: yellow,
    borderWidth: 3
  },
  'history.button': {
    color: base03,
    backgroundColor: yellow,
    disabledBackgroundColor: base01,
    borderWidth: 0
  }
}))(palette);
