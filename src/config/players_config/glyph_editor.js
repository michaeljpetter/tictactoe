import React, { useCallback } from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { glyphs } from '../[selectors]';
import { changeGlyph } from '../[actions]';
import { Input } from '#/ext/react';

const useStyles = createUseMultiStyles([
  {
    input: {
      width: '2.5ch',
      padding: [4, 5],
      fontFamily: '"Century Gothic", Futura, sans-serif',
      fontWeight: 'inherit',
      textAlign: 'center',
      caretColor: 'transparent'
    }
  },
  ({ app, config, config: { input } }) => ({
    input: {
      borderWidth: input.borderWidth,
      borderRadius: app.borderRadius,
      backgroundColor: input.backgroundColor,

      '&:focus': {
        backgroundColor: input.editBackgroundColor
      },

      '&::placeholder': {
        color: config.color,
      }
    }
  })
]);

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
