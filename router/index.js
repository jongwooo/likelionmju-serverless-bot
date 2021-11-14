/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import { getHandler } from "./get";
import { postHandler } from "./post";

const _getHandler = getHandler;
export { _getHandler as getHandler };

const _postHandler = postHandler;
export { _postHandler as postHandler };
