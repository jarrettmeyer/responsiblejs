describe("IndexView", function () {

  var view;

  beforeEach(function () {
    view = new app.IndexView();
  });

  it("has an ajaxUtil attribute", function () {
    expect(view.ajaxUtil).toBeDefined();
  });

  it("has a dateUtil attribute", function () {
    expect(view.dateUtil).toBeDefined();
  });

  it("has a settings attribute", function () {
    expect(view.settings).toBeDefined();
  });

  describe("doubleIt", function () {

    beforeEach(function () {
      spyOn(view.ajaxUtil, "postDouble").and.callFake(function () {
        view.setValue(2);
      });
    });

    it("calls postDouble function", function () {
      view.doubleIt();
      expect(view.ajaxUtil.postDouble.calls.count()).toEqual(1);
    });

    it("sets the value attribute", function (done) {
      $(view).on("setValue-completed", function (value) {
        expect(view.value).toEqual(2);
        done();
      });
      view.doubleIt();
    });

  });

  describe("getTime", function () {

    beforeEach(function () {
    });

    it("appends time to an array", function (done) {
      expect(view.times.length).toEqual(0);
      $(view).on("getTime-completed", function () {
        expect(view.times.length).toEqual(1);
        done();
      })
      view.getTime();
    });

  });

});