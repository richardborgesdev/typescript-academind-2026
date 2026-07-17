enum Role {
  Admin,
  Editor,
  Guest,
}

// let userRole: Role = Role.Admin; // 0 -> admin, 1 - guest
let userRole: 'admin' | 'editor' | 'guest' = 'guest';

// userRole = Role.Guest;

// ...
let possibleResults: [-1 | 1, -1 | 1];
possibleResults = [-1, -1];
