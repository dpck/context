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
```
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

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco/depack

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>