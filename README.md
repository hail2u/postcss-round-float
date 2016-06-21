postcss-round-float
===================

A [PostCSS][1] plugin for rounding floating-point numbers in CSS file


INSTALL
-------

    $ npm install postcss-round-float


USAGE
-----

    var fs = require("fs");
    var postcss = require("postcss");
    
    var css = fs.readFileSync("input.css", "utf8");
    postcss([
      require("postcss-round-float")(2)
    ]).process(css).then(function (result) {
      fs.writeFileSync("output.css", result.css);
    });

You can specify how many decimal places to keep by integer (I set `2` decimal
places in this example).


LICENSE
-------

MIT: http://hail2u.mit-license.org/2016


[1]: http://postcss.org/
