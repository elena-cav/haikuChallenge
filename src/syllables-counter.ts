class SyllablesCounter {
  private _v = "[aeiouy]";
  private _c = "[qwrtyplkhgfdszxcvbnm]";
  private _teamV =
    "ai|ay|ea|ey|ee|ea|ey|ei|ie|oa|oe|ew|ue|eu|oi|oy|ou|ow|au|oo";

  private rules = {
    vccv: { rule: `${this._v}${this._c}${this._c}${this._v}`, multiplier: 1 },
    vcccv: {
      rule: `${this._v}${this._c}${this._c}${this._c}${this._v}`,
      multiplier: 1,
    },
    vcv: { rule: `(?<=${this._v}${this._c}${this._v})(.|$)`, multiplier: 1 },
    vv: { rule: `(?:(?!${this._teamV})${this._v}${this._v})`, multiplier: 1 },
    ice: { rule: `i${this._c}(e|es)$`, multiplier: -1 },
  };

  countSyllables(word, { rule, multiplier }) {
    const regex = new RegExp(rule, "g");
    return word.match(regex)?.length * multiplier || 0;
  }

  calculateSyllables(input: String) {
    const words = input.trim().split(" ");

    const lineSyllables = words.reduce((sum, word) => {
      const regexRules = Object.values(this.rules);
      const syllables = regexRules.reduce((total, regexRule) => {
        return total + this.countSyllables(word, regexRule);
      }, 1);
      return syllables + sum;
    }, 0);
    return lineSyllables;
  }
}

export default SyllablesCounter;
