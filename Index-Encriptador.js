
const symbols = ['*', '#', '@', '!', '%'];
const spaceReplacement = '<<SPC>>'; // Secuencia utilizada para reemplazar espacios.


function encryptText() {


    let inputText = document.getElementById('input-text').value;
    let encryptedText = '';

    // Reemplazar espacios con una secuencia de reemplazo
    inputText = inputText.replace(/ /g, spaceReplacement);

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i) + 5; // Cambiar el código ASCII por 5
        encryptedText += String.fromCharCode(charCode);
        if ((i + 1) % 3 === 0 && i !== inputText.length - 1) {
            let symbolIndex = (i + 1) / 3 % symbols.length;
            encryptedText += symbols[symbolIndex]; // Agregar un simbolo especial para la secuencia 
        }
    }

    document.getElementById('result-text').value = encryptedText;
}


function decryptText() {
    let inputText = document.getElementById('input-text').value;
    let resultText = document.getElementById('result-text').value;
    let textToDecrypt = inputText || resultText;
    let decryptedText = '';
    let tempText = textToDecrypt;

  

    symbols.forEach(symbol => {
        tempText = tempText.split(symbol).join('');
    });

   
    for (let i = 0; i < tempText.length; i++) {
        let charCode = tempText.charCodeAt(i) - 5; // Shift ASCII code back by 5
        decryptedText += String.fromCharCode(charCode);
    }

    
    decryptedText = decryptedText.replace(new RegExp(spaceReplacement, 'g'), ' ');

    document.getElementById('result-text').value = decryptedText;
}


function clearText() {
    document.getElementById('input-text').value = '';
    document.getElementById('result-text').value = '';
}


function copyResult() {
    let resultText = document.getElementById('result-text');
    resultText.select();
    resultText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied the text: ' + resultText.value);
}

