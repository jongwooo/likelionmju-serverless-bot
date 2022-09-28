/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const app = require("../app")
const { VERIFY_TOKEN, TEST_USER_ID } = require("../config")
const CHALLENGE_TOKEN = (Math.floor(Math.random() * 1000000) + 1).toString()
const {
    METHOD: { GET, POST, PUT },
    STATUS: { GREETING, SUCCESS, BAD_REQUEST, INCORRECT_VERIFY_TOKEN, PRECONDITION_FAILED, INTERNAL_SERVER_ERROR },
} = require("../constants")

const GET_STATUS_200_CASE_1 = {
    httpMethod: GET,
}

const GET_STATUS_200_CASE_2 = {
    httpMethod: GET,
    queryStringParameters: {
        "hub.verify_token": VERIFY_TOKEN,
        "hub.mode": "subscribe",
        "hub.challenge": CHALLENGE_TOKEN,
    },
}

const GET_STATUS_400_CASE_1 = {
    httpMethod: GET,
    queryStringParameters: {
        "hub.unused_params": "true",
        // "hub.verify_token": VERIFY_TOKEN,
        // "hub.mode": "subscribe",
        // "hub.challenge": CHALLENGE_TOKEN
    },
}

const GET_STATUS_400_CASE_2 = {
    httpMethod: GET,
    queryStringParameters: {
        "hub.verify_token": VERIFY_TOKEN,
        // "hub.mode": "subscribe"
        // "hub.challenge": CHALLENGE_TOKEN
    },
}

const GET_STATUS_400_CASE_3 = {
    httpMethod: GET,
    queryStringParameters: {
        // "hub.verify_token": VERIFY_TOKEN,
        "hub.mode": "subscribe",
        // "hub.challenge": CHALLENGE_TOKEN
    },
}

const GET_STATUS_400_CASE_4 = {
    httpMethod: GET,
    queryStringParameters: {
        // "hub.verify_token": VERIFY_TOKEN,
        // "hub.mode": "subscribe",
        "hub.challenge": CHALLENGE_TOKEN,
    },
}

const GET_STATUS_401 = {
    httpMethod: GET,
    queryStringParameters: {
        "hub.verify_token": (Math.floor(Math.random() * 1000000) + 1).toString(),
        "hub.mode": "subscribe",
        "hub.challenge": CHALLENGE_TOKEN,
    },
}

const GET_STATUS_412 = {
    httpMethod: GET,
    queryStringParameters: {
        "hub.verify_token": VERIFY_TOKEN,
        "hub.mode": "unsubscribe",
        "hub.challenge": CHALLENGE_TOKEN,
    },
}

const POST_STATUS_200_CASE_1 = {
    httpMethod: POST,
    body: JSON.stringify({
        entry: [
            {
                messaging: [
                    {
                        message: {
                            text: "Unit test",
                        },
                        sender: {
                            id: TEST_USER_ID,
                        },
                    },
                ],
            },
        ],
    }),
}

const POST_STATUS_200_CASE_2 = {
    httpMethod: POST,
    body: JSON.stringify({
        entry: [
            {
                messaging: [
                    {
                        message: {
                            text: "Test phrases not included in tokens",
                        },
                        sender: {
                            id: TEST_USER_ID,
                        },
                    },
                ],
            },
        ],
    }),
}

const POST_STATUS_500 = {
    httpMethod: POST,
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
            },
        ],
    }),
}

const OTHER_STATUS_400 = {
    httpMethod: PUT,
}

const httpGetMethodTests = []

httpGetMethodTests.push({
    method: GET,
    statusCode: GREETING.code,
    caseNum: 1,
    caseType: GET_STATUS_200_CASE_1,
    toBeReturn: GREETING.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: SUCCESS.code,
    caseNum: 2,
    caseType: GET_STATUS_200_CASE_2,
    toBeReturn: CHALLENGE_TOKEN,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: BAD_REQUEST.code,
    caseNum: 1,
    caseType: GET_STATUS_400_CASE_1,
    toBeReturn: BAD_REQUEST.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: BAD_REQUEST.code,
    caseNum: 2,
    caseType: GET_STATUS_400_CASE_2,
    toBeReturn: BAD_REQUEST.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: BAD_REQUEST.code,
    caseNum: 3,
    caseType: GET_STATUS_400_CASE_3,
    toBeReturn: BAD_REQUEST.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: BAD_REQUEST.code,
    caseNum: 4,
    caseType: GET_STATUS_400_CASE_4,
    toBeReturn: BAD_REQUEST.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: INCORRECT_VERIFY_TOKEN.code,
    caseNum: null,
    caseType: GET_STATUS_401,
    toBeReturn: INCORRECT_VERIFY_TOKEN.message,
})
httpGetMethodTests.push({
    method: GET,
    statusCode: PRECONDITION_FAILED.code,
    caseNum: null,
    caseType: GET_STATUS_412,
    toBeReturn: PRECONDITION_FAILED.message,
})

const httpPostMethodTests = []

httpPostMethodTests.push({
    method: POST,
    statusCode: SUCCESS.code,
    caseNum: 1,
    caseType: POST_STATUS_200_CASE_1,
    toBeReturn: SUCCESS.message,
})
httpPostMethodTests.push({
    method: POST,
    statusCode: SUCCESS.code,
    caseNum: 2,
    caseType: POST_STATUS_200_CASE_2,
    toBeReturn: SUCCESS.message,
})
httpPostMethodTests.push({
    method: POST,
    statusCode: INTERNAL_SERVER_ERROR.code,
    caseNum: null,
    caseType: POST_STATUS_500,
    toBeReturn: INTERNAL_SERVER_ERROR.message,
})

const httpOtherMethodTests = [
    {
        method: PUT,
        statusCode: BAD_REQUEST.code,
        caseNum: null,
        caseType: OTHER_STATUS_400,
        toBeReturn: BAD_REQUEST.message,
    },
]

const buildTest = testCase => {
    const { method, statusCode, caseNum, caseType, toBeReturn } = testCase

    const defaultTestName = `${method}:: status ${statusCode}`
    const testName = caseNum ? `${defaultTestName} Case ${caseNum}` : defaultTestName

    it(testName, () => {
        expect(
            app.handler(caseType, null, (isNotNull, response) => {
                if (isNotNull) {
                    console.error(response)
                }
            }).body,
        ).toBe(toBeReturn)
    })
}

const executeTest = (describeText, testCases) => {
    describe(describeText, () => {
        testCases.map(testCase => buildTest(testCase))
    })
}

executeTest("HTTP GET Method Test", httpGetMethodTests)
executeTest("HTTP POST Method Test", httpPostMethodTests)
executeTest("HTTP Other Method Test", httpOtherMethodTests)
