/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const { sendMessageApi } = require("./message");

exports.sendDots = recipientId => {
	let dots = {
		recipient: { id: recipientId },
		sender_action: "typing_on"
	};

	sendMessageApi(dots);
};