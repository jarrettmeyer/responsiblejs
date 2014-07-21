describe("IndexView", function () {

  var view;

  beforeEach(function () {
    view = new app.IndexView();
  });

  it("has an ajaxUtil attribute", function () {
    expect(view.ajaxUtil).toBeTruthy();
  });

  it("has a dateUtil attribute", function () {
    expect(view.dateUtil).toBeTruthy();
  });

  it("has a settings attribute", function () {
    expect(view.settings).toBeTruthy();
  });


});