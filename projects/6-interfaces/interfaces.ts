interface Authenticatable {
  email: string;
  password: string;

  login(email: string): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable /*, AnotherInterface */ {
  constructor(public email: string, public password: string) {

  }

  login(email: string): void {

  }

  logout(): void {

  }
}

// ..

function authenticate(user: Authenticatable) {
  user.login();
}

// interface Authenticatable {
//   role: string,
// }

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // TODO
  },
  logout() {
    // TODO
  },
};
