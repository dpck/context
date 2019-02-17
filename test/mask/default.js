import { makeTestSuite } from 'zoroaster'
import JSXContext from '../../src'

export default makeTestSuite('test/result', {
  /**
   * @type {string} input
   * @type {JSXContext} c
   */
  getResults(input, { getVNode, render }) {
    const vnode = getVNode(input)
    const res = render(vnode)
    return res
  },
  context: JSXContext,
})

// export default ts
