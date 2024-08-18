/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { createResponseMessage, createErrorMessage } = require("../routes")
const { sendDots, sendTexts } = require("../services")
const {
    STATUS: { INTERNAL_SERVER_ERROR },
} = require("../constants")

exports.postHandler = event => {
    try {
        const {
            message: { text },
            sender: { id },
        } = JSON.parse(event.body).entry[0].messaging[0]

        sendDots(id)
        sendTexts(id, text)

        return createResponseMessage()
    } catch (_error) {
        return createErrorMessage(INTERNAL_SERVER_ERROR.message, INTERNAL_SERVER_ERROR.code)
    }
}
