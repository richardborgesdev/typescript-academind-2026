let hobbies = ['Sports', 'Cooking'];

// hobbies.push(1); error

let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = [ 'Max', 'Anna'];

// ...

let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1]
// possibleResults = [5, 10, 12] error

// ...

let user : {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 1,
  },
}

let val: {} = 'some text'; // must not be null
