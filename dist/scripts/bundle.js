!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.doit=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Editor,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Editor = (function() {
  function Editor(type, topics) {
    this.type = type;
    this.topics = topics != null ? topics : [];
    this.subscribe = __bind(this.subscribe, this);
    this.ajaxCall = __bind(this.ajaxCall, this);
    this.publish = __bind(this.publish, this);
  }

  Editor.prototype.type = '';

  Editor.prototype.topics = [];

  Editor.prototype.publish = function(topic, args) {
    var many, subscribers, _results;
    subscribers = this.topics[topic];
    many = (subscribers ? subscribers.length : 0);
    _results = [];
    while (len--) {
      _results.push(subscribers[len].func(topic, args));
    }
    return _results;
  };

  Editor.prototype.ajaxCall = function() {
    var data;
    data = {
      a: 1,
      b: 2
    };
    return this.publish(this.topics[0], data);
  };

  Editor.prototype.subscribe = function(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    return this.topics[topic].push({
      tk: 'tk',
      func: func
    });
  };

  return Editor;

})();

module.exports = {
  Editor: Editor
};

},{}]},{},[1])(1)
});