let jsx = require('@a-la/jsx'); if (jsx && jsx.__esModule) jsx = jsx.default;
const { runInNewContext } = require('vm');
const { h: preact } = require('preact');
let render = require('@depack/render'); if (render && render.__esModule) render = render.default;

/**
 * The class for context-testing JSX.
 */
               class JSXContext {
  /**
   * Transpiles JSX and returns the VNode created with Preact's `h`.
   * @param {string} input The input to evaluate into the vnode.
   * @param {*} context The global context to evaluate in.
   * @returns {import('preact').VNode} The VNode
   */
  getVNode(input, context = {}) {
    const sandbox = { require, h: preact, ...context }
    runInNewContext(`test = ${jsx(input)}`, sandbox)
    const { test } = sandbox
    return test
  }
  get render() {
    return render
  }
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = JSXContext