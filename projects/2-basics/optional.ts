function generateError(msg?: string) {
  throw new Error(msg);
}

generateError('An error occurred!');

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
}

let input = '';
const didProvideInput = input ?? false;
