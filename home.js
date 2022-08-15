// Задания 1 \\ 

let min = (a, b) => {
    if (typeof (a, b) === 'number') {
        return Math.min(a, b)
    } else if (Array.isArray(a) === true) {
        return Math.min(...a)
    } else if (typeof (a) === 'object') {
        let val = Object.values(a, b)
        return Math.min(...val)
    }
}

console.log('Задания 1 =>', min(1, 2));
console.log('Задания 1 =>', min([1, 2]));
console.log('Задания 1 =>', min({ a: 1, b: 2 }));
console.log('Задания 1 =>', min({ a: 1, b: 2 }, { a: 11, b: 12 }));


// Задания 2 \\     

let a = 1000
let b = 32


let procent = (quantity, wrong) => {
    let count = (wrong / quantity) * 100
    console.log(`Задания 2 => ${count}%`);
}

procent(a, b)

// Задания 3 \\     

let c = [3, 2, 1, 1, 5, 4, -1, -3],
    d = [];
for (; c.length;) { d.push(c.splice(c.indexOf(Math.min(...c)), 1)[0]) }
console.log('Задания 3 =>', d)


// Bubble sort \\ 

function bubbleSort(arr) {

    let i, j;
    let len = arr.length;

    let isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    console.log('Bubble sort =>', arr)
}

let arr = [-243, 45, 23, 356, 3, 5346, 35, 5];

bubbleSort(arr)