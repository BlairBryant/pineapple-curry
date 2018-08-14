// write fn that takes two arrays and returns
// array with their intersection

function intersection(arr1, arr2) {
    let same = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j] && !same.includes(arr2[j])) same.push(arr2[j])
      }
    }
    return same
  }
  
  intersection([1,3,4,6,5,8], [3,3,7,8])
  returns
  [ 3, 8 ]