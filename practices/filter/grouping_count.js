'use strict';

function grouping_count(collection) {
    return collection.reduce((numbers, number) => {
        if (number in numbers) numbers[number]++;
        else numbers[number] = 1;
        return numbers;
    }, {});
}

module.exports = grouping_count;