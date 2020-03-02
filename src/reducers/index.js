import { combineReducers } from 'redux';
import theme from './theme';
import app from './app';

export default combineReducers({
  theme,
  app
})