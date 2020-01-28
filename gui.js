'use strict';

module.exports.render = function(X = null) {
	let output = "\x1B[1;1H" + X.text;

	return output;
};