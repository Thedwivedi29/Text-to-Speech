function conversion(){
    const text = document.getElementById('text').value;
    const Speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(Speech);
}