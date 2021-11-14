/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
export function buildResponse(statusCode, body) {
	let response = {
		statusCode: statusCode,
		body: "",
		headers: { "Content-Type": "application/json" }
	};

	if (!body) {
		switch (statusCode) {
			case "200":
				response.body = "Success";
				break;

			case "400":
				response.body = "Bad request";
				break;

			case "401":
				response.body = "Incorrect verify token";
				break;

			case "412":
				response.body = "Precondition failed";
				break;

			default:
				response.body = "Internal server error";
				break;
		}

		return response;
	}

	response.body = body;
	return response;
}
