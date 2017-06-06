/**
 * Created by vera on 06.06.17.
 * Takes an array and 1 or more values to filter out.
 * Returns a filtered array.
 *
 * I've messed with this fucker for ~5 hours.
 * Yes, I'm very proud of it.
 */


function destroyer(arr) {


    var args = Array.prototype.slice.call(arguments);

    for (var i = 1; i < args.length; i++) {
        arr = arr.filter(function (val) {
            return val !== args[i];
        });

    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer(['1', 2, 3, '1', 2, 3, 'hey'], '1', 3)); // [2, 2, 'hey']);

/*
 * This function uses the arguments object for learning purposes.
 * TODO: rewrite it with rest parameter syntax to be more explicit:
 * @param {Array} arr - array to be filtered
 * @param {...*} ...vals - values to filter out
 * @returns (Array) arr - the filtered array
 *
 * TODO: learn the difference btw arguments object and rest parameters
 * TODO: study JSDoc notation
 * TODO: find some tool for unit testing
 */