import React from 'react';
import { connect } from 'react-redux';
import dimOptions from '../../selectors/config/dim_options';
import selectDim from '../../actions/config/select_dim';

const mapStateToProps = state => ({
  dim: state.config.dim,
  dimOptions: dimOptions(state)
});

const mapDispatchToProps = { selectDim };

const DimSelector = ({
  dim, dimOptions, selectDim
}) => (
  <select value={dim}
          onChange={e => selectDim(Number(e.target.value))}>
    {dimOptions.map(dim =>
      <option key={dim} value={dim}>{`${dim} x ${dim}`}</option>
    )}
  </select>
);

export default connect(mapStateToProps, mapDispatchToProps)(DimSelector);
