"use strict";
const request = require("request");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

const questions = {};
questions["활동 기간"] = "2020.04 - 2020.12";
questions["지원 대상"] =
	"명지대학교 인문캠퍼스의 재학생 / 휴학생 중 '웹 서비스'에 관심 있는 누구나 활동할 수 있습니다!\n\n1년 동안 꾸준히, 열정적으로 활동 할 수 있는 사람을 모집합니다!!";
questions["모집 일정"] =
	"[서류 제출]\n 03.04(수) ~ 03.19(목)\n\n[면접 대상자 발표]\n03.20(금)\n\n[면접 진행]\n03.23(월) ~ 03.24(화)\n\n[합격자 발표 및 필요 서류 제출]\n03.25(수)\n\n[최종 합격] 순으로 진행됩니다.";
questions["지원 방법"] =
	"멋쟁이사자처럼 x 명지대(서울)\n8기 모집 홈페이지를 통해\n지원하실 수 있습니다.\n\nhttp://www.likelion-mju.com";
questions["활동 계획"] =
	"1년 동안 나만의 서비스를 만들기 위한 창업 & 웹 프로그래밍 교육을 이수하게 됩니다!\n\n또한, 전국의 멋쟁이사자처럼 소속 학생들이 함께 하는 해커톤과 같은 이벤트에도 참여하게 됩니다.\n\n[학기 중]\n매주 화요일 오후 6시 ~ 9시 예정\n\n[방학 중]\n매주 1 ~ 2회 스터디 진행 예정";
questions["자세한 문의"] =
	"자세한 문의는 카카오톡 플러스\n친구(@likelionmyongji)를 통해 주시면 감사하겠습니다.";
questions["Unit test"] = "Unit Testing with Jest";
questions["멋탈!"] =
	"⊂_ヽ\n    ＼ ＼  Λ＿Λ\n         ＼( ‘ㅅ' ) 두둠칫\n            >　⌒ヽ\n           / 　    へ ＼\n         /　　/ 　   ＼＼\n        ﾚ　ノ　　   ヽ_つ\n      /　 /  두둠칫\n    / 　/|\n   (  (ヽ\n    |　|、 ＼\n    |  丿 ＼⌒)\n    |  |　　) /\n`ノ  )　Lﾉ";

exports.handler = (event, context, callback) => {
	let method = event["httpMethod"];
	let response = {
		statusCode: null,
		body: null,
		headers: { "Content-Type": "application/json" }
	};
	let queryparams = event["queryStringParameters"];

	if (method === "GET") {
		/* TODO: GET */
		try {
			if (
				queryparams["hub.mode"] === "subscribe" &&
				queryparams["hub.verify_token"] === VERIFY_TOKEN
			) {
				response.statusCode = "200";
				response.body = queryparams["hub.challenge"];
			}
		} catch (error) {
			console.error(`Incorrect verify token: ${error}`);
			response.statusCode = "401";
			response.body = "Incorrect verify token";
		}
	} else if (method === "POST") {
		/* TODO: POST */
		try {
			let bodyEvent = JSON.parse(event["body"]);
			let messagingEvent = bodyEvent.entry[0].messaging[0];

			if (messagingEvent.message && messagingEvent.message.text) {
				sendDots(messagingEvent.sender.id);
				sendTextMessage(messagingEvent.sender.id, messagingEvent.message.text);
			}

			response.statusCode = "200";
			response.body = "Success";
		} catch (error) {
			console.error(`Internal server error: ${error}`);
			response.statusCode = "500";
			response.body = "Internal server error";
		}
	}
	callback(null, response);
	return response;
};

const sendDots = recipientId => {
	let json = {
		recipient: { id: recipientId },
		sender_action: "typing_on"
	};
	sendMessageApi(json);
};

const sendTextMessage = (recipientId, receviedMessage) => {
	let messageText = "";
	let quickReplies = [];
	let json = {};

	for (let token in questions) {
		if (token !== "Unit test" && token !== "멋탈!") {
			quickReplies.push({
				content_type: "text",
				title: token,
				payload: `DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_${token}`
			});
		}

		if (receviedMessage.includes(token)) {
			messageText += questions[token] + "\n\n";
		}
	}

	if (messageText === "") {
		messageText =
			"안녕하세요, 명지대학교(서울)\n멋쟁이 사자처럼 챗봇입니다.\n\n아래 제시된 키워드 중에서\n선택하여 질문해주세요.";
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
			url: `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
			method: "POST",
			json: messageObject
		},
		(error, response) => {
			if (error) {
				console.error(`Error sending message to user: ${error}`);
			} else if (response.body.error) {
				console.error(`Error sending message to user: ${response.body.error}`);
			}
		}
	);
};
