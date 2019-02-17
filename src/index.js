import jsx from '@a-la/jsx'
import { runInNewContext } from 'vm'
import { h as preact } from 'preact'

/**
 * The class for context-testing JSX.
 */
export default class JSXContext {
  /**
   * Transpiles JSX and returns the VNode created with Preact's `h`.
   * @param {string} input The input to evaluate into the vnode.
   * @returns {import('preact').VNode} The VNode
   */
  getVNode(input) {
    const sandbox = { require, h: preact }
    runInNewContext(`test = ${jsx(input)}`, sandbox)
    const { test } = sandbox
    return test
  }
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
