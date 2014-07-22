if (!window.app) {
  window.app = {}
};

window.app.DateUtil = (function () {

  var fromEpoch = function (epoch) {
    /* Date can be initialized with a number of milliseconds since
       the last epoch. This utility method allows for a clearer factory
       method. */
    var date = new Date(epoch * 1000);
    return date;
  };

  return {
    fromEpoch: fromEpoch
  };

}).call(this);