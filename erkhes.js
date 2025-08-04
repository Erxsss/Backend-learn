const users = [
  { name: "Alice", age: 22, hobbies: ["reading", "coding", "hiking"] },
  { name: "Bob", age: 16, hobbies: ["gaming", "coding"] },
  { name: "Charlie", age: 19, hobbies: ["drawing", "cooking"] },
  { name: "Diana", age: 25, hobbies: ["coding", "chess", "music"] },
];
const b = users
  .filter((ele) => {
    return ele.age > 18 && ele.hobbies.includes("coding");
  })
  .map((hi) => {
    for (let i = 0; i < hi.hobbies.length; i++) {
      const s = [
        {
          name: hi.name,
          hobbyCount: hi.hobbies.length,
        },
      ];
      return s;
    }
  });
console.log(b);
