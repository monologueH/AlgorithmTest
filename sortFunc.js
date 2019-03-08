const Sort = {
  selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      i !== minIndex && arr.swap(i, minIndex)
    }
    return arr
  },
  insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
      // 将索引所在的值用临时变量保存，与前面的比较，比直接交换位置新能更好
      let tmp = arr[i]
      for (var j = i; j < arr.length; j--) {
        if (arr[j - 1] > tmp) {
          arr[j] = arr[j - 1]
        } else {
          arr[j] = tmp
          break
        }
      }
    }
    return arr
  },
  mergeSort (arr) {
    // 拆分数组，形成递归

    return arr
  }
}
