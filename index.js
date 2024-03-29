const button = document.getElementById('ChangeColor');
let randomNum = () => {
    let randomNumber = (Math.floor(Math.random() * 256));
    return randomNumber;
}

let ChangeColor = () => {
    
    let randomColor = `rgb(${ramdomNumber()} ,${ramdomNumber()} ,${ramdomNumber()})`;
    document.body.style.backgroundColor = randomColor;
}


button.addEventListener('click', ChangeColor);
window.addEventListener('load', ChangeColor);
