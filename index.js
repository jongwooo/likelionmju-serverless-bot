/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const { getHandler, postHandler } = require("./router");
const { buildError } = require("./router/response");

exports.handler = (event, context, callback) => {
	let response = {};

	switch (event.httpMethod) {
		case "GET":
			response = getHandler(event);
			break;

		case "POST":
			response = postHandler(event);
			break;

		default:
			response = buildError(400, "Bad request");
	}

	callback(null, response);

	return response;
};
