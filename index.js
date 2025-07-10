eval_unsafe_real = eval
agree_cnt = 0
agree_dict = [ // "わざわざ"読みやすくした(もっと他にすることあるだろうに...)
    "You sure?",
    "Do you know what you are trying to do??????",
    "Stop it.",
    "STOP IT!!!",
    "Are you dumb?",
    `eval is shit. You need to use "use strict".`,
    `You hate 'use strict'?`,
    "Are you brainrot?????",
    "You don't need eval. You need Doritos.",
    "You don't meed eval. You need Vodka.",
    "You don't need eval. You need surströmming.",
    "I have a gift for you! Tada! MEMZ trojan!",
    "I have a gift for you! Tada! COVID-19!",
    "🤔"
]
eval_unsafe_agreed = false
resetTrigger = undefined
eval_agree_text = "DONT_USE_THIS_CODE_OR_IF_YOU_USE_YOUR_BROWSER_IS_ABUSE_THIS_IS_NOT_JOKE_DONT_USE_ANYWAY" // 書き直すと Don't use this code or if you use your browser is abuse. This is NOT JOKE. DONT USE ANYWAY.
eval_unsafe = function(v1) {
    if (eval_unsafe_agreed) {
        eval_unsafe_real(v1)
    } else {
        resetTrigger = setTimeout(function() {
            'use strict' // 伏線回収
            console.warn("Time out! please try again.")
            clearTimeout(resetTrigger)
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },50000)
        eval_agree_text = "I use eval at own risk. Accept code: " + randomNum()
        console.warn(`Do you use eval anyway?
If you use, execute this function:
eval_agree("${eval_agree_text}")`)
    }
}
eval_agree = function(agreeText) {
    if (agreeText == eval_agree_text) {
        if (agree_cnt == 0) {
            console.warn("Are you use anyway?")
            agree_cnt++
        } else {
            if (agree_cnt == 1) {
                console.warn("Okay?")
                agree_cnt++
            } else {
                if (agree_cnt == 2) {
                    console.warn("SERIOUSLY?????")
                    agree_cnt++
                } else {
                    if (agree_cnt >= 3 && agree_cnt <= 50) {
                        agree_cnt++
                        console.warn(agree_dict[Math.floor(Math.random() * (agree_dict.length))])
                    } else {
                        if (agree_cnt >= 51) {
                            agree_cnt++
                            console.info("Okay, okay. eval is unlocked. use at own risk.")
                            eval_unsafe_agreed = true
                            clearTimeout(resetTrigger)
                        }
                    }
                }
            }
        }
    } else {
        console.error("Agree text is invalid. please try again.")
    }
}
eval = function() {console.error(`eval is blocked because this function is unsafe.
Please use another function if you can.
If use this function, use "eval_unsafe()".`)}

function randomNum() {
    return Math.floor(Math.random() * 1000000000)
}
