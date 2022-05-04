import TextToSpeech from "./text-to-speech";
const { exec } = require("child_process");

new TextToSpeech(exec).say(
  "night of small colour / a part of the underworld / becomes one heron"
);
