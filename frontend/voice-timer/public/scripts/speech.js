const recognition = new webkitSpeechRecognition();
const speechrecognitionResults = new webkitSpeechGrammarList();
recognition.grammars = speechrecognitionResults
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// start recognition when the window loads
window.addEventListener("load", (event) => {
  recognition.start();
  console.log('Ready to receive a wake up command.');
});

// TODO: start a new thread for timer recognition
recognition.onresult = (event) => {

  const recognitionResults = event.results
  const recognitionResultsLength = recognitionResults.length
  const latestResultTranscript = recognitionResults[recognitionResultsLength-1][0].transcript
  
  console.log(recognitionResults)
  console.log("latest:",latestResultTranscript, recognitionResultsLength)
  
  
  fetch('http://127.0.0.1:3000/interpretSpeech', {method:'POST', headers: {
    'Content-Type': 'application/json',
  }, body: JSON.stringify({"transcript":latestResultTranscript})})
  .then((response) => console.log("re", response))

}
