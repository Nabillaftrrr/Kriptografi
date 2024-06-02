function encryptMessage() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedMessage = caesarCipher(message, shift);
    document.getElementById('encryptedMessage').innerText = encryptedMessage;
}

function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isUpperCase = char === char.toUpperCase();
        const charUpper = char.toUpperCase();

        if (alphabet.includes(charUpper)) {
            let index = alphabet.indexOf(charUpper);
            index = (index + shift) % 26;
            if (index < 0) index += 26;
            let newChar = alphabet[index];
            if (!isUpperCase) newChar = newChar.toLowerCase();
            result += newChar;
        } else {
            result += char;
        }
    }

    return result;
}
