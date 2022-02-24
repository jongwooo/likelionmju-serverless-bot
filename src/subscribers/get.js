/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const { buildResponse, buildError } = require("../routes")
const { VERIFY_TOKEN } = require("../config")

exports.getHandler = event => {
    if (event.queryStringParameters) {
        const queryStringParams = event.queryStringParameters

        const hasOwnParams = (key, value) => {
            const hasOwnKey = Object.prototype.hasOwnProperty.call(queryStringParams, key)
            return value ? hasOwnKey && queryStringParams[key] === value : hasOwnKey
        }

        const status = [
            hasOwnParams("hub.mode", "subscribe"),
            hasOwnParams("hub.verify_token", VERIFY_TOKEN),
            hasOwnParams("hub.challenge"),
        ]

        switch (status.join(", ")) {
            case "true, true, true":
                return buildResponse(queryStringParams["hub.challenge"])

            case "true, false, true":
                return buildError("Incorrect verify token", 401)

            case "false, true, true":
                return buildError("Precondition failed", 412)

            default:
                return buildError()
        }
    }

    return buildResponse("likelionMJU Bot")
}
