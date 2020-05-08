/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const index = require("./index.js");

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const TEST_USER_ID = process.env.TEST_USER_ID;
const CHALLENGE_TOKEN = (Math.floor(Math.random() * 1000000) + 1).toString();

const GET_STATUS_200_CASE_1 = {
	httpMethod: "GET"
};

const GET_STATUS_200_CASE_2 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": VERIFY_TOKEN,
		"hub.mode": "subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_400_CASE_1 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.unused_params": "true"
		// "hub.verify_token": VERIFY_TOKEN,
		// "hub.mode": "subscribe",
		// "hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_400_CASE_2 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": VERIFY_TOKEN
		// "hub.mode": "subscribe"
		// "hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_400_CASE_3 = {
	httpMethod: "GET",
	queryStringParameters: {
		// "hub.verify_token": VERIFY_TOKEN,
		"hub.mode": "subscribe"
		// "hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_400_CASE_4 = {
	httpMethod: "GET",
	queryStringParameters: {
		// "hub.verify_token": VERIFY_TOKEN,
		// "hub.mode": "subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_401 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": (Math.floor(Math.random() * 1000000) + 1).toString(),
		"hub.mode": "subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const GET_STATUS_412 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": VERIFY_TOKEN,
		"hub.mode": "not subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const POST_STATUS_200_CASE_1 = {
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

const POST_STATUS_200_CASE_2 = {
	httpMethod: "POST",
	body: JSON.stringify({
		entry: [
			{
				messaging: [
					{
						message: {
							text: "Test phrases not included in tokens"
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

const POST_STATUS_500 = {
	httpMethod: "POST",
	body: JSON.stringify({
		entry: [
			{
				// messaging: [
				// 	{
				// 		message: {
				// 			text: "Unit test"
				// 		},
				// 		sender: {
				// 			id: TEST_USER_ID
				// 		}
				// 	}
				// ]
			}
		]
	})
};

const tests = [];
/* TODO: GET */
tests.push({
	method: "GET",
	statusCode: "200",
	caseNum: 1,
	object: GET_STATUS_200_CASE_1,
	toBeReturn: "likelionMJU Bot"
});
tests.push({
	method: "GET",
	statusCode: "200",
	caseNum: 2,
	object: GET_STATUS_200_CASE_2,
	toBeReturn: CHALLENGE_TOKEN
});
tests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 1,
	object: GET_STATUS_400_CASE_1,
	toBeReturn: "Bad request"
});
tests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 2,
	object: GET_STATUS_400_CASE_2,
	toBeReturn: "Bad request"
});
tests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 3,
	object: GET_STATUS_400_CASE_3,
	toBeReturn: "Bad request"
});
tests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 4,
	object: GET_STATUS_400_CASE_4,
	toBeReturn: "Bad request"
});
tests.push({
	method: "GET",
	statusCode: "401",
	caseNum: null,
	object: GET_STATUS_401,
	toBeReturn: "Incorrect verify token"
});
tests.push({
	method: "GET",
	statusCode: "412",
	caseNum: null,
	object: GET_STATUS_412,
	toBeReturn: "Precondition failed"
});

/* TODO: POST */
tests.push({
	method: "POST",
	statusCode: "200",
	caseNum: 1,
	object: POST_STATUS_200_CASE_1,
	toBeReturn: "Success"
});
tests.push({
	method: "POST",
	statusCode: "200",
	caseNum: 2,
	object: POST_STATUS_200_CASE_2,
	toBeReturn: "Success"
});
tests.push({
	method: "POST",
	statusCode: "500",
	caseNum: null,
	object: POST_STATUS_500,
	toBeReturn: "Internal server error"
});

const unitTest = (method, statusCode, caseNum, object, toBeReturn) => {
	let testName = `${method}:: status ${statusCode}`;

	if (caseNum) {
		testName = `${testName} Case ${caseNum}`;
	}

	test(testName, () => {
		expect(
			index.handler(object, null, (isNotNull, res) => {
				if (isNotNull) {
					console.error(res);
				}
			}).body
		).toBe(toBeReturn);
	});
};

for (let i = 0; i < tests.length; i++) {
	let testCase = tests[i];
	unitTest(
		testCase.method,
		testCase.statusCode,
		testCase.caseNum,
		testCase.object,
		testCase.toBeReturn
	);
}
