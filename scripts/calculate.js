
function getInput(id){
    const inputElement = document.getElementById(id)
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    inputElement.value = '';
    return inputValue;
    
}

document.getElementById('tirangle-calculate').addEventListener('click', function(){

    const base = getInput('base-input');
    console.log(base);
     
    const height = getInput('height-input');
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // setArea(area);
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    
})