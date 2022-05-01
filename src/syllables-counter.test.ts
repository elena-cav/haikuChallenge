import SyllablesCounter from "./syllables-counter";

describe("VCCV", () => {
  test("It complies with the vccv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("rabbit");
    expect(syllables).toBe(2);
  });
  test("It complies with the vccv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("content");
    expect(syllables).toBe(2);
  });
  test("It complies with the vccv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("selfish");
    expect(syllables).toBe(2);
  });
  test("It complies with the vccv rule in a +le word", () => {
    const syllables = new SyllablesCounter().calculateSyllables("table");
    expect(syllables).toBe(2);
  });
});
describe("vcccv", () => {
  test("It complies with the vcccv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("bundle");
    expect(syllables).toBe(2);
  });
});

describe("vcv", () => {
  test("It complies with the vcv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("baby");
    expect(syllables).toBe(2);
  });
  test("It complies with the vcv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("habit");
    expect(syllables).toBe(2);
  });
});
describe("vv", () => {
  test("It complies with the vv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("lion");
    expect(syllables).toBe(2);
  });
  test("It complies with the vv rule", () => {
    const syllables = new SyllablesCounter().calculateSyllables("neon");
    expect(syllables).toBe(2);
  });
  test("It does not split the syllable between vowel teams", () => {
    const syllables = new SyllablesCounter().calculateSyllables("toil");
    expect(syllables).toBe(1);
  });
  test("It does not split the syllable between vowel teams", () => {
    const syllables = new SyllablesCounter().calculateSyllables("rain");
    expect(syllables).toBe(1);
  });
  test("It does not split the syllable between vowel teams", () => {
    const syllables = new SyllablesCounter().calculateSyllables("meat");
    expect(syllables).toBe(1);
  });
});
describe("ed", () => {
  test("It removes one syllable when the word is in past tense", () => {
    const syllables = new SyllablesCounter().calculateSyllables("transferred");
    expect(syllables).toBe(2);
  });
  test("It does not remove one syllable when the word is in past tense but ends in t or d", () => {
    const syllables = new SyllablesCounter().calculateSyllables("wanted");
    expect(syllables).toBe(2);
  });
  test("It does not remove one syllable when the word is in past tense but ends in t or d", () => {
    const syllables = new SyllablesCounter().calculateSyllables("needed");
    expect(syllables).toBe(2);
  });
});
describe("tion", () => {
  test("It removes a syllable if the word contains 'tion'", () => {
    const syllables = new SyllablesCounter().calculateSyllables("emotion");
    expect(syllables).toBe(3);
  });
});
describe("apostrophe", () => {
  test("It adds one syllable if the word follows the patters cc'c pattern", () => {
    const syllables = new SyllablesCounter().calculateSyllables("wouldn't");
    expect(syllables).toBe(2);
  });
  test("It adds one syllable if the word follows the c'cc pattern", () => {
    const syllables = new SyllablesCounter().calculateSyllables("wouldn've");
    expect(syllables).toBe(2);
  });
});
describe("hyphen", () => {
  test("It adds one syllable if the word contains an hyphen", () => {
    const syllables = new SyllablesCounter().calculateSyllables("co-op");
    expect(syllables).toBe(2);
  });
});
