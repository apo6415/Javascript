/*
Start
End
nextTick 1
setTimeout 1
nextTick 2
Promise 1
Promise 2
setImmediate 1
setImmediate 2
*/
console.log('Start');
 
setImmediate(() => {
  console.log('setImmediate 1');
});
 
process.nextTick(() => {
  console.log('nextTick 1');
});
 
Promise.resolve().then(() => {
  console.log('Promise 1');
});
 
setTimeout(() => {
  console.log('setTimeout 1');
  process.nextTick(() => {
    console.log('nextTick 2');
  });
 
  setImmediate(() => {
    console.log('setImmediate 2');
  });
 
  Promise.resolve().then(() => {
    console.log('Promise 2');
  });
 
}, 0);
 
console.log('End');
