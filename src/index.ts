class HaikuCalculator {
  private _syllables: Number[];
  private _isHaiku: Boolean = false;
  private _errorHandler;
  private _syllablesCounter;
  private _textToSpeech;
  private _input: String;
  constructor(errorHandler, syllablesCounter, textToSpeech) {
    this._syllables = [];
    this._errorHandler = errorHandler;
    this._syllablesCounter = syllablesCounter;
    this._textToSpeech = textToSpeech;
  }

  calculateHaiku(input) {
    this._errorHandler.verify(input);
    this._input = input;
    const splitString = input.split("/");

    this._syllables = splitString.map((line) => {
      return this._syllablesCounter.calculateSyllables(line);
    });
    const haikuPattern = [5, 7, 5];
    this._isHaiku =
      JSON.stringify(this._syllables) === JSON.stringify(haikuPattern);
  }

  speak() {
    if (this._isHaiku) {
      this._textToSpeech.say(this._input);
    }
  }
  get syllables() {
    return this._syllables;
  }

  get isHaiku() {
    return this._isHaiku;
  }
}

export default HaikuCalculator;
