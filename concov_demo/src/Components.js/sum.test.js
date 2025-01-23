import { sum } from "./sum";

test("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
});
