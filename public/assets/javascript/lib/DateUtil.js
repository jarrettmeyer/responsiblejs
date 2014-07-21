if (!window.app) {
  window.app = {}
};

window.app.DateUtil = (function () {

  function DateUtil() {
  }

  DateUtil.prototype.fromEpoch = function(epoch) {
    // Date can be initialized with a number of milliseconds since
    // the last epoch.
    var date = new Date(epoch * 1000);
    return date;
  };

  return DateUtil;

}).call(this);