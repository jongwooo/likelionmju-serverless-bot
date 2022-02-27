/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const { buildResponse, buildError } = require("../routes")
const { sendDots, sendTexts } = require("../services")

exports.postHandler = event => {
    try {
        const {
            message: { text },
            sender: { id },
        } = JSON.parse(event.body).entry[0].messaging[0]

        sendDots(id)
        sendTexts(id, text)

        return buildResponse()
    } catch (error) {
        return buildError("Internal server error", 500)
    }
}
