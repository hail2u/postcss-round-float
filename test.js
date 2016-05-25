"use strict";

var assert = require("assert");
var postcss = require("postcss");

var actual;
var expected = ".foo{a:1.235;b:6.543;c:1.235px;d:6.543px;e:0.123}";
var fixture = ".foo{a:1.23456;b:6.54321;c:1.23456px;d:6.54321px;e:0.12345}";

// Default (3 places)
actual = postcss().use(require("./index")()).process(fixture).css;
assert.strictEqual(actual, expected, "should round floating-point numbers");

// 4 places
expected = ".foo{a:1.2346;b:6.5432;c:1.2346px;d:6.5432px;e:0.1235}";
actual = postcss().use(require("./index")(4)).process(fixture).css;
assert.strictEqual(actual, expected, "should round floating-point numbers in 4 places");

// 0 place
expected = ".foo{a:1;b:7;c:1px;d:7px;e:0}";
actual = postcss().use(require("./index")(0)).process(fixture).css;
assert.strictEqual(actual, expected, "should round floating-point numbers to integer");

console.log("OK");
