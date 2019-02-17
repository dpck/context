/* yarn example/ */
import context from '../src'

(async () => {
  const res = await context({
    text: 'example',
  })
  console.log(res)
})()