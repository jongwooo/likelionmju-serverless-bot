"use strict";
const request = require("request");
const https = require("https");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

const questions = {};
questions["기간"] = "2020.03 - 2020.12(예정)";
questions["대상"] =
  "명지대학교 인문캠퍼스 재학생 / 휴학생 중 '웹 서비스'에 관심 있는 누구나 활동할 수 있습니다!\n\n1년 동안 꾸준히, 열심히, 열정적으로 활동 할 수 있는 사람을 모집합니다!!";
questions["모집"] =
  "모집 일정이 확정되는 대로 공식 채널을 통해 알려 드리도록 하겠습니다.";
questions["활동"] =
  "1년 동안 나만의 서비스를 만들기 위한 창업 & 웹 프로그래밍 교육을 이수하게 됩니다!\n\n또한, 전국의 멋쟁이사자처럼 소속 학생들이 함께 하는 해커톤과 같은 이벤트에도 참여하게 됩니다.";
questions["지원"] =
  "지원 방법이 확정되는 대로 공식 채널을 통해 알려 드리도록 하겠습니다.";
questions["문의"] =
  "자세한 문의는 카카오톡 플러스친구(@likelionmyongji)를 통해 주시면 감사하겠습니다.";
questions["멋탈!"] =
  "⊂_ヽ\n    ＼ ＼  Λ＿Λ\n         ＼( ‘ㅅ' ) 두둠칫\n            >　⌒ヽ\n           / 　    へ ＼\n         /　　/ 　   ＼＼\n        ﾚ　ノ　　   ヽ_つ\n      /　 /  두둠칫\n    / 　/|\n   (  (ヽ\n    |　|、 ＼\n    |  丿 ＼⌒)\n    |  |　　) /\n`ノ  )　Lﾉ";

exports.handler = (event, context, callback) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  let method = event["httpMethod"];
  let response = {
    statusCode: null,
    body: null,
    headers: { "Content-Type": "application/json" }
  };
  let queryparams = event["queryStringParameters"];

  if (method === "GET") {
    /* TODO: GET */
    if (
      queryparams["hub.mode"] === "subscribe" &&
      queryparams["hub.verify_token"] === VERIFY_TOKEN
    ) {
      response.statusCode = "200";
      response.body = queryparams["hub.challenge"];
    } else {
      response.statusCode = "401";
      response.body = "Incorrect verify token";
    }
  } else if (method === "POST") {
    /* TODO: POST */
    try {
      let bodyEvent = JSON.parse(event["body"]);
      let messagingEvent = bodyEvent.entry[0].messaging[0];

      if (messagingEvent.message && messagingEvent.message.text) {
        sendMessage(messagingEvent.sender.id, messagingEvent.message.text);
      }
      response.statusCode = "200";
      response.body = "Success";
    } catch (error) {
      console.log(error);
      response.statusCode = "500";
      response.body = "Internal server error";
    }
  }
  callback(null, response);
};

const sendMessage = (recipientId, receviedMessage) => {
  let messageText = "";
  let quickReplies = [];

  for (let token in questions) {
    if (token !== "멋탈!") {
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
      "안녕하세요, 명지대학교(서울)\n멋쟁이 사자처럼 챗봇입니다.\n기간, 대상, 모집, 활동, 지원, 문의\n중에서 원하는 키워드를 넣어서\n질문해주세요.";
  }

  request(
    {
      url: `https://graph.facebook.com/v3.2/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      method: "POST",
      json: {
        recipient: {
          id: recipientId
        },
        message: {
          text: messageText,
          quick_replies: quickReplies
        }
      }
    },
    (error, response, body) => {
      if (error) {
        console.log("Error sending message to user: " + error);
      } else if (response.body.error) {
        console.log("Error sending message to user: " + response.body.error);
      }
    }
  );
};
