const sumAll = function(start, finish) {
    let sum = 0
    const increment = start < finish ? 1 : -1

    if (start < 0 || finish < 0) return 'ERROR'
    if (!Number.isInteger(start) || !Number.isInteger(finish)) return 'ERROR' 

    for (let i = start; start < finish ? i <= finish : i >= finish; i += increment) {
        sum += i
    }

    return sum

        //My first solution for the sum
    // if (start < finish) {
    //     for (let i = start ; i <= finish; i++) {
    //         sum += i
    //     }
    //     return sum
    // } else {
    //     for (let i = start; i >= finish; i--) {
    //         sum += i
    //     }
    //     return sum
    // }
};

// Do not edit below this line
module.exports = sumAll;
