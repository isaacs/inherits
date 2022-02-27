var inherits = require('../inherits.js')
var t = require('tap')

function test(c) {
  t.equal(c.constructor, Child)
  t.equal(c.constructor.super_, Parent)
  t.equal(Object.getPrototypeOf(c), Child.prototype)
  t.equal(Object.getPrototypeOf(Object.getPrototypeOf(c)), Parent.prototype)
  t.type(c, Child)
  t.type(c, Parent)
}

function Child() {
  Parent.call(this)
  test(this)
}

function Parent() {}

inherits(Child, Parent)

var c = new Child
test(c)

t.type(inherits, 'function')
