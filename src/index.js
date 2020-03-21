const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodeSentence = '';

    for ( let beggin_word = 0, end_word = 10; end_word < expr.length + 1; beggin_word += 10, end_word+=10 ) {
        let letter = expr.slice(beggin_word, end_word);
        let decodeLetter = '';
        
        if ( letter === '**********') {
            decodeSentence += ' ';
        } else {
            for ( let beggin_letter = 0, end_letter = 2; end_letter < letter.length + 1; beggin_letter += 2, end_letter += 2 ) {
                let decodePart = letter.slice(beggin_letter, end_letter);
                if ( decodePart == '10') {
                    decodeLetter += '.';
                } else if (decodePart == '11') {
                    decodeLetter += '-';
                }
            }
            decodeSentence += MORSE_TABLE[decodeLetter];
        }
    }
    return decodeSentence;
}

module.exports = {
    decode
}