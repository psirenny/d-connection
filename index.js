function Component () {}

Component.prototype.reconnect = function () {
  var timeout = this.model.get('timeout') || 1000;
  this.model.set('reconnecting', true);
  this.model.reconnect();
  setTimeout(this.reconnected.bind(this), timeout);
};

Component.prototype.reconnected = function () {
  this.model.del('reconnecting');
};

module.exports = Component;
