const Utils = {
  // num 生成数组的个数 生成数字的范围为[rangeL,rangeR]
  generateRandomArray (num, rangeL, rangeR) {
    let arr = new Array()
    if (rangeR >= rangeL) {
      for (let i = 0; i < num; i++) {
        let ranNum = Math.round(Math.random() * (rangeR - rangeL)) + rangeL
        arr.push(ranNum)
      }
      console.log(arr)
      return arr
    } else {
      console.error('右范围应该大于等于左范围')
    }

  },
  // 打印数组的数字
  printArray (arr) {
    let sortResult = document.querySelector('#sortResult')
    let result = ''
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] + '&nbsp&nbsp&nbsp&nbsp'
    }
    sortResult.innerHTML = result
  }
}
// 交换数组中两个值的位置
Array.prototype.swap = function (x, y) {
  this.splice(x, 1, ...this.splice(y, 1, this[x]))
}