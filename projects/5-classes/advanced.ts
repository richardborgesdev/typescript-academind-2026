class User {
  protected _firstName: string = '';
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


class Employee extends User {
  constructor(public jobTitle: string) {
    super();
    // super.firstName = 'Max';
  }

  work() {
    // ...
    console.log(this._firstName);

  }
}

abstract class UIElement {
  constructor(public identifier: string) {

  }

  clone(targetLocation: string) {

  }
}

// let UIElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }
}
