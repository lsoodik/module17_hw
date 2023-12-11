import {countDown} from "../funcs/countDown"

describe ("tests for countDown func", ()=> {

    it ("test correctly work",()=>{
        expect(countDown(5)).toStrictEqual([5, 4, 3, 2, 1])
    }),
    it ("test uncorrectly work",()=>{
        expect(countDown(3)).toStrictEqual([2, 1])
    }),
    it ("should work with 1 (corner test)",()=>{
        expect(countDown(1)).toStrictEqual([1])
    }),
    it ("should work with 0",()=>{
        expect(countDown(0)).toStrictEqual("ошибка")
    }),
    it ("should work with float nums",()=>{
        expect(countDown(2.7)).toStrictEqual([2.7, 1.7])
    }),
    it ("should work with negative nums",()=>{
        expect(countDown(-10)).toStrictEqual("ошибка")
    }),
    it ("should work with sum of nums",()=>{
        expect(countDown(2+4)).toStrictEqual([6, 5, 4, 3, 2, 1])
    }),
    it ("should work with string",()=>{
        expect(countDown("hello")).toStrictEqual("ошибка")
    })
})
