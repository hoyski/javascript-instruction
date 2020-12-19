const min = function (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

function min2(a, b) {
    return (a < b) ? a : b;
}

const min3 = (a, b) => (a < b) ? a : b;

console.log(min3(3, 5));