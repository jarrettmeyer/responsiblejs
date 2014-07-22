describe("IndexView", function () {

  var view;

  beforeEach(function () {
    view = new app.IndexView();
  });

  it("has an ajax attribute", function () {
    expect(view.ajax).toBeDefined();
  });

  it("has a date attribute", function () {
    expect(view.date).toBeDefined();
  });

  it("has a settings attribute", function () {
    expect(view.settings).toBeDefined();
  });

  describe("doubleIt", function () {

    beforeEach(function () {
      $("body").append('<input type="number" name="value" id="value" />');
      $("body").append('<button id="double-it">Double It</button>');
      view = new app.IndexView();
      spyOn(view.ajax, "postDouble").and.callFake(function () {
        view.setValue(2);
      });
    });

    afterEach(function () {
      $('#value').remove();
      $('#double-it').remove();
    });

    it("calls postDouble function", function () {
      view.doubleIt();
      expect(view.ajax.postDouble.calls.count()).toEqual(1);
    });

    it("raises an event when the button is clicked", function (done) {
      view.events.listen('doubleIt-begin', function () {
        expect(true).toBeTruthy();
        done();
      });
      $("#value").val(4);
      $("#double-it").trigger("click", {});
    });

    it("sets the value attribute", function (done) {
      view.events.listen("setValue-completed", function (value) {
        expect(view.value).toEqual(2);
        done();
      });
      view.doubleIt();
    });

  });

  describe("getTime", function () {

    beforeEach(function () {
      view = new app.IndexView();
    });

    it("appends time to an array", function (done) {
      expect(view.times.length).toEqual(0);
      view.events.listen("getTime-completed", function (data) {
        expect(view.times.length).toEqual(1);
        done();
      })
      view.getTime();
    });

  });

});