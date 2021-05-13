function fun1() {
  const message = fun2();
  console.log("message = ", message);
}

const fun2 = function () {
  return 'This is not hoisted';
};

fun1();
