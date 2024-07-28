import { describe, test, expect } from "@jest/globals";
import { findDogs } from "../src";

describe("Test Suite", () => {
  test("Example Test", () => {
    expect(true).toBe(true);
  });
  test("Fin largest sentence in string", () => {
    const string = "Hello. My name is Emre Cakmak. I'm 30 years old!";
    const string2 = "Hello. My name is Emre Cakmak. I'm 30 years old!";
    expect(longestSentence(string)).toBe(5);
    expect(longestSentence(string)).toBe(5);
  });
  test("", () => {
    const str = "hello my name is";
    expect(reverseStr(str)).toBe("is name my hello");
  });

  //   - Create an array of Dog objects with the following details Name, Breed and age.
  // - Using array methods, find the dogs with age more than 5.
  // - For each Dog under the age of 5, increase the age by 3.

  test("", () => {
    const dogs = [
      {
        name: "Fido",
        breed: "husky",
        age: 6,
      },
      {
        name: "Rex",
        breed: "pomeranian",
        age: 10,
      },
      {
        name: "Daisy",
        breed: "dalmation",
        age: 1,
      },
      {
        name: "Jason",
        breed: "german shepherd",
        age: 3,
      },
    ];
    expect(findDogs(dogs)).toEqual([
      {
        name: "Fido",
        breed: "husky",
        age: 6,
      },
      {
        name: "Rex",
        breed: "pomeranian",
        age: 10,
      },
      {
        name: "Jason",
        breed: "german shepherd",
        age: 6,
      },
    ]);
  });
});
