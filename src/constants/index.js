/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const GET = "GET"
const POST = "POST"
const PUT = "PUT"

const GREETING = {
    code: 200,
    message: "likelionMJU Bot",
}
const SUCCESS = {
    code: 200,
    message: "Success",
}
const BAD_REQUEST = {
    code: 400,
    message: "Bad request",
}
const INCORRECT_VERIFY_TOKEN = {
    code: 401,
    message: "Incorrect verify token",
}
const PRECONDITION_FAILED = {
    code: 412,
    message: "Precondition failed",
}
const INTERNAL_SERVER_ERROR = {
    code: 500,
    message: "Internal server error",
}

exports.METHOD = { GET, POST, PUT }
exports.STATUS = {
    GREETING,
    SUCCESS,
    BAD_REQUEST,
    INCORRECT_VERIFY_TOKEN,
    PRECONDITION_FAILED,
    INTERNAL_SERVER_ERROR,
}
