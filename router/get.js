/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import { buildResponse } from "./response";

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

export function getHandler(event) {
	let response = "";

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
				response = buildResponse("200", queryStringParams["hub.challenge"]);
				break;

			case "true, false, true":
				response = buildResponse("401");
				break;

			case "false, true, true":
				response = buildResponse("412");
				break;

			default:
				response = buildResponse("400");
				break;
		}
	}

	return response;
}

const isParamsNotEmpty = params => {
	return typeof params !== "undefined" && params !== null && params !== "";
};
