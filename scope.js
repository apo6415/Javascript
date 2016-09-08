var globalScope1 = "Global";

//
// not using var to define a new variable is bad form! 
//
globalScope2 = "Global";

function f() {
  globalScope3 = "Global";
}
