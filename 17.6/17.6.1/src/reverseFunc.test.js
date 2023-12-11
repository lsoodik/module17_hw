import {reverseWord}  from './reverseFunc';

describe("tests for reverseWord func", ()=>{
    let expected = "olleh";
    it("should reverse the word", () => expect(reverseWord("hello")).toBe(expected))
})

