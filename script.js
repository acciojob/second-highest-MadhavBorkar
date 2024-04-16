//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
        return -Infinity;
    }

    let max1 = -Infinity;
    let Max2 = -Infinity;

    for (let n of arr) {
        if (n > max1) {
            Max2 = max1;
            max1 = n;
        } else if (n > Max2 && n !== max1) {
            Max2 = n;
        }
    }

    return Max2;
}