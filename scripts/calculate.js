
function getInput(id){
    const inputElement = document.getElementById(id)
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    inputElement.value = '';
    return inputValue;
    
}

function setResult (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
// triangle area calculate
document.getElementById('tirangle-calculate').addEventListener('click', function(){
    
    const base = getInput('base-input');
    const height = getInput('height-input');
    const area = 0.5 * base * height;

    setResult('triangle-area', area);
})

// rectangle calculate
document.getElementById('rectangle-calculate').addEventListener('click', function(){

    const width = getInput('width-input');
    const length = getInput('length-input');
    const rectangleArea = width * length;

    setResult('rectangle-value', rectangleArea);
})