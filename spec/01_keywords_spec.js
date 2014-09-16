var fs = require('fs');

describe("keywords", function () {








  it("recognizes numbers", function () {
    expect(typeof 123).toEqual("number");
  });








  it("uses the IEEE 754 standard for floating point math", function () {
    expect(0.1 + 0.2).toEqual(0.30000000000000004);
    // Do not rely on precise math with JavaScript!
  });









  it("recognizes strings", function () {
    expect(typeof "abc").toEqual("string");
  })








  it("recognizes functions", function () {
    expect(typeof(function () { return true; })).toEqual("function");
  });








  it("recognizes objects", function () {
    expect(typeof { name: "John Doe" }).toEqual("object");
  })









  it("recognizes arrays as objects", function () {
    expect(typeof [1, 2, 3]).toEqual("object");
  });






  it("has functions on array that object does not have", function () {
    // Both arrays and objects are report as objects, but arrays have more
    // functions available to them than objects have.
    expect({ name: "John Doe" }.forEach).not.toBeDefined();


    expect(typeof [1, 2, 3].filter).toEqual("function");
    expect(typeof [1, 2, 3].forEach).toEqual("function");
    expect(typeof [1, 2, 3].map).toEqual("function");
    expect(typeof [1, 2, 3].reduce).toEqual("function");
  });







  it("has many falsy values", function () {
    /* A falsy value means it does not evaluate as true in a conditional statement.
     * if (value) {
     *   doSomethin();
     * } else {
     *   doAnotherThing();
     * }
     *
     * Everything else is truthy!
     */
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy(); // an empty string.

    /* When I see JS code that looks like...
     *
     *   if (value == null) {
     *     ...
     *   }
     *
     * ... this is an immediate warning sign! Does this developer actually know
     * JavaScript?
     *
     * 1.) used == instead of ===
     * 2.) Tested for null instead of falsy.
     *
     */
  });







  it("recognizes empty arrays and empty objects as truthy", function() {
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
  })





  it("has confusing results for equality", function () {

    // An empty array is equal to 0.
    expect([] == 0).toBeTruthy();

    // An array with a single element is equal to the element.
    expect([1] == 1).toBeTruthy();
    expect([2] == 2).toBeTruthy();
    expect(["a"] == "a").toBeTruthy();

    // An array with multiple elements isn't equal to anything.
    expect([1, 2] == 2).toBeFalsy();

    // Even though arrays are objects, an empty object isn't equal to 0.
    expect({} == 0).toBeFalsy();

    // Numbers are equal to their strings
    expect(1 == "1").toBeTruthy();
    expect(2 == "2").toBeTruthy();
    expect(3.4 == "3.4").toBeTruthy();

  });





  it("requires 3 equal signs (===) to clear up confusion", function () {
    expect([] === 0).toBeFalsy();
    expect([1] === 1).toBeFalsy();
    expect(1 === '1').toBeFalsy();
    // === will check both type and equivalence
  });






  it("supports multiple number formats", function () {
    expect(1000).toEqual(1000);
    expect(1e3).toEqual(1000); // scientific notation
    expect(01000).toEqual(512); // leading 0 (octal)
    expect(0x1000).toEqual(4096); //
  });






  it("has a funky try/catch mechanism", function () {
    // Run node ./lib/trycatch.js
  });


});
