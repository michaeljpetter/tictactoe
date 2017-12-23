import React from 'react';
import { connect } from 'react-redux';
import { rows } from '../selectors';
import Square from './square';

const mapStateToProps = state => ({
  rows: rows(state)
});

const Board = ({
  rows
}) => (
  <div className="board">{rows.map(row =>
    <div key={row} className="board-row">{row.map(i =>
      <Square key={i} index={i} />
    )}</div>
  )}</div>
);

export default connect(mapStateToProps)(Board);
