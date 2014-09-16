var Person = (function () {

  function Person(name) {
    this.name = name || "";
  }

  return Person;

})();

describe("Person", function () {




  it("has a name attribute", function () {
    var p = new Person("Alice");
    expect(p.name).toEqual("Alice");
  })




  it("can add other attributes all willy-nilly", function () {
    var p = new Person("Bob");
    p.age = 30;
    expect(p.age).toEqual(30);
  });




  it("adds to one instance, but not to all instances", function () {
    var p1 = new Person("Cindy"),
        p2 = new Person("Doug");
    p1.age = 30;
    expect(p1.age).toEqual(30);
    expect(p2.age).not.toBeDefined();
  });




  it("can add to all instances by modifying the prototype", function () {
    var p = new Person("Elaine");
    expect(p.getAge).not.toBeDefined();
    Person.prototype.getAge = function () {
      return this.age || 0;
    };
    var p = new Person("Frank");
    expect(p.getAge()).toEqual(0);
  });




});
