/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const request = require("request");

const metaConfig = require("./meta-config");
const DEFAULT_REPLY = metaConfig.DEFAULT_REPLY;
const IGNORE_REPLY = metaConfig.IGNORE_REPLY;
const questions = metaConfig.questions;

const FACEBOOK_API_VERSION = process.env.FACEBOOK_API_VERSION;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

exports.handler = async event => {
	let method = event["httpMethod"];
	let response = {};

	switch (method) {
		case "GET":
			response = generateResponse("200", "likelionMJU Bot");

			if (event["queryStringParameters"]) {
				let queryStringParams = event["queryStringParameters"];
				let status = [
					queryStringParams["hub.mode"] === "subscribe",
					queryStringParams["hub.verify_token"] === VERIFY_TOKEN &&
						isParamsNotEmpty(queryStringParams["hub.verify_token"]),
					isParamsNotEmpty(queryStringParams["hub.challenge"])
				];

				switch (status.join(", ")) {
					case "true, true, true":
						response = generateResponse(
							"200",
							queryStringParams["hub.challenge"]
						);
						break;

					case "true, false, true":
						response = generateResponse("401");
						break;

					case "false, true, true":
						response = generateResponse("412");
						break;

					default:
						response = generateResponse("400");
						break;
				}
			}
			break;

		case "POST":
			try {
				let bodyEvent = JSON.parse(event["body"]);
				let messagingEvent = bodyEvent.entry[0].messaging[0];

				if (messagingEvent.message.text && messagingEvent.sender.id) {
					sendDots(messagingEvent.sender.id);
					sendTextMessage(
						messagingEvent.sender.id,
						messagingEvent.message.text
					);
				}

				response = generateResponse("200");
			} catch (postError) {
				response = generateResponse("500");
			}
			break;
	}

	return response;
};

const isParamsNotEmpty = params => {
	return typeof params !== "undefined" && params !== null && params !== "";
};

const generateResponse = (statusCode, body) => {
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
};

const sendDots = recipientId => {
	let dots = {
		recipient: { id: recipientId },
		sender_action: "typing_on"
	};

	sendMessageApi(dots);
};

const sendTextMessage = (recipientId, receivedMessage) => {
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

const sendMessageApi = messages => {
	request(
		{
			url: `https://graph.facebook.com/v${FACEBOOK_API_VERSION}/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
			method: "POST",
			json: messages
		},
		error => {
			if (error) throw new Error();
		}
	);
};
