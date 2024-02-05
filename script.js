const range = document.getElementById('range');
const num = document.getElementById('num');
const div = 360 / 11;

function play(){
    var rangeNum = range.value
    const notes = ['A', 'B♭', 'B', 'C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G']
    var note = notes[Math.floor(rangeNum / div)]
    num.innerHTML = note;
}