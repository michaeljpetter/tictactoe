import measureText from './measure_text';
import getComputedStyleBy from './get_computed_style_by';
import { overArgs } from 'lodash/fp';

export default overArgs(measureText, getComputedStyleBy('font'));
