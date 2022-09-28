/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { createResponseMessage } = require("./response")
const {
    STATUS: { BAD_REQUEST },
} = require("../constants")

exports.createErrorMessage = (message = BAD_REQUEST.message, code = BAD_REQUEST.code) =>
    createResponseMessage(message, code)
