import { IData } from "../interface";

describe("Jest methods", () => {
  test("object assignment", () => {
    const data: IData = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  const shoppingList: string[] = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
