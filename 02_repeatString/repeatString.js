const repeatString = function(originalString, times) {
    let repeatedString = ''
    if (times < 0) {
        return 'ERROR'
    } else if (times === 0){
        return ''
    } else {
        for (let i = 0; i < times; i++) {
            repeatedString += originalString 
        }
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
