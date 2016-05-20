"use strict";

var postcss = require("postcss");

module.exports = postcss.plugin("round-float", function () {
  var reFloat = /\b(\d+?\.\d+)/g;

  return function (css) {
    css.walkDecls(function (decl) {
      decl.value = postcss.list.comma(decl.value).map(function (value) {
        return value.replace(reFloat, function (m) {
          var f = parseFloat(m);

          if (f === NaN) {
            return f;
          }

          return Math.round(parseFloat(f) * 1000) / 1000;
        });
      }).join(",");
    });
  };
});
