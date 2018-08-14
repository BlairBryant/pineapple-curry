// take array with possible nested arrays ; flatten it

function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let newArr = arr.splice(i, 1)
            newArr[0].reverse().forEach(x => arr.splice(i, 0, x))
            i = 0
        }
    }
    return arr
}

flatten([4, [8, 5, [2, 7]], 3, [2, [2,[3]]]])
returns
[ 4, 8, 5, 2, 7, 3, 2, 2, 3 ]