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

        const statusMapper = {
            "true, true, true": buildResponse(queryStringParams["hub.challenge"]),
            "true, false, true": buildError("Incorrect verify token", 401),
            "false, true, true": buildError("Precondition failed", 412),
        }

        const hasOwnParams = (key, value) => {
            const hasOwnKey = Object.prototype.hasOwnProperty.call(queryStringParams, key)
            return value ? hasOwnKey && queryStringParams[key] === value : hasOwnKey
        }

        const status = [
            hasOwnParams("hub.mode", "subscribe"),
            hasOwnParams("hub.verify_token", VERIFY_TOKEN),
            hasOwnParams("hub.challenge"),
        ].join(", ")

        return statusMapper[status] || buildError()
    }

    return buildResponse("likelionMJU Bot")
}
