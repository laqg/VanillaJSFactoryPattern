const Emplooye = {
  DEVELOPER: "developer",
  TESTER: "tester"
};

function Developer(name, index) {
  this.index = index;
  this.name = name;
  this.type = "developer";
}

function Tester(name, index) {
  this.index = index;
  this.name = name;
  this.type = "tester";
}

export function EmployeeFactory() {
  this.create = (name, type, index) => {
    switch (type) {
      case Emplooye.DEVELOPER:
        return new Developer(name, index);
      case Emplooye.TESTER:
        return new Tester(name, index);
      default:
        break;
    }
  };
}
