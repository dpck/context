import { makeTestSuite } from 'zoroaster'
import JSXContext from '../../src'

export default makeTestSuite('test/result/index.md', {
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

export const contexts = makeTestSuite('test/result/contexts.jsx', {
  /**
   * @type {string} input
   * @type {JSXContext} c
   */
  getResults(input, { getVNode, render }) {
    const vnode = getVNode(input, {
      Container({ children }) {
        return (
          <div id="Container">
            {children}
          </div>
        )
      },
    })
    const res = render(vnode)
    return res
  },
  context: JSXContext,
})

// export default ts
