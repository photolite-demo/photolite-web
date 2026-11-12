import { expect, test } from "vitest";
import { greeting } from "./greeting";

test("greets by name", () => {
  expect(greeting("Sam")).toBe("Hello, Sam. Welcome to Photo Lite.");
});
