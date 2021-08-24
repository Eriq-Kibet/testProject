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

const modulus = (a, b) => {
  const modulus = a % b;
  console.log(modulus);
  return modulus;
};

function concatText(a,b){
   const joinedText = `${a} ${b}`;
   console.log('joinedText', joinedText);
   return joinedText;
}
modulus(9, 18);
start();
sum(4, 5);
multiply(3,7);
concatText("Hello","World");
