import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import context from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof context, 'function')
  },
}

export default T