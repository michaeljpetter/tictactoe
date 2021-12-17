import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { glyphs } from '../[selectors]';
import { changeGlyph } from '../[actions]';
import { Input } from '#/theming/components';

const useStyles = createUseStyles({
  input: {
    width: '2.5ch',
    padding: [4, 5],
    fontFamily: '"Century Gothic", Futura, sans-serif',
    fontWeight: 'inherit',
    textAlign: 'center',
    caretColor: 'transparent'
  }
});

const GlyphEditor = ({
  player
}) => {
  const changeGlyphAction = useAction(changeGlyph);

  const handleChange = useCallback(
    value => { if(value.trim()) changeGlyphAction(player, value); },
    [changeGlyphAction, player]
  );

  const c = useStyles();

  return (
    <Input className={c.input}
           maxLength={1}
           placeholder={useSelector(glyphs)[player]}
           value={''}
           onChange={handleChange} />
  );
};

export default GlyphEditor;
