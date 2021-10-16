const rewire = require("rewire")
const index = rewire("./index")
const getRandFromList = index.__get__("getRandFromList")
const correctAnswerSound = index.__get__("correctAnswerSound")
const errorAnswerSound = index.__get__("errorAnswerSound")
const onCorrectAnswer = index.__get__("onCorrectAnswer")
const onErrorAnswer = index.__get__("onErrorAnswer")
// @ponicode
describe("getRandFromList", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getRandFromList(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getRandFromList(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getRandFromList(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getRandFromList(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getRandFromList(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getRandFromList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("correctAnswerSound", () => {
    test("0", () => {
        let callFunction = () => {
            correctAnswerSound()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("errorAnswerSound", () => {
    test("0", () => {
        let callFunction = () => {
            errorAnswerSound()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onCorrectAnswer", () => {
    test("0", () => {
        let callFunction = () => {
            onCorrectAnswer()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onErrorAnswer", () => {
    test("0", () => {
        let callFunction = () => {
            onErrorAnswer()
        }
    
        expect(callFunction).not.toThrow()
    })
})
