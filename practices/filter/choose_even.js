'use strict';

function choose_even(collection) {
    const condition = (number) => { return number % 2 == 0 };
    return collection.filter(condition);
}

module.exports = choose_even;