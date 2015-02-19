Browser-friendly inheritance, fully compatible with the standard node.js
[inherits](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor)
package.

This package ensures that you use the standard `inherits` implementation
in the node.js environment, while allowing bundlers such as
[browserify](https://github.com/substack/node-browserify) to
use a standalone version `inherits`.
This is worth doing because the browser shim for `util`
is large and `inherits` is often the only function you need from it.

In the node.js environment, this package exports the standard `inherits`
function from [`util`](https://www.npmjs.com/package/util).

In the browser environment, this package uses the
[browser field](https://gist.github.com/defunctzombie/4339901) in `package.json`
to export only the
`inherits` function.
The `inherits` function is a literal copy of the one found in the `utils` package.
A shim is provided for browsers that do not support `Object.create`.

It is recommended that you use this package instead of
`require('util').inherits`
in node.js as well as in browser.

## usage

```js
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

function MyClass() {}

// MyClass now has EventEmitter methods.
inherits(MyClass, EventEmitter);

```

## note on version ~1.0

Version ~1.0 had completely different motivation and is not compatible
neither with 2.0 nor with standard node.js `inherits`.

If you are using version ~1.0 and planning to switch to ~2.0, be
careful:

* new version uses `super_` instead of `super` for referencing
  superclass
* new version overwrites current prototype while old one preserves any
  existing fields on it
