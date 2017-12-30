import React from 'react';
import { createRenderer } from '@ext/mixed_text';
import PlayerGlyph from './player_glyph';

const render = createRenderer({
  player: (k, v) => <PlayerGlyph key={k} player={v} />
});

const MixedText = ({ text }) => render(text);

export default MixedText;
