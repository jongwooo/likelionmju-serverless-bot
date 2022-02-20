/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
import buildResponse from "./response"

const buildError = (message = "Bad request", status = 400) => buildResponse(message, status)

export default buildError
