"use strict";
var inherits;

if (typeof Object.create === 'function') {
	// implementation from standard node.js 'util' module
	inherits = function(ctor, superCtor) {
		ctor.super_ = superCtor;
		ctor.prototype = Object.create(superCtor.prototype, {
			constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	};
}
else {
	// old school shim for old browsers
	inherits = function(ctor, superCtor) {
		ctor.super_ = superCtor;
		var TempCtor = function () {};
		TempCtor.prototype = superCtor.prototype;
		ctor.prototype = new TempCtor();
		ctor.prototype.constructor = ctor;
	};
}

module.exports = inherits;
