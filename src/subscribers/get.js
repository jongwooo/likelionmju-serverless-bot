/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
import { buildResponse, buildError } from "../routes"
import { VERIFY_TOKEN } from "../config"

const isParamsNotEmpty = params => {
    return typeof params !== "undefined" && params !== null && params !== ""
}

const getHandler = event => {
    let response = buildResponse("likelionMJU Bot")

    if (event.queryStringParameters) {
        let queryStringParams = event.queryStringParameters
        let status = [
            queryStringParams["hub.mode"] === "subscribe",
            queryStringParams["hub.verify_token"] === VERIFY_TOKEN &&
                isParamsNotEmpty(queryStringParams["hub.verify_token"]),
            isParamsNotEmpty(queryStringParams["hub.challenge"]),
        ]

        switch (status.join(", ")) {
            case "true, true, true":
                response = buildResponse(queryStringParams["hub.challenge"])
                break

            case "true, false, true":
                response = buildError("Incorrect verify token", 401)
                break

            case "false, true, true":
                response = buildError("Precondition failed", 412)
                break

            default:
                response = buildError()
                break
        }
    }

    return response
}

export default getHandler
