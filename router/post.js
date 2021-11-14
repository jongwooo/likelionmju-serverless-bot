/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import { buildResponse } from "./response";
import { sendDots, sendTextMessage } from "./api";

export function postHandler(event) {
	let response = "";

	try {
		let bodyEvent = JSON.parse(event.body);
		let messagingEvent = bodyEvent.entry[0].messaging[0];

		if (messagingEvent.message.text && messagingEvent.sender.id) {
			sendDots(messagingEvent.sender.id);
			sendTextMessage(messagingEvent.sender.id, messagingEvent.message.text);
		}

		response = buildResponse("200");
	} catch (error) {
		response = buildResponse("500");
	}

	return response;
}
