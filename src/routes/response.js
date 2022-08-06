/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const createResponseMessage = (message = "Success", status = 200) => ({
    statusCode: status,
    body: message,
    headers: { "Content-Type": "application/json;" },
})
