describe("DateUtil", function () {

  var dateUtil, result;

  beforeEach(function () {
    dateUtil = app.DateUtil;
  });

  describe("fromEpoch", function () {

    it("returns the expected date for 0", function () {
      result = dateUtil.fromEpoch(0);
      expect(result).toEqual(new Date(0));
    });

    it("returns the expected date for given values", function () {
      var tests = [ 1234567890, 146926389750 ];
      for (var i = 0, len = tests.length; i < len; i += 1) {
        result = dateUtil.fromEpoch(tests[i]);
        expect(result).toEqual(new Date(tests[i] * 1000));
      }
    });

  });

});