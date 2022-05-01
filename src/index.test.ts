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
  describe("Is Haiku", () => {
    test("It returns true if the string is a Haiku", () => {
      haikuCalculator.calculateHaiku(
        "Slow moving river. / Flash of iridescent blue. / A kingfisher strikes"
      );
      expect(haikuCalculator.isHaiku).toBe(true);
    });
    test("It returns true if the string is a Haiku", () => {
      haikuCalculator.calculateHaiku(
        "Lullaby of rain / another pinch of saffron / in the pumpkin soup"
      );
      expect(haikuCalculator.isHaiku).toBe(true);
    });
    test("It returns true if the string is a Haiku (with apostrophe)", () => {
      haikuCalculator.calculateHaiku(
        "Deep end of winter / a swan’s luminosity / enters the river"
      );
      expect(haikuCalculator.isHaiku).toBe(true);
    });
    test("It returns true if the string is a Haiku", () => {
      haikuCalculator.calculateHaiku(
        "night of small colour / a part of the underworld / becomes one heron"
      );
      expect(haikuCalculator.isHaiku).toBe(true);
    });
  });
  describe("Is not Haiku", () => {
    test("It returns false if the string is a Haiku", () => {
      haikuCalculator.calculateHaiku(
        "Lullaby of wet rain / another pinch of saffron / in the pumpkin soup"
      );
      expect(haikuCalculator.isHaiku).toBe(false);
      expect(haikuCalculator.syllables).toEqual([6, 7, 5]);
    });
  });
});
