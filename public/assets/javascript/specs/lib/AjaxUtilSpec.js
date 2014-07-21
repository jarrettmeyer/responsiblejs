describe("AjaxUtil", function () {

  var ajaxUtil;

  beforeEach(function () {
    ajaxUtil = new app.AjaxUtil;
  });

  describe("getTime", function () {

    it("returns a time object", function (done) {
      ajaxUtil.getTime(function (result) {
        expect(result.timestamp).toBeTruthy();
        expect(result.timestamp).toBeGreaterThan(1400000000);
        done();
      });
    });

  });

  describe("postDouble", function() {

    it("doubles a value", function (done) {
      ajaxUtil.postDouble(6, function (result) {
        expect(result.value).toEqual(12);
        done();
      });
    });

  });

});