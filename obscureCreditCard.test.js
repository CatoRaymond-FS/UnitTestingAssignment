const obscureCreditCard = require("./obscureCreditCard");

describe("obscureCreditCard", () => {
  test("should return the obscured credit card number for a valid input", () => {
    const input = "1234567890123456";
    const expectedOutput = "1234XXXXXXXX3456";
    const actualOutput = obscureCreditCard(input);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("should return 'Invalid Credit Card' for an input with less than 12 digits", () => {
    const input = "12345678901";
    const expectedOutput = "Invalid Credit Card";
    const actualOutput = obscureCreditCard(input);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("should return 'Invalid Credit Card' for an input with more than 16 digits", () => {
    const input = "12345678901234567890";
    const expectedOutput = "Invalid Credit Card";
    const actualOutput = obscureCreditCard(input);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("should return 'Invalid Credit Card' for an input with 11 digits", () => {
    const input = "12345678901";
    const expectedOutput = "Invalid Credit Card";
    const actualOutput = obscureCreditCard(input);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("should return 'Invalid Credit Card' for an input with 17 digits", () => {
    const input = "123456789012345678";
    const expectedOutput = "Invalid Credit Card";
    const actualOutput = obscureCreditCard(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
