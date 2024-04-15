const fs = require('fs');

const data = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1, "python", 12, "ruby", "php", false];

function filterAndSortArray(arr, condition) {
    if (!condition || (typeof condition !== 'string')) {
        return "Invalid condition";
    }

    const filteredArray = arr.filter(item => typeof item === condition);
    if (filteredArray.length === 0) {
        return "No items match the condition";
    }

    filteredArray.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else {
            return a - b;
        }
    });

    const fileName = `${condition}_array.txt`;
    fs.writeFile(fileName, filteredArray.join('\n'), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Data written to ${fileName}`);
    });

    return filteredArray;
}

const condition = "boolean";
const result = filterAndSortArray(data, condition);
console.log(result);