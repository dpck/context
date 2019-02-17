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

%~%