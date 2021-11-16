/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
exports.buildResponse = message => ({
	statusCode: 200,
	body: JSON.stringify(message),
	headers: { "Content-Type": "application/json;" }
});
