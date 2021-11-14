/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
import { getHandler, postHandler } from "./router";

export async function handler(event) {
	switch (event.httpMethod) {
		case "GET":
			return getHandler(event);
		case "POST":
			return postHandler(event);
	}
}
