class User {
  private _firstName: string = '';
  private _lastName: string = '';


  public set firstName(name : string) {
    if (name.trim() === '' ) {
      throw new Error("Invalid name.");
    }

    this._firstName = name;
  }

  public set lastName(name : string) {
    if (name.trim() === '' ) {
      throw new Error("Invalid name.");
    }

    this._lastName = name;
  }


  public get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  static eid = 'USER';

  static greet() {
    console.log('Hello');
  }
}

const max = new User();

max.firstName = 'Max';
max.lastName = 'Scharzmüller';

console.log(max.fullName);
console.log(User.eid);
User.greet();
