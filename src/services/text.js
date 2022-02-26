/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const { sendMessageApi } = require("../api")
const { FACEBOOK_API_VERSION, DEFAULT_REPLY, IGNORE_REPLY, questions } = require("../config")

exports.sendTexts = (recipientId, receivedMessage) => {
    let texts = ""
    const quickReplies = []

    for (const token in questions) {
        if (!IGNORE_REPLY.includes(token)) {
            quickReplies.push({
                content_type: "text",
                title: token,
                payload: `DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_${token}`,
            })
        }

        if (receivedMessage.includes(token)) {
            texts += `${questions[token]}\n\n`
        }
    }

    if (receivedMessage.includes("Unit test")) {
        texts = `[Unit test]\n\n-Sender ID: ${recipientId}\n`
        texts += `-Facebook API v ${FACEBOOK_API_VERSION}\n`
        texts += `-Node Runtime v ${process.versions.node}\n`
    }

    if (texts === "") {
        texts = DEFAULT_REPLY
    }

    sendMessageApi({
        recipient: {
            id: recipientId,
        },
        message: {
            text: texts,
            quick_replies: quickReplies,
        },
    })
}
