const index = require("./index.js");
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const TEST_USER_ID = process.env.TEST_USER_ID;
const CHALLENGE_TOKEN = (Math.floor(Math.random() * 1000000) + 1).toString();

const getStatus200Case1 = {
	httpMethod: "GET"
};

const getStatus200Case2 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": VERIFY_TOKEN,
		"hub.mode": "subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const getStatus400 = {
	httpMethod: "GET",
	queryStringParameters: {
		// "hub.verify_token": VERIFY_TOKEN,
		// "hub.mode": "subscribe",
		// "hub.challenge": CHALLENGE_TOKEN
	}
};

const getStatus401 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": (Math.floor(Math.random() * 1000000) + 1).toString(),
		"hub.mode": "subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const getStatus412 = {
	httpMethod: "GET",
	queryStringParameters: {
		"hub.verify_token": VERIFY_TOKEN,
		"hub.mode": "not subscribe",
		"hub.challenge": CHALLENGE_TOKEN
	}
};

const postStatus200Case1 = {
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

const postStatus200Case2 = {
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

const postStatus500 = {
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
	caseNum: "Case 1",
	object: getStatus200Case1,
	toBeReturn: "likelionMJU Bot"
});
tests.push({
	method: "GET",
	statusCode: "200",
	caseNum: "Case 2",
	object: getStatus200Case2,
	toBeReturn: CHALLENGE_TOKEN
});
tests.push({
	method: "GET",
	statusCode: "400",
	caseNum: null,
	object: getStatus400,
	toBeReturn: "Bad request"
});
tests.push({
	method: "GET",
	statusCode: "401",
	caseNum: null,
	object: getStatus401,
	toBeReturn: "Incorrect verify token"
});
tests.push({
	method: "GET",
	statusCode: "412",
	caseNum: null,
	object: getStatus412,
	toBeReturn: "Precondition failed"
});

/* TODO: POST */
tests.push({
	method: "POST",
	statusCode: "200",
	caseNum: "Case 1",
	object: postStatus200Case1,
	toBeReturn: "Success"
});
tests.push({
	method: "POST",
	statusCode: "200",
	caseNum: "Case 2",
	object: postStatus200Case2,
	toBeReturn: "Success"
});
tests.push({
	method: "POST",
	statusCode: "500",
	caseNum: null,
	object: postStatus500,
	toBeReturn: "Internal server error"
});

const unitTest = (method, statusCode, caseNum, object, toBeReturn) => {
	let testName = `${method}:: status ${statusCode}`;

	if (caseNum) {
		testName = `${testName} ${caseNum}`;
	}

	test(testName, () => {
		expect(
			index.handler(object, null, function(isNotNull, res) {
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
