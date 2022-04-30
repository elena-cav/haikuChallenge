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
