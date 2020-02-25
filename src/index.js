module.exports = function toReadable(number) {
    const num = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }
    for (let key in num) {
        if (key == number && key != 100) {
            return num[key];
        }
        else {
            if (number == 0) {
                return 'zero';
            }
            else if (number > 20 && number < 100 && number !== 20 && number !== 30 && number !== 40 && number !== 50 && number !== 60 && number !== 70 && number !== 80 && number !== 90) {
                let arrNum = number.toString().split('');
                return `${num[arrNum[0] * 10]} ${num[arrNum[1]]}`;
            }
            else if (number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
                return `${num[number / 100]} ${num[100]}`;
            }
            else if (number > 100 && number !== 200 && number !== 300 && number !== 400 && number !== 500 && number !== 600 && number !== 700 && number !== 800 && number !== 900) {
                let arrNum = number.toString().split('');
                if (arrNum[1] == 1) {
                    return `${num[arrNum[0]]} ${num[100]} ${num[+arrNum[2] + 10]}`;
                }
                else if (arrNum[2] == 0) {
                    return `${num[arrNum[0]]} ${num[100]} ${num[arrNum[1] * 10]}`;
                }
                else if (arrNum[1] == 0 && arrNum.length >2) {
                    return `${num[arrNum[0]]} ${num[100]} ${num[arrNum[2]]}`;
                }
                else {
                    return `${num[arrNum[0]]} ${num[100]} ${num[arrNum[1] * 10]} ${num[arrNum[2]]}`;
                }
            }
        }
    }
}