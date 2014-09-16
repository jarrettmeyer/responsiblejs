var Person = (function () {

  function Person(name, countryOfOrigin, age) {
    this.name = name;
    this.countryOfOrigin = countryOfOrigin;
    this.age = age;
  }

  Person.prototype.canBePresident = function () {
    return this.countryOfOrigin === "USA" && this.age >= 35;
  }

  return Person;

})();


describe("Person", function () {

  it("can be president if at least 35 and born in USA", function () {
    var person = new Person("John Doe", "USA", 35);
    expect(person.canBePresident()).toBeTruthy();
  });

  it("cannot be president if under 35", function () {
    var person = new Person("John Doe", "USA", 34);
    expect(person.canBePresident()).toBeFalsy();
  });

  it("cannot be president if not born in USA", function () {
    var person = new Person("Rick Moranis", "Canada", 35);
    expect(person.canBePresident()).toBeFalsy();
  });

  it("can elect an old bottle of bourbon as president", function () {
    Person.prototype.canBePresident.call({ name: "Pappy van Winkle", countryOfOrigin: "USA", age: 42 });
  });

  it("cannot elect an old wine from Spain as president", function () {
    Person.prototype.canBePresident.call({ name: "Rioja", countryOfOrigin: "Spain", age: 50 });
  });

});
