/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { getHandler, postHandler } = require("./subscribers")
const { createErrorMessage } = require("./routes")

exports.handler = (event, _context, callback) => {
    const responseMapper = {
        GET: getHandler(event),
        POST: postHandler(event),
    }

    const response = responseMapper[event.httpMethod] || createErrorMessage()

    callback(null, response)
    return response
}
