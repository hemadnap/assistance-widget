(function () {
  'use strict';

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _typeof$1(o) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof$1(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof$1(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof$1(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof$1(i) ? i : i + "";
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof$1(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }

  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }

  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }

  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }

  function _isNativeReflectConstruct$2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
      return !!t;
    })();
  }

  function _construct(t, e, r) {
    if (_isNativeReflectConstruct$2()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }

  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var regeneratorRuntime$1 = {exports: {}};

  var _typeof = {exports: {}};

  var hasRequired_typeof;

  function require_typeof () {
  	if (hasRequired_typeof) return _typeof.exports;
  	hasRequired_typeof = 1;
  	(function (module) {
  		function _typeof(o) {
  		  "@babel/helpers - typeof";

  		  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
  		    return typeof o;
  		  } : function (o) {
  		    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
  		}
  		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  	} (_typeof));
  	return _typeof.exports;
  }

  var hasRequiredRegeneratorRuntime;

  function requireRegeneratorRuntime () {
  	if (hasRequiredRegeneratorRuntime) return regeneratorRuntime$1.exports;
  	hasRequiredRegeneratorRuntime = 1;
  	(function (module) {
  		var _typeof = require_typeof()["default"];
  		function _regeneratorRuntime() {
  		  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
  		    return e;
  		  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  		  var t,
  		    e = {},
  		    r = Object.prototype,
  		    n = r.hasOwnProperty,
  		    o = Object.defineProperty || function (t, e, r) {
  		      t[e] = r.value;
  		    },
  		    i = "function" == typeof Symbol ? Symbol : {},
  		    a = i.iterator || "@@iterator",
  		    c = i.asyncIterator || "@@asyncIterator",
  		    u = i.toStringTag || "@@toStringTag";
  		  function define(t, e, r) {
  		    return Object.defineProperty(t, e, {
  		      value: r,
  		      enumerable: true,
  		      configurable: true,
  		      writable: true
  		    }), t[e];
  		  }
  		  try {
  		    define({}, "");
  		  } catch (t) {
  		    define = function define(t, e, r) {
  		      return t[e] = r;
  		    };
  		  }
  		  function wrap(t, e, r, n) {
  		    var i = e && e.prototype instanceof Generator ? e : Generator,
  		      a = Object.create(i.prototype),
  		      c = new Context(n || []);
  		    return o(a, "_invoke", {
  		      value: makeInvokeMethod(t, r, c)
  		    }), a;
  		  }
  		  function tryCatch(t, e, r) {
  		    try {
  		      return {
  		        type: "normal",
  		        arg: t.call(e, r)
  		      };
  		    } catch (t) {
  		      return {
  		        type: "throw",
  		        arg: t
  		      };
  		    }
  		  }
  		  e.wrap = wrap;
  		  var h = "suspendedStart",
  		    l = "suspendedYield",
  		    f = "executing",
  		    s = "completed",
  		    y = {};
  		  function Generator() {}
  		  function GeneratorFunction() {}
  		  function GeneratorFunctionPrototype() {}
  		  var p = {};
  		  define(p, a, function () {
  		    return this;
  		  });
  		  var d = Object.getPrototypeOf,
  		    v = d && d(d(values([])));
  		  v && v !== r && n.call(v, a) && (p = v);
  		  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  		  function defineIteratorMethods(t) {
  		    ["next", "throw", "return"].forEach(function (e) {
  		      define(t, e, function (t) {
  		        return this._invoke(e, t);
  		      });
  		    });
  		  }
  		  function AsyncIterator(t, e) {
  		    function invoke(r, o, i, a) {
  		      var c = tryCatch(t[r], t, o);
  		      if ("throw" !== c.type) {
  		        var u = c.arg,
  		          h = u.value;
  		        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
  		          invoke("next", t, i, a);
  		        }, function (t) {
  		          invoke("throw", t, i, a);
  		        }) : e.resolve(h).then(function (t) {
  		          u.value = t, i(u);
  		        }, function (t) {
  		          return invoke("throw", t, i, a);
  		        });
  		      }
  		      a(c.arg);
  		    }
  		    var r;
  		    o(this, "_invoke", {
  		      value: function value(t, n) {
  		        function callInvokeWithMethodAndArg() {
  		          return new e(function (e, r) {
  		            invoke(t, n, e, r);
  		          });
  		        }
  		        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  		      }
  		    });
  		  }
  		  function makeInvokeMethod(e, r, n) {
  		    var o = h;
  		    return function (i, a) {
  		      if (o === f) throw Error("Generator is already running");
  		      if (o === s) {
  		        if ("throw" === i) throw a;
  		        return {
  		          value: t,
  		          done: true
  		        };
  		      }
  		      for (n.method = i, n.arg = a;;) {
  		        var c = n.delegate;
  		        if (c) {
  		          var u = maybeInvokeDelegate(c, n);
  		          if (u) {
  		            if (u === y) continue;
  		            return u;
  		          }
  		        }
  		        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
  		          if (o === h) throw o = s, n.arg;
  		          n.dispatchException(n.arg);
  		        } else "return" === n.method && n.abrupt("return", n.arg);
  		        o = f;
  		        var p = tryCatch(e, r, n);
  		        if ("normal" === p.type) {
  		          if (o = n.done ? s : l, p.arg === y) continue;
  		          return {
  		            value: p.arg,
  		            done: n.done
  		          };
  		        }
  		        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
  		      }
  		    };
  		  }
  		  function maybeInvokeDelegate(e, r) {
  		    var n = r.method,
  		      o = e.iterator[n];
  		    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
  		    var i = tryCatch(o, e.iterator, r.arg);
  		    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
  		    var a = i.arg;
  		    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  		  }
  		  function pushTryEntry(t) {
  		    var e = {
  		      tryLoc: t[0]
  		    };
  		    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  		  }
  		  function resetTryEntry(t) {
  		    var e = t.completion || {};
  		    e.type = "normal", delete e.arg, t.completion = e;
  		  }
  		  function Context(t) {
  		    this.tryEntries = [{
  		      tryLoc: "root"
  		    }], t.forEach(pushTryEntry, this), this.reset(true);
  		  }
  		  function values(e) {
  		    if (e || "" === e) {
  		      var r = e[a];
  		      if (r) return r.call(e);
  		      if ("function" == typeof e.next) return e;
  		      if (!isNaN(e.length)) {
  		        var o = -1,
  		          i = function next() {
  		            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
  		            return next.value = t, next.done = true, next;
  		          };
  		        return i.next = i;
  		      }
  		    }
  		    throw new TypeError(_typeof(e) + " is not iterable");
  		  }
  		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
  		    value: GeneratorFunctionPrototype,
  		    configurable: true
  		  }), o(GeneratorFunctionPrototype, "constructor", {
  		    value: GeneratorFunction,
  		    configurable: true
  		  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
  		    var e = "function" == typeof t && t.constructor;
  		    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  		  }, e.mark = function (t) {
  		    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  		  }, e.awrap = function (t) {
  		    return {
  		      __await: t
  		    };
  		  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
  		    return this;
  		  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
  		    void 0 === i && (i = Promise);
  		    var a = new AsyncIterator(wrap(t, r, n, o), i);
  		    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
  		      return t.done ? t.value : a.next();
  		    });
  		  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
  		    return this;
  		  }), define(g, "toString", function () {
  		    return "[object Generator]";
  		  }), e.keys = function (t) {
  		    var e = Object(t),
  		      r = [];
  		    for (var n in e) r.push(n);
  		    return r.reverse(), function next() {
  		      for (; r.length;) {
  		        var t = r.pop();
  		        if (t in e) return next.value = t, next.done = false, next;
  		      }
  		      return next.done = true, next;
  		    };
  		  }, e.values = values, Context.prototype = {
  		    constructor: Context,
  		    reset: function reset(e) {
  		      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
  		    },
  		    stop: function stop() {
  		      this.done = true;
  		      var t = this.tryEntries[0].completion;
  		      if ("throw" === t.type) throw t.arg;
  		      return this.rval;
  		    },
  		    dispatchException: function dispatchException(e) {
  		      if (this.done) throw e;
  		      var r = this;
  		      function handle(n, o) {
  		        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
  		      }
  		      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
  		        var i = this.tryEntries[o],
  		          a = i.completion;
  		        if ("root" === i.tryLoc) return handle("end");
  		        if (i.tryLoc <= this.prev) {
  		          var c = n.call(i, "catchLoc"),
  		            u = n.call(i, "finallyLoc");
  		          if (c && u) {
  		            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
  		            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  		          } else if (c) {
  		            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
  		          } else {
  		            if (!u) throw Error("try statement without catch or finally");
  		            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  		          }
  		        }
  		      }
  		    },
  		    abrupt: function abrupt(t, e) {
  		      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
  		        var o = this.tryEntries[r];
  		        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
  		          var i = o;
  		          break;
  		        }
  		      }
  		      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
  		      var a = i ? i.completion : {};
  		      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
  		    },
  		    complete: function complete(t, e) {
  		      if ("throw" === t.type) throw t.arg;
  		      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
  		    },
  		    finish: function finish(t) {
  		      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  		        var r = this.tryEntries[e];
  		        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
  		      }
  		    },
  		    "catch": function _catch(t) {
  		      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  		        var r = this.tryEntries[e];
  		        if (r.tryLoc === t) {
  		          var n = r.completion;
  		          if ("throw" === n.type) {
  		            var o = n.arg;
  		            resetTryEntry(r);
  		          }
  		          return o;
  		        }
  		      }
  		      throw Error("illegal catch attempt");
  		    },
  		    delegateYield: function delegateYield(e, r, n) {
  		      return this.delegate = {
  		        iterator: values(e),
  		        resultName: r,
  		        nextLoc: n
  		      }, "next" === this.method && (this.arg = t), y;
  		    }
  		  }, e;
  		}
  		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  	} (regeneratorRuntime$1));
  	return regeneratorRuntime$1.exports;
  }

  var regenerator;
  var hasRequiredRegenerator;

  function requireRegenerator () {
  	if (hasRequiredRegenerator) return regenerator;
  	hasRequiredRegenerator = 1;
  	// TODO(Babel 8): Remove this file.

  	var runtime = requireRegeneratorRuntime()();
  	regenerator = runtime;

  	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  	try {
  	  regeneratorRuntime = runtime;
  	} catch (accidentalStrictMode) {
  	  if (typeof globalThis === "object") {
  	    globalThis.regeneratorRuntime = runtime;
  	  } else {
  	    Function("r", "regeneratorRuntime = r")(runtime);
  	  }
  	}
  	return regenerator;
  }

  var regeneratorExports = requireRegenerator();
  var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regeneratorExports);

  var template$1 = "<div id=\"sdg-feedback-widget\" class=\"sdg-feedback-widget\">\n   <!-- Closed feedback widget -->\n   <div id=\"minimized-feedback\" class=\"minimized-feedback\">\n      Feedback widget\n   </div>\n\n   <!-- Open feedback widget -->\n   <div class=\"feedback-widget\">\n      <!-- Header -->\n      <header>\n         <div id=\"title\" class=\"title\"></div>\n\n         <a id=\"close\" class=\"close\">\n            <img src=\"./assets/icons/close.svg\" alt=\"Close\">\n         </a>\n      </header>\n\n      <main>\n         <div class=\"form\">\n            <!-- Rating -->\n            <div class=\"rating\">\n               <div id=\"rating-label\" class=\"label\"></div>\n               <input type=\"text\" id=\"rating-value\" hidden>\n               <div class=\"rates\">\n                  <a id=\"rate-1\" class=\"rate\">\n                     <img src=\"./assets/icons/star.svg\" alt=\"\">\n                     <span class=\"value\">1</span>\n                  </a>\n                  <a id=\"rate-2\" class=\"rate\">\n                     <img src=\"./assets/icons/star.svg\" alt=\"\">\n                     <span class=\"value\">2</span>\n                  </a>\n                  <a id=\"rate-3\" class=\"rate\">\n                     <img src=\"./assets/icons/star.svg\" alt=\"\">\n                     <span class=\"value\">3</span>\n                  </a>\n                  <a id=\"rate-4\" class=\"rate\">\n                     <img src=\"./assets/icons/star.svg\" alt=\"\">\n                     <span class=\"value\">4</span>\n                  </a>\n                  <a id=\"rate-5\" class=\"rate\">\n                     <img src=\"./assets/icons/star.svg\" alt=\"\">\n                     <span class=\"value\">5</span>\n                  </a>\n               </div>\n            </div>\n\n            <!-- Text -->\n            <div class=\"text\">\n               <div id=\"text-label\" class=\"label\"></div>\n               <div id=\"text-component\" class=\"text-component\">\n                  <textarea id=\"text-value\"></textarea>\n                  <div id=\"text-info\" class=\"text-info\"></div>\n               </div>\n            </div>\n\n            <!-- Submit -->\n            <button id=\"submit\" disabled=\"disabled\"></button>\n         </div>\n\n         <!-- Submitted message -->\n         <div id=\"submitted-message\" class=\"submitted-message\"></div>\n      </main>\n   </div>\n\n   <!-- Overlay -->\n   <div id=\"overlay\" class=\"overlay\"></div>\n</div>\n\n\n<style lang=\"scss\" scoped>\n   :root {\n      --color-blue: #6EC8F2;\n      --color-dark-blue: #006F9E;\n      --color-black: #2B2D42;\n      --color-gray: #6D6E83;\n      --color-shadow: #0C0F1E1A;\n      --color-background: #FFFFFF;\n      --color-light-gray: #F5F5F5;\n      --color-overlay: #bfc0c6;\n      --color-error: #d4003c;\n   }\n\n   .sdg-feedback-widget {\n      z-index: 1000;\n\n      .overlay {\n         display: none;\n         position: fixed;\n         top: 0;\n         left: 0;\n         width: 100%;\n         height: 100%;\n         background: #0203067A;\n         ;\n         z-index: 999;\n      }\n\n      .minimized-feedback {\n         display: none;\n         justify-content: center;\n         align-items: center;\n         cursor: pointer;\n         position: fixed;\n         bottom: 0;\n         right: 50px;\n         padding: 5px 10px;\n         background: #6EC8F2;\n         border: 2px solid #006F9E !important;\n         border-top-right-radius: 8px;\n         border-top-left-radius: 8px;\n         font-family: \"Barlow\", sans-serif;\n         font-size: 18px;\n         line-height: 28px;\n         font-weight: 400;\n         vertical-align: middle;\n         cursor: pointer;\n         z-index: 1000;\n         transition: .1s;\n\n         &:hover {\n            background: #DAF2FC;\n         }\n      }\n\n      .feedback-widget {\n         display: none;\n         flex-direction: column;\n         align-items: center;\n         justify-content: center;\n         gap: 10px;\n         position: fixed;\n         bottom: 0;\n         right: 50px;\n         width: 400px;\n         background: #FFFFFF;\n         padding: 10px;\n         box-shadow: 0px 4px 16px #0C0F1E1A;\n         border-top-left-radius: 16px;\n         border-top-right-radius: 16px;\n         color: #2B2D42;\n         padding: 16px;\n         z-index: 1000;\n\n         &.is-open {\n            display: flex;\n         }\n\n\n         /* Header */\n         header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 100%;\n\n            .title {\n               font-family: \"Barlow\", sans-serif;\n               font-size: 22px;\n               line-height: 28px;\n               font-weight: 600;\n               vertical-align: middle;\n               width: 100%;\n            }\n\n            .close {\n               display: flex;\n               justify-content: center;\n               align-items: center;\n               cursor: pointer;\n               transition: .1s;\n               padding: 3px;\n               border-radius: 4px;\n\n               &:hover {\n                  background: #F5F5F5;\n               }\n            }\n         }\n\n\n         /* Main */\n         main,\n         .form {\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            width: 100%;\n\n            .label {\n               font-family: \"Barlow\", sans-serif;\n               font-size: 18px;\n               line-height: 24px;\n               font-weight: 700;\n               width: 100%;\n            }\n\n            /* Rating */\n            .rating {\n               display: none;\n               flex-direction: column;\n               align-items: start;\n               gap: 20px;\n               margin: 10px 0;\n               width: 100%;\n\n               .rates {\n                  display: flex;\n                  gap: 8px;\n                  width: 100%;\n\n                  .rate {\n                     display: flex;\n                     flex-direction: column;\n                     align-items: center;\n                     gap: 5px;\n                     cursor: pointer;\n                     position: relative;\n                     width: 40px;\n                     height: 40px;\n\n                     * {\n                        position: absolute;\n                     }\n\n                     .value {\n                        font-family: \"Barlow\", sans-serif;\n                        font-size: 14px;\n                        line-height: 28px;\n                        font-weight: 600;\n                        padding-top: 8px;\n                     }\n\n                     img {\n                        content: url('./assets/icons/star.svg');\n                        background-size: cover;\n                        width: 40px;\n                     }\n\n                     &:hover img {\n                        content: url('./assets/icons/star-hover.svg');\n                     }\n\n                     &.active img {\n                        content: url('./assets/icons/star-active.svg');\n                     }\n                  }\n               }\n            }\n\n            /* Text */\n            .text {\n               display: none;\n               flex-direction: column;\n               align-items: start;\n               gap: 10px;\n               width: 100%;\n\n               .text-component {\n                  display: flex;\n                  flex-direction: column;\n                  align-items: start;\n                  gap: 2px;\n                  width: 100%;\n\n                  textarea {\n                     height: 100px;\n                     border: 2px solid #6D6E83;\n                     border-radius: 4px;\n                     width: 100%;\n                     max-width: calc(100% - 5px);\n                     resize: vertical;\n                     outline: none;\n                  }\n\n                  .text-info {\n                     font-family: \"Barlow\", sans-serif;\n                     font-size: 14px;\n                     line-height: 24px;\n                     font-weight: 400;\n                     color: #6D6E83;\n                  }\n\n                  &.error {\n                     textarea {\n                        border: 2px solid #d4003c;\n                     }\n\n                     .text-info {\n                        color: #d4003c;\n                     }\n                  }\n               }\n            }\n\n            /* Submit */\n            button {\n               width: 100%;\n               height: 48px;\n               padding: 10px 20px;\n               background: #6EC8F2;\n               border: 2px solid #006F9E !important;\n               color: #2B2D42;\n               border: none;\n               border-radius: 8px;\n               cursor: pointer;\n               margin-top: 30px;\n               transition: .1s;\n               font-family: \"Roboto\", sans-serif;\n               font-size: 16px;\n               line-height: 24px;\n               font-weight: 600;\n\n               &:hover {\n                  background: #DAF2FC;\n               }\n\n               &:disabled {\n                  opacity: .6;\n                  cursor: inherit;\n\n                  &:hover {\n                     background: #6EC8F2;\n                  }\n\n               }\n            }\n\n            .submitted-message {\n               display: none;\n               justify-content: center;\n               align-items: center;\n               gap: 10px;\n               font-family: \"Barlow\", sans-serif;\n               font-size: 18px;\n               line-height: 28px;\n               font-weight: 400;\n               color: #2B2D42;\n               padding: 50px 0;\n            }\n         }\n      }\n\n      /* Minimized widget */\n      &.is-minimize {\n         .overlay {\n            display: none;\n         }\n\n         .minimized-feedback {\n            display: flex;\n         }\n\n         .feedback-widget {\n            display: none;\n         }\n      }\n\n      /* Open widget */\n      &.is-open {\n         .overlay {\n            display: flex;\n         }\n\n         .minimized-feedback {\n            display: none;\n         }\n\n         .feedback-widget {\n            display: flex;\n         }\n      }\n\n      /* is text */\n      &.is-text {\n        .form .text {\n            display: flex;\n         }\n      }\n\n      /* is rating */\n      &.is-rating {\n        .form .rating {\n            display: flex;\n         }\n      }\n\n   }\n\n   /* Sumbit content */\n   .submitted main {\n      .form {\n         display: none;\n      }\n\n      .submitted-message {\n         display: flex;\n         flex-direction: column;\n         align-items: center;\n         gap: 10px;\n      }\n   }\n\n   /* Mobile breakpoint */\n   @media (max-width: 768px) {\n      .feedback-widget {\n         width: calc(100% - 35px);\n         right: 0;\n      }\n   }\n</style>";

  function _callSuper$1(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct$1() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() { return !!t; })(); }
  var locales$1 = {
    en: {
      title: 'Help us improve',
      ratingLabel: 'How do you rate your overall satisfaction with the service you received?',
      textfieldLabel: 'How can we improve the service?',
      submit: 'Submit',
      submitted: 'Thank you for your feedback!'
    },
    nl: {
      title: 'Help ons verbeteren',
      ratingLabel: 'Hoe beoordeel je je algemene tevredenheid over de dienst die je hebt ontvangen?',
      textfieldLabel: 'Hoe kunnen we de dienst verbeteren?',
      submit: 'Verzenden',
      submitted: 'Bedankt voor je feedback!'
    },
    fr: {
      title: 'Aidez-nous à nous améliorer',
      ratingLabel: 'Comment évaluez-vous votre satisfaction générale concernant le service que vous avez reçu ?',
      textfieldLabel: 'Comment pouvons-nous améliorer le service ?',
      submit: 'Envoyer',
      submitted: 'Merci pour votre retour!'
    },
    de: {
      title: 'Helfen Sie uns, uns zu verbessern',
      ratingLabel: 'Wie bewerten Sie Ihre allgemeine Zufriedenheit mit dem erhaltenen Service?',
      textfieldLabel: 'Wie können wir den Service verbessern?',
      submit: 'Absenden',
      submitted: 'Vielen Dank für Ihr Feedback!'
    }
  };
  var SDGFeedbackWidget = /*#__PURE__*/function (_HTMLElement) {
    function SDGFeedbackWidget() {
      var _this;
      _classCallCheck(this, SDGFeedbackWidget);
      _this = _callSuper$1(this, SDGFeedbackWidget);
      _this.attachShadow({
        mode: 'open'
      });
      _this.widgetId = 'sdg-feedback-widget';
      _this.deviceId = new Date().toISOString();
      _this.buttonId = null;
      _this.isRating = false;
      _this.isText = false;
      _this.isMinimize = true;
      _this.isOverlayClose = true;
      _this._isSubmittable = false;
      _this._isSubmit = false;
      _this.isOpen = true;
      _this._rating = 0;
      _this._text = '';
      _this.textLengthLimit = 256;
      _this.feedbackUrl = 'http://localhost:8082/api/public/feedbacks';
      _this.loadTemplate().then(function () {
        _this.getAttributes();
        _this.addLanguageContent();
        _this.listenCloseButton();
        _this.listenToMinimized();
        _this.listenSubmit();
        _this.listenToOverlay();
      });
      return _this;
    }
    _inherits(SDGFeedbackWidget, _HTMLElement);
    return _createClass(SDGFeedbackWidget, [{
      key: "rating",
      get: function get() {
        return this._rating;
      },
      set: function set(value) {
        this._rating = value;
        this.isIsSubmittable();
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      },
      set: function set(value) {
        this._text = value;
        this.isIsSubmittable();
      }
    }, {
      key: "isSubmittable",
      get: function get() {
        return this._isSubmittable;
      },
      set: function set(value) {
        this._isSubmittable = value;
      }
    }, {
      key: "isSubmit",
      get: function get() {
        return this._isSubmit;
      },
      set: function set(value) {
        this._isSubmit = value;

        // add submit class to the widget
        var widget = this.shadowRoot.querySelector("#".concat(this.widgetId));
        if (value) {
          widget.classList.add('submitted');
        } else {
          widget.classList.remove('submitted');
        }
      }
    }, {
      key: "isIsSubmittable",
      value: function isIsSubmittable() {
        var _this$text, _this$text2;
        switch (true) {
          case !this.isText && this.isRating && this.rating > 0:
            this.isSubmittable = true;
            break;
          case !this.isRating && this.isText && ((_this$text = this.text) === null || _this$text === void 0 ? void 0 : _this$text.length) > 0:
            this.isSubmittable = true;
            break;
          case this.isText && this.isRating && this.rating > 0 && ((_this$text2 = this.text) === null || _this$text2 === void 0 ? void 0 : _this$text2.length) > 0:
            this.isSubmittable = true;
            break;
          default:
            this.isSubmittable = false;
            break;
        }
      }

      // Widget functions
    }, {
      key: "open",
      value: function open() {
        this.isOpen = false;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-open');
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = true;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.remove('is-open');
      }
    }, {
      key: "displayMinimize",
      value: function displayMinimize() {
        this.isMinimize = false;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-minimize');
      }
    }, {
      key: "hideMinimize",
      value: function hideMinimize() {
        this.isMinimize = true;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.remove('is-minimize');
      }
    }, {
      key: "displayRating",
      value: function displayRating() {
        this.isRating = true;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-rating');
        this.listenRating();
      }
    }, {
      key: "hideRating",
      value: function hideRating() {
        this.isRating = false;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.remove('is-rating');
      }
    }, {
      key: "displayText",
      value: function displayText() {
        this.isText = true;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-text');
        this.listenTextfield();
      }
    }, {
      key: "hideText",
      value: function hideText() {
        this.isText = false;
        this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.remove('is-text');
      }
    }, {
      key: "loadTemplate",
      value: function () {
        var _loadTemplate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.shadowRoot.innerHTML = template$1;
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function loadTemplate() {
          return _loadTemplate.apply(this, arguments);
        }
        return loadTemplate;
      }()
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        // get attributes from the element 
        this.buttonId = this.getAttribute('button-id') || null;
        this.isMinimize = this.getAttribute('minimize') !== null && this.getAttribute('minimize') !== 'false';
        this.isRating = this.getAttribute('rating') !== null && this.getAttribute('rating') !== 'false';
        this.isText = this.getAttribute('text') !== null && this.getAttribute('text') !== 'false';
        this.isOpen = this.getAttribute('open') !== null && this.getAttribute('open') !== 'false';
        this.isOverlayClose = this.getAttribute('overlay-close') !== null && this.getAttribute('overlay-close') !== 'false';
        this.isListeningQuery = this.getAttribute('listening-query') !== null && this.getAttribute('listening-query') !== 'false';
        this.textLengthLimit = this.getAttribute('text-length-limit') || this.textLengthLimit;
        this.feedbackUrl = this.getAttribute('feedback-url') || this.feedbackUrl;

        // set attributes to the widget
        // minimized
        if (this.isMinimize) {
          this.displayMinimize();
        }

        // is open
        if (this.isOpen) {
          this.open();
        }

        // is rating
        if (this.isRating) {
          this.displayRating();
        }

        // is text
        if (this.isText) {
          this.displayText();
        }

        // listening query
        if (this.isListeningQuery) {
          this.listenQuery();
        }
      }
    }, {
      key: "listenQuery",
      value: function listenQuery() {
        /*
           Params:
           - sdg-fw-id=...            // button id (default: null)
           - sdg-fw-min=0             // minimized feedback widget (default: 0)
           - sdg-fw-rating=0          // rating display (default: 0)
           - sdg-fw-text=0            // text display   (default: 0)
           - sdg-fw-open=0            // open feedback widget (default: 0)
           - sdg-fw-overlay-close=0   // close feedback widget via overlay click (default: 0)
            example:
           /demo/feedback-widget.html?sdg-fw-min=0&sdg-fw-rating=1&sdg-fw-text=1&sdg-fw-open=1&sdg-fw-overlay-close=0&sdg-fw-id=fb4761e7-0ee2-48fd-89f3-ae7950f1c946
        */
        var urlParams = new URLSearchParams(window.location.search);
        this.buttonId = urlParams.has('sdg-fw-id') ? urlParams.get('sdg-fw-id') : this.buttonId;
        this.isMinimize = urlParams.has('sdg-fw-min') && urlParams.get('sdg-fw-min') === '1';
        this.isRating = urlParams.has('sdg-fw-rating') && urlParams.get('sdg-fw-rating') === '1';
        this.isText = urlParams.has('sdg-fw-text') && urlParams.get('sdg-fw-text') === '1';
        this.isOpen = !urlParams.has('sdg-fw-open') || urlParams.get('sdg-fw-open') === '0';
        this.isOverlayClose = urlParams.has('sdg-fw-overlay-close') && urlParams.get('sdg-fw-overlay-close') === '1';

        // add class to the widget
        // minized
        if (this.isMinimize) {
          this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('minimized');
        }
      }
    }, {
      key: "addLanguageContent",
      value: function addLanguageContent() {
        var lang = document.documentElement.lang || 'en';
        var title = this.shadowRoot.querySelector('#title');
        var ratingLabel = this.shadowRoot.querySelector('#rating-label');
        var textLabel = this.shadowRoot.querySelector('#text-label');
        var submit = this.shadowRoot.querySelector('#submit');
        var submitted = this.shadowRoot.querySelector('#submitted-message');

        // Get the website's language
        var locale = locales$1[lang] || locales$1['en'];
        // Set content to current language
        if (title && ratingLabel && textLabel && submit && submitted) {
          title.textContent = locale.title;
          ratingLabel.textContent = locale.ratingLabel;
          textLabel.textContent = locale.textfieldLabel;
          submit.textContent = locale.submit;
          submitted.textContent = locale.submitted;
        }
      }
    }, {
      key: "listenCloseButton",
      value: function listenCloseButton() {
        var _this2 = this;
        var close = this.shadowRoot.querySelector('#close');
        close.addEventListener('click', function () {
          _this2.close();
        });
      }
    }, {
      key: "listenToOverlay",
      value: function listenToOverlay() {
        var _this3 = this;
        var overlay = this.shadowRoot.querySelector('#overlay');
        overlay.addEventListener('click', function () {
          if (_this3.isOverlayClose) {
            _this3.close();
          }
        });
      }
    }, {
      key: "listenToMinimized",
      value: function listenToMinimized() {
        var _this4 = this;
        var open = this.shadowRoot.querySelector('#minimized-feedback');
        open.addEventListener('click', function () {
          _this4.open();
        });
      }
    }, {
      key: "listenRating",
      value: function listenRating() {
        var _this5 = this;
        var ratingValue = this.shadowRoot.querySelector('#rating-value');
        var rates = this.shadowRoot.querySelectorAll('.rate');

        // Retrieve the rating value
        rates.forEach(function (rate) {
          rate.addEventListener('click', function (event) {
            // get the rating value
            var value = event.currentTarget.querySelector('.value').textContent;
            ratingValue.value = value;
            _this5.rating = value;

            // add active class to the selected rate
            rates.forEach(function (r) {
              return r.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
          });
        });
      }
    }, {
      key: "listenTextfield",
      value: function listenTextfield() {
        var _this6 = this;
        var textComponent = this.shadowRoot.querySelector('#text-component');
        var textValue = this.shadowRoot.querySelector('#text-value');
        var textInfo = this.shadowRoot.querySelector('#text-info');
        textInfo.textContent = "".concat(textValue.value.length, "/").concat(this.textLengthLimit);

        // Retrieve the text value
        textValue.addEventListener('input', function (event) {
          _this6.text = event.target.value;

          // display the text length
          textInfo.textContent = "".concat(textValue.value.length, "/").concat(_this6.textLengthLimit);
          if (textValue.value.length > _this6.textLengthLimit) {
            _this6.isSubmittable = false;

            // add error class to text component
            textComponent.classList.add('error');
          } else {
            // remove class error
            textComponent.classList.remove('error');
          }
        });
      }
    }, {
      key: "listenSubmit",
      value: function listenSubmit() {
        var _this7 = this;
        var submit = this.shadowRoot.querySelector('#submit');
        submit.addEventListener('click', function () {
          // send data to the server
          var data = {
            buttonId: _this7.buttonId,
            overallExperience: _this7.rating,
            submissionDate: new Date().toISOString(),
            freeText: _this7.text,
            deviceIdentifier: _this7.deviceId,
            language: document.documentElement.lang || 'en'
          };
          _this7.isSubmittable = false;

          // send data to the server
          fetch(_this7.feedbackUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(function (response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            // reset the form
            _this7.rating = 0;
            _this7.text = '';

            // set isSubmit
            _this7.isSubmit = true;
            return response.json();
          }).then(function (data) {
            console.log('Success:', data);
          })["catch"](function (error) {
            console.error('Error:', error);
          })["finally"](function () {
            _this7.isSubmittable = true;
          });
        });
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Define the custom element
  customElements.define('sdg-feedback-widget', SDGFeedbackWidget);

  var template = "<div id=\"widget\" class=\"pre-footer-widget\">\n\n   <header>\n      <div id=\"header-title\" class=\"title\"></div>\n   </header>\n\n   <main>\n      <div class=\"button-list\">\n         <!-- Chat -->\n         <div id=\"chat-button\" class=\"assistance-button\">\n            <div class=\"left\">\n               <div class=\"icon\">\n                  <img src=\"./assets/icons/conversation.svg\" alt=\"\">\n               </div>\n               <div class=\"content\">\n                  <div class=\"title\"></div>\n                  <div class=\"description\"></div>\n               </div>\n            </div>\n            <div class=\"right\">\n               <img src=\"./assets/icons/chevron-right.svg\" alt=\"\">\n            </div>\n         </div>\n\n         <!-- Phone -->\n         <div id=\"phone-button\" class=\"assistance-button\">\n            <div class=\"left\">\n               <div class=\"icon\">\n                  <img src=\"./assets/icons/phone.svg\" alt=\"\">\n               </div>\n               <div class=\"content\">\n                  <div class=\"title\"></div>\n                  <div class=\"description\"></div>\n               </div>\n            </div>\n            <div class=\"right\">\n               <img src=\"./assets/icons/chevron-right.svg\" alt=\"\">\n            </div>\n         </div>\n\n         <!-- Contact -->\n         <div id=\"contact-button\" class=\"assistance-button\">\n            <div class=\"left\">\n               <div class=\"icon\">\n                  <img src=\"./assets/icons/message.svg\" alt=\"\">\n               </div>\n               <div class=\"content\">\n                  <div class=\"title\"></div>\n                  <div class=\"description\"></div>\n               </div>\n            </div>\n            <div class=\"right\">\n               <img src=\"./assets/icons/chevron-right.svg\" alt=\"\">\n            </div>\n         </div>\n\n         <!-- Appointlent -->\n         <div id=\"appointment-button\" class=\"assistance-button\">\n            <div class=\"left\">\n               <div class=\"icon\">\n                  <img src=\"./assets/icons/calendar.svg\" alt=\"\">\n               </div>\n               <div class=\"content\">\n                  <div class=\"title\"></div>\n                  <div class=\"description\"></div>\n               </div>\n            </div>\n            <div class=\"right\">\n               <img src=\"./assets/icons/chevron-right.svg\" alt=\"\">\n            </div>\n         </div>\n\n         <!-- Office -->\n         <div id=\"office-button\" class=\"assistance-button\">\n            <div class=\"left\">\n               <div class=\"icon\">\n                  <img src=\"./assets/icons/location.svg\" alt=\"\">\n               </div>\n               <div class=\"content\">\n                  <div class=\"title\"></div>\n                  <div class=\"description\"></div>\n               </div>\n            </div>\n            <div class=\"right\">\n               <img src=\"./assets/icons/chevron-right.svg\" alt=\"\">\n            </div>\n         </div>\n      </div>\n\n      <div id=\"info-text\" class=\"info-text\"></div>\n   </main>\n</div>\n\n<style lang=\"scss\" scoped>\n   :root {\n      --color-blue: #6EC8F2;\n      --color-dark-blue: #006F9E;\n      --color-black: #2B2D42;\n      --color-gray: #6D6E83;\n      --color-shadow: #0C0F1E1A;\n      --color-background: #FFFFFF;\n      --color-light-gray: #F5F5F5;\n   }\n\n   .pre-footer-widget {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: flex-start;\n      gap: 32px;\n      padding: 50px 120px;\n      background: white;\n\n      header {\n         display: flex;\n         flex-direction: row;\n         align-items: center;\n         justify-content: flex-start;\n         gap: 10px;\n         width: 100%;\n\n         .title {\n            font-family: 'Barlow', sans-serif;\n            font-weight: 600;\n            font-size: 32px;\n            line-height: 40px;\n            color: #2B2D42;\n         }\n      }\n\n      main {\n         display: flex;\n         flex-direction: column;\n         gap: 24px;\n         background-color: var(--color-light-gray);\n         border-radius: 10px;\n         box-shadow: 0 0 10px var(--color-shadow);\n\n         .button-list {\n            display: flex;\n            flex-direction: row;\n            flex-wrap: wrap;\n            gap: 24px;\n\n            .assistance-button {\n               display: none;\n               flex-direction: row;\n               justify-content: space-between;\n               padding: 10px 24px;\n               background: white;\n               border: 2px solid #006F9E;\n               border-radius: 8px;\n               cursor: pointer;\n               width: 279px;\n               height: 80px;\n               transition: .1s;\n\n               &:hover {\n                  background-color: #DAF2FC;\n               }\n\n               &:active {\n                  background-color: #B6E8FF;\n               }\n            }\n\n            .left {\n               display: flex;\n               align-items: start;\n               justify-content: center;\n               gap: 12px;\n               padding: 10px 0;\n\n               .icon {\n                  padding: 5px 0;\n\n                  img {\n                     width: 28px;\n                     height: 28px;\n                  }\n               }\n\n               .content {\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: center;\n                  align-items: flex-start;\n                  padding: 10px 0;\n                  gap: 5px;\n\n                  .title {\n                     font-family: 'Barlow', sans-serif;\n                     font-weight: 700;\n                     font-size: 18px;\n                     line-height: 24px;\n                     color: var(--color-dark-blue);\n                  }\n\n                  .description {\n                     font-family: \"Roboto\", sans-serif;\n                     font-size: 14px;\n                     line-height: 20px;\n                     font-weight: 400;\n                     color: var(--color-gray);\n                  }\n               }\n            }\n\n            .right {\n               display: flex;\n               align-items: center;\n               justify-content: center;\n\n               img {\n                  width: 16px;\n                  height: 16px;\n               }\n            }\n         }\n\n         .info-text {\n            font-family: \"Roboto\", sans-serif;\n            font-weight: 400;\n            font-size: 16px;\n            line-height: 22px;\n            color: #474A5E;\n         }\n      }\n\n\n      &.is-chat {\n         #chat-button {\n            display: flex;\n         }\n      }\n\n      &.is-phone {\n         #phone-button {\n            display: flex;\n         }\n      }\n\n      &.is-contact {\n         #contact-button {\n            display: flex;\n         }\n      }\n\n      &.is-appointment {\n         #appointment-button {\n            display: flex;\n         }\n      }\n\n      &.is-office {\n         #office-button {\n            display: flex;\n         }\n      }\n   }\n\n   /* Mobile breakpoint */\n   @media (max-width: 768px) {\n      .pre-footer-widget {}\n   }\n</style>\n";

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  var locales = {
    en: {
      title: 'Contact us',
      buttons: {
        chat: {
          title: 'Chat',
          text: 'Available until 4pm.'
        },
        phone: {
          title: 'Phone',
          text: 'Available until 4pm.'
        },
        email: {
          title: 'Contact Form',
          text: 'Available until 4pm.'
        },
        appointment: {
          title: 'By appointment',
          text: 'Available until 4pm.'
        },
        office: {
          title: 'Our offices',
          text: 'Available until 4pm.'
        }
      },
      info: 'Our colleagues from FOD BOSA are available on weekdays from 8:30am to 12:30pm and from 1:30pm to 4pm.'
    },
    nl: {
      title: 'Neem contact met ons op',
      buttons: {
        chat: {
          title: 'Chat',
          text: 'Beschikbaar tot 16u.'
        },
        phone: {
          title: 'Telefoon',
          text: 'Beschikbaar tot 16u.'
        },
        email: {
          title: 'ContactFormulier',
          text: 'Beschikbaar tot 16u.'
        },
        appointment: {
          title: 'Op afspraak',
          text: 'Beschikbaar tot 16u.'
        },
        office: {
          title: 'Onze kantoren',
          text: 'Beschikbaar tot 16u.'
        }
      },
      info: 'Onze collega’s van FOD BOSA zijn beschikbaar op werkdagen van 8u30 tot 12u30 en van 13u30 tot 16u.'
    },
    fr: {
      title: 'Contactez-nous',
      buttons: {
        chat: {
          title: 'Chat',
          text: 'Disponible jusqu\'à 16h.'
        },
        phone: {
          title: 'Téléphone',
          text: 'Disponible jusqu\'à 16h.'
        },
        email: {
          title: 'Formulaire de contact',
          text: 'Disponible jusqu\'à 16h.'
        },
        appointment: {
          title: 'Sur rendez-vous',
          text: 'Disponible jusqu\'à 16h.'
        },
        office: {
          title: 'Nos bureaux',
          text: 'Disponible jusqu\'à 16h.'
        }
      },
      info: 'Nos collègues de la FOD BOSA sont disponibles en semaine de 8h30 à 12h30 et de 13h30 à 16h.'
    },
    de: {
      title: 'Kontaktieren Sie uns',
      buttons: {
        chat: {
          title: 'Chat',
          text: 'Bis 16 Uhr verfügbar.'
        },
        phone: {
          title: 'Telefon',
          text: 'Bis 16 Uhr verfügbar.'
        },
        email: {
          title: 'Kontaktformular',
          text: 'Bis 16 Uhr verfügbar.'
        },
        appointment: {
          title: 'Nach Vereinbarung',
          text: 'Bis 16 Uhr verfügbar.'
        },
        office: {
          title: 'Unsere Büros',
          text: 'Bis 16 Uhr verfügbar.'
        }
      },
      info: 'Unsere Kollegen von FOD BOSA sind an Wochentagen von 8:30 bis 12:30 Uhr und von 13:30 bis 16:00 Uhr erreichbar.'
    }
  };
  var SDGPreFooterWidget = /*#__PURE__*/function (_HTMLElement) {
    function SDGPreFooterWidget() {
      var _this;
      _classCallCheck(this, SDGPreFooterWidget);
      _this = _callSuper(this, SDGPreFooterWidget);
      _this.attachShadow({
        mode: 'open'
      });
      _this.widgetId = 'widget';
      _this.isChat = false;
      _this.chatId = null;
      _this.isPhone = false;
      _this.phoneNumber = null;
      _this.isContact = false;
      _this.contactForm = null;
      _this.isAppointment = false;
      _this.appointmentUrl = null;
      _this.infoText = null;
      _this.isListeningQuery = false;
      _this.loadTemplate().then(function () {
        _this.getAttributes();
        _this.addLanguageContent();
        _this.listenChatButton();
      });
      return _this;
    }
    _inherits(SDGPreFooterWidget, _HTMLElement);
    return _createClass(SDGPreFooterWidget, [{
      key: "loadTemplate",
      value: function () {
        var _loadTemplate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.shadowRoot.innerHTML = template;
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function loadTemplate() {
          return _loadTemplate.apply(this, arguments);
        }
        return loadTemplate;
      }()
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        // get attributes from the element 
        /*
           Attributes:
           - chat: boolean                  // display chat button (default: false)
           - chat-id: string                // chat widget id (default: null)
           - phone: boolean                 // display phone button (default: false)
           - phone-number: string           // phone number (default: null)
           - contact: boolean               // display contact button (default: false)
           - contact-form: string           // contact form url (default: null)
           - appointment: boolean           // display appointment button (default: false)
           - appointment-url: string        // appointment url (default: null)
           - info-text: JSON                // display text (default: null)
           - listening-query: boolean       // listen query params (default: false)
        */

        this.isChat = this.getAttribute('chat') !== null && this.getAttribute('chat') !== 'false';
        this.chatId = this.getAttribute('chat-id') || null;
        this.isPhone = this.getAttribute('phone') !== null && this.getAttribute('phone') !== 'false';
        this.phoneNumber = this.getAttribute('phone-number') || null;
        this.isContact = this.getAttribute('contact') !== null && this.getAttribute('contact') !== 'false';
        this.contactForm = this.getAttribute('contact-form') || null;
        this.isAppointment = this.getAttribute('appointment') !== null && this.getAttribute('appointment') !== 'false';
        this.appointmentUrl = this.getAttribute('appointment-url') || null;
        this.infoText = this.getAttribute('info-text') ? JSON.parse(this.getAttribute('info-text')) : null;
        this.isListeningQuery = this.getAttribute('listening-query') !== null && this.getAttribute('listening-query') !== 'false';

        // set attributes to the widget
        if (this.isChat) {
          this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-chat');
        }
        if (this.isPhone) {
          this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-phone');
        }
        if (this.isContact) {
          this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-contact');
        }
        if (this.isAppointment) {
          this.shadowRoot.querySelector("#".concat(this.widgetId)).classList.add('is-appointment');
        }
        if (this.infoText) {
          var lang = document.documentElement.lang || 'en';
          this.shadowRoot.querySelector("#".concat(this.widgetId, " #info-text")).innerHTML = this.infoText[lang];
        }

        // listening query
        if (this.isListeningQuery) {
          this.listenQuery();
        }
      }
    }, {
      key: "listenQuery",
      value: function listenQuery() {
        /*
           Params:
           - sdg-pf-chat=0              // display chat button (default: 0)
           - sdg-pf-phone=0             // display phone button (default: 0)
           - sdg-pf-phone-number=...    // phone number (default: null)
           - sdg-pf-contact=0           // display contact button (default: 0)
           - sdg-pf-contact-url=...     // contact form url (default: null)
           - sdg-pf-appointment=0       // display appointment button (default: 0)
           - sdg-pf-appointment-url=... // appointment url (default: null)
           - sdg-pf-text                // display text (default: 0)
            example:
           /demo/pre-footer-widget.html?sdg-feed-min=0&sdg-feed-rating=1&sdg-feed-text=1&sdg-feed-open=1&sdg-feed-overlay-close=0&sdg-button-id=fb4761e7-0ee2-48fd-89f3-ae7950f1c946
        */
        var urlParams = new URLSearchParams(window.location.search);
        this.isChat = urlParams.has('sdg-pf-chat') && urlParams.get('sdg-pf-chat') === '1';
        this.chatId = urlParams.has('sdg-pf-chat-id') ? urlParams.get('sdg-pf-chat-id') : null;
        this.isPhone = urlParams.has('sdg-pf-phone') && urlParams.get('sdg-pf-phone') === '1';
        this.phoneNumber = urlParams.has('sdg-pf-phone-number') ? urlParams.get('sdg-pf-phone-number') : null;
        this.isContact = urlParams.has('sdg-pf-contact') && urlParams.get('sdg-pf-contact') === '1';
        this.contactForm = urlParams.has('sdg-pf-contact-url') ? urlParams.get('sdg-pf-contact-url') : null;
        this.isAppointment = urlParams.has('sdg-pf-appointment') && urlParams.get('sdg-pf-appointment') === '1';
        this.appointmentUrl = urlParams.has('sdg-pf-appointment-url') ? urlParams.get('sdg-pf-appointment-url') : null;
        this.text = urlParams.has('sdg-pf-text') ? urlParams.get('sdg-pf-text') : null;
      }
    }, {
      key: "addLanguageContent",
      value: function addLanguageContent() {
        var lang = document.documentElement.lang || 'en';
        var headerTitle = this.shadowRoot.querySelector('#header-title');
        var chatButton = this.shadowRoot.querySelector('#chat-button');
        var phoneButton = this.shadowRoot.querySelector('#phone-button');
        var emailButton = this.shadowRoot.querySelector('#contact-button');
        var appointmentButton = this.shadowRoot.querySelector('#appointment-button');
        var officeButton = this.shadowRoot.querySelector('#office-button');
        var info = this.shadowRoot.querySelector('#info');

        // Get the website's language
        var locale = locales[lang] || locales['en'];
        // Set content to current language
        if (headerTitle) {
          headerTitle.textContent = locale.title;
        }
        if (chatButton) {
          chatButton.querySelector('.title').textContent = locale.buttons.chat.title;
          chatButton.querySelector('.description').textContent = locale.buttons.chat.text;
        }
        if (phoneButton) {
          phoneButton.querySelector('.title').textContent = locale.buttons.phone.title;
          phoneButton.querySelector('.description').textContent = locale.buttons.phone.text;
        }
        if (emailButton) {
          emailButton.querySelector('.title').textContent = locale.buttons.email.title;
          emailButton.querySelector('.description').textContent = locale.buttons.email.text;
        }
        if (appointmentButton) {
          appointmentButton.querySelector('.title').textContent = locale.buttons.appointment.title;
          appointmentButton.querySelector('.description').textContent = locale.buttons.appointment.text;
        }
        if (officeButton) {
          officeButton.querySelector('.title').textContent = locale.buttons.office.title;
          officeButton.querySelector('.description').textContent = locale.buttons.office.text;
        }
        if (info) {
          info.textContent = locale.info;
        }
      }
    }, {
      key: "listenChatButton",
      value: function listenChatButton() {
        var _this2 = this;
        var chatButton = this.shadowRoot.querySelector('#chat-button');
        chatButton.addEventListener('click', function () {
          // Open feedback-widget
          var feedbackWidget = _this2.chatId ? document.querySelector("#".concat(_this2.chatId)) : document.querySelector('sdg-feedback-widget');
          if (feedbackWidget) {
            // remove closed class inside the feedback widget shadow root
            var feedbackWidgetShadowRoot = feedbackWidget.shadowRoot;
            var closedClass = feedbackWidgetShadowRoot.querySelector('.closed');
            if (closedClass) {
              closedClass.classList.remove('closed');
            }
            // open the feedback widget
            feedbackWidget.open();
          } else {
            console.error('Feedback widget not found');
          }
        });
      }
    }, {
      key: "listenPhoneButton",
      value: function listenPhoneButton() {
        var phoneButton = this.shadowRoot.querySelector('#phone-button');
        phoneButton.addEventListener('click', function () {
          console.log('phone');
        });
      }
    }, {
      key: "listenEmailButton",
      value: function listenEmailButton() {
        var emailButton = this.shadowRoot.querySelector('#contact-button');
        emailButton.addEventListener('click', function () {
          console.log('email');
        });
      }
    }, {
      key: "listenAppointmentButton",
      value: function listenAppointmentButton() {
        var appointmentButton = this.shadowRoot.querySelector('#appointment-button');
        appointmentButton.addEventListener('click', function () {
          console.log('appointment');
        });
      }
    }, {
      key: "listenOfficeButton",
      value: function listenOfficeButton() {
        var officeButton = this.shadowRoot.querySelector('#office-button');
        officeButton.addEventListener('click', function () {
          console.log('office');
        });
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Define the custom element
  customElements.define('sdg-pre-footer-widget', SDGPreFooterWidget);

})();
