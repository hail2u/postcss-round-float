"use strict";

var postcss = require("postcss");

var reFloat = /\b(\d+?\.\d+)/g;

function roundFloat(p, f) {
  f = parseFloat(f);

  if (isNaN(f)) {
    return f;
  }

  p = Math.pow(10, p);

  return Math.round(parseFloat(f) * p) / p;
}

module.exports = postcss.plugin("round-float", function () {
  return function (css) {
    css.walkDecls(function (decl) {
      decl.value = postcss.list.comma(decl.value).map(function (value) {
        return value.replace(reFloat, roundFloat.bind(null, 3));
      }).join(",");
    });
  };
});
