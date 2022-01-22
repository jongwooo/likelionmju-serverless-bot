/**
 * Copyright (c) 2020 Jongwoo Han
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict"
const DEFAULT_REPLY =
    "안녕하세요, 명지대학교(서울)\n멋쟁이 사자처럼 챗봇입니다.\n\n아래 제시된 키워드 중에서\n선택하여 질문해주세요."
const IGNORE_REPLY = ["Unit test", "멋탈!"]
const questions = {}

questions["활동 기간"] = "2022.03 - 2022.12"
questions["지원 대상"] =
    "명지대학교 인문캠퍼스의 재학생 / 휴학생 중 '웹 서비스'에 관심 있는 누구나 활동할 수 있습니다!\n\n1년 동안 꾸준히, 열정적으로 활동 할 수 있는 사람을 모집합니다!!"
questions["모집 일정"] = "모집 기간이 아닙니다."
questions["지원 방법"] = "지원 기간이 아닙니다."
questions["활동 계획"] =
    "1년 동안 멋대 자체 온라인 강의 플랫폼과 매주 학교 스터디를 통해 웹 프로그래밍 교육을 이수합니다.\n\n또한, 전국의 멋대 학생들과 아이디어를 공유하는 '아이디어톤', 실제 아이디어가 구현되는 '해커톤'과 같은 이벤트에도 참여하게 됩니다."
questions["자세한 문의"] = "자세한 문의는 인스타그램 DM(@likelion_mju)을 통해 주시면 감사하겠습니다."
questions["Unit test"] = "Unit Testing with Jest"
questions["멋탈!"] =
    "⊂_ヽ\n    ＼ ＼  Λ＿Λ\n         ＼( ‘ㅅ' ) 두둠칫\n            >　⌒ヽ\n           / 　    へ ＼\n         /　　/ 　   ＼＼\n        ﾚ　ノ　　   ヽ_つ\n      /　 /  두둠칫\n    / 　/|\n   (  (ヽ\n    |　|、 ＼\n    |  丿 ＼⌒)\n    |  |　　) /\n`ノ  )　Lﾉ"

module.exports.DEFAULT_REPLY = DEFAULT_REPLY
module.exports.IGNORE_REPLY = IGNORE_REPLY
module.exports.questions = questions
