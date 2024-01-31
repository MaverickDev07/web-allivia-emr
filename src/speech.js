var stopRecordText = false;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function runSpeechRecognition() {


    recognition.onend = function() {

        if (!stopRecordText) {
            recognition.abort();
            recognition.start();
        } else {
            recognition.abort();
        }
    }


    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        if (!stopRecordText) {
            document.getElementById("conclusionMedicalConsultation").value += " " + transcript;
            document.getElementById("conclusionMedicalConsultation").click();
        }
    }

    // start recognition
    recognition.start();
};


function enableRecord() {
    stopRecordText = false;
}

function stopRecord() {
    recognition.abort();
    stopRecordText = true;
}