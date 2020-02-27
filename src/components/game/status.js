import React from 'react';
import { useSelector } from 'react-redux';
import { status } from '@selectors';
import MixedText from './mixed_text';

const Status = () => (
  <div className="status">
    <MixedText text={useSelector(status)} />
  </div>
);

export default Status;
