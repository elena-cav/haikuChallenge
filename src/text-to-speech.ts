class TextToSpeech {
  private _exec;
  constructor(exec) {
    this._exec = exec;
  }
  say(haiku) {
    const withHyphens = haiku.replace(/\//g, "-");
    this._exec(`say ${withHyphens} -r 150`);
  }
}

export default TextToSpeech;
