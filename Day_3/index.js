const hello = () => {
  console.log("hi");
  return 20;
};
hello();

//Map
const arr = [1, 2, 3, 4, 5, 6];
const sqr = arr.map((num) => {
  return num * num;
});
console.log(sqr);

//object
const person = {
  name: "Sumit",
  age: 21,
  fun: function greet() {
    console.log(`Hello Sir, My name is  ${this.name}`);
  },
};

person.fun();

//Array Resverses

const num = [111, 222, 333, 444, 558];
num.reverse();
console.log(num);

//Callback Function

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreeting() {
  console.log("How are you?");
}
greet("sumit", afterGreeting);

//Filter

const voterAge = [5, 8, 19, 24, 35, 41, 76];

const eligibilityList = voterAge.filter((num) => {
  if (num >= 18) {
    return num;
  }
});
console.log("Eligible Voter Age: " + eligibilityList);

//forEach

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num + 2);
});
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => {
  console.log(num * 2);
});

//slice

const names = ["sumit", "vaishnavi", "roshan", "abhishek", "virat"];

const newNames = names.slice(0, 3);

console.log(newNames);

//splice

const DC = ["sumit", "vaishnavi", "roshan", "abhishek", "virat"];
DC.splice(1, 3, "Batman", "superman", "mydad");
console.log(DC);
