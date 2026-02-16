import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./script";
import { describe, test, expect } from "vitest";

findMaxValue([3,7,9,11,15,6]);
findMaxValue([]);
findMaxValue([-13, -25, -6]);
findMaxValue("not an array");

factorial(5);
factorial(10);
factorial(7);
factorial(-4);
factorial("8");

areArraysEqual([1,2,3],[1,2,3]);
areArraysEqual([1,2,3],[3,2,1]);
areArraysEqual([],[]);
areArraysEqual([1,2],[1,2,3]);

toTitleCase("hello");
toTitleCase("JAVASCRIPT IS FUN");
toTitleCase("where are you going?");
toTitleCase(12345);

describe("arraysareequal", function(){
    test(`array 123 and 123 are equal`, function(){
        expect(areArraysEqual([1,2,3],[1,2,3])).toBe(true)
    })
})

describe("factorial", function(){
    test(`factorial of 5 is`, function(){
        expect(factorial(5)).toBe(120)
    })
})

describe("change to title case", function(){
    test(`title case of hello is`, function(){
        expect(toTitleCase("hello")).toBe("Hello")
    })
})