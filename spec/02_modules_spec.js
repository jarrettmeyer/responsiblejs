var db = (function () {

  var database = {};

  function get(key) {
    return hasKey(key) ? database[key] : null;
  }

  function getLength() {
    return Object.keys(database).length;
  }

  function hasKey(key) {
    return database.hasOwnProperty(key);
  }

  function store(key, value) {
    database[key] = value;
    return getLength();
  }

  return {
    get: get,
    getLength: getLength,
    store: store
  };

})();


describe("my stupid database", function () {

  it("is a single instance", function () {
    expect(db).toBeDefined();
    expect(typeof db).toEqual('object');
  });

  it('has get and store functions', function () {
    expect(typeof db.get).toEqual('function');
    expect(typeof db.store).toEqual('function');
  });

  it("can save a key-value pair", function () {
    db.store('name', 'ResponsibleJS');
    expect(db.getLength()).toEqual(1);
    expect(db.get('name')).toEqual("ResponsibleJS");
  });

  it('does not have a hasKey function', function () {
    expect(db.hasKey).not.toBeDefined();
    // hasKey does not get returned by the module, so the function
    // is not exposed publicly.
  });

  it("does not have an updateLength function", function () {
    expect(db.updateLength).not.toBeDefined();
  });

});

/* We can wrap "show" and "hide" with a module. This would let us share this
 * functionality in a single location. We can also make a change in one place,
 * instead of having to track multiple changes in multiple places.
 *
 * Effects.show("#selector");
 * Effects.hide("#selector");
 */
var Effects = (function () {

  var _timer = 1000;

  function hide(selector) {
    return $(selector).fadeOut(_timer);
  }

  function show(selector) {
    return $(selector).fadeIn(_timer);
  }

  function setTimer(timer) {
    _timer = timer;
    return _timer;
  }

  return {
    hide: hide,
    show: show,
    setTimer: setTimer
  }

})();
