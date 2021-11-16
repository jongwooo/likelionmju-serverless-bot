/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const { buildResponse, buildError } = require("./response");

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

exports.getHandler = event => {
	let response = buildResponse("likelionMJU Bot");

	if (event.queryStringParameters) {
		let queryStringParams = event.queryStringParameters;
		let status = [
			queryStringParams["hub.mode"] === "subscribe",
			queryStringParams["hub.verify_token"] === VERIFY_TOKEN &&
				isParamsNotEmpty(queryStringParams["hub.verify_token"]),
			isParamsNotEmpty(queryStringParams["hub.challenge"])
		];

		switch (status.join(", ")) {
			case "true, true, true":
				response = buildResponse(queryStringParams["hub.challenge"]);
				break;

			case "true, false, true":
				response = buildError(401, "Incorrect verify token");
				break;

			case "false, true, true":
				response = buildError(412, "Precondition failed");
				break;

			default:
				response = buildError(400, "Bad request");
				break;
		}
	}

	return response;
};

const isParamsNotEmpty = params => {
	return typeof params !== "undefined" && params !== null && params !== "";
};
