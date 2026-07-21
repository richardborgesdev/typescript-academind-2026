function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndTrhow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function performJob(cb: (msg: string) => void) {
  cb('Job done');
}

const logMsg = (msg: string) => {
  console.log(msg);
}

performJob(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
}

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('hello there!');
    return this.name;
  }
}
