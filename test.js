#!/usr/bin/env node

if (process.argv.length != 3) {
	console.log("Usage: ./test.js infile");
	process.exit(1);
}

var fs = require("fs");

var data = fs.readFileSync(process.argv[2], "utf8");
var hljs = require("highlight.js");
hljs.registerLanguage("marca", require("./marca.js"));

console.log(hljs.highlight("marca", data).value);
