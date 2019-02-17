## API

The package is available by importing its default function:

```js
import JSXContext from '@depack/context'
```

%~%

## class JSXContext

This instance of the test context provides the testing API for JSX components.

```### getVNode => Preact.VNode
[
  ["input", "string"]
]
```

Transforms the string input into JSX VNode.

<!-- %TYPEDEF types/index.xml% -->

%EXAMPLE: example/example.jsx, ../src => @depack/context%
%FORK-js example example/example%

%~ width="15"%

```### render => string
[
  ["vnode", "VNode"],
  ["opts?", "RenderOpts"],
  ["contexts?", "Array<Context>"]
]
```

Renders the JSX into the string.

%TYPEDEF node_modules/@depack/render/types/index.xml%

%EXAMPLE: example/render.jsx, ../src => @depack/context%
%FORK-js example example/render%

%~%