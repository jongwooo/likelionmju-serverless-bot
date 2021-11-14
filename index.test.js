/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const index = require("./index.js");

const CHALLENGE_TOKEN = (Math.floor(Math.random() * 1000000) + 1).toString();
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const TEST_USER_ID = process.env.TEST_USER_ID;

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

const httpGetMethodTests = [];

httpGetMethodTests.push({
	method: "GET",
	statusCode: "200",
	caseNum: 1,
	caseType: GET_STATUS_200_CASE_1,
	toBeReturn: "likelionMJU Bot"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "200",
	caseNum: 2,
	caseType: GET_STATUS_200_CASE_2,
	toBeReturn: CHALLENGE_TOKEN
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 1,
	caseType: GET_STATUS_400_CASE_1,
	toBeReturn: "Bad request"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 2,
	caseType: GET_STATUS_400_CASE_2,
	toBeReturn: "Bad request"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 3,
	caseType: GET_STATUS_400_CASE_3,
	toBeReturn: "Bad request"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "400",
	caseNum: 4,
	caseType: GET_STATUS_400_CASE_4,
	toBeReturn: "Bad request"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "401",
	caseNum: null,
	caseType: GET_STATUS_401,
	toBeReturn: "Incorrect verify token"
});
httpGetMethodTests.push({
	method: "GET",
	statusCode: "412",
	caseNum: null,
	caseType: GET_STATUS_412,
	toBeReturn: "Precondition failed"
});

const httpPostMethodTests = [];

httpPostMethodTests.push({
	method: "POST",
	statusCode: "200",
	caseNum: 1,
	caseType: POST_STATUS_200_CASE_1,
	toBeReturn: "Success"
});
httpPostMethodTests.push({
	method: "POST",
	statusCode: "200",
	caseNum: 2,
	caseType: POST_STATUS_200_CASE_2,
	toBeReturn: "Success"
});
httpPostMethodTests.push({
	method: "POST",
	statusCode: "500",
	caseNum: null,
	caseType: POST_STATUS_500,
	toBeReturn: "Internal server error"
});

const unitTest = (method, statusCode, caseNum, caseType, toBeReturn) => {
	let testName = `${method}:: status ${statusCode}`;

	if (caseNum) {
		testName = `${testName} Case ${caseNum}`;
	}

	it(testName, async () => {
		const props = await index.handler(caseType);
		expect(props.body).toBe(toBeReturn);
	});
};

const Tester = (describeText, testCases) => {
	describe(describeText, () => {
		for (const testCase of testCases) {
			unitTest(
				testCase.method,
				testCase.statusCode,
				testCase.caseNum,
				testCase.caseType,
				testCase.toBeReturn
			);
		}
	});
};

Tester("HTTP GET Method Test", httpGetMethodTests);
Tester("HTTP POST Method Test", httpPostMethodTests);
