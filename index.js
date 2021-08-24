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

start();
sum(4, 5);
