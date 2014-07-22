if (!window.app) {
  window.app = {};
}

window.app.EventUtil = (function () {

  function EventUtil(target) {
    this.target = target;
  }

  EventUtil.prototype.listen = function (eventName, callback) {
    $(this.target).on(eventName, function (data) {
      console.log("Bound event ", eventName, " to target ", this.target, ". Data: ", data);
      callback(data);
    });
  };

  EventUtil.prototype.raise = function (eventName, data) {
    console.log("Triggering event ", eventName, " on target ", this.target, " with data ", data);
    $(this.target).trigger(eventName, data);
  };

  return EventUtil;

}).call(this);