interface Authenticatable {
  email: string;
  password: string;

  login(email: string): void;
  logout(): void;
}
