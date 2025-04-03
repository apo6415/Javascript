const sentence = ["Q", "U", "I", "C", "K", "S", "O", "R", "T", "E", "X", "A", "M", "P", "L", "E"];

const index = 4;

function swap (arr, index1, index2) {
  const current = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = current;
  //console.log(arr, index1, index2)
}

function partition (sentence, lo, hi) {
  let i = lo, j = hi+1;
  let pivot = sentence[lo];
  while (true) {
    while(sentence[++i] < pivot) {
      if (i == hi) {
        break;
      }
    }

    while(pivot < sentence[--j]) {
      if (j == lo) {
        break;
      }
    }

    if (i >= j) {
      break;
    }
    swap(sentence, i, j);
  }

  swap(sentence, lo, j);
  
}
partition(sentence, 0, sentence.length - 1)
console.log(sentence);
// Expected output: "The character at index 4 is q"
