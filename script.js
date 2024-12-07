const synth = window.speechSynthesis;

const voiceSelect = document.getElementById('voice-select');

let voices = [];

function loadVoices() {

    voices = synth.getVoices();

    voiceSelect.innerHTML = ''; 
    voices.forEach((voice, index) => {

        const option = document.createElement('option');

        option.textContent = `${voice.name} (${voice.lang})`;

        option.value = index;

        voiceSelect.appendChild(option);

    });

}



if (synth.onvoiceschanged !== undefined) {

    synth.onvoiceschanged = loadVoices;

    loadVoices(); 

}

document.getElementById('speak-button').addEventListener('click', function() {

    const text = document.getElementById('text-input').value;

    if (text.trim() !== "") {

        const utterance = new SpeechSynthesisUtterance(text);

        const selectedVoiceIndex = voiceSelect.value;

        utterance.voice = voices[selectedVoiceIndex]; 

        synth.speak(utterance); 
    } else {

        alert('Please enter some text to speak.');

    }

});
