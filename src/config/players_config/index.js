import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { players } from '../[selectors]';
import GlyphEditor from './glyph_editor';
import AIConfig from './ai_config';
import classNames from 'classnames';
import { times } from 'lodash/fp';

const useStyles = createUseStyles({
  playersConfig: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    gridRowGap: 10
  }
});

const PlayersConfig = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.playersConfig, className)}>
      {['Player', 'Glyph', 'AI'].map(header => (
        <span key={header}>{header}</span>
      ))}
      {times(player => (
        <Fragment key={player}>
          <span>{player + 1}</span>
          <GlyphEditor player={player} />
          <AIConfig player={player} />
        </Fragment>
      ), useSelector(players))}
    </div>
  );
};

export default PlayersConfig;
