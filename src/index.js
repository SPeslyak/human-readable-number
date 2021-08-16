module.exports = function toReadable (number) {
    let units, tens, hundreds;
    const unitsArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensArray = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let result;

    if(number === 0) return 'zero';

    hundreds = Math.floor(number / 100);
    tens = Math.floor((number % 100) / 10);
    units = number % 10;

    if((9 < ((tens * 10) + units)) && (((tens * 10) + units)) < 20) units = tens * 10 + units;
    hundreds = ((hundreds === 0) ? '' : `${unitsArray[hundreds]} hundred `);

    result = hundreds + tensArray[tens] + unitsArray[units];
    return result;
}
