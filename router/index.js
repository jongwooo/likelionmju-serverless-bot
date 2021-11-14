/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const { getHandler } = require("./get");
const { postHandler } = require("./post");

exports.getHandler = getHandler;
exports.postHandler = postHandler;
