interface Authenticatable {
  email: string;
  password: string;

  login(email: string): void;
  logout(): void;
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
