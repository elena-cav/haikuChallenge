const { exec } = require("child_process");

class TextToSpeech {
  say(haiku) {
    const withHyphens = haiku.replace(/\//g, "-");
    exec(`say ${withHyphens} -r 150`);
  }
}

export default TextToSpeech;
