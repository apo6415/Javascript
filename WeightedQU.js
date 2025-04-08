let size = 10;
let connection = [];
let componentSize = [];

for (let i = 0; i < 10; i++) {
  connection[i] = i;
  componentSize[i] = 1;
}

function root(p) {
  let rt = p;
  
  while (rt != connection[rt]) {
    rt = connection[rt]
  }

  while (p != rt) {
    const newP = connection[p];
    connection[p] = rt;
    p = newP;
  } 
   
  return rt;
}

function union(i, j) {
  let rootOfi = root(i);
  let rootOfj = root(j);

  if (componentSize[rootOfi] < componentSize[rootOfj]) {
    connection[rootOfi] = connection[rootOfj];
    componentSize[rootOfj] += componentSize[rootOfi];
  } else {
    connection[rootOfj] = connection[rootOfi];
    componentSize[rootOfi] += componentSize[rootOfj];
  }

  
}

union(4, 3)
union(7, 8)
union(5, 4)
union(7, 5)
/*
  * 4
  * Array [0, 1, 2, 4, 4, 4, 6, 4, 7, 9]
*/
console.log(root(3))
console.log(connection)
