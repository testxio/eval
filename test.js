const assert = require("assert");

const evalInCtx = require(".");

assert.equal(evalInCtx({ some: "value" }, "some"), "value");
assert.notEqual(evalInCtx({ some: "value" }, "some"), "value1");
