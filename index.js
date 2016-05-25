"use strict";

var postcss = require("postcss");

var reFloat = /\b(\d+?\.\d+)/g;

function roundFloat(p, f) {
  f = parseFloat(f);

  if (isNaN(f)) {
    return f;
  }

  if (p === 0) {
    return Math.round(f);
  }

  p = Math.pow(10, p);

  return Math.round(f * p) / p;
}

module.exports = postcss.plugin("round-float", function (place) {
  if (!Number.isInteger(place) || place < 0) {
    place = 3;
  }

  return function (css) {
    css.walkDecls(function (decl) {
      decl.value = postcss.list.comma(decl.value).map(function (value) {
        return value.replace(reFloat, roundFloat.bind(null, place));
      }).join(",");
    });
  };
});
