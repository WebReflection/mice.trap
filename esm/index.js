/*! (c) Andrea Giammarchi - ISC */
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
export default mouse;
