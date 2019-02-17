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

%~%