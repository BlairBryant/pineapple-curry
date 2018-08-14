// write fn that takes two arrays as
// and reorders with respect to order
// array = ['C', 'D', 'E', 'F', 'G']
// order = [3, 0, 4, 1, 2]
// result = ['D', 'F', 'G', 'C', 'E']

function reOrder(arr, orderArr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
      ans.push(null)
    }
    for (let i = 0; i < arr.length; i++) {
      ans[orderArr[i]] = arr[i]
    }
    return ans
}

reOrder(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2])
returns
[ 'D', 'F', 'G', 'C', 'E' ]