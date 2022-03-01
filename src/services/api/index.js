/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const request = require("request")
const { FACEBOOK_API_VERSION, PAGE_ACCESS_TOKEN } = require("../../config")

exports.sendMessageApi = messages => {
    request(
        {
            url: `https://graph.facebook.com/v${FACEBOOK_API_VERSION}/me/messages`,
            qs: { access_token: PAGE_ACCESS_TOKEN },
            method: "POST",
            json: messages,
        },
        error => {
            if (error) throw new Error()
        },
    )
}
