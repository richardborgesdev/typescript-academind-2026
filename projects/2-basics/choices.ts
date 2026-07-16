enum Role {
  Admin,
  Editor,
  Guest,
}

let userRole: Role = Role.Admin; // 0 -> admin, 1 - guest

userRole = Role.Guest;
