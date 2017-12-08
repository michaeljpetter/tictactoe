import React from 'react';
import { connect } from 'react-redux';
import toWinOptions from '../../selectors/config/to_win_options';
import selectToWin from '../../actions/config/select_to_win';

const mapStateToProps = state => ({
  toWin: state.config.toWin,
  ...toWinOptions(state)
});

const mapDispatchToProps = { selectToWin };

const ToWinSelector = ({
  toWin, toWinOptions, selectToWin
}) => (
  <select value={toWin}
          onChange={e => selectToWin(Number(e.target.value))}>
    {toWinOptions.map(toWin =>
      <option key={toWin} value={toWin}>{toWin}</option>
    )}
  </select>
);

export default connect(mapStateToProps, mapDispatchToProps)(ToWinSelector);
