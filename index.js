/*! (c) Andrea Giammarchi - ISC */

// a one liner functionality example
// function mouse(trap) { return (mouse.trap = trap); }

var mouse = (function (resolve, trap) {
  function free() { trap = void 0; }
  return Object.defineProperty(
    function mouse(value) {
      resolve.then(free);
      return (trap = value);
    },
    'trap',
    {get: function () {
      var value = trap;
      return free(), value;
    }}
  );
}(Promise.resolve()));
