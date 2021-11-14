/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import { sendDots } from "./dots";
import { sendTextMessage } from "./text";

const _sendDots = sendDots;
export { _sendDots as sendDots };

const _sendTextMessage = sendTextMessage;
export { _sendTextMessage as sendTextMessage };
