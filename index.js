'use strict';

const gui = require("./gui.js");

process.stdout.write(gui.render({
	"text": "Hello, world!"
}));