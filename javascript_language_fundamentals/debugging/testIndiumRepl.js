'strict mode';

function doSomething() {
  let myVar = 'hello';
  for (let i = 0; i < 5; i++) {
    console.log(String(i));
  }
  return { myVar };
}

doSomething();

