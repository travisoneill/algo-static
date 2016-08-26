module.exports = {

  bubbleSort(){
  return `function bubbleSort(arr) {
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
        var temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}`
  },

  quickSortRec(){
    return `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return this.quickSort(left).concat([pivot]).concat(this.quickSort(right));
}`;
  },

  heapSort(){
    return `function heapSort(arr){
  let last = arr.length - 1;
  function parent(idx){
    if(idx > 0 && idx <= last){return ~~((idx -1) / 2);}
  }
  function children(idx){
    let children = {l: undefined, r: undefined}
    if(2 * idx + 1 <= last){children.l = 2 * idx + 1;}
    if(2 * idx + 2 <= last){children.r = 2 * idx + 2;}
    return children
  }
  function swap(idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  function pair(idx){
    if(idx < 1){return undefined}
    return children(parent(idx));
  }

  function heapStep(idx){
    let l = pair(idx).l;
    let r = pair(idx).r;
    let par = parent(idx);
    let max = arr[l];
    let maxi = l;
    if(r && l && arr[r] > arr[l]){
      max = arr[r];
      maxi = r;
    }
    if(max > arr[par]){swap(maxi, par);}
    if(children(maxi).l){heapStep(children(maxi).l);}
  }

  function makeHeap(n){
    for (let i = n; i > 0; i-=2) {
      last = n;
      heapStep(i);
    }
  }

  makeHeap(last)

  for (let i = last; i > 0; i--) {
    swap(0, i);
    last--;
    heapStep(1);
  }
}`
},

radixSort(){
return `function radixSort(arr){
  let iter = 0;
  function step(a, n){
    let max = a[0];
    let indexArr = [-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < a.length; i++) {
      if(n === 0 && Math.abs(a[i]) > max){max = Math.abs(a[i]);}
      let dig = ~~( (a[i] / Math.pow(10, n)) % 10);
      indexArr[dig + 9] += 1;
    }

    if(n === 0){ iter = ~~(Math.log10(max));}

    for (let i = 1; i < indexArr.length; i++) {
      indexArr[i] += indexArr[i-1];
    }

    let sorted = [];
    for (let i = a.length - 1; i >= 0; i--) {
      let dig = ~~( (a[i] / Math.pow(10, n)) % 10);
      let idx = indexArr[dig + 9];
      sorted[idx] = a[i];
      indexArr[dig + 9] -= 1;
    }
    return sorted;
  }

  for (let i = 0; i <= iter; i++) {
    arr = step(arr, i);
  }
  return arr;
}`
  },

  countingSort(){
    return `function countingSort(arr){
  let map = {};
  let max = arr[0];
  let min = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max){max = arr[i];}
    if(arr[i] < min){min = arr[i];}
    if(map[arr[i]] > 0){map[arr[i]]++;} else {map[arr[i]] = 1;}
  }
  let idx = 0;
  for (let i = min; i <= max; i++) {
    if(map[i]){
      for (let j = 0; j < map[i]; j++) {
        arr[idx] = i;
        idx++;
      }
    }
  }
}`
  },

  mergeSortIter(){
    return `function mergeSortIter(array){

  for (let i = 0; i < array.length; i++) {
    array[i] = [array[i]];
  }

  let merge = function(arr1, arr2){
    arr1 = arr1 || [];
    arr2 = arr2 || [];
    let merged = [];
    while(arr1.length > 0 && arr2.length > 0){
      if(arr1[0] < arr2[0]){merged.push(arr1.shift());}
      else {merged.push(arr2.shift());}
    }
    return merged.concat(arr1, arr2)
  }

  let merging = [];
  while(array.length > 1){
    merging = [];
    for (let i = 0; i < array.length; i+=2) {
      let j = i + 1
      merging.push(merge(array[i], array[j]));
    }
    array = merging;
  }
  return array;
}`
  },

  jsSort(){
    return `function jsSort(arr){
  arr.sort((a,b) => a-b);
}`
  }



};
