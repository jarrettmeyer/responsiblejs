var EventEmitter = require("events").EventEmitter;

var Message = (function () {

  function Message(content) {
    this.content = content;
    this._emitter = new EventEmitter();
  }

  Message.prototype.on = function (eventName, callback) {
    this._emitter.addListener(eventName, callback);
  };

  Message.prototype.send = function (callback) {
    var timeout = parseInt(Math.random() * 100);
    setTimeout(function () {
      console.log("sending message", this.content);
      this._emitter.emit("send", this.content);
      if (callback) {
        callback();
      }
    }.bind(this), timeout);
  };

  return Message;

})();






describe("events", function () {





  it("can create an event", function () {
    var message = new Message("Hello, world!");
    expect(message.content).toEqual("Hello, world!");
  });







  it("can send a message", function (done) {
    var message = new Message("Hello, world!");
    message.on("send", function (data) {
      expect(data).toEqual("Hello, world!");
      done();
    });
    message.send();
  });






  it("can have multiple subscribers to the same event", function (done) {
    var count = 0;
    function checkIfDone() {
      if (count === 2) {
        expect(count).toEqual(2);
        done();
      }
    }
    function onSend() {
      count += 1;
      checkIfDone();
    }

    var message = new Message("I hope this works!");
    message.on("send", onSend);
    message.on("send", onSend);
    message.send();
  })











});
