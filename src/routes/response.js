/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    STATUS: { SUCCESS },
} = require("../constants")

exports.createResponseMessage = (message = SUCCESS.message, code = SUCCESS.code) => ({
    statusCode: code,
    body: message,
    headers: { "Content-Type": "application/json;" },
})
