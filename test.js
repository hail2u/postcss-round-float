"use strict";

var assert = require("assert");
var postcss = require("postcss");

var actual;
var expected = ".foo{a:1.235;b:6.543;c:1.235px;d:6.543px;e:0.123}";
var fixture = ".foo{a:1.23456;b:6.54321;c:1.23456px;d:6.54321px;e:0.12345}";

actual = postcss().use(require("./index")()).process(fixture).css;
assert.strictEqual(actual, expected, "should round floating-point numbers");

console.log("OK");
