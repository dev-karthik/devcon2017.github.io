var recognizing;
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = reset();

recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      // poulate voice to text output
      //textvalue.innerHTML = event.results[i][0].transcript;

      console.log(actual1.innerHTML);
      console.log(event.results[i][0].transcript);
    }
  }
}

function reset() {
  recognizing = false;
}

function toggleStartStop(index) {
  if (recognizing) {
    recognition.stop();
    document.getElementById("start_img"+index).src='./robo/mic1.png';
    reset();
  } else {
    recognition.lang = "hi-IN";
    console.log(recognition.lang);
    recognition.start();
    document.getElementById("start_img"+index).src='./robo/mic3.png';
    recognizing = true;
    console.log("started");
  }
}
