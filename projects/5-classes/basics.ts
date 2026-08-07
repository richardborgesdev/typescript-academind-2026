// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  public readonly hobbies: string[] = [];


  constructor(public name: string, public age: number) {}
}

const max = new User('Max', 36);
const fred = new User('Fred', 29);
