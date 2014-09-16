describe("anonymous functions", function () {



  /* We make use of anonymous function in javascript. Frequently these are used
   * in callback objects. We can do this because functions, either with or without
   * names, are first class objects in JS.
   *
   * $.("#my-button").on("click", function () {
   *   alert("You clicked the button!");
   * });
   *
   */




  it("makes extensive use of anonymous functions", function () {
    var doubled = [];
    [1, 2, 3].forEach(function (x) {
      doubled.push(x * 2);
    });
    expect(doubled[0]).toEqual(2);
    expect(doubled[1]).toEqual(4);
    expect(doubled[2]).toEqual(6);
  });






  it("can use named functions though, as long as the signature matches", function () {
    var doubled = [];
    function double(w) {
      doubled.push(w * 2);
    }
    [1, 2, 3].forEach(double);
    expect(doubled[0]).toEqual(2);
    expect(doubled[1]).toEqual(4);
    expect(doubled[2]).toEqual(6);
  })

});
