"use strict";
const request = require("request");
const https = require("https");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

const questions = {};
questions["기간"] = "2020.03 - 2020.12(예정)";
questions["대상"] =
  "명지대 인문캠퍼스 재학생/휴학생 중 웹 서비스를 만들고 싶은 사람 누구나!!\n\n1년 동안 꾸준히, 열심히, 열정적으로 활동 할 수 있는 사람을 모집합니다!!";
questions["모집"] = "예정된 모집 일정이 없습니다.";
questions["활동"] = "8기 커리큘럼 미정\n주 1회 또는 2회 세션 진행 예정";
questions["지원"] = "지원 기간이 아닙니다.";
questions["문의"] =
  "자세한 문의는 카카오톡 플러스친구(@likelionmyongji)를 통해 주시면 감사하겠습니다.";
questions["멋탈!"] =
  "⊂_ヽ\n    ＼ ＼  Λ＿Λ\n         ＼( ‘ㅅ' ) 두둠칫\n            >　⌒ヽ\n           / 　    へ ＼\n         /　　/ 　   ＼＼\n        ﾚ　ノ　　   ヽ_つ\n      /　 /  두둠칫\n    / 　/|\n   ( 　(ヽ\n    |　|、＼\n    |  丿 ＼⌒)\n    |  |　　) /\n`ノ  )　Lﾉ";

exports.handler = (event, context, callback) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  let method = event["httpMethod"];
  let response = "";
  let queryparams = event["queryStringParameters"];

  if (method === "GET") {
    /* TODO: GET */
    if (
      queryparams["hub.mode"] === "subscribe" &&
      queryparams["hub.verify_token"] === VERIFY_TOKEN
    ) {
      response = {
        statusCode: "200",
        body: queryparams["hub.challenge"],
        headers: { "Content-Type": "application/json" }
      };
    } else {
      response = {
        statusCode: "401",
        body: "Incorrect verify token",
        headers: { "Content-Type": "application/json" }
      };
    }
  } else {
    if (method === "POST") {
      /* TODO: POST */
      let bodyEvent = JSON.parse(event["body"]);
      let messagingEvent = bodyEvent.entry[0].messaging[0];

      sendMessage(messagingEvent.sender.id, messagingEvent.message.text);
    }
    response = {
      statusCode: "200",
      body: "Success",
      headers: { "Content-Type": "application/json" }
    };
  }
  callback(null, response);
};

const sendMessage = (recipientId, receviedMessage) => {
  let messageText = "";

  for (let token in questions) {
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
      url: `https://graph.facebook.com/v2.6/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      method: "POST",
      json: {
        recipient: {
          id: recipientId
        },
        message: {
          text: messageText
        }
      }
    },
    function(error, response, body) {
      if (error) {
        console.log("Error sending message to user: " + error);
      } else if (response.body.error) {
        console.log("Error sending message to user: " + response.body.error);
      }
    }
  );
};
