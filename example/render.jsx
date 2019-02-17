import JSXContext from '../src'

const context = new JSXContext()
const s = context.render(
  <div id="id" className="Class" required>
    <span>Example</span>
  </div>
)
console.log(s)