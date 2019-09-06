var mouse = require('../cjs');
var value = {message: 'failure'};

var result = mouse(value).result || mouse.trap;

console.assert(result === value, 'the trap returned the expected value');

Promise.resolve().then(function () {
  console.assert(mouse.trap === void 0, 'the trap cleaned up itself');
});
