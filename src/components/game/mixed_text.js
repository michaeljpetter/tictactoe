import React from 'react';
import { createRenderer } from '@ext/mixed_text';
import PlayerGlyph from './player_glyph';
import { flow, get } from 'lodash/fp';

/* eslint-disable react/display-name */

const MixedText = flow(get('parts'), createRenderer({
  player: (k, v) => <PlayerGlyph key={k} player={v} />
}));

export default MixedText;
