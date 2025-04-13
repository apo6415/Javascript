// How many lesser numbers on the right of a number in the list?

const numbers = [null, 4, 8, 7, 1, 2, 3];
let k = numbers.length - 1;
let N = numbers.length - 1;

function swap (arr, index1, index2) {
  const current = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = current;
  //console.log(arr, index1, index2)
}

for (let j = Math.floor(N / 2); j >= 1; j--) {
  const childOnLeftIndex = 2*j;
  const childOnRightIndex = 2*j + 1;

  const parentVal = numbers[j];
  console.log('Current j = ', j, 'Number at j = ', numbers[j]);

  if (j === 1) {
    console.log(numbers)
  }
  
  if (childOnRightIndex <= N && numbers[childOnRightIndex] > parentVal) {
    swap(numbers, childOnRightIndex, j);
    if (childOnLeftIndex <= N && numbers[childOnLeftIndex] > parentVal) {
      swap(numbers, childOnLeftIndex, j);  
    }
  } else if (childOnLeftIndex <= N && numbers[childOnLeftIndex] > parentVal) {
    swap(numbers, childOnLeftIndex, j);
  } else if (childOnRightIndex <= N && childOnLeftIndex <= N && numbers[childOnRightIndex] > numbers[childOnLeftIndex]) {
    swap(numbers, childOnLeftIndex, childOnRightIndex);
  }
  
}

console.log(numbers)



/* ALTERNATE
// How many lesser numbers on the right of a number in the list?

const numbers = [null, 4, 8, 7, 1, 2, 3];
let k = numbers.length - 1;
let N = numbers.length - 1;

function swap (arr, index1, index2) {
  const current = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = current;
  //console.log(arr, index1, index2)
}

for (let j = Math.floor(N / 2); j >= 1; j--) {
  while (2*j <= N) {
    let l = 2*j;
    console.log('j = ', j, 'l = ', l, 'Numbers = ', numbers[j], numbers[l] , numbers[l + 1])
    if (l < N && numbers[l] < numbers[l + 1]) {
      l++;
    }

    if (numbers[j] > numbers[l]) {
      break;
    }

    swap(numbers, j, l);
    j = l;
  }
  
}

console.log(numbers)
*/
