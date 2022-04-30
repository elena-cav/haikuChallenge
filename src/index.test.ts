import haikuCalculator from ".";

describe("Error handling", () => {
  test("If input is not a string, it throws an error", () => {
    expect(() => {
      // @ts-ignore
      haikuCalculator.calculateHaiku({});
    }).toThrow("Input must be a string");
  });
  test("If input is an empty string, it throws an error", () => {
    expect(() => {
      haikuCalculator.calculateHaiku("");
    }).toThrow("Input must not be a blank string");
  });
  test("If input does not contain two slashes, it throws an error", () => {
    expect(() => {
      haikuCalculator.calculateHaiku("some/things");
    }).toThrow("Input must contain 3 lines separated by slashes");
    expect(() => {
      haikuCalculator.calculateHaiku("some/thing/some/");
    }).toThrow("Input must contain 3 lines separated by slashes");
  });
});

describe("Challenge", () => {
  test("It returns true if the string is a Haiku", () => {
    haikuCalculator.calculateHaiku(
      "Slow moving river. / Flash of iridescent blue. / A kingfisher strikes"
    );
    expect(haikuCalculator.isHaiku).toBe(true);
  });
});
