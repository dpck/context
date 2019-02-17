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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

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