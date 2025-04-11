const nailsAndBolts = [{val: "N1", key: 1, type: "Nut"}, {val: "N2", key: 2, type: "Nut"}, {val: "B1", key: 1, type: "Bolt"}, {val: "N3", key: 3, type: "Nut"}, {val: "B2", key: 2, type: "Bolt"}, {val: "B3", key: 3, type: "Bolt"}];

// Expected ouput ["N1", "B1", "N2", "B2", "N3", "B3"]
function partition(arrayToSort, lo, hi) {
  if (hi <= lo) return;
  
  let i = lo;
  let j = hi;
  let lt = lo;
  let gt = hi;
  let v = arrayToSort[lo];
  
  while (i <= gt) {
    if (arrayToSort[i]['key'] === v['key']) {
      i++;
    } else if (arrayToSort[i]['key'] < v['key']) {
      const cache = arrayToSort[i];
      arrayToSort[i] = arrayToSort[lt];
      arrayToSort[lt] = cache;
      lt++;
    } else if (arrayToSort[i]['key'] > v['key']) {
      const cache = arrayToSort[i];
      arrayToSort[i] = arrayToSort[gt];
      arrayToSort[gt] = cache;
      gt--;
    }
  }

  partition(arrayToSort, lo, lt - 1);
  partition(arrayToSort, gt + 1, hi);
}

partition(nailsAndBolts, 0, nailsAndBolts.length - 1)

console.log(nailsAndBolts)
