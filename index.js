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

exports.handler = (event, context, callback) => {
	let method = event["httpMethod"];
	let response = {};

	switch (method) {
		case "GET":
			response = responseGen("200", "likelionMJU Bot");

			if (event["queryStringParameters"]) {
				let queryString = event["queryStringParameters"];
				let status = [
					queryString["hub.mode"] === "subscribe",
					queryString["hub.verify_token"] === VERIFY_TOKEN &&
						isNotEmpty(queryString["hub.verify_token"]),
					isNotEmpty(queryString["hub.challenge"])
				];

				switch (status.join(", ")) {
					case "true, true, true":
						response = responseGen("200", queryString["hub.challenge"]);
						break;

					case "true, false, true":
						response = responseGen("401");
						break;

					case "false, true, true":
						response = responseGen("412");
						break;

					default:
						response = responseGen("400");
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

				response = responseGen("200");
			} catch (error) {
				response = responseGen("500");
			}
			break;
	}

	callback(null, response);

	return response;
};

const isNotEmpty = queryString => {
	return (
		typeof queryString !== "undefined" &&
		queryString !== null &&
		queryString !== ""
	);
};

const responseGen = (statusCode, body) => {
	let res = {
		statusCode: statusCode,
		body: "",
		headers: { "Content-Type": "application/json" }
	};

	if (!body) {
		switch (statusCode) {
			case "200":
				res.body = "Success";
				break;

			case "400":
				res.body = "Bad request";
				break;

			case "401":
				res.body = "Incorrect verify token";
				break;

			case "412":
				res.body = "Precondition failed";
				break;

			default:
				res.body = "Internal server error";
				break;
		}

		return res;
	}

	res.body = body;
	return res;
};

const sendDots = recipientId => {
	let json = {
		recipient: { id: recipientId },
		sender_action: "typing_on"
	};

	sendMessageApi(json);
};

const sendTextMessage = (recipientId, receivedMessage) => {
	let messageText = "";
	let quickReplies = [];
	let json;

	for (const token in questions) {
		if (!IGNORE_REPLY.includes(token)) {
			quickReplies.push({
				content_type: "text",
				title: token,
				payload: `DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_${token}`
			});
		}

		if (receivedMessage.includes(token)) {
			messageText += `${questions[token]}\n\n`;
		}
	}

	if (receivedMessage.includes("Unit test")) {
		messageText = `[Unit test]\n\n-Sender ID: ${recipientId}\n-Facebook API v ${FACEBOOK_API_VERSION}\n`;
	}

	if (messageText === "") {
		messageText = DEFAULT_REPLY;
	}

	json = {
		recipient: {
			id: recipientId
		},
		message: {
			text: messageText,
			quick_replies: quickReplies
		}
	};

	sendMessageApi(json);
};

const sendMessageApi = messageObject => {
	request(
		{
			url: `https://graph.facebook.com/v${FACEBOOK_API_VERSION}/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
			method: "POST",
			json: messageObject
		},
		error => {
			if (error) throw new Error();
		}
	);
};
