import {definePrime}  from './index';

describe("tests for definePrime func", ()=>{
  it("should operate with simple", () =>{
    expect(definePrime (17)).toBe(`17 -простое`)
  }),
  it("should operate with complex", () =>{
    expect(definePrime (18)).toBe(`18 -составное`)
  }),
  it("should operate with invalid nums", () =>{
    expect(definePrime (1001)).toBe(`данные неверны`)
  })
})