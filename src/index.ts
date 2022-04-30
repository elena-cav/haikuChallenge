import { stringLiteralTypeAnnotation } from "@babel/types";
import ErrorHandler from "./error-handler";
import SyllablesCounter from "./syllables-counter";

class HaikuCalculator {
  private _syllables: Number[];
  private _isHaiku: Boolean = false;
  private _errorHandler: ErrorHandler;
  private _syllablesCounter: SyllablesCounter;

  constructor(errorHandler, syllablesCounter) {
    this._syllables = [];
    this._errorHandler = errorHandler;
    this._syllablesCounter = syllablesCounter;
  }

  calculateHaiku(input) {
    this._errorHandler.verify(input);
    const splitString = input.split("/");

    this._syllables = splitString.map((line) => {
      return this._syllablesCounter.calculateSyllables(line);
    });
    const haikuPattern = [5, 7, 5];
    this._isHaiku =
      JSON.stringify(this._syllables) === JSON.stringify(haikuPattern);
  }

  get syllables() {
    return this._syllables;
  }

  get isHaiku() {
    return this._isHaiku;
  }
}
const haikuCalculator = new HaikuCalculator(
  new ErrorHandler(),
  new SyllablesCounter()
);
export default haikuCalculator;
