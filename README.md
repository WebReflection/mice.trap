# mice.trap



A "_mouse operator_" implementation, from this [es-discuss thread](https://esdiscuss.org/topic/optional-chaining-syntax-but-with-the-mice-operator).

```js
// the current chaining operator
const result = nmsp.some.payload()?.result ?? nmsp.some.payload();

// the proposed mouse operator
const result = nmsp.some.payload()<?.result;

// this module
import mouse from 'mice.trap';
// or const mouse = require('mice.trap');
const result = mouse(nmsp.some.payload())?.result ?? mouse.trap;
```
