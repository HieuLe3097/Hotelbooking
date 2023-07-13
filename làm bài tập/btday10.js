// const arr = [21, 4, 5, -1, 15, 4, 13]
// arr.pop()
// console.log(arr)
function removeLastElements(array, n) {
    return array.slice(0, array.length - n)
}

const resultExs1 = removeLastElements([21, 4, 5, -1, 15, 4, 13], 2) // cai so 2 nay la vi tri muon bo di
console.log(resultExs1)

// function insertElementWithIndex(array, n) {
//     return array.splice(2, 99)
// }
// const resultExs2 = insertElementWithIndex ([21, 4, 5, -1, 15, 4, 13], 99)
// console.log(resultExs2)
function insertElementWithIndex(array, index, element) {
    array.splice(index, 0, element)
    return array
}
const resultExs2 = insertElementWithIndex ([21, 4, 5, -1, 15, 4, 13], 3, 99) // cai so 3 nay la vi tri muon thay the so 99 vao
console.log(resultExs2)

