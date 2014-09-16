var Doubler = (function () {

  function Doubler(values) {
    this._values = values || [];
  }

  Doubler.prototype.addValue = function (value) {
    this._values.push(value);
    return this;
  };

  Doubler.prototype.double = function (value) {
    return value * 2;
  };

  Doubler.prototype.doubleValues = function () {
    return this._values.forEach(function (x) {
      return this.double(x);
    })
  };

  return Doubler;

})();




describe('this', function () {



  it("can be instanced", function () {
    var doubler = new Doubler();
    expect(typeof doubler).toBe("object");
  })





  it("has an empty array", function () {
    var doubler = new Doubler();
    expect(doubler._values.length).toEqual(0);
  });




  it("can add values to the array", function () {
    var doubler = new Doubler();
    doubler.addValue(20).addValue(30);
    expect(doubler._values.length).toEqual(2);
  });




  it("doubles a single value", function () {
    var doubled = new Doubler().double(5);
    expect(doubled).toEqual(10);
  });




  it("fails to double all values", function () {
    try {
      var doubled = new Doubler(3, 6, 9).doubleValues();
    } catch (e) {
      //console.error(e);
      expect(e.name).toBe("TypeError");
      expect(e.message).toBe("Object 3 has no method 'forEach'");
    }
  });

});
