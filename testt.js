// const a = [3, 5, 7, 9, 10];
// const b = a.filter((num) => {
//   return num > 5;
// });
// const c = b.map((num) => {
//   num = num * num;
//   return num;
// });
// console.log(c);

// const nums = [10, 11, 12, 13, 14];
// const d = nums.filter((num) => {
//   return 1 === num % 2;
// });
// const p = d.map((h) => {
//   h = h + 1;
//   return h;
// });
// console.log(p);

// const sd = [1, null, 5, undefined, 10];
// const shi = sd.filter((num) => {
//   return num !== null && num !== undefined;
// });
// const hi = shi.map((num) => {
//   num = num * 10;
//   return num;
// });
// console.log(hi);

// const test = [
//   {
//     name: "test1",
//     age: 20,
//   },
//   {
//     name: "test2",
//     age: 16,
//   },
//   {
//     name: "test3",
//     age: 15,
//   },
//   {
//     name: "test4",
//     age: 21,
//   },
// ];

// const b = test
//   .filter((ele) => {
//     return ele.age > 18;
//   })
//   .map((hi) => {
//     return hi.name;
//   });
// console.log(b);

// const names = [
//   {
//     firstName: "haha",
//     lastName: "test",
//   },
//   {
//     firstName: "haha1",
//     lastName: "test1",
//   },
// ];
// const a = names.map((ele) => {
//   let fullname;
//   fullname = ele.firstName + " " + ele.lastName;
//   const sas = [
//     {
//       firstName: ele.firstName,
//       lastName: ele.lastName,
//       fullName: fullname,
//     },
//   ];
// return sas;
// });
// console.log(a);

const students = [
  { name: "Anu", scores: [80, 90, 100] },
  { name: "Temka", scores: [50, 60, 70] },
  { name: "Saraa", scores: [95, 100, 90] },
  { name: "Baatar", scores: [40, 50, 60] },
];
const b = students.map((ele) => {
  let sum = 0;
  const l = ele.scores.map((hi) => {
    sum = sum + hi;
  });
  const check = sum / ele.scores.length;
  return check > 80
    ? [{ ...ele, status: "Execelt" }]
    : check > 60 && check < 80
    ? [{ ...ele, status: "Passed" }]
    : [{ ...ele, status: "failed" }];
});
console.log(b);
// const b = students
//   .filter((element) => {
//     const sum = element.scores.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//     let check;
//     check = sum / element.scores.length;
//     return check > 80;
//   })
//   .map((s) => {
//     s.status = "Excellent";
//     return s;
//   });
// console.log(b);
// const a = students
//   .filter((element) => {
//     const sum = element.scores.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//     let check;
//     check = sum / element.scores.length;
//     return check > 60 && check < 80;
//   })
//   .map((s) => {
//     s.status = "passed";
//     return s;
//   });
// console.log(a);
// const d = students
//   .filter((element) => {
//     const sum = element.scores.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//     let check;
//     check = sum / element.scores.length;
//     return check > 80;
//   })
//   .map((s) => {
//     s.status = "failed";
//     return s;
//   });
// console.log(d);
