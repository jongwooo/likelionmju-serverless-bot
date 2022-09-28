/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { createResponseMessage, createErrorMessage } = require("../routes")
const { VERIFY_TOKEN } = require("../config")
const {
    STATUS: { GREETING, INCORRECT_VERIFY_TOKEN, PRECONDITION_FAILED },
} = require("../constants")

exports.getHandler = event => {
    if (event.queryStringParameters) {
        const queryStringParams = event.queryStringParameters

        const statusMapper = {
            "true, true, true": createResponseMessage(queryStringParams["hub.challenge"]),
            "true, false, true": createErrorMessage(INCORRECT_VERIFY_TOKEN.message, INCORRECT_VERIFY_TOKEN.code),
            "false, true, true": createErrorMessage(PRECONDITION_FAILED.message, PRECONDITION_FAILED.code),
        }

        const hasOwnParams = (key, value) => {
            const hasOwnKey = Object.hasOwn(queryStringParams, key)
            return value ? hasOwnKey && queryStringParams[key] === value : hasOwnKey
        }

        const status = [
            hasOwnParams("hub.mode", "subscribe"),
            hasOwnParams("hub.verify_token", VERIFY_TOKEN),
            hasOwnParams("hub.challenge"),
        ].join(", ")

        return statusMapper[status] || createErrorMessage()
    }

    return createResponseMessage(GREETING.message)
}
