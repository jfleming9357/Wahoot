import { Sum } from "../components/Sum";

describe("Testing Sum component", () => {
  it("Should expect sum to be 8 given a value of 5 and 3", () => {
    expect(Sum(5, 3)).toBe(8);
  });
});
