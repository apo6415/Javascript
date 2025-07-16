class minPQ {
    constructor(pqLen) {
        this.N = 0
        this.arr = [];
        this.arr[0] = null;
    }
    
    isEmpty() {
        return this.N === 0;
    }
    
    swap (arr, index1, index2) {
        const current = arr[index1];
        console.log('swapping', index1, index2)
        arr[index1] = arr[index2];
        arr[index2] = current;
      //console.log(arr, index1, index2)
    }
    
    delMin() {
        let min = this.arr[1];
        let lastItem = this.arr.pop();
        this.N--;
        if (this.N > 0) {
            this.arr[1] = lastItem;
            this.pullDown(1);
        }
        return min;
    }
    
    insert(key) {
        let k = ++this.N;
        this.arr[k] = key;
        console.log('Inserting -- ', key, this.arr, k)
        this.swimUp(k);
    }
    
    pullDown(k) {
        console.log('pulldoqn', this.arr, this.N)
        while (2*k <= this.N) {
            let j = 2*k;
            if (j < this.N && this.arr[j] > this.arr[j + 1]) {
                j++;
            }
            
            if (!(this.arr[k] > this.arr[j])) {
                break;
            }
            
            this.swap(this.arr, k, j);
            k = j;
        }
        
        console.log('pulldoqnComplete', this.arr)
    }
    
    swimUp(k) {
        while (k > 1 && this.arr[Math.ceil(k/2)] >this.arr[k]) {
            
            this.swap(this.arr, k, Math.ceil(k / 2));
            
            k = Math.ceil(k / 2)
        }
        // console.log(this.arr)
        
    }
}

const pq = new minPQ(3);

let arr1 = [3,5,7];
let arr2 = [0, 6];
let arr3 = [0, 6, 28];

let c1 = 0; let c2 = 0; let c3  = 0;
let output = [];

while (c1 < arr1.length || c2 < arr2.length || c3 < arr3.length) {
    console.log(c1, c2, c3)
    if (c1 < arr1.length) {
        pq.insert(arr1[c1])
        c1++;
    }
    
    if (c2 < arr2.length) {
        pq.insert(arr2[c2])
        c2++;
    }
    
    if (c3 < arr3.length) {
        pq.insert(arr3[c3])
        c3++;
    }
    
    while (!pq.isEmpty()) {
      const lowest = pq.delMin();
      output.push(lowest);    
    }
    
}

console.log(pq.arr, output)

// Expected:
/**
[ null ] [
  0, 0, 3,  5,
  6, 6, 7, 28
]
*/
