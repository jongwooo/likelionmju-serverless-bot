/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
import sendMessage from "../api"
import { FACEBOOK_API_VERSION, DEFAULT_REPLY, IGNORE_REPLY, questions } from "../config"

const sendTexts = (recipientId, receivedMessage) => {
    let texts = ""
    let quickReplies = []
    let textMessage = {}

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
        texts = `[Unit test]\n\n-Sender ID: ${recipientId}\n-Facebook API v ${FACEBOOK_API_VERSION}\n`
    }

    if (texts === "") {
        texts = DEFAULT_REPLY
    }

    textMessage = {
        recipient: {
            id: recipientId,
        },
        message: {
            text: texts,
            quick_replies: quickReplies,
        },
    }

    sendMessage(textMessage)
}

export default sendTexts
