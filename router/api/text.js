/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const metaConfig = require("../../meta-config");
const { sendMessageApi } = require("./message");

const DEFAULT_REPLY = metaConfig.DEFAULT_REPLY;
const IGNORE_REPLY = metaConfig.IGNORE_REPLY;
const questions = metaConfig.questions;

const FACEBOOK_API_VERSION = process.env.FACEBOOK_API_VERSION;

exports.sendTextMessage = (recipientId, receivedMessage) => {
	let texts = "";
	let quickReplies = [];
	let textMessage;

	for (const token in questions) {
		if (!IGNORE_REPLY.includes(token)) {
			quickReplies.push({
				content_type: "text",
				title: token,
				payload: `DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_${token}`
			});
		}

		if (receivedMessage.includes(token)) {
			texts += `${questions[token]}\n\n`;
		}
	}

	if (receivedMessage.includes("Unit test")) {
		texts = `[Unit test]\n\n-Sender ID: ${recipientId}\n-Facebook API v ${FACEBOOK_API_VERSION}\n`;
	}

	if (texts === "") {
		texts = DEFAULT_REPLY;
	}

	textMessage = {
		recipient: {
			id: recipientId
		},
		message: {
			text: texts,
			quick_replies: quickReplies
		}
	};

	sendMessageApi(textMessage);
};
