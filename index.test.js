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

const getStatus500 = {
	httpMethod: "GET",
	queryStringParameters: {
		// "hub.verify_token": VERIFY_TOKEN,
		// "hub.mode": "subscribe",
		// "hub.challenge": CHALLENGE_TOKEN
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

/* TODO: GET */
test("GET::status 200 Case 1", () => {
	expect(
		index.handler(getStatus200Case1, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).statusCode
	).toBe("200");
});

test("GET::status 200 Case 2", () => {
	expect(
		index.handler(getStatus200Case2, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe(CHALLENGE_TOKEN);
});

test("GET::status 401", () => {
	expect(
		index.handler(getStatus401, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Incorrect verify token");
});

test("GET::status 412", () => {
	expect(
		index.handler(getStatus412, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Precondition failed");
});

test("GET::status 500", () => {
	expect(
		index.handler(getStatus500, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Internal server error");
});

/* TODO: POST */
test("POST:: status 200 Case 1", () => {
	expect(
		index.handler(postStatus200Case1, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Success");
});

test("POST:: status 200 Case 2", () => {
	expect(
		index.handler(postStatus200Case2, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Success");
});

test("POST:: status 500", () => {
	expect(
		index.handler(postStatus500, null, function(isNull, res) {
			if (!isNull) {
				console.log(res);
			}
		}).body
	).toBe("Internal server error");
});
