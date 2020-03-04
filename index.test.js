const index = require("./index.js");
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const TEST_USER_ID = process.env.TEST_USER_ID;
const CHALLENGE_TOKEN = (Math.floor(Math.random() * 1000000) + 1).toString();

const getObject = {
  httpMethod: "GET",
  queryStringParameters: {
    "hub.verify_token": VERIFY_TOKEN,
    "hub.mode": "subscribe",
    "hub.challenge": CHALLENGE_TOKEN
  }
};

const postObject = {
  httpMethod: "POST",
  body: JSON.stringify({
    entry: [
      {
        messaging: [
          {
            message: {
              text: "Unit test"
            },
            sender: {
              id: TEST_USER_ID
            }
          }
        ]
      }
    ]
  })
};

/* TODO: GET */
test("GET", () => {
  expect(
    index.handler(getObject, null, function(isNull, res) {
      if (!isNull) {
        console.log(res);
      }
    }).body
  ).toBe(CHALLENGE_TOKEN);
});

/* TODO: POST */
test("POST", () => {
  expect(
    index.handler(postObject, null, function(isNull, res) {
      if (!isNull) {
        console.log(res);
      }
    }).body
  ).toBe("Success");
});
