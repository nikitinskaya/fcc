/**
 * Created by vera on 07.06.17.
 * Takes a string and returns the length of the longest word in it
 */

function findLongestWord(str) {
    var arr = str.split(" ");
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= max)
        {max = arr[i].length;}
    }
    return max;
}

console.log(findLongestWord("the quick brown fox")); // 5