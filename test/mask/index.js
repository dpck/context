import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import context from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await context({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
