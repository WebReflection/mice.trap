/*! (c) Andrea Giammarchi - ISC */

// a one liner functionality example
// function mouse(trap) { return (mouse.trap = trap); }

var mouse = (function (trap) {
  var pop = trap.pop.bind(trap);
  var push = trap.push.bind(trap);
  return Object.defineProperty(
    function mouse(value) {
      return setTimeout(pop), push(value), value;
    },
    'trap',
    {
      get: pop,
      set: push
    }
  );
}([]));
module.exports = mouse;
