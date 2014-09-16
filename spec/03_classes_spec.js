var Point = (function () {

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.distanceTo = function (point) {
    var x2 = Math.pow(this.x - point.x, 2);
    var y2 = Math.pow(this.y - point.y, 2);
    return Math.sqrt(x2 + y2);
  };

  Point.prototype.translate = function (byX, byY) {
    this.x += byX;
    this.y += byY;
  };

  return Point;

})();


describe("Point", function () {



  it("has a defined constructor", function () {
    expect(Point).toBeDefined();
    expect(typeof Point).toEqual("function");
  });



  it("can be instanced", function () {
    var p = new Point(3, 4);
    expect(p.x).toEqual(3);
    expect(p.y).toEqual(4);
  })



  it("can calculate the distance to the origin", function () {
    var p = new Point(6, 8);
    var origin = new Point(0, 0);
    expect(p.distanceTo(origin)).toBeCloseTo(10, 6);
  });



  it("can translate a point", function () {
    var p = new Point(5, 9);
    p.translate(2, -3);
    expect(p.x).toEqual(7);
    expect(p.y).toEqual(6);
  })


});
