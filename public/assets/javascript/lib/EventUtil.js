if (!window.app) {
  window.app = {};
}

window.app.EventUtil = (function () {

  function EventUtil() {
  }

  EventUtil.prototype.listen = function (target, eventName, callback) {
    $(target).on(eventName, function (data) {
      callback(data);
    });
  };

  EventUtil.prototype.raise = function (target, eventName, data) {
    $(target).trigger(eventName, data);
  };

  return EventUtil;

}).call(this);