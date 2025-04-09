

/*
 * Divide and conquer approach for sorting
 * auxillary array is an extra set of memory maintained
 * for the sort to have Stability (retain order when sorting by multiple keys)
*/

function sort(arrayToSort) {
  let aux = [];
  recursiveSort(arrayToSort, aux, 0, arrayToSort.length - 1);
}

function merge(arrayToSort, auxillary, lo, mid, hi) {
  for (let l = lo; l <= hi; l++) {
    auxillary[l] = arrayToSort[l];
  }
  let i = lo;
  let j = mid + 1;
  console.log("Merge stack - ", auxillary, lo, mid, hi)
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arrayToSort[k] = auxillary[j++];
    } else if (j > hi) {
      arrayToSort[k] = auxillary[i++];
    } else if (auxillary[j] < auxillary[i]) {
      arrayToSort[k] = auxillary[j++];
    } else {
      arrayToSort[k] = auxillary[i++];
    }
  }
}

function recursiveSort(arrayToSort, aux, lo, hi) {
  if (hi <= lo) {
    return;
  }
  
  let mid = parseInt(lo + Math.floor((hi - lo) / 2));
  console.log("Recursive Stack - ", lo, mid, hi)

  recursiveSort(arrayToSort, aux, lo, mid);
  recursiveSort(arrayToSort, aux, mid + 1, hi);
  merge(arrayToSort, aux, lo, mid, hi);
}
const sentence = ["M", "E", "R", "G", "E", "S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"];
sort(sentence)


console.log("SORTED - ", sentence)
