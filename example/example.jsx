/* yarn example/ */
import JSXContext from '../src'

const context = new JSXContext()
const s = context.getVNode(
  `<div id="id" className="Class" required>
    <span>Example</span>
  </div>`
)
console.log(s)