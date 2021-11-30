import seqStep from './seq_step';
import { curry } from 'lodash/fp';

export default curry((start, end) =>
  seqStep(start <= end ? 1 : -1, start, end)
);
