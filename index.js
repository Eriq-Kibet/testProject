function start() {
  console.log("Started ...");
}
// log test
function test() {
  console.log("test..");
}
//Add two numbers
const sum = (a, b) => {
  const sum = a + b;
  console.log(sum);
  return sum;
};

function multiply(a,b){
  const m = a * b;
  console.log('Multipy', m);
  return m;
}

start();
sum(4, 5);
multiply(3,7);
