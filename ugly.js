var x = 110;
function a(y) {
  if (y > 10) {
    return y * 2;
  } else {
    return y / 2;
  }
}
var b = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
  hobbies: ["reading", "gardening", "painting"],
  address: { street: "123 Imaginary Rd", zip: 99999 },
};
var c = [1, 2, 3, 4, 5];
for (var i = 0; i < c.length; i++) {
  x += c[i];
}
a(x);
console.log("The value of x is: " + x);
b.hobbies.forEach(function (hobby) {
  console.log("Hobby: " + hobby);
});
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));
