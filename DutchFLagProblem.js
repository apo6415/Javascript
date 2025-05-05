function dutchFlagPartition(A, pivot) {
  let smaller = 0, equal = 0, larger = A.length;

  while (equal < larger) {
    if (A[equal] < pivot) {
      swap(A, smaller++, equal++);
    } else if (A[equal] === pivot) {
      ++equal;
    } else {
      swap(A, equal, --larger)
    }
  }

  return A;
}

function swap (arr, index1, index2) {
  const current = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = current;
  //console.log(arr, index1, index2)
}


console.log(dutchFlagPartition([2, 2,3,1,3, 1], 2))
