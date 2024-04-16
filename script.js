//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
        return -Infinity;
    }

    let max1 = -Infinity;
    let Max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            Max2 = max1;
            max1 = num;
        } else if (num > Max2 && num !== max1) {
            Max2 = num;
        }
    }

    return Max2;
}