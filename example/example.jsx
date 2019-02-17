import { inspect } from 'util'
/* start example */
/* yarn example/ */
import JSXContext from '../src'

const Container = ({ children }) => (<body>{
  children
}</body>)

const context = new JSXContext()
const s = context.getVNode(
  `
<Container>
  <div id="id" className="Class" required>
    <span>Example</span>
  </div>
</Container>`,
  { Container },
)
/* end example */
console.log(inspect(s, {
  depth: 100, breakLength: 40 }))