# @depack/context

[![npm version](https://badge.fury.io/js/%40depack%2Fcontext.svg)](https://npmjs.org/package/@depack/context)

`@depack/context` is The Test Context To Render JSX Into Strings For Mask Testing With Zoroaster.

```sh
yarn add -E @depack/context
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [class JSXContext](#class-jsxcontext)
  * [`getVNode(input: string): Preact.VNode`](#getvnodeinput-string-preactvnode)
  * [`render(vnode: VNode, opts?: RenderOpts, contexts?: Array<Context>): string`](#rendervnode-vnodeopts-renderoptscontexts-arraycontext-string)
    * [`RenderConfig`](#type-renderconfig)
- [Using In A Test](#using-in-a-test)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import JSXContext from '@depack/context'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## class JSXContext

This instance of the test context provides the testing API for JSX components.

### `getVNode(`<br/>&nbsp;&nbsp;`input: string,`<br/>`): Preact.VNode`

Transforms the string input into JSX VNode.

```jsx
/* yarn example/ */
import JSXContext from '@depack/context'

const context = new JSXContext()
const s = context.getVNode(
  `<div id="id" className="Class" required>
    <span>Example</span>
  </div>`
)
console.log(s)
```
```js
VNode {
  nodeName: 'div',
  children: 
   [ VNode {
       nodeName: 'span',
       children: [Array],
       attributes: {},
       key: undefined } ],
  attributes: { id: 'id', className: 'Class', required: '' },
  key: undefined }
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true" width="15"></a></p>

### `render(`<br/>&nbsp;&nbsp;`vnode: VNode,`<br/>&nbsp;&nbsp;`opts?: RenderOpts,`<br/>&nbsp;&nbsp;`contexts?: Array<Context>,`<br/>`): string`

Renders the JSX into the string.

`import('preact').VNode` __<a name="type-vnode">`VNode`</a>__

__<a name="type-renderconfig">`RenderConfig`</a>__: Rendering options.

|    Name    |   Type    |                                                    Description                                                    | Default |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| addDoctype | _boolean_ | Adds the `<!doctype html>` at the beginning of the return string.                                                 | `false` |
| shallow    | _boolean_ | If `true`, renders nested Components as HTML elements (`<Foo a="b" />`).                                          | `false` |
| xml        | _boolean_ | If `true`, uses self-closing tags for elements without children.                                                  | `false` |
| pretty     | _boolean_ | If `true`, adds `  ` whitespace for readability. Pass a string to indicate the indentation character, e.g., `\t`. | `false` |
| lineLength | _number_  | The number of characters on one line above which the line should be split in the `pretty` mode.                   | `40`    |

```jsx
import JSXContext from '@depack/context'

const context = new JSXContext()
const s = context.render(
  <div id="id" className="Class" required>
    <span>Example</span>
  </div>
)
console.log(s)
```
```js
<div id="id" class="Class" required><span>Example</span></div>
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Using In A Test

The test context is made for mask-testing of the applications. A mask test will have the setup script called `test/mask/default.js` that points to the result mask in its body.

```js
import { makeTestSuite } from 'zoroaster'
import JSXContext from '@depack/context'
import render from '../../src'

export default makeTestSuite('test/result/index.html', {
  /**
   * @param {string} input
   * @param {JSXContext} c
   */
  getResults(input, { getVNode }) {
    const test = getVNode(input)
    const res = render(test)
    return res
  },
  context: [JSXContext],
})
```

The actual mappings of inputs to outputs are put in the mask `test/result/index.html`:

```html
// returns the correct output
<div className="test">
  <span>Hello</span> <a href="#">World</a>
</div>

/* expected */
<div class="test"><span>Hello</span> <a href="#">World</a></div>
/**/
```

Each mask setup will pass its properties and point to other input files:

```js
export const pretty = makeTestSuite('test/result/pretty.html', {
  /**
   * @param {string} input
   * @param {JSXContext} c
   */
  getResults(input, { getVNode }) {
    const test = getVNode(input)
    const res = render(test, { pretty: true })
    return res
  },
  context: [JSXContext],
})
```

For example, the pretty-printing adds the additional attribute and points to the results at `test/result/pretty.html`. The file extension just enables syntax highlighting in those files so it's easier on the eye.

```html
// returns the correct output
<div className="test" required data-attr="render" data-test id="i500" style="display:block;" >
  <span className="test" required data-attr="render" data-test id="i501" style="display:block;">
    Hello World
  </span>
  <textarea>
    Example Textarea That Has Large Input According To The Preact Logic. We must not new line this value.
  </textarea>
</div>

/* expected */
<div class="test" required
  data-attr="render" data-test id="i500"
  style="display:block;">
  <span class="test" required
    data-attr="render" data-test id="i501"
    style="display:block;">
    Hello World
  </span>
  <textarea>Example Textarea That Has Large Input According To The Preact Logic. We must not new line this value.</textarea>
</div>
/**/

// prettifies dangerously set inner html
<small id="hi70984" class="form-text text-muted" dangerouslySetInnerHTML={{__html: 'Your name, your name, what is your name?'}}></small>

/* expected */
<small id="hi70984"
  class="form-text text-muted">
  Your name, your name, what is your name?
</small>
/**/
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>