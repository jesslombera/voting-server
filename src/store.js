import {createStore} from 'redux';
import reducer form './reducer'

export default function makeStore() {
  return createStore(reducer);
}