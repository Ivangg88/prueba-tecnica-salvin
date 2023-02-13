import { calculateMinutes } from "./operationutils";

describe("Given a function calculateMinutes", () => {
  const actualDate = new Date();
  describe("When is called with the actual date", () => {
    test("Then it should return 0", () => {
      const expectedResult = 0;
      const receiveResult = calculateMinutes(
        new Date(actualDate.toISOString())
      );

      expect(receiveResult).toBe(expectedResult);
    });
  });

  describe("When is called with a date", () => {
    test("Then it should return the diference respect to the actual date", () => {
      const testDate = "12/2/2023, 11:20:56";

      const receiveResult = calculateMinutes(new Date(testDate));

      expect(receiveResult).not.toBe(0);
    });
  });
});
