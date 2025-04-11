function JR() {
  import.meta.url, import("_").catch(() => 1), (async function* () {})().next();
}
function Og(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
var os =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Ww(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    r
  );
}
var Rg = { exports: {} },
  eu = {},
  Pg = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ua = Symbol.for("react.element"),
  Qw = Symbol.for("react.portal"),
  Vw = Symbol.for("react.fragment"),
  qw = Symbol.for("react.strict_mode"),
  Kw = Symbol.for("react.profiler"),
  Yw = Symbol.for("react.provider"),
  Gw = Symbol.for("react.context"),
  Xw = Symbol.for("react.forward_ref"),
  Jw = Symbol.for("react.suspense"),
  Zw = Symbol.for("react.memo"),
  e1 = Symbol.for("react.lazy"),
  Ah = Symbol.iterator;
function t1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ah && e[Ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _g = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mg = Object.assign,
  Lg = {};
function Ei(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lg),
    (this.updater = r || _g);
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ei.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dg() {}
Dg.prototype = Ei.prototype;
function rf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lg),
    (this.updater = r || _g);
}
var nf = (rf.prototype = new Dg());
nf.constructor = rf;
Mg(nf, Ei.prototype);
nf.isPureReactComponent = !0;
var zh = Array.isArray,
  Ig = Object.prototype.hasOwnProperty,
  of = { current: null },
  Ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function zg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ig.call(t, n) && !Ag.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
  return {
    $$typeof: Ua,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: of.current,
  };
}
function r1(e, t) {
  return {
    $$typeof: Ua,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function af(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
}
function n1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Fh = /\/+/g;
function Lu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? n1("" + e.key)
    : t.toString(36);
}
function Ps(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ua:
          case Qw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === "" ? "." + Lu(a, 0) : n),
      zh(o)
        ? ((r = ""),
          e != null && (r = e.replace(Fh, "$&/") + "/"),
          Ps(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (af(o) &&
            (o = r1(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Fh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), zh(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + Lu(i, s);
      a += Ps(i, t, r, l, o);
    }
  else if (((l = t1(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Lu(i, s++)), (a += Ps(i, t, r, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function is(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Ps(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function o1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rr = { current: null },
  _s = { transition: null },
  i1 = {
    ReactCurrentDispatcher: rr,
    ReactCurrentBatchConfig: _s,
    ReactCurrentOwner: of,
  };
function Fg() {
  throw Error("act(...) is not supported in production builds of React.");
}
je.Children = {
  map: is,
  forEach: function (e, t, r) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!af(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
je.Component = Ei;
je.Fragment = Vw;
je.Profiler = Kw;
je.PureComponent = rf;
je.StrictMode = qw;
je.Suspense = Jw;
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i1;
je.act = Fg;
je.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Mg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = of.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Ig.call(t, l) &&
        !Ag.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Ua, type: e.type, key: o, ref: i, props: n, _owner: a };
};
je.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yw, _context: e }),
    (e.Consumer = e)
  );
};
je.createElement = zg;
je.createFactory = function (e) {
  var t = zg.bind(null, e);
  return (t.type = e), t;
};
je.createRef = function () {
  return { current: null };
};
je.forwardRef = function (e) {
  return { $$typeof: Xw, render: e };
};
je.isValidElement = af;
je.lazy = function (e) {
  return { $$typeof: e1, _payload: { _status: -1, _result: e }, _init: o1 };
};
je.memo = function (e, t) {
  return { $$typeof: Zw, type: e, compare: t === void 0 ? null : t };
};
je.startTransition = function (e) {
  var t = _s.transition;
  _s.transition = {};
  try {
    e();
  } finally {
    _s.transition = t;
  }
};
je.unstable_act = Fg;
je.useCallback = function (e, t) {
  return rr.current.useCallback(e, t);
};
je.useContext = function (e) {
  return rr.current.useContext(e);
};
je.useDebugValue = function () {};
je.useDeferredValue = function (e) {
  return rr.current.useDeferredValue(e);
};
je.useEffect = function (e, t) {
  return rr.current.useEffect(e, t);
};
je.useId = function () {
  return rr.current.useId();
};
je.useImperativeHandle = function (e, t, r) {
  return rr.current.useImperativeHandle(e, t, r);
};
je.useInsertionEffect = function (e, t) {
  return rr.current.useInsertionEffect(e, t);
};
je.useLayoutEffect = function (e, t) {
  return rr.current.useLayoutEffect(e, t);
};
je.useMemo = function (e, t) {
  return rr.current.useMemo(e, t);
};
je.useReducer = function (e, t, r) {
  return rr.current.useReducer(e, t, r);
};
je.useRef = function (e) {
  return rr.current.useRef(e);
};
je.useState = function (e) {
  return rr.current.useState(e);
};
je.useSyncExternalStore = function (e, t, r) {
  return rr.current.useSyncExternalStore(e, t, r);
};
je.useTransition = function () {
  return rr.current.useTransition();
};
je.version = "18.3.1";
Pg.exports = je;
var x = Pg.exports;
const V = Si(x),
  sf = Og({ __proto__: null, default: V }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a1 = x,
  s1 = Symbol.for("react.element"),
  l1 = Symbol.for("react.fragment"),
  u1 = Object.prototype.hasOwnProperty,
  c1 = a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  d1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $g(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) u1.call(t, n) && !d1.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: s1,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: c1.current,
  };
}
eu.Fragment = l1;
eu.jsx = $g;
eu.jsxs = $g;
Rg.exports = eu;
var c = Rg.exports,
  Ic = {},
  Ug = { exports: {} },
  vr = {},
  Bg = { exports: {} },
  Hg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, F) {
    var z = R.length;
    R.push(F);
    e: for (; 0 < z; ) {
      var U = (z - 1) >>> 1,
        H = R[U];
      if (0 < o(H, F)) (R[U] = F), (R[z] = H), (z = U);
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var F = R[0],
      z = R.pop();
    if (z !== F) {
      R[0] = z;
      e: for (var U = 0, H = R.length, J = H >>> 1; U < J; ) {
        var X = 2 * (U + 1) - 1,
          re = R[X],
          ae = X + 1,
          be = R[ae];
        if (0 > o(re, z))
          ae < H && 0 > o(be, re)
            ? ((R[U] = be), (R[ae] = z), (U = ae))
            : ((R[U] = re), (R[X] = z), (U = X));
        else if (ae < H && 0 > o(be, z)) (R[U] = be), (R[ae] = z), (U = ae);
        else break e;
      }
    }
    return F;
  }
  function o(R, F) {
    var z = R.sortIndex - F.sortIndex;
    return z !== 0 ? z : R.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    p = !1,
    m = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(R) {
    for (var F = r(u); F !== null; ) {
      if (F.callback === null) n(u);
      else if (F.startTime <= R)
        n(u), (F.sortIndex = F.expirationTime), t(l, F);
      else break;
      F = r(u);
    }
  }
  function w(R) {
    if (((v = !1), b(R), !m))
      if (r(l) !== null) (m = !0), B(S);
      else {
        var F = r(u);
        F !== null && W(w, F.startTime - R);
      }
  }
  function S(R, F) {
    (m = !1), v && ((v = !1), y(I), (I = -1)), (p = !0);
    var z = h;
    try {
      for (
        b(F), d = r(l);
        d !== null && (!(d.expirationTime > F) || (R && !D()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var H = U(d.expirationTime <= F);
          (F = e.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === r(l) && n(l),
            b(F);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var J = !0;
      else {
        var X = r(u);
        X !== null && W(w, X.startTime - F), (J = !1);
      }
      return J;
    } finally {
      (d = null), (h = z), (p = !1);
    }
  }
  var j = !1,
    E = null,
    I = -1,
    O = 5,
    C = -1;
  function D() {
    return !(e.unstable_now() - C < O);
  }
  function P() {
    if (E !== null) {
      var R = e.unstable_now();
      C = R;
      var F = !0;
      try {
        F = E(!0, R);
      } finally {
        F ? _() : ((j = !1), (E = null));
      }
    } else j = !1;
  }
  var _;
  if (typeof g == "function")
    _ = function () {
      g(P);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      L = N.port2;
    (N.port1.onmessage = P),
      (_ = function () {
        L.postMessage(null);
      });
  } else
    _ = function () {
      k(P, 0);
    };
  function B(R) {
    (E = R), j || ((j = !0), _());
  }
  function W(R, F) {
    I = k(function () {
      R(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), B(S));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var z = h;
      h = F;
      try {
        return R();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, F) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var z = h;
      h = R;
      try {
        return F();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, F, z) {
      var U = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? U + z : U))
          : (z = U),
        R)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = z + H),
        (R = {
          id: f++,
          callback: F,
          priorityLevel: R,
          startTime: z,
          expirationTime: H,
          sortIndex: -1,
        }),
        z > U
          ? ((R.sortIndex = z),
            t(u, R),
            r(l) === null &&
              R === r(u) &&
              (v ? (y(I), (I = -1)) : (v = !0), W(w, z - U)))
          : ((R.sortIndex = H), t(l, R), m || p || ((m = !0), B(S))),
        R
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (R) {
      var F = h;
      return function () {
        var z = h;
        h = F;
        try {
          return R.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(Hg);
Bg.exports = Hg;
var f1 = Bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h1 = x,
  mr = f1;
function q(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wg = new Set(),
  va = {};
function To(e, t) {
  ai(e, t), ai(e + "Capture", t);
}
function ai(e, t) {
  for (va[e] = t, e = 0; e < t.length; e++) Wg.add(t[e]);
}
var dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ac = Object.prototype.hasOwnProperty,
  p1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $h = {},
  Uh = {};
function g1(e) {
  return Ac.call(Uh, e)
    ? !0
    : Ac.call($h, e)
    ? !1
    : p1.test(e)
    ? (Uh[e] = !0)
    : (($h[e] = !0), !1);
}
function m1(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function y1(e, t, r, n) {
  if (t === null || typeof t > "u" || m1(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nr(e, t, r, n, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    It[e] = new nr(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  It[t] = new nr(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  It[e] = new nr(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  It[e] = new nr(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    It[e] = new nr(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  It[e] = new nr(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  It[e] = new nr(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  It[e] = new nr(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  It[e] = new nr(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lf = /[\-:]([a-z])/g;
function uf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lf, uf);
    It[t] = new nr(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lf, uf);
    It[t] = new nr(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lf, uf);
  It[t] = new nr(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  It[e] = new nr(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new nr(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  It[e] = new nr(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cf(e, t, r, n) {
  var o = It.hasOwnProperty(t) ? It[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (y1(t, r, o, n) && (r = null),
    n || o === null
      ? g1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var yn = h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  as = Symbol.for("react.element"),
  Do = Symbol.for("react.portal"),
  Io = Symbol.for("react.fragment"),
  df = Symbol.for("react.strict_mode"),
  zc = Symbol.for("react.profiler"),
  Qg = Symbol.for("react.provider"),
  Vg = Symbol.for("react.context"),
  ff = Symbol.for("react.forward_ref"),
  Fc = Symbol.for("react.suspense"),
  $c = Symbol.for("react.suspense_list"),
  hf = Symbol.for("react.memo"),
  Tn = Symbol.for("react.lazy"),
  qg = Symbol.for("react.offscreen"),
  Bh = Symbol.iterator;
function zi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bh && e[Bh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lt = Object.assign,
  Du;
function ea(e) {
  if (Du === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Du = (t && t[1]) || "";
    }
  return "\n" + Du + e;
}
var Iu = !1;
function Au(e, t) {
  if (!e || Iu) return "";
  Iu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split("\n"),
          i = n.stack.split("\n"),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l = "\n" + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Iu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? ea(e) : "";
}
function v1(e) {
  switch (e.tag) {
    case 5:
      return ea(e.type);
    case 16:
      return ea("Lazy");
    case 13:
      return ea("Suspense");
    case 19:
      return ea("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Au(e.type, !1)), e;
    case 11:
      return (e = Au(e.type.render, !1)), e;
    case 1:
      return (e = Au(e.type, !0)), e;
    default:
      return "";
  }
}
function Uc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Io:
      return "Fragment";
    case Do:
      return "Portal";
    case zc:
      return "Profiler";
    case df:
      return "StrictMode";
    case Fc:
      return "Suspense";
    case $c:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vg:
        return (e.displayName || "Context") + ".Consumer";
      case Qg:
        return (e._context.displayName || "Context") + ".Provider";
      case ff:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hf:
        return (
          (t = e.displayName || null), t !== null ? t : Uc(e.type) || "Memo"
        );
      case Tn:
        (t = e._payload), (e = e._init);
        try {
          return Uc(e(t));
        } catch (r) {}
    }
  return null;
}
function b1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Uc(t);
    case 8:
      return t === df ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function x1(e) {
  var t = Kg(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (n = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ss(e) {
  e._valueTracker || (e._valueTracker = x1(e));
}
function Yg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Kg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function Bc(e, t) {
  var r = t.checked;
  return lt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Hh(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Vn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gg(e, t) {
  (t = t.checked), t != null && cf(e, "checked", t, !1);
}
function Hc(e, t) {
  Gg(e, t);
  var r = Vn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Wc(e, t.type, Vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wh(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Wc(e, t, r) {
  (t !== "number" || Gs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ta = Array.isArray;
function Xo(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Vn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
  return lt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(q(92));
      if (ta(r)) {
        if (1 < r.length) throw Error(q(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Vn(r) };
}
function Xg(e, t) {
  var r = Vn(t.value),
    n = Vn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Vh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ls,
  Zg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ba(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  w1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(oa).forEach(function (e) {
  w1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oa[t] = oa[e]);
  });
});
function em(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (oa.hasOwnProperty(e) && oa[e])
    ? ("" + t).trim()
    : t + "px";
}
function tm(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = em(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var k1 = lt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qc(e, t) {
  if (t) {
    if (k1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(q(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(q(62));
  }
}
function Kc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yc = null;
function pf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gc = null,
  Jo = null,
  Zo = null;
function qh(e) {
  if ((e = Wa(e))) {
    if (typeof Gc != "function") throw Error(q(280));
    var t = e.stateNode;
    t && ((t = iu(t)), Gc(e.stateNode, e.type, t));
  }
}
function rm(e) {
  Jo ? (Zo ? Zo.push(e) : (Zo = [e])) : (Jo = e);
}
function nm() {
  if (Jo) {
    var e = Jo,
      t = Zo;
    if (((Zo = Jo = null), qh(e), t)) for (e = 0; e < t.length; e++) qh(t[e]);
  }
}
function om(e, t) {
  return e(t);
}
function im() {}
var zu = !1;
function am(e, t, r) {
  if (zu) return e(t, r);
  zu = !0;
  try {
    return om(e, t, r);
  } finally {
    (zu = !1), (Jo !== null || Zo !== null) && (im(), nm());
  }
}
function xa(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = iu(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(q(231, t, typeof r));
  return r;
}
var Xc = !1;
if (dn)
  try {
    var Fi = {};
    Object.defineProperty(Fi, "passive", {
      get: function () {
        Xc = !0;
      },
    }),
      window.addEventListener("test", Fi, Fi),
      window.removeEventListener("test", Fi, Fi);
  } catch (e) {
    Xc = !1;
  }
function S1(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var ia = !1,
  Xs = null,
  Js = !1,
  Jc = null,
  E1 = {
    onError: function (e) {
      (ia = !0), (Xs = e);
    },
  };
function C1(e, t, r, n, o, i, a, s, l) {
  (ia = !1), (Xs = null), S1.apply(E1, arguments);
}
function j1(e, t, r, n, o, i, a, s, l) {
  if ((C1.apply(this, arguments), ia)) {
    if (ia) {
      var u = Xs;
      (ia = !1), (Xs = null);
    } else throw Error(q(198));
    Js || ((Js = !0), (Jc = u));
  }
}
function Oo(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function sm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kh(e) {
  if (Oo(e) !== e) throw Error(q(188));
}
function N1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Oo(e)), t === null)) throw Error(q(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Kh(o), e;
        if (i === n) return Kh(o), t;
        i = i.sibling;
      }
      throw Error(q(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(q(189));
      }
    }
    if (r.alternate !== n) throw Error(q(190));
  }
  if (r.tag !== 3) throw Error(q(188));
  return r.stateNode.current === r ? e : t;
}
function lm(e) {
  return (e = N1(e)), e !== null ? um(e) : null;
}
function um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cm = mr.unstable_scheduleCallback,
  Yh = mr.unstable_cancelCallback,
  T1 = mr.unstable_shouldYield,
  O1 = mr.unstable_requestPaint,
  gt = mr.unstable_now,
  R1 = mr.unstable_getCurrentPriorityLevel,
  gf = mr.unstable_ImmediatePriority,
  dm = mr.unstable_UserBlockingPriority,
  Zs = mr.unstable_NormalPriority,
  P1 = mr.unstable_LowPriority,
  fm = mr.unstable_IdlePriority,
  tu = null,
  Xr = null;
function _1(e) {
  if (Xr && typeof Xr.onCommitFiberRoot == "function")
    try {
      Xr.onCommitFiberRoot(tu, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
var Ur = Math.clz32 ? Math.clz32 : D1,
  M1 = Math.log,
  L1 = Math.LN2;
function D1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((M1(e) / L1) | 0)) | 0;
}
var us = 64,
  cs = 4194304;
function ra(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (n = ra(s)) : ((i &= a), i !== 0 && (n = ra(i)));
  } else (a = r & ~o), a !== 0 ? (n = ra(a)) : i !== 0 && (n = ra(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Ur(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function I1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A1(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ur(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & r) || s & n) && (o[a] = I1(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Zc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hm() {
  var e = us;
  return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function Fu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Ba(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ur(t)),
    (e[t] = r);
}
function z1(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Ur(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function mf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Ur(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var Me = 0;
function pm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gm,
  yf,
  mm,
  ym,
  vm,
  ed = !1,
  ds = [],
  An = null,
  zn = null,
  Fn = null,
  wa = new Map(),
  ka = new Map(),
  _n = [],
  F1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      zn = null;
      break;
    case "mouseover":
    case "mouseout":
      Fn = null;
      break;
    case "pointerover":
    case "pointerout":
      wa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ka.delete(t.pointerId);
  }
}
function $i(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Wa(t)), t !== null && yf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function $1(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (An = $i(An, e, t, r, n, o)), !0;
    case "dragenter":
      return (zn = $i(zn, e, t, r, n, o)), !0;
    case "mouseover":
      return (Fn = $i(Fn, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return wa.set(i, $i(wa.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ka.set(i, $i(ka.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function bm(e) {
  var t = ao(e.target);
  if (t !== null) {
    var r = Oo(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = sm(r)), t !== null)) {
          (e.blockedOn = t),
            vm(e.priority, function () {
              mm(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = td(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Yc = n), r.target.dispatchEvent(n), (Yc = null);
    } else return (t = Wa(r)), t !== null && yf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Xh(e, t, r) {
  Ms(e) && r.delete(t);
}
function U1() {
  (ed = !1),
    An !== null && Ms(An) && (An = null),
    zn !== null && Ms(zn) && (zn = null),
    Fn !== null && Ms(Fn) && (Fn = null),
    wa.forEach(Xh),
    ka.forEach(Xh);
}
function Ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ed ||
      ((ed = !0),
      mr.unstable_scheduleCallback(mr.unstable_NormalPriority, U1)));
}
function Sa(e) {
  function t(o) {
    return Ui(o, e);
  }
  if (0 < ds.length) {
    Ui(ds[0], e);
    for (var r = 1; r < ds.length; r++) {
      var n = ds[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    An !== null && Ui(An, e),
      zn !== null && Ui(zn, e),
      Fn !== null && Ui(Fn, e),
      wa.forEach(t),
      ka.forEach(t),
      r = 0;
    r < _n.length;
    r++
  )
    (n = _n[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < _n.length && ((r = _n[0]), r.blockedOn === null); )
    bm(r), r.blockedOn === null && _n.shift();
}
var ei = yn.ReactCurrentBatchConfig,
  tl = !0;
function B1(e, t, r, n) {
  var o = Me,
    i = ei.transition;
  ei.transition = null;
  try {
    (Me = 1), vf(e, t, r, n);
  } finally {
    (Me = o), (ei.transition = i);
  }
}
function H1(e, t, r, n) {
  var o = Me,
    i = ei.transition;
  ei.transition = null;
  try {
    (Me = 4), vf(e, t, r, n);
  } finally {
    (Me = o), (ei.transition = i);
  }
}
function vf(e, t, r, n) {
  if (tl) {
    var o = td(e, t, r, n);
    if (o === null) Yu(e, t, n, rl, r), Gh(e, n);
    else if ($1(o, e, t, r, n)) n.stopPropagation();
    else if ((Gh(e, n), t & 4 && -1 < F1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Wa(o);
        if (
          (i !== null && gm(i),
          (i = td(e, t, r, n)),
          i === null && Yu(e, t, n, rl, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else Yu(e, t, n, null, r);
  }
}
var rl = null;
function td(e, t, r, n) {
  if (((rl = null), (e = pf(n)), (e = ao(e)), e !== null))
    if (((t = Oo(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = sm(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rl = e), null;
}
function xm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (R1()) {
        case gf:
          return 1;
        case dm:
          return 4;
        case Zs:
        case P1:
          return 16;
        case fm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dn = null,
  bf = null,
  Ls = null;
function wm() {
  if (Ls) return Ls;
  var e,
    t = bf,
    r = t.length,
    n,
    o = "value" in Dn ? Dn.value : Dn.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Ls = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Ds(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function Jh() {
  return !1;
}
function br(e) {
  function t(r, n, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fs
        : Jh),
      (this.isPropagationStopped = Jh),
      this
    );
  }
  return (
    lt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var Ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xf = br(Ci),
  Ha = lt({}, Ci, { view: 0, detail: 0 }),
  W1 = br(Ha),
  $u,
  Uu,
  Bi,
  ru = lt({}, Ha, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bi &&
            (Bi && e.type === "mousemove"
              ? (($u = e.screenX - Bi.screenX), (Uu = e.screenY - Bi.screenY))
              : (Uu = $u = 0),
            (Bi = e)),
          $u);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Uu;
    },
  }),
  Zh = br(ru),
  Q1 = lt({}, ru, { dataTransfer: 0 }),
  V1 = br(Q1),
  q1 = lt({}, Ha, { relatedTarget: 0 }),
  Bu = br(q1),
  K1 = lt({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y1 = br(K1),
  G1 = lt({}, Ci, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  X1 = br(G1),
  J1 = lt({}, Ci, { data: 0 }),
  ep = br(J1),
  Z1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ek = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function rk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tk[e]) ? !!t[e] : !1;
}
function wf() {
  return rk;
}
var nk = lt({}, Ha, {
    key: function (e) {
      if (e.key) {
        var t = Z1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ds(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ek[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wf,
    charCode: function (e) {
      return e.type === "keypress" ? Ds(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ds(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ok = br(nk),
  ik = lt({}, ru, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tp = br(ik),
  ak = lt({}, Ha, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wf,
  }),
  sk = br(ak),
  lk = lt({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uk = br(lk),
  ck = lt({}, ru, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  dk = br(ck),
  fk = [9, 13, 27, 32],
  kf = dn && "CompositionEvent" in window,
  aa = null;
dn && "documentMode" in document && (aa = document.documentMode);
var hk = dn && "TextEvent" in window && !aa,
  km = dn && (!kf || (aa && 8 < aa && 11 >= aa)),
  rp = " ",
  np = !1;
function Sm(e, t) {
  switch (e) {
    case "keyup":
      return fk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Em(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ao = !1;
function pk(e, t) {
  switch (e) {
    case "compositionend":
      return Em(t);
    case "keypress":
      return t.which !== 32 ? null : ((np = !0), rp);
    case "textInput":
      return (e = t.data), e === rp && np ? null : e;
    default:
      return null;
  }
}
function gk(e, t) {
  if (Ao)
    return e === "compositionend" || (!kf && Sm(e, t))
      ? ((e = wm()), (Ls = bf = Dn = null), (Ao = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return km && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function op(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mk[e.type] : t === "textarea";
}
function Cm(e, t, r, n) {
  rm(n),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((r = new xf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var sa = null,
  Ea = null;
function yk(e) {
  Im(e, 0);
}
function nu(e) {
  var t = $o(e);
  if (Yg(t)) return e;
}
function vk(e, t) {
  if (e === "change") return t;
}
var jm = !1;
if (dn) {
  var Hu;
  if (dn) {
    var Wu = "oninput" in document;
    if (!Wu) {
      var ip = document.createElement("div");
      ip.setAttribute("oninput", "return;"),
        (Wu = typeof ip.oninput == "function");
    }
    Hu = Wu;
  } else Hu = !1;
  jm = Hu && (!document.documentMode || 9 < document.documentMode);
}
function ap() {
  sa && (sa.detachEvent("onpropertychange", Nm), (Ea = sa = null));
}
function Nm(e) {
  if (e.propertyName === "value" && nu(Ea)) {
    var t = [];
    Cm(t, Ea, e, pf(e)), am(yk, t);
  }
}
function bk(e, t, r) {
  e === "focusin"
    ? (ap(), (sa = t), (Ea = r), sa.attachEvent("onpropertychange", Nm))
    : e === "focusout" && ap();
}
function xk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return nu(Ea);
}
function wk(e, t) {
  if (e === "click") return nu(t);
}
function kk(e, t) {
  if (e === "input" || e === "change") return nu(t);
}
function Sk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Hr = typeof Object.is == "function" ? Object.is : Sk;
function Ca(e, t) {
  if (Hr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Ac.call(t, o) || !Hr(e[o], t[o])) return !1;
  }
  return !0;
}
function sp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lp(e, t) {
  var r = sp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = sp(r);
  }
}
function Tm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Om() {
  for (var e = window, t = Gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch (n) {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Gs(e.document);
  }
  return t;
}
function Sf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ek(e) {
  var t = Om(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Tm(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Sf(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = lp(r, i));
        var a = lp(r, n);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ck = dn && "documentMode" in document && 11 >= document.documentMode,
  zo = null,
  rd = null,
  la = null,
  nd = !1;
function up(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  nd ||
    zo == null ||
    zo !== Gs(n) ||
    ((n = zo),
    "selectionStart" in n && Sf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (la && Ca(la, n)) ||
      ((la = n),
      (n = nl(rd, "onSelect")),
      0 < n.length &&
        ((t = new xf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = zo))));
}
function hs(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Fo = {
    animationend: hs("Animation", "AnimationEnd"),
    animationiteration: hs("Animation", "AnimationIteration"),
    animationstart: hs("Animation", "AnimationStart"),
    transitionend: hs("Transition", "TransitionEnd"),
  },
  Qu = {},
  Rm = {};
dn &&
  ((Rm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fo.animationend.animation,
    delete Fo.animationiteration.animation,
    delete Fo.animationstart.animation),
  "TransitionEvent" in window || delete Fo.transitionend.transition);
function ou(e) {
  if (Qu[e]) return Qu[e];
  if (!Fo[e]) return e;
  var t = Fo[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Rm) return (Qu[e] = t[r]);
  return e;
}
var Pm = ou("animationend"),
  _m = ou("animationiteration"),
  Mm = ou("animationstart"),
  Lm = ou("transitionend"),
  Dm = new Map(),
  cp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gn(e, t) {
  Dm.set(e, t), To(t, [e]);
}
for (var Vu = 0; Vu < cp.length; Vu++) {
  var qu = cp[Vu],
    jk = qu.toLowerCase(),
    Nk = qu[0].toUpperCase() + qu.slice(1);
  Gn(jk, "on" + Nk);
}
Gn(Pm, "onAnimationEnd");
Gn(_m, "onAnimationIteration");
Gn(Mm, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(Lm, "onTransitionEnd");
ai("onMouseEnter", ["mouseout", "mouseover"]);
ai("onMouseLeave", ["mouseout", "mouseover"]);
ai("onPointerEnter", ["pointerout", "pointerover"]);
ai("onPointerLeave", ["pointerout", "pointerover"]);
To(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
To(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
To("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
To(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
To(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
To(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var na =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tk = new Set("cancel close invalid load scroll toggle".split(" ").concat(na));
function dp(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), j1(n, t, void 0, e), (e.currentTarget = null);
}
function Im(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          dp(o, s, u), (i = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          dp(o, s, u), (i = l);
        }
    }
  }
  if (Js) throw ((e = Jc), (Js = !1), (Jc = null), e);
}
function qe(e, t) {
  var r = t[ld];
  r === void 0 && (r = t[ld] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Am(t, e, 2, !1), r.add(n));
}
function Ku(e, t, r) {
  var n = 0;
  t && (n |= 4), Am(r, e, n, t);
}
var ps = "_reactListening" + Math.random().toString(36).slice(2);
function ja(e) {
  if (!e[ps]) {
    (e[ps] = !0),
      Wg.forEach(function (r) {
        r !== "selectionchange" && (Tk.has(r) || Ku(r, !1, e), Ku(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ps] || ((t[ps] = !0), Ku("selectionchange", !1, t));
  }
}
function Am(e, t, r, n) {
  switch (xm(t)) {
    case 1:
      var o = B1;
      break;
    case 4:
      o = H1;
      break;
    default:
      o = vf;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Xc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function Yu(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = ao(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  am(function () {
    var u = i,
      f = pf(r),
      d = [];
    e: {
      var h = Dm.get(e);
      if (h !== void 0) {
        var p = xf,
          m = e;
        switch (e) {
          case "keypress":
            if (Ds(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = ok;
            break;
          case "focusin":
            (m = "focus"), (p = Bu);
            break;
          case "focusout":
            (m = "blur"), (p = Bu);
            break;
          case "beforeblur":
          case "afterblur":
            p = Bu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Zh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = V1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = sk;
            break;
          case Pm:
          case _m:
          case Mm:
            p = Y1;
            break;
          case Lm:
            p = uk;
            break;
          case "scroll":
            p = W1;
            break;
          case "wheel":
            p = dk;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = X1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = tp;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          y = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var g = u, b; g !== null; ) {
          b = g;
          var w = b.stateNode;
          if (
            (b.tag === 5 &&
              w !== null &&
              ((b = w),
              y !== null && ((w = xa(g, y)), w != null && v.push(Na(g, w, b)))),
            k)
          )
            break;
          g = g.return;
        }
        0 < v.length &&
          ((h = new p(h, m, null, r, f)), d.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            r !== Yc &&
            (m = r.relatedTarget || r.fromElement) &&
            (ao(m) || m[fn]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((m = r.relatedTarget || r.toElement),
              (p = u),
              (m = m ? ao(m) : null),
              m !== null &&
                ((k = Oo(m)), m !== k || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = u)),
          p !== m)
        ) {
          if (
            ((v = Zh),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = tp),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (g = "pointer")),
            (k = p == null ? h : $o(p)),
            (b = m == null ? h : $o(m)),
            (h = new v(w, g + "leave", p, r, f)),
            (h.target = k),
            (h.relatedTarget = b),
            (w = null),
            ao(f) === u &&
              ((v = new v(y, g + "enter", m, r, f)),
              (v.target = b),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            p && m)
          )
            t: {
              for (v = p, y = m, g = 0, b = v; b; b = _o(b)) g++;
              for (b = 0, w = y; w; w = _o(w)) b++;
              for (; 0 < g - b; ) (v = _o(v)), g--;
              for (; 0 < b - g; ) (y = _o(y)), b--;
              for (; g--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = _o(v)), (y = _o(y));
              }
              v = null;
            }
          else v = null;
          p !== null && fp(d, h, p, v, !1),
            m !== null && k !== null && fp(d, k, m, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? $o(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var S = vk;
        else if (op(h))
          if (jm) S = kk;
          else {
            S = xk;
            var j = bk;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = wk);
        if (S && (S = S(e, u))) {
          Cm(d, S, r, f);
          break e;
        }
        j && j(e, h, u),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Wc(h, "number", h.value);
      }
      switch (((j = u ? $o(u) : window), e)) {
        case "focusin":
          (op(j) || j.contentEditable === "true") &&
            ((zo = j), (rd = u), (la = null));
          break;
        case "focusout":
          la = rd = zo = null;
          break;
        case "mousedown":
          nd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nd = !1), up(d, r, f);
          break;
        case "selectionchange":
          if (Ck) break;
        case "keydown":
        case "keyup":
          up(d, r, f);
      }
      var E;
      if (kf)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Ao
          ? Sm(e, r) && (I = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (km &&
          r.locale !== "ko" &&
          (Ao || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && Ao && (E = wm())
            : ((Dn = f),
              (bf = "value" in Dn ? Dn.value : Dn.textContent),
              (Ao = !0))),
        (j = nl(u, I)),
        0 < j.length &&
          ((I = new ep(I, e, null, r, f)),
          d.push({ event: I, listeners: j }),
          E ? (I.data = E) : ((E = Em(r)), E !== null && (I.data = E)))),
        (E = hk ? pk(e, r) : gk(e, r)) &&
          ((u = nl(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new ep("onBeforeInput", "beforeinput", null, r, f)),
            d.push({ event: f, listeners: u }),
            (f.data = E)));
    }
    Im(d, t);
  });
}
function Na(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function nl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = xa(e, r)),
      i != null && n.unshift(Na(e, i, o)),
      (i = xa(e, t)),
      i != null && n.push(Na(e, i, o))),
      (e = e.return);
  }
  return n;
}
function _o(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fp(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = xa(r, i)), l != null && a.unshift(Na(r, l, s)))
        : o || ((l = xa(r, i)), l != null && a.push(Na(r, l, s)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ok = /\r\n?/g,
  Rk = /\u0000|\uFFFD/g;
function hp(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ok, "\n").replace(Rk, "");
}
function gs(e, t, r) {
  if (((t = hp(t)), hp(e) !== t && r)) throw Error(q(425));
}
function ol() {}
var od = null,
  id = null;
function ad(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sd = typeof setTimeout == "function" ? setTimeout : void 0,
  Pk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pp = typeof Promise == "function" ? Promise : void 0,
  _k =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pp < "u"
      ? function (e) {
          return pp.resolve(null).then(e).catch(Mk);
        }
      : sd;
function Mk(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gu(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), Sa(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  Sa(t);
}
function $n(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  Kr = "__reactFiber$" + ji,
  Ta = "__reactProps$" + ji,
  fn = "__reactContainer$" + ji,
  ld = "__reactEvents$" + ji,
  Lk = "__reactListeners$" + ji,
  Dk = "__reactHandles$" + ji;
function ao(e) {
  var t = e[Kr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[fn] || r[Kr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = gp(e); e !== null; ) {
          if ((r = e[Kr])) return r;
          e = gp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Wa(e) {
  return (
    (e = e[Kr] || e[fn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $o(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(q(33));
}
function iu(e) {
  return e[Ta] || null;
}
var ud = [],
  Uo = -1;
function Xn(e) {
  return { current: e };
}
function Ye(e) {
  0 > Uo || ((e.current = ud[Uo]), (ud[Uo] = null), Uo--);
}
function Ue(e, t) {
  Uo++, (ud[Uo] = e.current), (e.current = t);
}
var qn = {},
  qt = Xn(qn),
  sr = Xn(!1),
  vo = qn;
function si(e, t) {
  var r = e.type.contextTypes;
  if (!r) return qn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function lr(e) {
  return (e = e.childContextTypes), e != null;
}
function il() {
  Ye(sr), Ye(qt);
}
function mp(e, t, r) {
  if (qt.current !== qn) throw Error(q(168));
  Ue(qt, t), Ue(sr, r);
}
function zm(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(q(108, b1(e) || "Unknown", o));
  return lt({}, r, n);
}
function al(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qn),
    (vo = qt.current),
    Ue(qt, e),
    Ue(sr, sr.current),
    !0
  );
}
function yp(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(q(169));
  r
    ? ((e = zm(e, t, vo)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Ye(sr),
      Ye(qt),
      Ue(qt, e))
    : Ye(sr),
    Ue(sr, r);
}
var an = null,
  au = !1,
  Xu = !1;
function Fm(e) {
  an === null ? (an = [e]) : an.push(e);
}
function Ik(e) {
  (au = !0), Fm(e);
}
function Jn() {
  if (!Xu && an !== null) {
    Xu = !0;
    var e = 0,
      t = Me;
    try {
      var r = an;
      for (Me = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (an = null), (au = !1);
    } catch (o) {
      throw (an !== null && (an = an.slice(e + 1)), cm(gf, Jn), o);
    } finally {
      (Me = t), (Xu = !1);
    }
  }
  return null;
}
var Bo = [],
  Ho = 0,
  sl = null,
  ll = 0,
  kr = [],
  Sr = 0,
  bo = null,
  sn = 1,
  ln = "";
function to(e, t) {
  (Bo[Ho++] = ll), (Bo[Ho++] = sl), (sl = e), (ll = t);
}
function $m(e, t, r) {
  (kr[Sr++] = sn), (kr[Sr++] = ln), (kr[Sr++] = bo), (bo = e);
  var n = sn;
  e = ln;
  var o = 32 - Ur(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Ur(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (sn = (1 << (32 - Ur(t) + o)) | (r << o) | n),
      (ln = i + e);
  } else (sn = (1 << i) | (r << o) | n), (ln = e);
}
function Ef(e) {
  e.return !== null && (to(e, 1), $m(e, 1, 0));
}
function Cf(e) {
  for (; e === sl; )
    (sl = Bo[--Ho]), (Bo[Ho] = null), (ll = Bo[--Ho]), (Bo[Ho] = null);
  for (; e === bo; )
    (bo = kr[--Sr]),
      (kr[Sr] = null),
      (ln = kr[--Sr]),
      (kr[Sr] = null),
      (sn = kr[--Sr]),
      (kr[Sr] = null);
}
var gr = null,
  pr = null,
  tt = !1,
  $r = null;
function Um(e, t) {
  var r = Cr(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function vp(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gr = e), (pr = $n(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gr = e), (pr = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = bo !== null ? { id: sn, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Cr(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (gr = e),
            (pr = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dd(e) {
  if (tt) {
    var t = pr;
    if (t) {
      var r = t;
      if (!vp(e, t)) {
        if (cd(e)) throw Error(q(418));
        t = $n(r.nextSibling);
        var n = gr;
        t && vp(e, t)
          ? Um(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (tt = !1), (gr = e));
      }
    } else {
      if (cd(e)) throw Error(q(418));
      (e.flags = (e.flags & -4097) | 2), (tt = !1), (gr = e);
    }
  }
}
function bp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gr = e;
}
function ms(e) {
  if (e !== gr) return !1;
  if (!tt) return bp(e), (tt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ad(e.type, e.memoizedProps))),
    t && (t = pr))
  ) {
    if (cd(e)) throw (Bm(), Error(q(418)));
    for (; t; ) Um(e, t), (t = $n(t.nextSibling));
  }
  if ((bp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              pr = $n(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pr = null;
    }
  } else pr = gr ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function Bm() {
  for (var e = pr; e; ) e = $n(e.nextSibling);
}
function li() {
  (pr = gr = null), (tt = !1);
}
function jf(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
var Ak = yn.ReactCurrentBatchConfig;
function Hi(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(q(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(q(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(q(284));
    if (!r._owner) throw Error(q(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      q(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xp(e) {
  var t = e._init;
  return t(e._payload);
}
function Hm(e) {
  function t(y, g) {
    if (e) {
      var b = y.deletions;
      b === null ? ((y.deletions = [g]), (y.flags |= 16)) : b.push(g);
    }
  }
  function r(y, g) {
    if (!e) return null;
    for (; g !== null; ) t(y, g), (g = g.sibling);
    return null;
  }
  function n(y, g) {
    for (y = new Map(); g !== null; )
      g.key !== null ? y.set(g.key, g) : y.set(g.index, g), (g = g.sibling);
    return y;
  }
  function o(y, g) {
    return (y = Wn(y, g)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, g, b) {
    return (
      (y.index = b),
      e
        ? ((b = y.alternate),
          b !== null
            ? ((b = b.index), b < g ? ((y.flags |= 2), g) : b)
            : ((y.flags |= 2), g))
        : ((y.flags |= 1048576), g)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, g, b, w) {
    return g === null || g.tag !== 6
      ? ((g = oc(b, y.mode, w)), (g.return = y), g)
      : ((g = o(g, b)), (g.return = y), g);
  }
  function l(y, g, b, w) {
    var S = b.type;
    return S === Io
      ? f(y, g, b.props.children, w, b.key)
      : g !== null &&
        (g.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tn &&
            xp(S) === g.type))
      ? ((w = o(g, b.props)), (w.ref = Hi(y, g, b)), (w.return = y), w)
      : ((w = Bs(b.type, b.key, b.props, null, y.mode, w)),
        (w.ref = Hi(y, g, b)),
        (w.return = y),
        w);
  }
  function u(y, g, b, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== b.containerInfo ||
      g.stateNode.implementation !== b.implementation
      ? ((g = ic(b, y.mode, w)), (g.return = y), g)
      : ((g = o(g, b.children || [])), (g.return = y), g);
  }
  function f(y, g, b, w, S) {
    return g === null || g.tag !== 7
      ? ((g = go(b, y.mode, w, S)), (g.return = y), g)
      : ((g = o(g, b)), (g.return = y), g);
  }
  function d(y, g, b) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = oc("" + g, y.mode, b)), (g.return = y), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case as:
          return (
            (b = Bs(g.type, g.key, g.props, null, y.mode, b)),
            (b.ref = Hi(y, null, g)),
            (b.return = y),
            b
          );
        case Do:
          return (g = ic(g, y.mode, b)), (g.return = y), g;
        case Tn:
          var w = g._init;
          return d(y, w(g._payload), b);
      }
      if (ta(g) || zi(g))
        return (g = go(g, y.mode, b, null)), (g.return = y), g;
      ys(y, g);
    }
    return null;
  }
  function h(y, g, b, w) {
    var S = g !== null ? g.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return S !== null ? null : s(y, g, "" + b, w);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case as:
          return b.key === S ? l(y, g, b, w) : null;
        case Do:
          return b.key === S ? u(y, g, b, w) : null;
        case Tn:
          return (S = b._init), h(y, g, S(b._payload), w);
      }
      if (ta(b) || zi(b)) return S !== null ? null : f(y, g, b, w, null);
      ys(y, b);
    }
    return null;
  }
  function p(y, g, b, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (y = y.get(b) || null), s(g, y, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case as:
          return (y = y.get(w.key === null ? b : w.key) || null), l(g, y, w, S);
        case Do:
          return (y = y.get(w.key === null ? b : w.key) || null), u(g, y, w, S);
        case Tn:
          var j = w._init;
          return p(y, g, b, j(w._payload), S);
      }
      if (ta(w) || zi(w)) return (y = y.get(b) || null), f(g, y, w, S, null);
      ys(g, w);
    }
    return null;
  }
  function m(y, g, b, w) {
    for (
      var S = null, j = null, E = g, I = (g = 0), O = null;
      E !== null && I < b.length;
      I++
    ) {
      E.index > I ? ((O = E), (E = null)) : (O = E.sibling);
      var C = h(y, E, b[I], w);
      if (C === null) {
        E === null && (E = O);
        break;
      }
      e && E && C.alternate === null && t(y, E),
        (g = i(C, g, I)),
        j === null ? (S = C) : (j.sibling = C),
        (j = C),
        (E = O);
    }
    if (I === b.length) return r(y, E), tt && to(y, I), S;
    if (E === null) {
      for (; I < b.length; I++)
        (E = d(y, b[I], w)),
          E !== null &&
            ((g = i(E, g, I)), j === null ? (S = E) : (j.sibling = E), (j = E));
      return tt && to(y, I), S;
    }
    for (E = n(y, E); I < b.length; I++)
      (O = p(E, y, I, b[I], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? I : O.key),
          (g = i(O, g, I)),
          j === null ? (S = O) : (j.sibling = O),
          (j = O));
    return (
      e &&
        E.forEach(function (D) {
          return t(y, D);
        }),
      tt && to(y, I),
      S
    );
  }
  function v(y, g, b, w) {
    var S = zi(b);
    if (typeof S != "function") throw Error(q(150));
    if (((b = S.call(b)), b == null)) throw Error(q(151));
    for (
      var j = (S = null), E = g, I = (g = 0), O = null, C = b.next();
      E !== null && !C.done;
      I++, C = b.next()
    ) {
      E.index > I ? ((O = E), (E = null)) : (O = E.sibling);
      var D = h(y, E, C.value, w);
      if (D === null) {
        E === null && (E = O);
        break;
      }
      e && E && D.alternate === null && t(y, E),
        (g = i(D, g, I)),
        j === null ? (S = D) : (j.sibling = D),
        (j = D),
        (E = O);
    }
    if (C.done) return r(y, E), tt && to(y, I), S;
    if (E === null) {
      for (; !C.done; I++, C = b.next())
        (C = d(y, C.value, w)),
          C !== null &&
            ((g = i(C, g, I)), j === null ? (S = C) : (j.sibling = C), (j = C));
      return tt && to(y, I), S;
    }
    for (E = n(y, E); !C.done; I++, C = b.next())
      (C = p(E, y, I, C.value, w)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? I : C.key),
          (g = i(C, g, I)),
          j === null ? (S = C) : (j.sibling = C),
          (j = C));
    return (
      e &&
        E.forEach(function (P) {
          return t(y, P);
        }),
      tt && to(y, I),
      S
    );
  }
  function k(y, g, b, w) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === Io &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case as:
          e: {
            for (var S = b.key, j = g; j !== null; ) {
              if (j.key === S) {
                if (((S = b.type), S === Io)) {
                  if (j.tag === 7) {
                    r(y, j.sibling),
                      (g = o(j, b.props.children)),
                      (g.return = y),
                      (y = g);
                    break e;
                  }
                } else if (
                  j.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tn &&
                    xp(S) === j.type)
                ) {
                  r(y, j.sibling),
                    (g = o(j, b.props)),
                    (g.ref = Hi(y, j, b)),
                    (g.return = y),
                    (y = g);
                  break e;
                }
                r(y, j);
                break;
              } else t(y, j);
              j = j.sibling;
            }
            b.type === Io
              ? ((g = go(b.props.children, y.mode, w, b.key)),
                (g.return = y),
                (y = g))
              : ((w = Bs(b.type, b.key, b.props, null, y.mode, w)),
                (w.ref = Hi(y, g, b)),
                (w.return = y),
                (y = w));
          }
          return a(y);
        case Do:
          e: {
            for (j = b.key; g !== null; ) {
              if (g.key === j)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === b.containerInfo &&
                  g.stateNode.implementation === b.implementation
                ) {
                  r(y, g.sibling),
                    (g = o(g, b.children || [])),
                    (g.return = y),
                    (y = g);
                  break e;
                } else {
                  r(y, g);
                  break;
                }
              else t(y, g);
              g = g.sibling;
            }
            (g = ic(b, y.mode, w)), (g.return = y), (y = g);
          }
          return a(y);
        case Tn:
          return (j = b._init), k(y, g, j(b._payload), w);
      }
      if (ta(b)) return m(y, g, b, w);
      if (zi(b)) return v(y, g, b, w);
      ys(y, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        g !== null && g.tag === 6
          ? (r(y, g.sibling), (g = o(g, b)), (g.return = y), (y = g))
          : (r(y, g), (g = oc(b, y.mode, w)), (g.return = y), (y = g)),
        a(y))
      : r(y, g);
  }
  return k;
}
var ui = Hm(!0),
  Wm = Hm(!1),
  ul = Xn(null),
  cl = null,
  Wo = null,
  Nf = null;
function Tf() {
  Nf = Wo = cl = null;
}
function Of(e) {
  var t = ul.current;
  Ye(ul), (e._currentValue = t);
}
function fd(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ti(e, t) {
  (cl = e),
    (Nf = Wo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ar = !0), (e.firstContext = null));
}
function Nr(e) {
  var t = e._currentValue;
  if (Nf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wo === null)) {
      if (cl === null) throw Error(q(308));
      (Wo = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else Wo = Wo.next = e;
  return t;
}
var so = null;
function Rf(e) {
  so === null ? (so = [e]) : so.push(e);
}
function Qm(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Rf(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    hn(e, n)
  );
}
function hn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var On = !1;
function Pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Un(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Oe & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      hn(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Rf(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    hn(e, r)
  );
}
function Is(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), mf(e, r);
  }
}
function wp(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function dl(e, t, r, n) {
  var o = e.updateQueue;
  On = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== a &&
        (s === null ? (f.firstBaseUpdate = u) : (s.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (f = u = l = null), (s = i);
    do {
      var h = s.lane,
        p = s.eventTime;
      if ((n & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            v = s;
          switch (((h = t), (p = r), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                d = m.call(p, d, h);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (h = typeof m == "function" ? m.call(p, d, h) : m),
                h == null)
              )
                break e;
              d = lt({}, d, h);
              break e;
            case 2:
              On = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((u = f = p), (l = d)) : (f = f.next = p),
          (a |= h);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (wo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function kp(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(q(191, o));
        o.call(n);
      }
    }
}
var Qa = {},
  Jr = Xn(Qa),
  Oa = Xn(Qa),
  Ra = Xn(Qa);
function lo(e) {
  if (e === Qa) throw Error(q(174));
  return e;
}
function _f(e, t) {
  switch ((Ue(Ra, t), Ue(Oa, e), Ue(Jr, Qa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vc(t, e));
  }
  Ye(Jr), Ue(Jr, t);
}
function ci() {
  Ye(Jr), Ye(Oa), Ye(Ra);
}
function qm(e) {
  lo(Ra.current);
  var t = lo(Jr.current),
    r = Vc(t, e.type);
  t !== r && (Ue(Oa, e), Ue(Jr, r));
}
function Mf(e) {
  Oa.current === e && (Ye(Jr), Ye(Oa));
}
var at = Xn(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ju = [];
function Lf() {
  for (var e = 0; e < Ju.length; e++)
    Ju[e]._workInProgressVersionPrimary = null;
  Ju.length = 0;
}
var As = yn.ReactCurrentDispatcher,
  Zu = yn.ReactCurrentBatchConfig,
  xo = 0,
  st = null,
  Et = null,
  Nt = null,
  hl = !1,
  ua = !1,
  Pa = 0,
  zk = 0;
function Bt() {
  throw Error(q(321));
}
function Df(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Hr(e[r], t[r])) return !1;
  return !0;
}
function If(e, t, r, n, o, i) {
  if (
    ((xo = i),
    (st = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (As.current = e === null || e.memoizedState === null ? Bk : Hk),
    (e = r(n, o)),
    ua)
  ) {
    i = 0;
    do {
      if (((ua = !1), (Pa = 0), 25 <= i)) throw Error(q(301));
      (i += 1),
        (Nt = Et = null),
        (t.updateQueue = null),
        (As.current = Wk),
        (e = r(n, o));
    } while (ua);
  }
  if (
    ((As.current = pl),
    (t = Et !== null && Et.next !== null),
    (xo = 0),
    (Nt = Et = st = null),
    (hl = !1),
    t)
  )
    throw Error(q(300));
  return e;
}
function Af() {
  var e = Pa !== 0;
  return (Pa = 0), e;
}
function qr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Nt === null ? (st.memoizedState = Nt = e) : (Nt = Nt.next = e), Nt;
}
function Tr() {
  if (Et === null) {
    var e = st.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Et.next;
  var t = Nt === null ? st.memoizedState : Nt.next;
  if (t !== null) (Nt = t), (Et = e);
  else {
    if (e === null) throw Error(q(310));
    (Et = e),
      (e = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null,
      }),
      Nt === null ? (st.memoizedState = Nt = e) : (Nt = Nt.next = e);
  }
  return Nt;
}
function _a(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ec(e) {
  var t = Tr(),
    r = t.queue;
  if (r === null) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = Et,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var f = u.lane;
      if ((xo & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
          (st.lanes |= f),
          (wo |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = n) : (l.next = s),
      Hr(n, t.memoizedState) || (ar = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (st.lanes |= i), (wo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function tc(e) {
  var t = Tr(),
    r = t.queue;
  if (r === null) throw Error(q(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Hr(i, t.memoizedState) || (ar = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function Km() {}
function Ym(e, t) {
  var r = st,
    n = Tr(),
    o = t(),
    i = !Hr(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (ar = !0)),
    (n = n.queue),
    zf(Jm.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Nt !== null && Nt.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Ma(9, Xm.bind(null, r, n, o, t), void 0, null),
      Tt === null)
    )
      throw Error(q(349));
    xo & 30 || Gm(r, t, o);
  }
  return o;
}
function Gm(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = st.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (st.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Xm(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Zm(t) && ey(e);
}
function Jm(e, t, r) {
  return r(function () {
    Zm(t) && ey(e);
  });
}
function Zm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Hr(e, r);
  } catch (n) {
    return !0;
  }
}
function ey(e) {
  var t = hn(e, 1);
  t !== null && Br(t, e, 1, -1);
}
function Sp(e) {
  var t = qr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _a,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Uk.bind(null, st, e)),
    [t.memoizedState, e]
  );
}
function Ma(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = st.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (st.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function ty() {
  return Tr().memoizedState;
}
function zs(e, t, r, n) {
  var o = qr();
  (st.flags |= e),
    (o.memoizedState = Ma(1 | t, r, void 0, n === void 0 ? null : n));
}
function su(e, t, r, n) {
  var o = Tr();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Et !== null) {
    var a = Et.memoizedState;
    if (((i = a.destroy), n !== null && Df(n, a.deps))) {
      o.memoizedState = Ma(t, r, i, n);
      return;
    }
  }
  (st.flags |= e), (o.memoizedState = Ma(1 | t, r, i, n));
}
function Ep(e, t) {
  return zs(8390656, 8, e, t);
}
function zf(e, t) {
  return su(2048, 8, e, t);
}
function ry(e, t) {
  return su(4, 2, e, t);
}
function ny(e, t) {
  return su(4, 4, e, t);
}
function oy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function iy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), su(4, 4, oy.bind(null, t, e), r)
  );
}
function Ff() {}
function ay(e, t) {
  var r = Tr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Df(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function sy(e, t) {
  var r = Tr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Df(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function ly(e, t, r) {
  return xo & 21
    ? (Hr(r, t) || ((r = hm()), (st.lanes |= r), (wo |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ar = !0)), (e.memoizedState = r));
}
function Fk(e, t) {
  var r = Me;
  (Me = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Zu.transition;
  Zu.transition = {};
  try {
    e(!1), t();
  } finally {
    (Me = r), (Zu.transition = n);
  }
}
function uy() {
  return Tr().memoizedState;
}
function $k(e, t, r) {
  var n = Hn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cy(e))
  )
    dy(t, r);
  else if (((r = Qm(e, t, r, n)), r !== null)) {
    var o = er();
    Br(r, e, n, o), fy(r, t, n);
  }
}
function Uk(e, t, r) {
  var n = Hn(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (cy(e)) dy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = s), Hr(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Rf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch (u) {
      } finally {
      }
    (r = Qm(e, t, o, n)),
      r !== null && ((o = er()), Br(r, e, n, o), fy(r, t, n));
  }
}
function cy(e) {
  var t = e.alternate;
  return e === st || (t !== null && t === st);
}
function dy(e, t) {
  ua = hl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function fy(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), mf(e, r);
  }
}
var pl = {
    readContext: Nr,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useInsertionEffect: Bt,
    useLayoutEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useMutableSource: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    unstable_isNewReconciler: !1,
  },
  Bk = {
    readContext: Nr,
    useCallback: function (e, t) {
      return (qr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Nr,
    useEffect: Ep,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        zs(4194308, 4, oy.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = qr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = qr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = $k.bind(null, st, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sp,
    useDebugValue: Ff,
    useDeferredValue: function (e) {
      return (qr().memoizedState = e);
    },
    useTransition: function () {
      var e = Sp(!1),
        t = e[0];
      return (e = Fk.bind(null, e[1])), (qr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = st,
        o = qr();
      if (tt) {
        if (r === void 0) throw Error(q(407));
        r = r();
      } else {
        if (((r = t()), Tt === null)) throw Error(q(349));
        xo & 30 || Gm(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        Ep(Jm.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Ma(9, Xm.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = qr(),
        t = Tt.identifierPrefix;
      if (tt) {
        var r = ln,
          n = sn;
        (r = (n & ~(1 << (32 - Ur(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Pa++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = zk++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hk = {
    readContext: Nr,
    useCallback: ay,
    useContext: Nr,
    useEffect: zf,
    useImperativeHandle: iy,
    useInsertionEffect: ry,
    useLayoutEffect: ny,
    useMemo: sy,
    useReducer: ec,
    useRef: ty,
    useState: function () {
      return ec(_a);
    },
    useDebugValue: Ff,
    useDeferredValue: function (e) {
      var t = Tr();
      return ly(t, Et.memoizedState, e);
    },
    useTransition: function () {
      var e = ec(_a)[0],
        t = Tr().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Ym,
    useId: uy,
    unstable_isNewReconciler: !1,
  },
  Wk = {
    readContext: Nr,
    useCallback: ay,
    useContext: Nr,
    useEffect: zf,
    useImperativeHandle: iy,
    useInsertionEffect: ry,
    useLayoutEffect: ny,
    useMemo: sy,
    useReducer: tc,
    useRef: ty,
    useState: function () {
      return tc(_a);
    },
    useDebugValue: Ff,
    useDeferredValue: function (e) {
      var t = Tr();
      return Et === null ? (t.memoizedState = e) : ly(t, Et.memoizedState, e);
    },
    useTransition: function () {
      var e = tc(_a)[0],
        t = Tr().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Ym,
    useId: uy,
    unstable_isNewReconciler: !1,
  };
function Ar(e, t) {
  if (e && e.defaultProps) {
    (t = lt({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function hd(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : lt({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var lu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Oo(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = er(),
      o = Hn(e),
      i = un(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Un(e, i, o)),
      t !== null && (Br(t, e, o, n), Is(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = er(),
      o = Hn(e),
      i = un(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Un(e, i, o)),
      t !== null && (Br(t, e, o, n), Is(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = er(),
      n = Hn(e),
      o = un(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Un(e, o, n)),
      t !== null && (Br(t, e, n, r), Is(t, e, n));
  },
};
function Cp(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ca(r, n) || !Ca(o, i)
      : !0
  );
}
function hy(e, t, r) {
  var n = !1,
    o = qn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Nr(i))
      : ((o = lr(t) ? vo : qt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? si(e, o) : qn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = lu),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function jp(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && lu.enqueueReplaceState(t, t.state, null);
}
function pd(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = {}), Pf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Nr(i))
    : ((i = lr(t) ? vo : qt.current), (o.context = si(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (hd(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && lu.enqueueReplaceState(o, o.state, null),
      dl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function di(e, t) {
  try {
    var r = "",
      n = t;
    do (r += v1(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o = "\nError generating stack: " + i.message + "\n" + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function rc(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r != null ? r : null,
    digest: t != null ? t : null,
  };
}
function gd(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Qk = typeof WeakMap == "function" ? WeakMap : Map;
function py(e, t, r) {
  (r = un(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ml || ((ml = !0), (Cd = n)), gd(e, t);
    }),
    r
  );
}
function gy(e, t, r) {
  (r = un(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        gd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        gd(e, t),
          typeof n != "function" &&
            (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function Np(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Qk();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = iS.bind(null, e, t, r)), t.then(e, e));
}
function Tp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Op(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = un(-1, 1)), (t.tag = 2), Un(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Vk = yn.ReactCurrentOwner,
  ar = !1;
function Jt(e, t, r, n) {
  t.child = e === null ? Wm(t, null, r, n) : ui(t, e.child, r, n);
}
function Rp(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    ti(t, o),
    (n = If(e, t, r, n, i, o)),
    (r = Af()),
    e !== null && !ar
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (tt && r && Ef(t), (t.flags |= 1), Jt(e, t, n, o), t.child)
  );
}
function Pp(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !qf(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), my(e, t, i, n, o))
      : ((e = Bs(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Ca), r(a, n) && e.ref === t.ref)
    )
      return pn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Wn(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function my(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ca(i, n) && e.ref === t.ref)
      if (((ar = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ar = !0);
      else return (t.lanes = e.lanes), pn(e, t, o);
  }
  return md(e, t, r, n, o);
}
function yy(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ue(Vo, fr),
        (fr |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ue(Vo, fr),
          (fr |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        Ue(Vo, fr),
        (fr |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Ue(Vo, fr),
      (fr |= n);
  return Jt(e, t, o, r), t.child;
}
function vy(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function md(e, t, r, n, o) {
  var i = lr(r) ? vo : qt.current;
  return (
    (i = si(t, i)),
    ti(t, o),
    (r = If(e, t, r, n, i, o)),
    (n = Af()),
    e !== null && !ar
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (tt && n && Ef(t), (t.flags |= 1), Jt(e, t, r, o), t.child)
  );
}
function _p(e, t, r, n, o) {
  if (lr(r)) {
    var i = !0;
    al(t);
  } else i = !1;
  if ((ti(t, o), t.stateNode === null))
    Fs(e, t), hy(t, r, n), pd(t, r, n, o), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Nr(u))
      : ((u = lr(r) ? vo : qt.current), (u = si(t, u)));
    var f = r.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== n || l !== u) && jp(t, a, n, u)),
      (On = !1);
    var h = t.memoizedState;
    (a.state = h),
      dl(t, n, a, o),
      (l = t.memoizedState),
      s !== n || h !== l || sr.current || On
        ? (typeof f == "function" && (hd(t, r, f, n), (l = t.memoizedState)),
          (s = On || Cp(t, r, s, n, h, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      Vm(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ar(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (h = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Nr(l))
        : ((l = lr(r) ? vo : qt.current), (l = si(t, l)));
    var p = r.getDerivedStateFromProps;
    (f =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || h !== l) && jp(t, a, n, l)),
      (On = !1),
      (h = t.memoizedState),
      (a.state = h),
      dl(t, n, a, o);
    var m = t.memoizedState;
    s !== d || h !== m || sr.current || On
      ? (typeof p == "function" && (hd(t, r, p, n), (m = t.memoizedState)),
        (u = On || Cp(t, r, u, n, h, m, l) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, m, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, m, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = m)),
        (a.props = n),
        (a.state = m),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return yd(e, t, r, n, i, o);
}
function yd(e, t, r, n, o, i) {
  vy(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return o && yp(t, r, !1), pn(e, t, i);
  (n = t.stateNode), (Vk.current = t);
  var s =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ui(t, e.child, null, i)), (t.child = ui(t, null, s, i)))
      : Jt(e, t, s, i),
    (t.memoizedState = n.state),
    o && yp(t, r, !0),
    t.child
  );
}
function by(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mp(e, t.context, !1),
    _f(e, t.containerInfo);
}
function Mp(e, t, r, n, o) {
  return li(), jf(o), (t.flags |= 256), Jt(e, t, r, n), t.child;
}
var vd = { dehydrated: null, treeContext: null, retryLane: 0 };
function bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xy(e, t, r) {
  var n = t.pendingProps,
    o = at.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ue(at, o & 1),
    e === null)
  )
    return (
      dd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = du(a, n, 0, null)),
              (e = go(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = bd(r)),
              (t.memoizedState = vd),
              e)
            : $f(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return qk(e, t, a, n, s, o, r);
  if (i) {
    (i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Wn(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Wn(s, i)) : ((i = go(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? bd(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = vd),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Wn(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function $f(e, t) {
  return (
    (t = du({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vs(e, t, r, n) {
  return (
    n !== null && jf(n),
    ui(t, e.child, null, r),
    (e = $f(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qk(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = rc(Error(q(422)))), vs(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = du({ mode: "visible", children: n.children }, o, 0, null)),
        (i = go(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && ui(t, e.child, null, a),
        (t.child.memoizedState = bd(a)),
        (t.memoizedState = vd),
        i);
  if (!(t.mode & 1)) return vs(e, t, a, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(q(419))), (n = rc(i, n, void 0)), vs(e, t, a, n);
  }
  if (((s = (a & e.childLanes) !== 0), ar || s)) {
    if (((n = Tt), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), hn(e, o), Br(n, e, o, -1));
    }
    return Vf(), (n = rc(Error(q(421)))), vs(e, t, a, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = aS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (pr = $n(o.nextSibling)),
      (gr = t),
      (tt = !0),
      ($r = null),
      e !== null &&
        ((kr[Sr++] = sn),
        (kr[Sr++] = ln),
        (kr[Sr++] = bo),
        (sn = e.id),
        (ln = e.overflow),
        (bo = t)),
      (t = $f(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Lp(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), fd(e.return, t, r);
}
function nc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function wy(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Jt(e, t, n.children, r), (n = at.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lp(e, r, t);
        else if (e.tag === 19) Lp(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Ue(at, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && fl(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          nc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        nc(t, !0, r, null, i);
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pn(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wo |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(q(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Wn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Wn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Kk(e, t, r) {
  switch (t.tag) {
    case 3:
      by(t), li();
      break;
    case 5:
      qm(t);
      break;
    case 1:
      lr(t.type) && al(t);
      break;
    case 4:
      _f(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      Ue(ul, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Ue(at, at.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? xy(e, t, r)
          : (Ue(at, at.current & 1),
            (e = pn(e, t, r)),
            e !== null ? e.sibling : null);
      Ue(at, at.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return wy(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ue(at, at.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yy(e, t, r);
  }
  return pn(e, t, r);
}
var ky, xd, Sy, Ey;
ky = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
xd = function () {};
Sy = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), lo(Jr.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Bc(e, o)), (n = Bc(e, n)), (i = []);
        break;
      case "select":
        (o = lt({}, o, { value: void 0 })),
          (n = lt({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Qc(e, o)), (n = Qc(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = ol);
    }
    qc(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (va.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((s = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (va.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && qe("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ey = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Wi(e, t) {
  if (!tt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ht(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Yk(e, t, r) {
  var n = t.pendingProps;
  switch ((Cf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ht(t), null;
    case 1:
      return lr(t.type) && il(), Ht(t), null;
    case 3:
      return (
        (n = t.stateNode),
        ci(),
        Ye(sr),
        Ye(qt),
        Lf(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $r !== null && (Td($r), ($r = null)))),
        xd(e, t),
        Ht(t),
        null
      );
    case 5:
      Mf(t);
      var o = lo(Ra.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Sy(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(q(166));
          return Ht(t), null;
        }
        if (((e = lo(Jr.current)), ms(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Kr] = t), (n[Ta] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              qe("cancel", n), qe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              qe("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < na.length; o++) qe(na[o], n);
              break;
            case "source":
              qe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              qe("error", n), qe("load", n);
              break;
            case "details":
              qe("toggle", n);
              break;
            case "input":
              Hh(n, i), qe("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                qe("invalid", n);
              break;
            case "textarea":
              Qh(n, i), qe("invalid", n);
          }
          qc(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      gs(n.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      gs(n.textContent, s, e),
                    (o = ["children", "" + s]))
                : va.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  qe("scroll", n);
            }
          switch (r) {
            case "input":
              ss(n), Wh(n, i, !0);
              break;
            case "textarea":
              ss(n), Vh(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = ol);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jg(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[Kr] = t),
            (e[Ta] = n),
            ky(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Kc(r, n)), r)) {
              case "dialog":
                qe("cancel", e), qe("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < na.length; o++) qe(na[o], e);
                o = n;
                break;
              case "source":
                qe("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                qe("error", e), qe("load", e), (o = n);
                break;
              case "details":
                qe("toggle", e), (o = n);
                break;
              case "input":
                Hh(e, n), (o = Bc(e, n)), qe("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = lt({}, n, { value: void 0 })),
                  qe("invalid", e);
                break;
              case "textarea":
                Qh(e, n), (o = Qc(e, n)), qe("invalid", e);
                break;
              default:
                o = n;
            }
            qc(r, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? tm(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Zg(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && ba(e, l)
                    : typeof l == "number" && ba(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (va.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && qe("scroll", e)
                      : l != null && cf(e, i, l, a));
              }
            switch (r) {
              case "input":
                ss(e), Wh(e, n, !1);
                break;
              case "textarea":
                ss(e), Vh(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Vn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Xo(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Xo(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ol);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ht(t), null;
    case 6:
      if (e && t.stateNode != null) Ey(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(q(166));
        if (((r = lo(Ra.current)), lo(Jr.current), ms(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Kr] = t),
            (i = n.nodeValue !== r) && ((e = gr), e !== null))
          )
            switch (e.tag) {
              case 3:
                gs(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gs(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Kr] = t),
            (t.stateNode = n);
      }
      return Ht(t), null;
    case 13:
      if (
        (Ye(at),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (tt && pr !== null && t.mode & 1 && !(t.flags & 128))
          Bm(), li(), (t.flags |= 98560), (i = !1);
        else if (((i = ms(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(q(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(q(317));
            i[Kr] = t;
          } else
            li(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ht(t), (i = !1);
        } else $r !== null && (Td($r), ($r = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || at.current & 1 ? Ct === 0 && (Ct = 3) : Vf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ht(t),
          null);
    case 4:
      return (
        ci(), xd(e, t), e === null && ja(t.stateNode.containerInfo), Ht(t), null
      );
    case 10:
      return Of(t.type._context), Ht(t), null;
    case 17:
      return lr(t.type) && il(), Ht(t), null;
    case 19:
      if ((Ye(at), (i = t.memoizedState), i === null)) return Ht(t), null;
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Wi(i, !1);
        else {
          if (Ct !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = fl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Wi(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Ue(at, (at.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            gt() > fi &&
            ((t.flags |= 128), (n = !0), Wi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = fl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Wi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !tt)
            )
              return Ht(t), null;
          } else
            2 * gt() - i.renderingStartTime > fi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Wi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = gt()),
          (t.sibling = null),
          (r = at.current),
          Ue(at, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ht(t), null);
    case 22:
    case 23:
      return (
        Qf(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? fr & 1073741824 && (Ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ht(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(q(156, t.tag));
}
function Gk(e, t) {
  switch ((Cf(t), t.tag)) {
    case 1:
      return (
        lr(t.type) && il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ci(),
        Ye(sr),
        Ye(qt),
        Lf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mf(t), null;
    case 13:
      if (
        (Ye(at), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(q(340));
        li();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ye(at), null;
    case 4:
      return ci(), null;
    case 10:
      return Of(t.type._context), null;
    case 22:
    case 23:
      return Qf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bs = !1,
  Vt = !1,
  Xk = typeof WeakSet == "function" ? WeakSet : Set,
  oe = null;
function Qo(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        dt(e, t, n);
      }
    else r.current = null;
}
function wd(e, t, r) {
  try {
    r();
  } catch (n) {
    dt(e, t, n);
  }
}
var Dp = !1;
function Jk(e, t) {
  if (((od = tl), (e = Om()), Sf(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch (w) {
            r = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (h === r && ++u === o && (s = a),
                h === i && ++f === n && (l = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (
    id = { focusedElem: e, selectionRange: r }, tl = !1, oe = t;
    oe !== null;

  )
    if (((t = oe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (oe = e);
    else
      for (; oe !== null; ) {
        t = oe;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    k = m.memoizedState,
                    y = t.stateNode,
                    g = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ar(t.type, v),
                      k
                    );
                  y.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(q(163));
            }
        } catch (w) {
          dt(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (oe = e);
          break;
        }
        oe = t.return;
      }
  return (m = Dp), (Dp = !1), m;
}
function ca(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wd(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function uu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function kd(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kr], delete t[Ta], delete t[ld], delete t[Lk], delete t[Dk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ip(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ol));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Sd(e, t, r), e = e.sibling; e !== null; ) Sd(e, t, r), (e = e.sibling);
}
function Ed(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ed(e, t, r), e = e.sibling; e !== null; ) Ed(e, t, r), (e = e.sibling);
}
var Pt = null,
  zr = !1;
function Sn(e, t, r) {
  for (r = r.child; r !== null; ) Ny(e, t, r), (r = r.sibling);
}
function Ny(e, t, r) {
  if (Xr && typeof Xr.onCommitFiberUnmount == "function")
    try {
      Xr.onCommitFiberUnmount(tu, r);
    } catch (s) {}
  switch (r.tag) {
    case 5:
      Vt || Qo(r, t);
    case 6:
      var n = Pt,
        o = zr;
      (Pt = null),
        Sn(e, t, r),
        (Pt = n),
        (zr = o),
        Pt !== null &&
          (zr
            ? ((e = Pt),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Pt.removeChild(r.stateNode));
      break;
    case 18:
      Pt !== null &&
        (zr
          ? ((e = Pt),
            (r = r.stateNode),
            e.nodeType === 8
              ? Gu(e.parentNode, r)
              : e.nodeType === 1 && Gu(e, r),
            Sa(e))
          : Gu(Pt, r.stateNode));
      break;
    case 4:
      (n = Pt),
        (o = zr),
        (Pt = r.stateNode.containerInfo),
        (zr = !0),
        Sn(e, t, r),
        (Pt = n),
        (zr = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Vt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && wd(r, t, a),
            (o = o.next);
        } while (o !== n);
      }
      Sn(e, t, r);
      break;
    case 1:
      if (
        !Vt &&
        (Qo(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          dt(r, t, s);
        }
      Sn(e, t, r);
      break;
    case 21:
      Sn(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Vt = (n = Vt) || r.memoizedState !== null), Sn(e, t, r), (Vt = n))
        : Sn(e, t, r);
      break;
    default:
      Sn(e, t, r);
  }
}
function Ap(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Xk()),
      t.forEach(function (n) {
        var o = sS.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Lr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Pt = s.stateNode), (zr = !1);
              break e;
            case 3:
              (Pt = s.stateNode.containerInfo), (zr = !0);
              break e;
            case 4:
              (Pt = s.stateNode.containerInfo), (zr = !0);
              break e;
          }
          s = s.return;
        }
        if (Pt === null) throw Error(q(160));
        Ny(i, a, o), (Pt = null), (zr = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        dt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ty(t, e), (t = t.sibling);
}
function Ty(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lr(t, e), Vr(e), n & 4)) {
        try {
          ca(3, e, e.return), uu(3, e);
        } catch (v) {
          dt(e, e.return, v);
        }
        try {
          ca(5, e, e.return);
        } catch (v) {
          dt(e, e.return, v);
        }
      }
      break;
    case 1:
      Lr(t, e), Vr(e), n & 512 && r !== null && Qo(r, r.return);
      break;
    case 5:
      if (
        (Lr(t, e),
        Vr(e),
        n & 512 && r !== null && Qo(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ba(o, "");
        } catch (v) {
          dt(e, e.return, v);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Gg(o, i),
              Kc(s, a);
            var u = Kc(s, i);
            for (a = 0; a < l.length; a += 2) {
              var f = l[a],
                d = l[a + 1];
              f === "style"
                ? tm(o, d)
                : f === "dangerouslySetInnerHTML"
                ? Zg(o, d)
                : f === "children"
                ? ba(o, d)
                : cf(o, f, d, u);
            }
            switch (s) {
              case "input":
                Hc(o, i);
                break;
              case "textarea":
                Xg(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Xo(o, !!i.multiple, p, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xo(o, !!i.multiple, i.defaultValue, !0)
                      : Xo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ta] = i;
          } catch (v) {
            dt(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Lr(t, e), Vr(e), n & 4)) {
        if (e.stateNode === null) throw Error(q(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          dt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Lr(t, e), Vr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Sa(t.containerInfo);
        } catch (v) {
          dt(e, e.return, v);
        }
      break;
    case 4:
      Lr(t, e), Vr(e);
      break;
    case 13:
      Lr(t, e),
        Vr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Hf = gt())),
        n & 4 && Ap(e);
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Vt = (u = Vt) || f), Lr(t, e), (Vt = u)) : Lr(t, e),
        Vr(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (oe = e, f = e.child; f !== null; ) {
            for (d = oe = f; oe !== null; ) {
              switch (((h = oe), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ca(4, h, h.return);
                  break;
                case 1:
                  Qo(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (n = h), (r = h.return);
                    try {
                      (t = n),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      dt(n, r, v);
                    }
                  }
                  break;
                case 5:
                  Qo(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fp(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (oe = p)) : Fp(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = em("display", a)));
              } catch (v) {
                dt(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                dt(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Lr(t, e), Vr(e), n & 4 && Ap(e);
      break;
    case 21:
      break;
    default:
      Lr(t, e), Vr(e);
  }
}
function Vr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jy(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(q(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (ba(o, ""), (n.flags &= -33));
          var i = Ip(e);
          Ed(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = Ip(e);
          Sd(e, s, a);
          break;
        default:
          throw Error(q(161));
      }
    } catch (l) {
      dt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zk(e, t, r) {
  (oe = e), Oy(e);
}
function Oy(e, t, r) {
  for (var n = (e.mode & 1) !== 0; oe !== null; ) {
    var o = oe,
      i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || bs;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Vt;
        s = bs;
        var u = Vt;
        if (((bs = a), (Vt = l) && !u))
          for (oe = o; oe !== null; )
            (a = oe),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? $p(o)
                : l !== null
                ? ((l.return = a), (oe = l))
                : $p(o);
        for (; i !== null; ) (oe = i), Oy(i), (i = i.sibling);
        (oe = o), (bs = s), (Vt = u);
      }
      zp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (oe = i)) : zp(e);
  }
}
function zp(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Vt || uu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Vt)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ar(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && kp(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                kp(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Sa(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(q(163));
          }
        Vt || (t.flags & 512 && kd(t));
      } catch (h) {
        dt(t, t.return, h);
      }
    }
    if (t === e) {
      oe = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (oe = r);
      break;
    }
    oe = t.return;
  }
}
function Fp(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t === e) {
      oe = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (oe = r);
      break;
    }
    oe = t.return;
  }
}
function $p(e) {
  for (; oe !== null; ) {
    var t = oe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            uu(4, t);
          } catch (l) {
            dt(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              dt(t, o, l);
            }
          }
          var i = t.return;
          try {
            kd(t);
          } catch (l) {
            dt(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            kd(t);
          } catch (l) {
            dt(t, a, l);
          }
      }
    } catch (l) {
      dt(t, t.return, l);
    }
    if (t === e) {
      oe = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (oe = s);
      break;
    }
    oe = t.return;
  }
}
var eS = Math.ceil,
  gl = yn.ReactCurrentDispatcher,
  Uf = yn.ReactCurrentOwner,
  jr = yn.ReactCurrentBatchConfig,
  Oe = 0,
  Tt = null,
  wt = null,
  Lt = 0,
  fr = 0,
  Vo = Xn(0),
  Ct = 0,
  La = null,
  wo = 0,
  cu = 0,
  Bf = 0,
  da = null,
  ir = null,
  Hf = 0,
  fi = 1 / 0,
  nn = null,
  ml = !1,
  Cd = null,
  Bn = null,
  xs = !1,
  In = null,
  yl = 0,
  fa = 0,
  jd = null,
  $s = -1,
  Us = 0;
function er() {
  return Oe & 6 ? gt() : $s !== -1 ? $s : ($s = gt());
}
function Hn(e) {
  return e.mode & 1
    ? Oe & 2 && Lt !== 0
      ? Lt & -Lt
      : Ak.transition !== null
      ? (Us === 0 && (Us = hm()), Us)
      : ((e = Me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xm(e.type))),
        e)
    : 1;
}
function Br(e, t, r, n) {
  if (50 < fa) throw ((fa = 0), (jd = null), Error(q(185)));
  Ba(e, r, n),
    (!(Oe & 2) || e !== Tt) &&
      (e === Tt && (!(Oe & 2) && (cu |= r), Ct === 4 && Mn(e, Lt)),
      ur(e, n),
      r === 1 && Oe === 0 && !(t.mode & 1) && ((fi = gt() + 500), au && Jn()));
}
function ur(e, t) {
  var r = e.callbackNode;
  A1(e, t);
  var n = el(e, e === Tt ? Lt : 0);
  if (n === 0)
    r !== null && Yh(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Yh(r), t === 1))
      e.tag === 0 ? Ik(Up.bind(null, e)) : Fm(Up.bind(null, e)),
        _k(function () {
          !(Oe & 6) && Jn();
        }),
        (r = null);
    else {
      switch (pm(n)) {
        case 1:
          r = gf;
          break;
        case 4:
          r = dm;
          break;
        case 16:
          r = Zs;
          break;
        case 536870912:
          r = fm;
          break;
        default:
          r = Zs;
      }
      r = Ay(r, Ry.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Ry(e, t) {
  if ((($s = -1), (Us = 0), Oe & 6)) throw Error(q(327));
  var r = e.callbackNode;
  if (ri() && e.callbackNode !== r) return null;
  var n = el(e, e === Tt ? Lt : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = vl(e, n);
  else {
    t = n;
    var o = Oe;
    Oe |= 2;
    var i = _y();
    (Tt !== e || Lt !== t) && ((nn = null), (fi = gt() + 500), po(e, t));
    do
      try {
        nS();
        break;
      } catch (s) {
        Py(e, s);
      }
    while (!0);
    Tf(),
      (gl.current = i),
      (Oe = o),
      wt !== null ? (t = 0) : ((Tt = null), (Lt = 0), (t = Ct));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zc(e)), o !== 0 && ((n = o), (t = Nd(e, o)))), t === 1)
    )
      throw ((r = La), po(e, 0), Mn(e, n), ur(e, gt()), r);
    if (t === 6) Mn(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !tS(o) &&
          ((t = vl(e, n)),
          t === 2 && ((i = Zc(e)), i !== 0 && ((n = i), (t = Nd(e, i)))),
          t === 1))
      )
        throw ((r = La), po(e, 0), Mn(e, n), ur(e, gt()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          ro(e, ir, nn);
          break;
        case 3:
          if (
            (Mn(e, n), (n & 130023424) === n && ((t = Hf + 500 - gt()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              er(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sd(ro.bind(null, e, ir, nn), t);
            break;
          }
          ro(e, ir, nn);
          break;
        case 4:
          if ((Mn(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Ur(n);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
          }
          if (
            ((n = o),
            (n = gt() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * eS(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = sd(ro.bind(null, e, ir, nn), n);
            break;
          }
          ro(e, ir, nn);
          break;
        case 5:
          ro(e, ir, nn);
          break;
        default:
          throw Error(q(329));
      }
    }
  }
  return ur(e, gt()), e.callbackNode === r ? Ry.bind(null, e) : null;
}
function Nd(e, t) {
  var r = da;
  return (
    e.current.memoizedState.isDehydrated && (po(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = ir), (ir = r), t !== null && Td(t)),
    e
  );
}
function Td(e) {
  ir === null ? (ir = e) : ir.push.apply(ir, e);
}
function tS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Hr(i(), o)) return !1;
          } catch (a) {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mn(e, t) {
  for (
    t &= ~Bf,
      t &= ~cu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ur(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Up(e) {
  if (Oe & 6) throw Error(q(327));
  ri();
  var t = el(e, 0);
  if (!(t & 1)) return ur(e, gt()), null;
  var r = vl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Zc(e);
    n !== 0 && ((t = n), (r = Nd(e, n)));
  }
  if (r === 1) throw ((r = La), po(e, 0), Mn(e, t), ur(e, gt()), r);
  if (r === 6) throw Error(q(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ro(e, ir, nn),
    ur(e, gt()),
    null
  );
}
function Wf(e, t) {
  var r = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    (Oe = r), Oe === 0 && ((fi = gt() + 500), au && Jn());
  }
}
function ko(e) {
  In !== null && In.tag === 0 && !(Oe & 6) && ri();
  var t = Oe;
  Oe |= 1;
  var r = jr.transition,
    n = Me;
  try {
    if (((jr.transition = null), (Me = 1), e)) return e();
  } finally {
    (Me = n), (jr.transition = r), (Oe = t), !(Oe & 6) && Jn();
  }
}
function Qf() {
  (fr = Vo.current), Ye(Vo);
}
function po(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Pk(r)), wt !== null))
    for (r = wt.return; r !== null; ) {
      var n = r;
      switch ((Cf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && il();
          break;
        case 3:
          ci(), Ye(sr), Ye(qt), Lf();
          break;
        case 5:
          Mf(n);
          break;
        case 4:
          ci();
          break;
        case 13:
          Ye(at);
          break;
        case 19:
          Ye(at);
          break;
        case 10:
          Of(n.type._context);
          break;
        case 22:
        case 23:
          Qf();
      }
      r = r.return;
    }
  if (
    ((Tt = e),
    (wt = e = Wn(e.current, null)),
    (Lt = fr = t),
    (Ct = 0),
    (La = null),
    (Bf = cu = wo = 0),
    (ir = da = null),
    so !== null)
  ) {
    for (t = 0; t < so.length; t++)
      if (((r = so[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (n.next = a);
        }
        r.pending = n;
      }
    so = null;
  }
  return e;
}
function Py(e, t) {
  do {
    var r = wt;
    try {
      if ((Tf(), (As.current = pl), hl)) {
        for (var n = st.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        hl = !1;
      }
      if (
        ((xo = 0),
        (Nt = Et = st = null),
        (ua = !1),
        (Pa = 0),
        (Uf.current = null),
        r === null || r.return === null)
      ) {
        (Ct = 1), (La = t), (wt = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t;
        if (
          ((t = Lt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = Tp(a);
          if (p !== null) {
            (p.flags &= -257),
              Op(p, a, s, i, t),
              p.mode & 1 && Np(i, u, t),
              (t = p),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Np(i, u, t), Vf();
              break e;
            }
            l = Error(q(426));
          }
        } else if (tt && s.mode & 1) {
          var k = Tp(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Op(k, a, s, i, t),
              jf(di(l, s));
            break e;
          }
        }
        (i = l = di(l, s)),
          Ct !== 4 && (Ct = 2),
          da === null ? (da = [i]) : da.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = py(i, l, t);
              wp(i, y);
              break e;
            case 1:
              s = l;
              var g = i.type,
                b = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (Bn === null || !Bn.has(b))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = gy(i, s, t);
                wp(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ly(r);
    } catch (S) {
      (t = S), wt === r && r !== null && (wt = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function _y() {
  var e = gl.current;
  return (gl.current = pl), e === null ? pl : e;
}
function Vf() {
  (Ct === 0 || Ct === 3 || Ct === 2) && (Ct = 4),
    Tt === null || (!(wo & 268435455) && !(cu & 268435455)) || Mn(Tt, Lt);
}
function vl(e, t) {
  var r = Oe;
  Oe |= 2;
  var n = _y();
  (Tt !== e || Lt !== t) && ((nn = null), po(e, t));
  do
    try {
      rS();
      break;
    } catch (o) {
      Py(e, o);
    }
  while (!0);
  if ((Tf(), (Oe = r), (gl.current = n), wt !== null)) throw Error(q(261));
  return (Tt = null), (Lt = 0), Ct;
}
function rS() {
  for (; wt !== null; ) My(wt);
}
function nS() {
  for (; wt !== null && !T1(); ) My(wt);
}
function My(e) {
  var t = Iy(e.alternate, e, fr);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ly(e) : (wt = t),
    (Uf.current = null);
}
function Ly(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Gk(r, t)), r !== null)) {
        (r.flags &= 32767), (wt = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ct = 6), (wt = null);
        return;
      }
    } else if (((r = Yk(r, t, fr)), r !== null)) {
      wt = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      wt = t;
      return;
    }
    wt = t = e;
  } while (t !== null);
  Ct === 0 && (Ct = 5);
}
function ro(e, t, r) {
  var n = Me,
    o = jr.transition;
  try {
    (jr.transition = null), (Me = 1), oS(e, t, r, n);
  } finally {
    (jr.transition = o), (Me = n);
  }
  return null;
}
function oS(e, t, r, n) {
  do ri();
  while (In !== null);
  if (Oe & 6) throw Error(q(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(q(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (z1(e, i),
    e === Tt && ((wt = Tt = null), (Lt = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      xs ||
      ((xs = !0),
      Ay(Zs, function () {
        return ri(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = jr.transition), (jr.transition = null);
    var a = Me;
    Me = 1;
    var s = Oe;
    (Oe |= 4),
      (Uf.current = null),
      Jk(e, r),
      Ty(r, e),
      Ek(id),
      (tl = !!od),
      (id = od = null),
      (e.current = r),
      Zk(r),
      O1(),
      (Oe = s),
      (Me = a),
      (jr.transition = i);
  } else e.current = r;
  if (
    (xs && ((xs = !1), (In = e), (yl = o)),
    (i = e.pendingLanes),
    i === 0 && (Bn = null),
    _1(r.stateNode),
    ur(e, gt()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (ml) throw ((ml = !1), (e = Cd), (Cd = null), e);
  return (
    yl & 1 && e.tag !== 0 && ri(),
    (i = e.pendingLanes),
    i & 1 ? (e === jd ? fa++ : ((fa = 0), (jd = e))) : (fa = 0),
    Jn(),
    null
  );
}
function ri() {
  if (In !== null) {
    var e = pm(yl),
      t = jr.transition,
      r = Me;
    try {
      if (((jr.transition = null), (Me = 16 > e ? 16 : e), In === null))
        var n = !1;
      else {
        if (((e = In), (In = null), (yl = 0), Oe & 6)) throw Error(q(331));
        var o = Oe;
        for (Oe |= 4, oe = e.current; oe !== null; ) {
          var i = oe,
            a = i.child;
          if (oe.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (oe = u; oe !== null; ) {
                  var f = oe;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (oe = d);
                  else
                    for (; oe !== null; ) {
                      f = oe;
                      var h = f.sibling,
                        p = f.return;
                      if ((Cy(f), f === u)) {
                        oe = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (oe = h);
                        break;
                      }
                      oe = p;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              oe = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (oe = a);
          else
            e: for (; oe !== null; ) {
              if (((i = oe), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ca(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (oe = y);
                break e;
              }
              oe = i.return;
            }
        }
        var g = e.current;
        for (oe = g; oe !== null; ) {
          a = oe;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (oe = b);
          else
            e: for (a = g; oe !== null; ) {
              if (((s = oe), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uu(9, s);
                  }
                } catch (S) {
                  dt(s, s.return, S);
                }
              if (s === a) {
                oe = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (oe = w);
                break e;
              }
              oe = s.return;
            }
        }
        if (
          ((Oe = o), Jn(), Xr && typeof Xr.onPostCommitFiberRoot == "function")
        )
          try {
            Xr.onPostCommitFiberRoot(tu, e);
          } catch (S) {}
        n = !0;
      }
      return n;
    } finally {
      (Me = r), (jr.transition = t);
    }
  }
  return !1;
}
function Bp(e, t, r) {
  (t = di(r, t)),
    (t = py(e, t, 1)),
    (e = Un(e, t, 1)),
    (t = er()),
    e !== null && (Ba(e, 1, t), ur(e, t));
}
function dt(e, t, r) {
  if (e.tag === 3) Bp(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bp(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Bn === null || !Bn.has(n)))
        ) {
          (e = di(r, e)),
            (e = gy(t, e, 1)),
            (t = Un(t, e, 1)),
            (e = er()),
            t !== null && (Ba(t, 1, e), ur(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function iS(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = er()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Tt === e &&
      (Lt & r) === r &&
      (Ct === 4 || (Ct === 3 && (Lt & 130023424) === Lt && 500 > gt() - Hf)
        ? po(e, 0)
        : (Bf |= r)),
    ur(e, t);
}
function Dy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304))
      : (t = 1));
  var r = er();
  (e = hn(e, t)), e !== null && (Ba(e, t, r), ur(e, r));
}
function aS(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Dy(e, r);
}
function sS(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(q(314));
  }
  n !== null && n.delete(t), Dy(e, r);
}
var Iy;
Iy = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || sr.current) ar = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ar = !1), Kk(e, t, r);
      ar = !!(e.flags & 131072);
    }
  else (ar = !1), tt && t.flags & 1048576 && $m(t, ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Fs(e, t), (e = t.pendingProps);
      var o = si(t, qt.current);
      ti(t, r), (o = If(null, t, n, e, o, r));
      var i = Af();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lr(n) ? ((i = !0), al(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Pf(t),
            (o.updater = lu),
            (t.stateNode = o),
            (o._reactInternals = t),
            pd(t, n, e, r),
            (t = yd(null, t, n, !0, i, r)))
          : ((t.tag = 0), tt && i && Ef(t), Jt(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Fs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = uS(n)),
          (e = Ar(n, e)),
          o)
        ) {
          case 0:
            t = md(null, t, n, e, r);
            break e;
          case 1:
            t = _p(null, t, n, e, r);
            break e;
          case 11:
            t = Rp(null, t, n, e, r);
            break e;
          case 14:
            t = Pp(null, t, n, Ar(n.type, e), r);
            break e;
        }
        throw Error(q(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ar(n, o)),
        md(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ar(n, o)),
        _p(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((by(t), e === null)) throw Error(q(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Vm(e, t),
          dl(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = di(Error(q(423)), t)), (t = Mp(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = di(Error(q(424)), t)), (t = Mp(e, t, n, r, o));
            break e;
          } else
            for (
              pr = $n(t.stateNode.containerInfo.firstChild),
                gr = t,
                tt = !0,
                $r = null,
                r = Wm(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((li(), n === o)) {
            t = pn(e, t, r);
            break e;
          }
          Jt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qm(t),
        e === null && dd(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        ad(n, o) ? (a = null) : i !== null && ad(n, i) && (t.flags |= 32),
        vy(e, t),
        Jt(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && dd(t), null;
    case 13:
      return xy(e, t, r);
    case 4:
      return (
        _f(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ui(t, null, n, r)) : Jt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ar(n, o)),
        Rp(e, t, n, o, r)
      );
    case 7:
      return Jt(e, t, t.pendingProps, r), t.child;
    case 8:
      return Jt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Jt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ue(ul, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Hr(i.value, a)) {
            if (i.children === o.children && !sr.current) {
              t = pn(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = un(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      fd(i.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(q(341));
                (a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  fd(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Jt(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        ti(t, r),
        (o = Nr(o)),
        (n = n(o)),
        (t.flags |= 1),
        Jt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Ar(n, t.pendingProps)),
        (o = Ar(n.type, o)),
        Pp(e, t, n, o, r)
      );
    case 15:
      return my(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ar(n, o)),
        Fs(e, t),
        (t.tag = 1),
        lr(n) ? ((e = !0), al(t)) : (e = !1),
        ti(t, r),
        hy(t, n, o),
        pd(t, n, o, r),
        yd(null, t, n, !0, e, r)
      );
    case 19:
      return wy(e, t, r);
    case 22:
      return yy(e, t, r);
  }
  throw Error(q(156, t.tag));
};
function Ay(e, t) {
  return cm(e, t);
}
function lS(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Cr(e, t, r, n) {
  return new lS(e, t, r, n);
}
function qf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function uS(e) {
  if (typeof e == "function") return qf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ff)) return 11;
    if (e === hf) return 14;
  }
  return 2;
}
function Wn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Cr(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Bs(e, t, r, n, o, i) {
  var a = 2;
  if (((n = e), typeof e == "function")) qf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Io:
        return go(r.children, o, i, t);
      case df:
        (a = 8), (o |= 8);
        break;
      case zc:
        return (
          (e = Cr(12, r, t, o | 2)), (e.elementType = zc), (e.lanes = i), e
        );
      case Fc:
        return (e = Cr(13, r, t, o)), (e.elementType = Fc), (e.lanes = i), e;
      case $c:
        return (e = Cr(19, r, t, o)), (e.elementType = $c), (e.lanes = i), e;
      case qg:
        return du(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qg:
              a = 10;
              break e;
            case Vg:
              a = 9;
              break e;
            case ff:
              a = 11;
              break e;
            case hf:
              a = 14;
              break e;
            case Tn:
              (a = 16), (n = null);
              break e;
          }
        throw Error(q(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Cr(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function go(e, t, r, n) {
  return (e = Cr(7, e, n, t)), (e.lanes = r), e;
}
function du(e, t, r, n) {
  return (
    (e = Cr(22, e, n, t)),
    (e.elementType = qg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oc(e, t, r) {
  return (e = Cr(6, e, null, t)), (e.lanes = r), e;
}
function ic(e, t, r) {
  return (
    (t = Cr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cS(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fu(0)),
    (this.expirationTimes = Fu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Kf(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new cS(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Cr(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pf(i),
    e
  );
}
function dS(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Do,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function zy(e) {
  if (!e) return qn;
  e = e._reactInternals;
  e: {
    if (Oo(e) !== e || e.tag !== 1) throw Error(q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lr(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(q(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (lr(r)) return zm(e, r, t);
  }
  return t;
}
function Fy(e, t, r, n, o, i, a, s, l) {
  return (
    (e = Kf(r, n, !0, e, o, i, a, s, l)),
    (e.context = zy(null)),
    (r = e.current),
    (n = er()),
    (o = Hn(r)),
    (i = un(n, o)),
    (i.callback = t != null ? t : null),
    Un(r, i, o),
    (e.current.lanes = o),
    Ba(e, o, n),
    ur(e, n),
    e
  );
}
function fu(e, t, r, n) {
  var o = t.current,
    i = er(),
    a = Hn(o);
  return (
    (r = zy(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = un(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Un(o, t, a)),
    e !== null && (Br(e, o, a, i), Is(e, o, a)),
    a
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Yf(e, t) {
  Hp(e, t), (e = e.alternate) && Hp(e, t);
}
function fS() {
  return null;
}
var $y =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gf(e) {
  this._internalRoot = e;
}
hu.prototype.render = Gf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(q(409));
  fu(e, t, null, null);
};
hu.prototype.unmount = Gf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ko(function () {
      fu(null, e, null, null);
    }),
      (t[fn] = null);
  }
};
function hu(e) {
  this._internalRoot = e;
}
hu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ym();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < _n.length && t !== 0 && t < _n[r].priority; r++);
    _n.splice(r, 0, e), r === 0 && bm(e);
  }
};
function Xf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wp() {}
function hS(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = bl(a);
        i.call(u);
      };
    }
    var a = Fy(t, n, e, 0, null, !1, !1, "", Wp);
    return (
      (e._reactRootContainer = a),
      (e[fn] = a.current),
      ja(e.nodeType === 8 ? e.parentNode : e),
      ko(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = bl(l);
      s.call(u);
    };
  }
  var l = Kf(e, 0, !1, null, null, !1, !1, "", Wp);
  return (
    (e._reactRootContainer = l),
    (e[fn] = l.current),
    ja(e.nodeType === 8 ? e.parentNode : e),
    ko(function () {
      fu(t, l, r, n);
    }),
    l
  );
}
function gu(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = bl(a);
        s.call(l);
      };
    }
    fu(t, a, e, o);
  } else a = hS(r, t, e, o, n);
  return bl(a);
}
gm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ra(t.pendingLanes);
        r !== 0 &&
          (mf(t, r | 1), ur(t, gt()), !(Oe & 6) && ((fi = gt() + 500), Jn()));
      }
      break;
    case 13:
      ko(function () {
        var n = hn(e, 1);
        if (n !== null) {
          var o = er();
          Br(n, e, 1, o);
        }
      }),
        Yf(e, 1);
  }
};
yf = function (e) {
  if (e.tag === 13) {
    var t = hn(e, 134217728);
    if (t !== null) {
      var r = er();
      Br(t, e, 134217728, r);
    }
    Yf(e, 134217728);
  }
};
mm = function (e) {
  if (e.tag === 13) {
    var t = Hn(e),
      r = hn(e, t);
    if (r !== null) {
      var n = er();
      Br(r, e, t, n);
    }
    Yf(e, t);
  }
};
ym = function () {
  return Me;
};
vm = function (e, t) {
  var r = Me;
  try {
    return (Me = e), t();
  } finally {
    Me = r;
  }
};
Gc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Hc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = iu(n);
            if (!o) throw Error(q(90));
            Yg(n), Hc(n, o);
          }
        }
      }
      break;
    case "textarea":
      Xg(e, r);
      break;
    case "select":
      (t = r.value), t != null && Xo(e, !!r.multiple, t, !1);
  }
};
om = Wf;
im = ko;
var pS = { usingClientEntryPoint: !1, Events: [Wa, $o, iu, rm, nm, Wf] },
  Qi = {
    findFiberByHostInstance: ao,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  gS = {
    bundleType: Qi.bundleType,
    version: Qi.version,
    rendererPackageName: Qi.rendererPackageName,
    rendererConfig: Qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qi.findFiberByHostInstance || fS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ws.isDisabled && ws.supportsFiber)
    try {
      (tu = ws.inject(gS)), (Xr = ws);
    } catch (e) {}
}
vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pS;
vr.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xf(t)) throw Error(q(200));
  return dS(e, t, null, r);
};
vr.createRoot = function (e, t) {
  if (!Xf(e)) throw Error(q(299));
  var r = !1,
    n = "",
    o = $y;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Kf(e, 1, !1, null, null, r, !1, n, o)),
    (e[fn] = t.current),
    ja(e.nodeType === 8 ? e.parentNode : e),
    new Gf(t)
  );
};
vr.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(q(188))
      : ((e = Object.keys(e).join(",")), Error(q(268, e)));
  return (e = lm(t)), (e = e === null ? null : e.stateNode), e;
};
vr.flushSync = function (e) {
  return ko(e);
};
vr.hydrate = function (e, t, r) {
  if (!pu(t)) throw Error(q(200));
  return gu(null, e, t, !0, r);
};
vr.hydrateRoot = function (e, t, r) {
  if (!Xf(e)) throw Error(q(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = $y;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = Fy(t, null, e, 1, r != null ? r : null, o, !1, i, a)),
    (e[fn] = t.current),
    ja(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new hu(t);
};
vr.render = function (e, t, r) {
  if (!pu(t)) throw Error(q(200));
  return gu(null, e, t, !1, r);
};
vr.unmountComponentAtNode = function (e) {
  if (!pu(e)) throw Error(q(40));
  return e._reactRootContainer
    ? (ko(function () {
        gu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fn] = null);
        });
      }),
      !0)
    : !1;
};
vr.unstable_batchedUpdates = Wf;
vr.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!pu(r)) throw Error(q(200));
  if (e == null || e._reactInternals === void 0) throw Error(q(38));
  return gu(e, t, r, !1, n);
};
vr.version = "18.3.1-next-f1338f8080-20240426";
function Uy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy);
    } catch (e) {
      console.error(e);
    }
}
Uy(), (Ug.exports = vr);
var Va = Ug.exports;
const Jf = Si(Va),
  mS = Og({ __proto__: null, default: Jf }, [Va]);
var Qp = Va;
(Ic.createRoot = Qp.createRoot), (Ic.hydrateRoot = Qp.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function it() {
  return (
    (it = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    it.apply(this, arguments)
  );
}
var bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(bt || (bt = {}));
const Vp = "popstate";
function yS(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location;
    return Da(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : So(o);
  }
  return bS(t, r, null, e);
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch (r) {}
  }
}
function vS() {
  return Math.random().toString(36).substr(2, 8);
}
function qp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Da(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    it(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Zn(t) : t,
      { state: r, key: (t && t.key) || n || vS() }
    )
  );
}
function So(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Zn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function bS(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = bt.Pop,
    l = null,
    u = f();
  u == null && ((u = 0), a.replaceState(it({}, a.state, { idx: u }), ""));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = bt.Pop;
    let k = f(),
      y = k == null ? null : k - u;
    (u = k), l && l({ action: s, location: v.location, delta: y });
  }
  function h(k, y) {
    s = bt.Push;
    let g = Da(v.location, k, y);
    u = f() + 1;
    let b = qp(g, u),
      w = v.createHref(g);
    try {
      a.pushState(b, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(w);
    }
    i && l && l({ action: s, location: v.location, delta: 1 });
  }
  function p(k, y) {
    s = bt.Replace;
    let g = Da(v.location, k, y);
    u = f();
    let b = qp(g, u),
      w = v.createHref(g);
    a.replaceState(b, "", w),
      i && l && l({ action: s, location: v.location, delta: 0 });
  }
  function m(k) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof k == "string" ? k : So(k);
    return (
      (g = g.replace(/ $/, "%20")),
      Ce(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, y)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Vp, d),
        (l = k),
        () => {
          o.removeEventListener(Vp, d), (l = null);
        }
      );
    },
    createHref(k) {
      return t(o, k);
    },
    createURL: m,
    encodeLocation(k) {
      let y = m(k);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: h,
    replace: p,
    go(k) {
      return a.go(k);
    },
  };
  return v;
}
var Ze;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ze || (Ze = {}));
const xS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function wS(e) {
  return e.index === !0;
}
function Od(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let a = [...r, i],
        s = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (Ce(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        Ce(
          !n[s],
          'Found a route id collision on id "' +
            s +
            "\".  Route id's must be globally unique within Data Router usages"
        ),
        wS(o))
      ) {
        let l = it({}, o, t(o), { id: s });
        return (n[s] = l), l;
      } else {
        let l = it({}, o, t(o), { id: s, children: void 0 });
        return (
          (n[s] = l), o.children && (l.children = Od(o.children, t, a, n)), l
        );
      }
    })
  );
}
function qo(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Zn(t) : t,
    o = Ni(n.pathname || "/", r);
  if (o == null) return null;
  let i = By(e);
  SS(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = DS(o);
    a = _S(i[s], l);
  }
  return a;
}
function kS(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function By(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ce(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = cn([n, l.relativePath]),
      f = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ce(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      By(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: RS(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of Hy(i.path)) o(i, a, l);
    }),
    t
  );
}
function Hy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return o ? [i, ""] : [i];
  let a = Hy(n.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function SS(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : PS(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const ES = /^:[\w-]+$/,
  CS = 3,
  jS = 2,
  NS = 1,
  TS = 10,
  OS = -2,
  Kp = (e) => e === "*";
function RS(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Kp) && (n += OS),
    t && (n += jS),
    r
      .filter((o) => !Kp(o))
      .reduce((o, i) => o + (ES.test(i) ? CS : i === "" ? NS : TS), n)
  );
}
function PS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _S(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = MS(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!f) return null;
    Object.assign(n, f.params);
    let d = s.route;
    i.push({
      params: n,
      pathname: cn([o, f.pathname]),
      pathnameBase: zS(cn([o, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (o = cn([o, f.pathnameBase]));
  }
  return i;
}
function MS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = LS(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: n.reduce((u, f, d) => {
      let { paramName: h, isOptional: p } = f;
      if (h === "*") {
        let v = s[d] || "";
        a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const m = s[d];
      return (
        p && !m ? (u[h] = void 0) : (u[h] = (m || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function LS(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    hi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            n.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function DS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      hi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ni(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function IS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? Zn(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : AS(r, t)) : t,
    search: FS(n),
    hash: $S(o),
  };
}
function AS(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function ac(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Wy(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zf(e, t) {
  let r = Wy(e);
  return t
    ? r.map((n, o) => (o === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function eh(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string"
    ? (o = Zn(e))
    : ((o = it({}, e)),
      Ce(
        !o.pathname || !o.pathname.includes("?"),
        ac("?", "pathname", "search", o)
      ),
      Ce(
        !o.pathname || !o.pathname.includes("#"),
        ac("#", "pathname", "hash", o)
      ),
      Ce(!o.search || !o.search.includes("#"), ac("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = r;
  else {
    let d = t.length - 1;
    if (!n && a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      o.pathname = h.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = IS(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    f = (i || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
const cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  FS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $S = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class th {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function rh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qy = ["post", "put", "patch", "delete"],
  US = new Set(Qy),
  BS = ["get", ...Qy],
  HS = new Set(BS),
  WS = new Set([301, 302, 303, 307, 308]),
  QS = new Set([307, 308]),
  sc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  VS = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  nh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qS = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Vy = "remix-router-transitions";
function KS(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    n = !r;
  Ce(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let M = e.detectErrorBoundary;
    o = (A) => ({ hasErrorBoundary: M(A) });
  } else o = qS;
  let i = {},
    a = Od(e.routes, o, void 0, i),
    s,
    l = e.basename || "/",
    u = e.unstable_dataStrategy || JS,
    f = it(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    h = new Set(),
    p = null,
    m = null,
    v = null,
    k = e.hydrationData != null,
    y = qo(a, e.history.location, l),
    g = null;
  if (y == null) {
    let M = wr(404, { pathname: e.history.location.pathname }),
      { matches: A, route: Q } = o0(a);
    (y = A), (g = { [Q.id]: M });
  }
  let b,
    w = y.some((M) => M.route.lazy),
    S = y.some((M) => M.route.loader);
  if (w) b = !1;
  else if (!S) b = !0;
  else if (f.v7_partialHydration) {
    let M = e.hydrationData ? e.hydrationData.loaderData : null,
      A = e.hydrationData ? e.hydrationData.errors : null,
      Q = (K) =>
        K.route.loader
          ? typeof K.route.loader == "function" && K.route.loader.hydrate === !0
            ? !1
            : (M && M[K.route.id] !== void 0) || (A && A[K.route.id] !== void 0)
          : !0;
    if (A) {
      let K = y.findIndex((te) => A[te.route.id] !== void 0);
      b = y.slice(0, K + 1).every(Q);
    } else b = y.every(Q);
  } else b = e.hydrationData != null;
  let j,
    E = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: y,
      initialized: b,
      navigation: sc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    I = bt.Pop,
    O = !1,
    C,
    D = !1,
    P = new Map(),
    _ = null,
    N = !1,
    L = !1,
    B = [],
    W = [],
    R = new Map(),
    F = 0,
    z = -1,
    U = new Map(),
    H = new Set(),
    J = new Map(),
    X = new Map(),
    re = new Set(),
    ae = new Map(),
    be = new Map(),
    ge = !1;
  function Ne() {
    if (
      ((d = e.history.listen((M) => {
        let { action: A, location: Q, delta: K } = M;
        if (ge) {
          ge = !1;
          return;
        }
        hi(
          be.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let te = Gt({
          currentLocation: E.location,
          nextLocation: Q,
          historyAction: A,
        });
        if (te && K != null) {
          (ge = !0),
            e.history.go(K * -1),
            Pe(te, {
              state: "blocked",
              location: Q,
              proceed() {
                Pe(te, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: Q,
                }),
                  e.history.go(K);
              },
              reset() {
                let me = new Map(E.blockers);
                me.set(te, Vi), ie({ blockers: me });
              },
            });
          return;
        }
        return Le(A, Q);
      })),
      r)
    ) {
      c2(t, P);
      let M = () => d2(t, P);
      t.addEventListener("pagehide", M),
        (_ = () => t.removeEventListener("pagehide", M));
    }
    return E.initialized || Le(bt.Pop, E.location, { initialHydration: !0 }), j;
  }
  function Be() {
    d && d(),
      _ && _(),
      h.clear(),
      C && C.abort(),
      E.fetchers.forEach((M, A) => Yt(A)),
      E.blockers.forEach((M, A) => Ge(A));
  }
  function ut(M) {
    return h.add(M), () => h.delete(M);
  }
  function ie(M, A) {
    A === void 0 && (A = {}), (E = it({}, E, M));
    let Q = [],
      K = [];
    f.v7_fetcherPersist &&
      E.fetchers.forEach((te, me) => {
        te.state === "idle" && (re.has(me) ? K.push(me) : Q.push(me));
      }),
      [...h].forEach((te) =>
        te(E, {
          deletedFetchers: K,
          unstable_viewTransitionOpts: A.viewTransitionOpts,
          unstable_flushSync: A.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (Q.forEach((te) => E.fetchers.delete(te)), K.forEach((te) => Yt(te)));
  }
  function Ie(M, A, Q) {
    var K, te;
    let { flushSync: me } = Q === void 0 ? {} : Q,
      se =
        E.actionData != null &&
        E.navigation.formMethod != null &&
        Fr(E.navigation.formMethod) &&
        E.navigation.state === "loading" &&
        ((K = M.state) == null ? void 0 : K._isRedirect) !== !0,
      ne;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (ne = A.actionData)
        : (ne = null)
      : se
      ? (ne = E.actionData)
      : (ne = null);
    let ye = A.loaderData
        ? r0(E.loaderData, A.loaderData, A.matches || [], A.errors)
        : E.loaderData,
      he = E.blockers;
    he.size > 0 && ((he = new Map(he)), he.forEach((le, Ae) => he.set(Ae, Vi)));
    let kt =
      O === !0 ||
      (E.navigation.formMethod != null &&
        Fr(E.navigation.formMethod) &&
        ((te = M.state) == null ? void 0 : te._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      N ||
        I === bt.Pop ||
        (I === bt.Push
          ? e.history.push(M, M.state)
          : I === bt.Replace && e.history.replace(M, M.state));
    let vt;
    if (I === bt.Pop) {
      let le = P.get(E.location.pathname);
      le && le.has(M.pathname)
        ? (vt = { currentLocation: E.location, nextLocation: M })
        : P.has(M.pathname) &&
          (vt = { currentLocation: M, nextLocation: E.location });
    } else if (D) {
      let le = P.get(E.location.pathname);
      le
        ? le.add(M.pathname)
        : ((le = new Set([M.pathname])), P.set(E.location.pathname, le)),
        (vt = { currentLocation: E.location, nextLocation: M });
    }
    ie(
      it({}, A, {
        actionData: ne,
        loaderData: ye,
        historyAction: I,
        location: M,
        initialized: !0,
        navigation: sc,
        revalidation: "idle",
        restoreScrollPosition: Di(M, A.matches || E.matches),
        preventScrollReset: kt,
        blockers: he,
      }),
      { viewTransitionOpts: vt, flushSync: me === !0 }
    ),
      (I = bt.Pop),
      (O = !1),
      (D = !1),
      (N = !1),
      (L = !1),
      (B = []),
      (W = []);
  }
  async function _e(M, A) {
    if (typeof M == "number") {
      e.history.go(M);
      return;
    }
    let Q = Rd(
        E.location,
        E.matches,
        l,
        f.v7_prependBasename,
        M,
        f.v7_relativeSplatPath,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative
      ),
      {
        path: K,
        submission: te,
        error: me,
      } = Yp(f.v7_normalizeFormMethod, !1, Q, A),
      se = E.location,
      ne = Da(E.location, K, A && A.state);
    ne = it({}, ne, e.history.encodeLocation(ne));
    let ye = A && A.replace != null ? A.replace : void 0,
      he = bt.Push;
    ye === !0
      ? (he = bt.Replace)
      : ye === !1 ||
        (te != null &&
          Fr(te.formMethod) &&
          te.formAction === E.location.pathname + E.location.search &&
          (he = bt.Replace));
    let kt =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      vt = (A && A.unstable_flushSync) === !0,
      le = Gt({ currentLocation: se, nextLocation: ne, historyAction: he });
    if (le) {
      Pe(le, {
        state: "blocked",
        location: ne,
        proceed() {
          Pe(le, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ne,
          }),
            _e(M, A);
        },
        reset() {
          let Ae = new Map(E.blockers);
          Ae.set(le, Vi), ie({ blockers: Ae });
        },
      });
      return;
    }
    return await Le(he, ne, {
      submission: te,
      pendingError: me,
      preventScrollReset: kt,
      replace: A && A.replace,
      enableViewTransition: A && A.unstable_viewTransition,
      flushSync: vt,
    });
  }
  function pe() {
    if (
      (jt(),
      ie({ revalidation: "loading" }),
      E.navigation.state !== "submitting")
    ) {
      if (E.navigation.state === "idle") {
        Le(E.historyAction, E.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Le(I || E.historyAction, E.navigation.location, {
        overrideNavigation: E.navigation,
      });
    }
  }
  async function Le(M, A, Q) {
    C && C.abort(),
      (C = null),
      (I = M),
      (N = (Q && Q.startUninterruptedRevalidation) === !0),
      Mu(E.location, E.matches),
      (O = (Q && Q.preventScrollReset) === !0),
      (D = (Q && Q.enableViewTransition) === !0);
    let K = s || a,
      te = Q && Q.overrideNavigation,
      me = qo(K, A, l),
      se = (Q && Q.flushSync) === !0;
    if (!me) {
      let le = wr(404, { pathname: A.pathname }),
        { matches: Ae, route: pt } = o0(K);
      Ut(),
        Ie(
          A,
          { matches: Ae, loaderData: {}, errors: { [pt.id]: le } },
          { flushSync: se }
        );
      return;
    }
    if (
      E.initialized &&
      !L &&
      o2(E.location, A) &&
      !(Q && Q.submission && Fr(Q.submission.formMethod))
    ) {
      Ie(A, { matches: me }, { flushSync: se });
      return;
    }
    C = new AbortController();
    let ne = Mo(e.history, A, C.signal, Q && Q.submission),
      ye;
    if (Q && Q.pendingError)
      ye = [ha(me).route.id, { type: Ze.error, error: Q.pendingError }];
    else if (Q && Q.submission && Fr(Q.submission.formMethod)) {
      let le = await zt(ne, A, Q.submission, me, {
        replace: Q.replace,
        flushSync: se,
      });
      if (le.shortCircuited) return;
      (ye = le.pendingActionResult),
        (te = lc(A, Q.submission)),
        (se = !1),
        (ne = Mo(e.history, ne.url, ne.signal));
    }
    let {
      shortCircuited: he,
      loaderData: kt,
      errors: vt,
    } = await ce(
      ne,
      A,
      me,
      te,
      Q && Q.submission,
      Q && Q.fetcherSubmission,
      Q && Q.replace,
      Q && Q.initialHydration === !0,
      se,
      ye
    );
    he ||
      ((C = null),
      Ie(A, it({ matches: me }, n0(ye), { loaderData: kt, errors: vt })));
  }
  async function zt(M, A, Q, K, te) {
    te === void 0 && (te = {}), jt();
    let me = l2(A, Q);
    ie({ navigation: me }, { flushSync: te.flushSync === !0 });
    let se,
      ne = _d(K, A);
    if (!ne.route.action && !ne.route.lazy)
      se = {
        type: Ze.error,
        error: wr(405, {
          method: M.method,
          pathname: A.pathname,
          routeId: ne.route.id,
        }),
      };
    else if (((se = (await De("action", M, [ne], K))[0]), M.signal.aborted))
      return { shortCircuited: !0 };
    if (co(se)) {
      let ye;
      return (
        te && te.replace != null
          ? (ye = te.replace)
          : (ye =
              Zp(se.response.headers.get("Location"), new URL(M.url), l) ===
              E.location.pathname + E.location.search),
        await rt(M, se, { submission: Q, replace: ye }),
        { shortCircuited: !0 }
      );
    }
    if (uo(se)) throw wr(400, { type: "defer-action" });
    if (Er(se)) {
      let ye = ha(K, ne.route.id);
      return (
        (te && te.replace) !== !0 && (I = bt.Push),
        { pendingActionResult: [ye.route.id, se] }
      );
    }
    return { pendingActionResult: [ne.route.id, se] };
  }
  async function ce(M, A, Q, K, te, me, se, ne, ye, he) {
    let kt = K || lc(A, te),
      vt = te || me || s0(kt),
      le = s || a,
      [Ae, pt] = Gp(
        e.history,
        E,
        Q,
        vt,
        A,
        f.v7_partialHydration && ne === !0,
        f.unstable_skipActionErrorRevalidation,
        L,
        B,
        W,
        re,
        J,
        H,
        le,
        l,
        he
      );
    if (
      (Ut(
        (ve) =>
          !(Q && Q.some((Qe) => Qe.route.id === ve)) ||
          (Ae && Ae.some((Qe) => Qe.route.id === ve))
      ),
      (z = ++F),
      Ae.length === 0 && pt.length === 0)
    ) {
      let ve = Pr();
      return (
        Ie(
          A,
          it(
            {
              matches: Q,
              loaderData: {},
              errors: he && Er(he[1]) ? { [he[0]]: he[1].error } : null,
            },
            n0(he),
            ve ? { fetchers: new Map(E.fetchers) } : {}
          ),
          { flushSync: ye }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!N && (!f.v7_partialHydration || !ne)) {
      pt.forEach((Qe) => {
        let nt = E.fetchers.get(Qe.key),
          Re = qi(void 0, nt ? nt.data : void 0);
        E.fetchers.set(Qe.key, Re);
      });
      let ve;
      he && !Er(he[1])
        ? (ve = { [he[0]]: he[1].data })
        : E.actionData &&
          (Object.keys(E.actionData).length === 0
            ? (ve = null)
            : (ve = E.actionData)),
        ie(
          it(
            { navigation: kt },
            ve !== void 0 ? { actionData: ve } : {},
            pt.length > 0 ? { fetchers: new Map(E.fetchers) } : {}
          ),
          { flushSync: ye }
        );
    }
    pt.forEach((ve) => {
      R.has(ve.key) && yt(ve.key),
        ve.controller && R.set(ve.key, ve.controller);
    });
    let xn = () => pt.forEach((ve) => yt(ve.key));
    C && C.signal.addEventListener("abort", xn);
    let { loaderResults: Mr, fetcherResults: wn } = await Rt(
      E.matches,
      Q,
      Ae,
      pt,
      M
    );
    if (M.signal.aborted) return { shortCircuited: !0 };
    C && C.signal.removeEventListener("abort", xn),
      pt.forEach((ve) => R.delete(ve.key));
    let T = i0([...Mr, ...wn]);
    if (T) {
      if (T.idx >= Ae.length) {
        let ve = pt[T.idx - Ae.length].key;
        H.add(ve);
      }
      return await rt(M, T.result, { replace: se }), { shortCircuited: !0 };
    }
    let { loaderData: ee, errors: Y } = t0(E, Q, Ae, Mr, he, pt, wn, ae);
    ae.forEach((ve, Qe) => {
      ve.subscribe((nt) => {
        (nt || ve.done) && ae.delete(Qe);
      });
    }),
      f.v7_partialHydration &&
        ne &&
        E.errors &&
        Object.entries(E.errors)
          .filter((ve) => {
            let [Qe] = ve;
            return !Ae.some((nt) => nt.route.id === Qe);
          })
          .forEach((ve) => {
            let [Qe, nt] = ve;
            Y = Object.assign(Y || {}, { [Qe]: nt });
          });
    let Te = Pr(),
      ct = tn(z),
      ze = Te || ct || pt.length > 0;
    return it(
      { loaderData: ee, errors: Y },
      ze ? { fetchers: new Map(E.fetchers) } : {}
    );
  }
  function ft(M, A, Q, K) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    R.has(M) && yt(M);
    let te = (K && K.unstable_flushSync) === !0,
      me = s || a,
      se = Rd(
        E.location,
        E.matches,
        l,
        f.v7_prependBasename,
        Q,
        f.v7_relativeSplatPath,
        A,
        K == null ? void 0 : K.relative
      ),
      ne = qo(me, se, l);
    if (!ne) {
      $t(M, A, wr(404, { pathname: se }), { flushSync: te });
      return;
    }
    let {
      path: ye,
      submission: he,
      error: kt,
    } = Yp(f.v7_normalizeFormMethod, !0, se, K);
    if (kt) {
      $t(M, A, kt, { flushSync: te });
      return;
    }
    let vt = _d(ne, ye);
    if (((O = (K && K.preventScrollReset) === !0), he && Fr(he.formMethod))) {
      Ft(M, A, ye, vt, ne, te, he);
      return;
    }
    J.set(M, { routeId: A, path: ye }), Ot(M, A, ye, vt, ne, te, he);
  }
  async function Ft(M, A, Q, K, te, me, se) {
    if ((jt(), J.delete(M), !K.route.action && !K.route.lazy)) {
      let Re = wr(405, { method: se.formMethod, pathname: Q, routeId: A });
      $t(M, A, Re, { flushSync: me });
      return;
    }
    let ne = E.fetchers.get(M);
    He(M, u2(se, ne), { flushSync: me });
    let ye = new AbortController(),
      he = Mo(e.history, Q, ye.signal, se);
    R.set(M, ye);
    let kt = F,
      le = (await De("action", he, [K], te))[0];
    if (he.signal.aborted) {
      R.get(M) === ye && R.delete(M);
      return;
    }
    if (f.v7_fetcherPersist && re.has(M)) {
      if (co(le) || Er(le)) {
        He(M, jn(void 0));
        return;
      }
    } else {
      if (co(le))
        if ((R.delete(M), z > kt)) {
          He(M, jn(void 0));
          return;
        } else
          return H.add(M), He(M, qi(se)), rt(he, le, { fetcherSubmission: se });
      if (Er(le)) {
        $t(M, A, le.error);
        return;
      }
    }
    if (uo(le)) throw wr(400, { type: "defer-action" });
    let Ae = E.navigation.location || E.location,
      pt = Mo(e.history, Ae, ye.signal),
      xn = s || a,
      Mr =
        E.navigation.state !== "idle"
          ? qo(xn, E.navigation.location, l)
          : E.matches;
    Ce(Mr, "Didn't find any matches after fetcher action");
    let wn = ++F;
    U.set(M, wn);
    let T = qi(se, le.data);
    E.fetchers.set(M, T);
    let [ee, Y] = Gp(
      e.history,
      E,
      Mr,
      se,
      Ae,
      !1,
      f.unstable_skipActionErrorRevalidation,
      L,
      B,
      W,
      re,
      J,
      H,
      xn,
      l,
      [K.route.id, le]
    );
    Y.filter((Re) => Re.key !== M).forEach((Re) => {
      let kn = Re.key,
        Ai = E.fetchers.get(kn),
        Hw = qi(void 0, Ai ? Ai.data : void 0);
      E.fetchers.set(kn, Hw),
        R.has(kn) && yt(kn),
        Re.controller && R.set(kn, Re.controller);
    }),
      ie({ fetchers: new Map(E.fetchers) });
    let Te = () => Y.forEach((Re) => yt(Re.key));
    ye.signal.addEventListener("abort", Te);
    let { loaderResults: ct, fetcherResults: ze } = await Rt(
      E.matches,
      Mr,
      ee,
      Y,
      pt
    );
    if (ye.signal.aborted) return;
    ye.signal.removeEventListener("abort", Te),
      U.delete(M),
      R.delete(M),
      Y.forEach((Re) => R.delete(Re.key));
    let ve = i0([...ct, ...ze]);
    if (ve) {
      if (ve.idx >= ee.length) {
        let Re = Y[ve.idx - ee.length].key;
        H.add(Re);
      }
      return rt(pt, ve.result);
    }
    let { loaderData: Qe, errors: nt } = t0(
      E,
      E.matches,
      ee,
      ct,
      void 0,
      Y,
      ze,
      ae
    );
    if (E.fetchers.has(M)) {
      let Re = jn(le.data);
      E.fetchers.set(M, Re);
    }
    tn(wn),
      E.navigation.state === "loading" && wn > z
        ? (Ce(I, "Expected pending action"),
          C && C.abort(),
          Ie(E.navigation.location, {
            matches: Mr,
            loaderData: Qe,
            errors: nt,
            fetchers: new Map(E.fetchers),
          }))
        : (ie({
            errors: nt,
            loaderData: r0(E.loaderData, Qe, Mr, nt),
            fetchers: new Map(E.fetchers),
          }),
          (L = !1));
  }
  async function Ot(M, A, Q, K, te, me, se) {
    let ne = E.fetchers.get(M);
    He(M, qi(se, ne ? ne.data : void 0), { flushSync: me });
    let ye = new AbortController(),
      he = Mo(e.history, Q, ye.signal);
    R.set(M, ye);
    let kt = F,
      le = (await De("loader", he, [K], te))[0];
    if (
      (uo(le) && (le = (await Gy(le, he.signal, !0)) || le),
      R.get(M) === ye && R.delete(M),
      !he.signal.aborted)
    ) {
      if (re.has(M)) {
        He(M, jn(void 0));
        return;
      }
      if (co(le))
        if (z > kt) {
          He(M, jn(void 0));
          return;
        } else {
          H.add(M), await rt(he, le);
          return;
        }
      if (Er(le)) {
        $t(M, A, le.error);
        return;
      }
      Ce(!uo(le), "Unhandled fetcher deferred data"), He(M, jn(le.data));
    }
  }
  async function rt(M, A, Q) {
    let {
      submission: K,
      fetcherSubmission: te,
      replace: me,
    } = Q === void 0 ? {} : Q;
    A.response.headers.has("X-Remix-Revalidate") && (L = !0);
    let se = A.response.headers.get("Location");
    Ce(se, "Expected a Location header on the redirect Response"),
      (se = Zp(se, new URL(M.url), l));
    let ne = Da(E.location, se, { _isRedirect: !0 });
    if (r) {
      let Ae = !1;
      if (A.response.headers.has("X-Remix-Reload-Document")) Ae = !0;
      else if (nh.test(se)) {
        const pt = e.history.createURL(se);
        Ae = pt.origin !== t.location.origin || Ni(pt.pathname, l) == null;
      }
      if (Ae) {
        me ? t.location.replace(se) : t.location.assign(se);
        return;
      }
    }
    C = null;
    let ye = me === !0 ? bt.Replace : bt.Push,
      { formMethod: he, formAction: kt, formEncType: vt } = E.navigation;
    !K && !te && he && kt && vt && (K = s0(E.navigation));
    let le = K || te;
    if (QS.has(A.response.status) && le && Fr(le.formMethod))
      await Le(ye, ne, {
        submission: it({}, le, { formAction: se }),
        preventScrollReset: O,
      });
    else {
      let Ae = lc(ne, K);
      await Le(ye, ne, {
        overrideNavigation: Ae,
        fetcherSubmission: te,
        preventScrollReset: O,
      });
    }
  }
  async function De(M, A, Q, K) {
    try {
      let te = await ZS(u, M, A, Q, K, i, o);
      return await Promise.all(
        te.map((me, se) => {
          if (i2(me)) {
            let ne = me.result;
            return {
              type: Ze.redirect,
              response: r2(ne, A, Q[se].route.id, K, l, f.v7_relativeSplatPath),
            };
          }
          return t2(me);
        })
      );
    } catch (te) {
      return Q.map(() => ({ type: Ze.error, error: te }));
    }
  }
  async function Rt(M, A, Q, K, te) {
    let [me, ...se] = await Promise.all([
      Q.length ? De("loader", te, Q, A) : [],
      ...K.map((ne) => {
        if (ne.matches && ne.match && ne.controller) {
          let ye = Mo(e.history, ne.path, ne.controller.signal);
          return De("loader", ye, [ne.match], ne.matches).then((he) => he[0]);
        } else
          return Promise.resolve({
            type: Ze.error,
            error: wr(404, { pathname: ne.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        a0(
          M,
          Q,
          me,
          me.map(() => te.signal),
          !1,
          E.loaderData
        ),
        a0(
          M,
          K.map((ne) => ne.match),
          se,
          K.map((ne) => (ne.controller ? ne.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: me, fetcherResults: se }
    );
  }
  function jt() {
    (L = !0),
      B.push(...Ut()),
      J.forEach((M, A) => {
        R.has(A) && (W.push(A), yt(A));
      });
  }
  function He(M, A, Q) {
    Q === void 0 && (Q = {}),
      E.fetchers.set(M, A),
      ie(
        { fetchers: new Map(E.fetchers) },
        { flushSync: (Q && Q.flushSync) === !0 }
      );
  }
  function $t(M, A, Q, K) {
    K === void 0 && (K = {});
    let te = ha(E.matches, A);
    Yt(M),
      ie(
        { errors: { [te.route.id]: Q }, fetchers: new Map(E.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      );
  }
  function mt(M) {
    return (
      f.v7_fetcherPersist &&
        (X.set(M, (X.get(M) || 0) + 1), re.has(M) && re.delete(M)),
      E.fetchers.get(M) || VS
    );
  }
  function Yt(M) {
    let A = E.fetchers.get(M);
    R.has(M) && !(A && A.state === "loading" && U.has(M)) && yt(M),
      J.delete(M),
      U.delete(M),
      H.delete(M),
      re.delete(M),
      E.fetchers.delete(M);
  }
  function Qr(M) {
    if (f.v7_fetcherPersist) {
      let A = (X.get(M) || 0) - 1;
      A <= 0 ? (X.delete(M), re.add(M)) : X.set(M, A);
    } else Yt(M);
    ie({ fetchers: new Map(E.fetchers) });
  }
  function yt(M) {
    let A = R.get(M);
    Ce(A, "Expected fetch controller: " + M), A.abort(), R.delete(M);
  }
  function ht(M) {
    for (let A of M) {
      let Q = mt(A),
        K = jn(Q.data);
      E.fetchers.set(A, K);
    }
  }
  function Pr() {
    let M = [],
      A = !1;
    for (let Q of H) {
      let K = E.fetchers.get(Q);
      Ce(K, "Expected fetcher: " + Q),
        K.state === "loading" && (H.delete(Q), M.push(Q), (A = !0));
    }
    return ht(M), A;
  }
  function tn(M) {
    let A = [];
    for (let [Q, K] of U)
      if (K < M) {
        let te = E.fetchers.get(Q);
        Ce(te, "Expected fetcher: " + Q),
          te.state === "loading" && (yt(Q), U.delete(Q), A.push(Q));
      }
    return ht(A), A.length > 0;
  }
  function fe(M, A) {
    let Q = E.blockers.get(M) || Vi;
    return be.get(M) !== A && be.set(M, A), Q;
  }
  function Ge(M) {
    E.blockers.delete(M), be.delete(M);
  }
  function Pe(M, A) {
    let Q = E.blockers.get(M) || Vi;
    Ce(
      (Q.state === "unblocked" && A.state === "blocked") ||
        (Q.state === "blocked" && A.state === "blocked") ||
        (Q.state === "blocked" && A.state === "proceeding") ||
        (Q.state === "blocked" && A.state === "unblocked") ||
        (Q.state === "proceeding" && A.state === "unblocked"),
      "Invalid blocker state transition: " + Q.state + " -> " + A.state
    );
    let K = new Map(E.blockers);
    K.set(M, A), ie({ blockers: K });
  }
  function Gt(M) {
    let { currentLocation: A, nextLocation: Q, historyAction: K } = M;
    if (be.size === 0) return;
    be.size > 1 && hi(!1, "A router only supports one blocker at a time");
    let te = Array.from(be.entries()),
      [me, se] = te[te.length - 1],
      ne = E.blockers.get(me);
    if (
      !(ne && ne.state === "proceeding") &&
      se({ currentLocation: A, nextLocation: Q, historyAction: K })
    )
      return me;
  }
  function Ut(M) {
    let A = [];
    return (
      ae.forEach((Q, K) => {
        (!M || M(K)) && (Q.cancel(), A.push(K), ae.delete(K));
      }),
      A
    );
  }
  function We(M, A, Q) {
    if (((p = M), (v = A), (m = Q || null), !k && E.navigation === sc)) {
      k = !0;
      let K = Di(E.location, E.matches);
      K != null && ie({ restoreScrollPosition: K });
    }
    return () => {
      (p = null), (v = null), (m = null);
    };
  }
  function _r(M, A) {
    return (
      (m &&
        m(
          M,
          A.map((K) => kS(K, E.loaderData))
        )) ||
      M.key
    );
  }
  function Mu(M, A) {
    if (p && v) {
      let Q = _r(M, A);
      p[Q] = v();
    }
  }
  function Di(M, A) {
    if (p) {
      let Q = _r(M, A),
        K = p[Q];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function Ii(M) {
    (i = {}), (s = Od(M, o, void 0, i));
  }
  return (
    (j = {
      get basename() {
        return l;
      },
      get future() {
        return f;
      },
      get state() {
        return E;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Ne,
      subscribe: ut,
      enableScrollRestoration: We,
      navigate: _e,
      fetch: ft,
      revalidate: pe,
      createHref: (M) => e.history.createHref(M),
      encodeLocation: (M) => e.history.encodeLocation(M),
      getFetcher: mt,
      deleteFetcher: Qr,
      dispose: Be,
      getBlocker: fe,
      deleteBlocker: Ge,
      _internalFetchControllers: R,
      _internalActiveDeferreds: ae,
      _internalSetRoutes: Ii,
    }),
    j
  );
}
function YS(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Rd(e, t, r, n, o, i, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let f = eh(o || ".", Zf(l, i), Ni(e.pathname, r) || e.pathname, s === "path");
  return (
    o == null && ((f.search = e.search), (f.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !oh(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    n &&
      r !== "/" &&
      (f.pathname = f.pathname === "/" ? r : cn([r, f.pathname])),
    So(f)
  );
}
function Yp(e, t, r, n) {
  if (!n || !YS(n)) return { path: r };
  if (n.formMethod && !s2(n.formMethod))
    return { path: r, error: wr(405, { method: n.formMethod }) };
  let o = () => ({ path: r, error: wr(400, { type: "invalid-body" }) }),
    i = n.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = Ky(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!Fr(a)) return o();
      let h =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce((p, m) => {
              let [v, k] = m;
              return "" + p + v + "=" + k + "\n";
            }, "")
          : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!Fr(a)) return o();
      try {
        let h = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch (h) {
        return o();
      }
    }
  }
  Ce(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (n.formData) (l = Pd(n.formData)), (u = n.formData);
  else if (n.body instanceof FormData) (l = Pd(n.body)), (u = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (u = e0(l));
  else if (n.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (u = e0(l));
    } catch (h) {
      return o();
    }
  let f = {
    formMethod: a,
    formAction: s,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Fr(f.formMethod)) return { path: r, submission: f };
  let d = Zn(r);
  return (
    t && d.search && oh(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: So(d), submission: f }
  );
}
function GS(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Gp(e, t, r, n, o, i, a, s, l, u, f, d, h, p, m, v) {
  let k = v ? (Er(v[1]) ? v[1].error : v[1].data) : void 0,
    y = e.createURL(t.location),
    g = e.createURL(o),
    b = v && Er(v[1]) ? v[0] : void 0,
    w = b ? GS(r, b) : r,
    S = v ? v[1].statusCode : void 0,
    j = a && S && S >= 400,
    E = w.filter((O, C) => {
      let { route: D } = O;
      if (D.lazy) return !0;
      if (D.loader == null) return !1;
      if (i)
        return typeof D.loader != "function" || D.loader.hydrate
          ? !0
          : t.loaderData[D.id] === void 0 &&
              (!t.errors || t.errors[D.id] === void 0);
      if (XS(t.loaderData, t.matches[C], O) || l.some((N) => N === O.route.id))
        return !0;
      let P = t.matches[C],
        _ = O;
      return Xp(
        O,
        it(
          {
            currentUrl: y,
            currentParams: P.params,
            nextUrl: g,
            nextParams: _.params,
          },
          n,
          {
            actionResult: k,
            unstable_actionStatus: S,
            defaultShouldRevalidate: j
              ? !1
              : s ||
                y.pathname + y.search === g.pathname + g.search ||
                y.search !== g.search ||
                qy(P, _),
          }
        )
      );
    }),
    I = [];
  return (
    d.forEach((O, C) => {
      if (i || !r.some((L) => L.route.id === O.routeId) || f.has(C)) return;
      let D = qo(p, O.path, m);
      if (!D) {
        I.push({
          key: C,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let P = t.fetchers.get(C),
        _ = _d(D, O.path),
        N = !1;
      h.has(C)
        ? (N = !1)
        : u.includes(C)
        ? (N = !0)
        : P && P.state !== "idle" && P.data === void 0
        ? (N = s)
        : (N = Xp(
            _,
            it(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: g,
                nextParams: r[r.length - 1].params,
              },
              n,
              {
                actionResult: k,
                unstable_actionStatus: S,
                defaultShouldRevalidate: j ? !1 : s,
              }
            )
          )),
        N &&
          I.push({
            key: C,
            routeId: O.routeId,
            path: O.path,
            matches: D,
            match: _,
            controller: new AbortController(),
          });
    }),
    [E, I]
  );
}
function XS(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function qy(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Xp(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function Jp(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let o = r[e.id];
  Ce(o, "No route found in manifest");
  let i = {};
  for (let a in n) {
    let l = o[a] !== void 0 && a !== "hasErrorBoundary";
    hi(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !xS.has(a) && (i[a] = n[a]);
  }
  Object.assign(o, i), Object.assign(o, it({}, t(o), { lazy: void 0 }));
}
function JS(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function ZS(e, t, r, n, o, i, a, s) {
  let l = n.reduce((d, h) => d.add(h.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: o.map((d) => {
        let h = l.has(d.route.id);
        return it({}, d, {
          shouldLoad: h,
          resolve: (m) => (
            u.add(d.route.id),
            h
              ? e2(t, r, d, i, a, m, s)
              : Promise.resolve({ type: Ze.data, result: void 0 })
          ),
        });
      }),
      request: r,
      params: o[0].params,
      context: s,
    });
  return (
    o.forEach((d) =>
      Ce(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((d, h) => l.has(o[h].route.id))
  );
}
async function e2(e, t, r, n, o, i, a) {
  let s,
    l,
    u = (f) => {
      let d,
        h = new Promise((v, k) => (d = k));
      (l = () => d()), t.signal.addEventListener("abort", l);
      let p = (v) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + r.route.id + "]")
                )
              )
            : f(
                { request: t, params: r.params, context: a },
                ...(v !== void 0 ? [v] : [])
              ),
        m;
      return (
        i
          ? (m = i((v) => p(v)))
          : (m = (async () => {
              try {
                return { type: "data", result: await p() };
              } catch (v) {
                return { type: "error", result: v };
              }
            })()),
        Promise.race([m, h])
      );
    };
  try {
    let f = r.route[e];
    if (r.route.lazy)
      if (f) {
        let d,
          [h] = await Promise.all([
            u(f).catch((p) => {
              d = p;
            }),
            Jp(r.route, o, n),
          ]);
        if (d !== void 0) throw d;
        s = h;
      } else if ((await Jp(r.route, o, n), (f = r.route[e]), f)) s = await u(f);
      else if (e === "action") {
        let d = new URL(t.url),
          h = d.pathname + d.search;
        throw wr(405, { method: t.method, pathname: h, routeId: r.route.id });
      } else return { type: Ze.data, result: void 0 };
    else if (f) s = await u(f);
    else {
      let d = new URL(t.url),
        h = d.pathname + d.search;
      throw wr(404, { pathname: h });
    }
    Ce(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (f) {
    return { type: Ze.error, result: f };
  } finally {
    l && t.signal.removeEventListener("abort", l);
  }
  return s;
}
async function t2(e) {
  let { result: t, type: r, status: n } = e;
  if (Yy(t)) {
    let a;
    try {
      let s = t.headers.get("Content-Type");
      s && /\bapplication\/json\b/.test(s)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (s) {
      return { type: Ze.error, error: s };
    }
    return r === Ze.error
      ? {
          type: Ze.error,
          error: new th(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Ze.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (r === Ze.error)
    return { type: Ze.error, error: t, statusCode: rh(t) ? t.status : n };
  if (a2(t)) {
    var o, i;
    return {
      type: Ze.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: Ze.data, data: t, statusCode: n };
}
function r2(e, t, r, n, o, i) {
  let a = e.headers.get("Location");
  if (
    (Ce(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !nh.test(a))
  ) {
    let s = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
    (a = Rd(new URL(t.url), s, o, !0, a, i)), e.headers.set("Location", a);
  }
  return e;
}
function Zp(e, t, r) {
  if (nh.test(e)) {
    let n = e,
      o = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      i = Ni(o.pathname, r) != null;
    if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
  }
  return e;
}
function Mo(e, t, r, n) {
  let o = e.createURL(Ky(t)).toString(),
    i = { signal: r };
  if (n && Fr(n.formMethod)) {
    let { formMethod: a, formEncType: s } = n;
    (i.method = a.toUpperCase()),
      s === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": s })),
          (i.body = JSON.stringify(n.json)))
        : s === "text/plain"
        ? (i.body = n.text)
        : s === "application/x-www-form-urlencoded" && n.formData
        ? (i.body = Pd(n.formData))
        : (i.body = n.formData);
  }
  return new Request(o, i);
}
function Pd(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function e0(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function n2(e, t, r, n, o, i) {
  let a = {},
    s = null,
    l,
    u = !1,
    f = {},
    d = n && Er(n[1]) ? n[1].error : void 0;
  return (
    r.forEach((h, p) => {
      let m = t[p].route.id;
      if (
        (Ce(!co(h), "Cannot handle redirect results in processLoaderData"),
        Er(h))
      ) {
        let v = h.error;
        d !== void 0 && ((v = d), (d = void 0)), (s = s || {});
        {
          let k = ha(e, m);
          s[k.route.id] == null && (s[k.route.id] = v);
        }
        (a[m] = void 0),
          u || ((u = !0), (l = rh(h.error) ? h.error.status : 500)),
          h.headers && (f[m] = h.headers);
      } else
        uo(h)
          ? (o.set(m, h.deferredData),
            (a[m] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !u &&
              (l = h.statusCode),
            h.headers && (f[m] = h.headers))
          : ((a[m] = h.data),
            h.statusCode && h.statusCode !== 200 && !u && (l = h.statusCode),
            h.headers && (f[m] = h.headers));
    }),
    d !== void 0 && n && ((s = { [n[0]]: d }), (a[n[0]] = void 0)),
    { loaderData: a, errors: s, statusCode: l || 200, loaderHeaders: f }
  );
}
function t0(e, t, r, n, o, i, a, s) {
  let { loaderData: l, errors: u } = n2(t, r, n, o, s);
  for (let f = 0; f < i.length; f++) {
    let { key: d, match: h, controller: p } = i[f];
    Ce(
      a !== void 0 && a[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let m = a[f];
    if (!(p && p.signal.aborted))
      if (Er(m)) {
        let v = ha(e.matches, h == null ? void 0 : h.route.id);
        (u && u[v.route.id]) || (u = it({}, u, { [v.route.id]: m.error })),
          e.fetchers.delete(d);
      } else if (co(m)) Ce(!1, "Unhandled fetcher revalidation redirect");
      else if (uo(m)) Ce(!1, "Unhandled fetcher deferred data");
      else {
        let v = jn(m.data);
        e.fetchers.set(d, v);
      }
  }
  return { loaderData: l, errors: u };
}
function r0(e, t, r, n) {
  let o = it({}, t);
  for (let i of r) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function n0(e) {
  return e
    ? Er(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ha(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function o0(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function wr(e, t) {
  let { pathname: r, routeId: n, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && r && n
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (s = "defer() is not supported in actions")
          : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && r && n
          ? (s =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new th(e || 500, a, new Error(s), !0)
  );
}
function i0(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (co(r)) return { result: r, idx: t };
  }
}
function Ky(e) {
  let t = typeof e == "string" ? Zn(e) : e;
  return So(it({}, t, { hash: "" }));
}
function o2(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function i2(e) {
  return Yy(e.result) && WS.has(e.result.status);
}
function uo(e) {
  return e.type === Ze.deferred;
}
function Er(e) {
  return e.type === Ze.error;
}
function co(e) {
  return (e && e.type) === Ze.redirect;
}
function a2(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Yy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function s2(e) {
  return HS.has(e.toLowerCase());
}
function Fr(e) {
  return US.has(e.toLowerCase());
}
async function a0(e, t, r, n, o, i) {
  for (let a = 0; a < r.length; a++) {
    let s = r[a],
      l = t[a];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      f = u != null && !qy(u, l) && (i && i[l.route.id]) !== void 0;
    if (uo(s) && (o || f)) {
      let d = n[a];
      Ce(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Gy(s, d, o).then((h) => {
          h && (r[a] = h || r[a]);
        });
    }
  }
}
async function Gy(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Ze.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Ze.error, error: o };
      }
    return { type: Ze.data, data: e.deferredData.data };
  }
}
function oh(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function _d(e, t) {
  let r = typeof t == "string" ? Zn(t).search : t.search;
  if (e[e.length - 1].route.index && oh(r || "")) return e[e.length - 1];
  let n = Wy(e);
  return n[n.length - 1];
}
function s0(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !r || !n)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function lc(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function l2(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function qi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function u2(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function jn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function c2(e, t) {
  try {
    let r = e.sessionStorage.getItem(Vy);
    if (r) {
      let n = JSON.parse(r);
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch (r) {}
}
function d2(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, o] of t) r[n] = [...o];
    try {
      e.sessionStorage.setItem(Vy, JSON.stringify(r));
    } catch (n) {
      hi(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + n + ")."
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xl() {
  return (
    (xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xl.apply(this, arguments)
  );
}
const mu = x.createContext(null),
  Xy = x.createContext(null),
  Ro = x.createContext(null),
  ih = x.createContext(null),
  vn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jy = x.createContext(null);
function f2(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  qa() || Ce(!1);
  let { basename: n, navigator: o } = x.useContext(Ro),
    { hash: i, pathname: a, search: s } = ev(e, { relative: r }),
    l = a;
  return (
    n !== "/" && (l = a === "/" ? n : cn([n, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function qa() {
  return x.useContext(ih) != null;
}
function Ka() {
  return qa() || Ce(!1), x.useContext(ih).location;
}
function Zy(e) {
  x.useContext(Ro).static || x.useLayoutEffect(e);
}
function Ti() {
  let { isDataRoute: e } = x.useContext(vn);
  return e ? j2() : h2();
}
function h2() {
  qa() || Ce(!1);
  let e = x.useContext(mu),
    { basename: t, future: r, navigator: n } = x.useContext(Ro),
    { matches: o } = x.useContext(vn),
    { pathname: i } = Ka(),
    a = JSON.stringify(Zf(o, r.v7_relativeSplatPath)),
    s = x.useRef(!1);
  return (
    Zy(() => {
      s.current = !0;
    }),
    x.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !s.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = eh(u, JSON.parse(a), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : cn([t, d.pathname])),
          (f.replace ? n.replace : n.push)(d, f.state, f);
      },
      [t, n, a, i, e]
    )
  );
}
const p2 = x.createContext(null);
function g2(e) {
  let t = x.useContext(vn).outlet;
  return t && x.createElement(p2.Provider, { value: e }, t);
}
function yu() {
  let { matches: e } = x.useContext(vn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ev(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = x.useContext(Ro),
    { matches: o } = x.useContext(vn),
    { pathname: i } = Ka(),
    a = JSON.stringify(Zf(o, n.v7_relativeSplatPath));
  return x.useMemo(() => eh(e, JSON.parse(a), i, r === "path"), [e, a, i, r]);
}
function m2(e, t, r, n) {
  qa() || Ce(!1);
  let { navigator: o } = x.useContext(Ro),
    { matches: i } = x.useContext(vn),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Ka(),
    f;
  f = u;
  let d = f.pathname || "/",
    h = d;
  if (l !== "/") {
    let v = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let p = qo(e, { pathname: h });
  return w2(
    p &&
      p.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, s, v.params),
          pathname: cn([
            l,
            o.encodeLocation
              ? o.encodeLocation(v.pathname).pathname
              : v.pathname,
          ]),
          pathnameBase:
            v.pathnameBase === "/"
              ? l
              : cn([
                  l,
                  o.encodeLocation
                    ? o.encodeLocation(v.pathnameBase).pathname
                    : v.pathnameBase,
                ]),
        })
      ),
    i,
    r,
    n
  );
}
function y2() {
  let e = C2(),
    t = rh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? x.createElement("pre", { style: o }, r) : null,
    null
  );
}
const v2 = x.createElement(y2, null);
class b2 extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          vn.Provider,
          { value: this.props.routeContext },
          x.createElement(Jy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function x2(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = x.useContext(mu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(vn.Provider, { value: t }, n)
  );
}
function w2(e, t, r, n) {
  var o;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if ((i = r) != null && i.errors) e = r.matches;
    else return null;
  }
  let a = e,
    s = (o = r) == null ? void 0 : o.errors;
  if (s != null) {
    let f = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0
    );
    f >= 0 || Ce(!1), (a = a.slice(0, Math.min(a.length, f + 1)));
  }
  let l = !1,
    u = -1;
  if (r && n && n.v7_partialHydration)
    for (let f = 0; f < a.length; f++) {
      let d = a[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: p } = r,
          m =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((f, d, h) => {
    let p,
      m = !1,
      v = null,
      k = null;
    r &&
      ((p = s && d.route.id ? s[d.route.id] : void 0),
      (v = d.route.errorElement || v2),
      l &&
        (u < 0 && h === 0
          ? ((m = !0), (k = null))
          : u === h &&
            ((m = !0), (k = d.route.hydrateFallbackElement || null))));
    let y = t.concat(a.slice(0, h + 1)),
      g = () => {
        let b;
        return (
          p
            ? (b = v)
            : m
            ? (b = k)
            : d.route.Component
            ? (b = x.createElement(d.route.Component, null))
            : d.route.element
            ? (b = d.route.element)
            : (b = f),
          x.createElement(x2, {
            match: d,
            routeContext: { outlet: f, matches: y, isDataRoute: r != null },
            children: b,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? x.createElement(b2, {
          location: r.location,
          revalidation: r.revalidation,
          component: v,
          error: p,
          children: g(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var tv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(tv || {}),
  wl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(wl || {});
function k2(e) {
  let t = x.useContext(mu);
  return t || Ce(!1), t;
}
function S2(e) {
  let t = x.useContext(Xy);
  return t || Ce(!1), t;
}
function E2(e) {
  let t = x.useContext(vn);
  return t || Ce(!1), t;
}
function rv(e) {
  let t = E2(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Ce(!1), r.route.id;
}
function C2() {
  var e;
  let t = x.useContext(Jy),
    r = S2(wl.UseRouteError),
    n = rv(wl.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function j2() {
  let { router: e } = k2(tv.UseNavigateStable),
    t = rv(wl.UseNavigateStable),
    r = x.useRef(!1);
  return (
    Zy(() => {
      r.current = !0;
    }),
    x.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, xl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function N2(e) {
  return g2(e.context);
}
function T2(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = bt.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  qa() && Ce(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: xl({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof n == "string" && (n = Zn(n));
  let {
      pathname: f = "/",
      search: d = "",
      hash: h = "",
      state: p = null,
      key: m = "default",
    } = n,
    v = x.useMemo(() => {
      let k = Ni(f, l);
      return k == null
        ? null
        : {
            location: { pathname: k, search: d, hash: h, state: p, key: m },
            navigationType: o,
          };
    }, [l, f, d, h, p, m, o]);
  return v == null
    ? null
    : x.createElement(
        Ro.Provider,
        { value: u },
        x.createElement(ih.Provider, { children: r, value: v })
      );
}
new Promise(() => {});
function O2(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: x.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: x.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: x.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ia.apply(this, arguments)
  );
}
function R2(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function P2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !P2(e);
}
const M2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  L2 = "6";
try {
  window.__reactRouterVersion = L2;
} catch (e) {}
function D2(e, t) {
  return KS({
    basename: void 0,
    future: Ia({}, void 0, { v7_prependBasename: !0 }),
    history: yS({ window: void 0 }),
    hydrationData: I2(),
    routes: e,
    mapRouteProperties: O2,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function I2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ia({}, t, { errors: A2(t.errors) })), t;
}
function A2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      r[n] = new th(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (r[n] = a);
          } catch (a) {}
      }
      if (r[n] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (r[n] = i);
      }
    } else r[n] = o;
  return r;
}
const z2 = x.createContext({ isTransitioning: !1 }),
  F2 = x.createContext(new Map()),
  $2 = "startTransition",
  l0 = sf[$2],
  U2 = "flushSync",
  u0 = mS[U2];
function B2(e) {
  l0 ? l0(e) : e();
}
function Ki(e) {
  u0 ? u0(e) : e();
}
class H2 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, r) => {
        (this.resolve = (n) => {
          this.status === "pending" && ((this.status = "resolved"), t(n));
        }),
          (this.reject = (n) => {
            this.status === "pending" && ((this.status = "rejected"), r(n));
          });
      }));
  }
}
function W2(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [o, i] = x.useState(r.state),
    [a, s] = x.useState(),
    [l, u] = x.useState({ isTransitioning: !1 }),
    [f, d] = x.useState(),
    [h, p] = x.useState(),
    [m, v] = x.useState(),
    k = x.useRef(new Map()),
    { v7_startTransition: y } = n || {},
    g = x.useCallback(
      (E) => {
        y ? B2(E) : E();
      },
      [y]
    ),
    b = x.useCallback(
      (E, I) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: C,
          unstable_viewTransitionOpts: D,
        } = I;
        O.forEach((_) => k.current.delete(_)),
          E.fetchers.forEach((_, N) => {
            _.data !== void 0 && k.current.set(N, _.data);
          });
        let P =
          r.window == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!D || P) {
          C ? Ki(() => i(E)) : g(() => i(E));
          return;
        }
        if (C) {
          Ki(() => {
            h && (f && f.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: D.currentLocation,
                nextLocation: D.nextLocation,
              });
          });
          let _ = r.window.document.startViewTransition(() => {
            Ki(() => i(E));
          });
          _.finished.finally(() => {
            Ki(() => {
              d(void 0), p(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            Ki(() => p(_));
          return;
        }
        h
          ? (f && f.resolve(),
            h.skipTransition(),
            v({
              state: E,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }))
          : (s(E),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }));
      },
      [r.window, h, f, k, g]
    );
  x.useLayoutEffect(() => r.subscribe(b), [r, b]),
    x.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new H2());
    }, [l]),
    x.useEffect(() => {
      if (f && a && r.window) {
        let E = a,
          I = f.promise,
          O = r.window.document.startViewTransition(async () => {
            g(() => i(E)), await I;
          });
        O.finished.finally(() => {
          d(void 0), p(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          p(O);
      }
    }, [g, a, f, r.window]),
    x.useEffect(() => {
      f && a && o.location.key === a.location.key && f.resolve();
    }, [f, h, o.location, a]),
    x.useEffect(() => {
      !l.isTransitioning &&
        m &&
        (s(m.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        v(void 0));
    }, [l.isTransitioning, m]),
    x.useEffect(() => {}, []);
  let w = x.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (E) => r.navigate(E),
        push: (E, I, O) =>
          r.navigate(E, {
            state: I,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (E, I, O) =>
          r.navigate(E, {
            replace: !0,
            state: I,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [r]
    ),
    S = r.basename || "/",
    j = x.useMemo(
      () => ({ router: r, navigator: w, static: !1, basename: S }),
      [r, w, S]
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      mu.Provider,
      { value: j },
      x.createElement(
        Xy.Provider,
        { value: o },
        x.createElement(
          F2.Provider,
          { value: k.current },
          x.createElement(
            z2.Provider,
            { value: l },
            x.createElement(
              T2,
              {
                basename: S,
                location: o.location,
                navigationType: o.historyAction,
                navigator: w,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath },
              },
              o.initialized || r.future.v7_partialHydration
                ? x.createElement(Q2, {
                    routes: r.routes,
                    future: r.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Q2(e) {
  let { routes: t, future: r, state: n } = e;
  return m2(t, void 0, n, r);
}
const V2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  q2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qt = x.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      h = R2(t, M2),
      { basename: p } = x.useContext(Ro),
      m,
      v = !1;
    if (typeof u == "string" && q2.test(u) && ((m = u), V2))
      try {
        let b = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(b.protocol + u) : new URL(u),
          S = Ni(w.pathname, p);
        w.origin === b.origin && S != null
          ? (u = S + w.search + w.hash)
          : (v = !0);
      } catch (b) {}
    let k = f2(u, { relative: o }),
      y = K2(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: d,
      });
    function g(b) {
      n && n(b), b.defaultPrevented || y(b);
    }
    return x.createElement(
      "a",
      Ia({}, h, { href: m || k, onClick: v || i ? n : g, ref: r, target: l })
    );
  });
var c0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(c0 || (c0 = {}));
var d0;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(d0 || (d0 = {}));
function K2(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = Ti(),
    u = Ka(),
    f = ev(e, { relative: a });
  return x.useCallback(
    (d) => {
      if (_2(d, r)) {
        d.preventDefault();
        let h = n !== void 0 ? n : So(u) === So(f);
        l(e, {
          replace: h,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, f, n, o, r, e, i, a, s]
  );
}
function Md(e, t) {
  return (
    (Md = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Md(e, t)
  );
}
function Oi(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Md(e, t);
}
var Ri = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (n) {
      var o = this,
        i = n || function () {};
      return (
        this.listeners.push(i),
        this.onSubscribe(),
        function () {
          (o.listeners = o.listeners.filter(function (a) {
            return a !== i;
          })),
            o.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function we() {
  return (
    (we = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    we.apply(this, arguments)
  );
}
var kl = typeof window > "u";
function _t() {}
function Y2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ld(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Sl(e) {
  return Array.isArray(e) ? e : [e];
}
function nv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hs(e, t, r) {
  return Ya(e)
    ? typeof t == "function"
      ? we({}, r, { queryKey: e, queryFn: t })
      : we({}, t, { queryKey: e })
    : e;
}
function G2(e, t, r) {
  return Ya(e)
    ? typeof t == "function"
      ? we({}, r, { mutationKey: e, mutationFn: t })
      : we({}, t, { mutationKey: e })
    : typeof e == "function"
    ? we({}, t, { mutationFn: e })
    : we({}, e);
}
function Rn(e, t, r) {
  return Ya(e) ? [we({}, t, { queryKey: e }), r] : [e || {}, t];
}
function X2(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var r = e != null ? e : !t;
  return r ? "active" : "inactive";
}
function f0(e, t) {
  var r = e.active,
    n = e.exact,
    o = e.fetching,
    i = e.inactive,
    a = e.predicate,
    s = e.queryKey,
    l = e.stale;
  if (Ya(s)) {
    if (n) {
      if (t.queryHash !== ah(s, t.options)) return !1;
    } else if (!El(t.queryKey, s)) return !1;
  }
  var u = X2(r, i);
  if (u === "none") return !1;
  if (u !== "all") {
    var f = t.isActive();
    if ((u === "active" && !f) || (u === "inactive" && f)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (typeof o == "boolean" && t.isFetching() !== o) ||
    (a && !a(t))
  );
}
function h0(e, t) {
  var r = e.exact,
    n = e.fetching,
    o = e.predicate,
    i = e.mutationKey;
  if (Ya(i)) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (fo(t.options.mutationKey) !== fo(i)) return !1;
    } else if (!El(t.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof n == "boolean" && (t.state.status === "loading") !== n) ||
    (o && !o(t))
  );
}
function ah(e, t) {
  var r = (t == null ? void 0 : t.queryKeyHashFn) || fo;
  return r(e);
}
function fo(e) {
  var t = Sl(e);
  return J2(t);
}
function J2(e) {
  return JSON.stringify(e, function (t, r) {
    return Dd(r)
      ? Object.keys(r)
          .sort()
          .reduce(function (n, o) {
            return (n[o] = r[o]), n;
          }, {})
      : r;
  });
}
function El(e, t) {
  return ov(Sl(e), Sl(t));
}
function ov(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (r) {
        return !ov(e[r], t[r]);
      })
    : !1;
}
function Cl(e, t) {
  if (e === t) return e;
  var r = Array.isArray(e) && Array.isArray(t);
  if (r || (Dd(e) && Dd(t))) {
    for (
      var n = r ? e.length : Object.keys(e).length,
        o = r ? t : Object.keys(t),
        i = o.length,
        a = r ? [] : {},
        s = 0,
        l = 0;
      l < i;
      l++
    ) {
      var u = r ? l : o[l];
      (a[u] = Cl(e[u], t[u])), a[u] === e[u] && s++;
    }
    return n === i && s === n ? e : a;
  }
  return t;
}
function Z2(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Dd(e) {
  if (!p0(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var r = t.prototype;
  return !(!p0(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function p0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ya(e) {
  return typeof e == "string" || Array.isArray(e);
}
function eE(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function g0(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function iv() {
  if (typeof AbortController == "function") return new AbortController();
}
var tE = (function (e) {
    Oi(t, e);
    function t() {
      var n;
      return (
        (n = e.call(this) || this),
        (n.setup = function (o) {
          var i;
          if (!kl && (i = window) != null && i.addEventListener) {
            var a = function () {
              return o();
            };
            return (
              window.addEventListener("visibilitychange", a, !1),
              window.addEventListener("focus", a, !1),
              function () {
                window.removeEventListener("visibilitychange", a),
                  window.removeEventListener("focus", a);
              }
            );
          }
        }),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (r.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var o;
          (o = this.cleanup) == null || o.call(this), (this.cleanup = void 0);
        }
      }),
      (r.setEventListener = function (o) {
        var i,
          a = this;
        (this.setup = o),
          (i = this.cleanup) == null || i.call(this),
          (this.cleanup = o(function (s) {
            typeof s == "boolean" ? a.setFocused(s) : a.onFocus();
          }));
      }),
      (r.setFocused = function (o) {
        (this.focused = o), o && this.onFocus();
      }),
      (r.onFocus = function () {
        this.listeners.forEach(function (o) {
          o();
        });
      }),
      (r.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(Ri),
  pa = new tE(),
  rE = (function (e) {
    Oi(t, e);
    function t() {
      var n;
      return (
        (n = e.call(this) || this),
        (n.setup = function (o) {
          var i;
          if (!kl && (i = window) != null && i.addEventListener) {
            var a = function () {
              return o();
            };
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", a, !1),
              function () {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", a);
              }
            );
          }
        }),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (r.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var o;
          (o = this.cleanup) == null || o.call(this), (this.cleanup = void 0);
        }
      }),
      (r.setEventListener = function (o) {
        var i,
          a = this;
        (this.setup = o),
          (i = this.cleanup) == null || i.call(this),
          (this.cleanup = o(function (s) {
            typeof s == "boolean" ? a.setOnline(s) : a.onOnline();
          }));
      }),
      (r.setOnline = function (o) {
        (this.online = o), o && this.onOnline();
      }),
      (r.onOnline = function () {
        this.listeners.forEach(function (o) {
          o();
        });
      }),
      (r.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(Ri),
  Ws = new rE();
function nE(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function jl(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var av = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function Qs(e) {
  return e instanceof av;
}
var sv = function (t) {
    var r = this,
      n = !1,
      o,
      i,
      a,
      s;
    (this.abort = t.abort),
      (this.cancel = function (h) {
        return o == null ? void 0 : o(h);
      }),
      (this.cancelRetry = function () {
        n = !0;
      }),
      (this.continueRetry = function () {
        n = !1;
      }),
      (this.continue = function () {
        return i == null ? void 0 : i();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (h, p) {
        (a = h), (s = p);
      }));
    var l = function (p) {
        r.isResolved ||
          ((r.isResolved = !0),
          t.onSuccess == null || t.onSuccess(p),
          i == null || i(),
          a(p));
      },
      u = function (p) {
        r.isResolved ||
          ((r.isResolved = !0),
          t.onError == null || t.onError(p),
          i == null || i(),
          s(p));
      },
      f = function () {
        return new Promise(function (p) {
          (i = p), (r.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (i = void 0),
            (r.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      d = function h() {
        if (!r.isResolved) {
          var p;
          try {
            p = t.fn();
          } catch (m) {
            p = Promise.reject(m);
          }
          (o = function (v) {
            if (
              !r.isResolved &&
              (u(new av(v)), r.abort == null || r.abort(), jl(p))
            )
              try {
                p.cancel();
              } catch (k) {}
          }),
            (r.isTransportCancelable = jl(p)),
            Promise.resolve(p)
              .then(l)
              .catch(function (m) {
                var v, k;
                if (!r.isResolved) {
                  var y = (v = t.retry) != null ? v : 3,
                    g = (k = t.retryDelay) != null ? k : nE,
                    b = typeof g == "function" ? g(r.failureCount, m) : g,
                    w =
                      y === !0 ||
                      (typeof y == "number" && r.failureCount < y) ||
                      (typeof y == "function" && y(r.failureCount, m));
                  if (n || !w) {
                    u(m);
                    return;
                  }
                  r.failureCount++,
                    t.onFail == null || t.onFail(r.failureCount, m),
                    eE(b)
                      .then(function () {
                        if (!pa.isFocused() || !Ws.isOnline()) return f();
                      })
                      .then(function () {
                        n ? u(m) : h();
                      });
                }
              });
        }
      };
    d();
  },
  oE = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (r) {
          r();
        }),
        (this.batchNotifyFn = function (r) {
          r();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (n) {
        var o;
        this.transactions++;
        try {
          o = n();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return o;
      }),
      (t.schedule = function (n) {
        var o = this;
        this.transactions
          ? this.queue.push(n)
          : g0(function () {
              o.notifyFn(n);
            });
      }),
      (t.batchCalls = function (n) {
        var o = this;
        return function () {
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
            a[s] = arguments[s];
          o.schedule(function () {
            n.apply(void 0, a);
          });
        };
      }),
      (t.flush = function () {
        var n = this,
          o = this.queue;
        (this.queue = []),
          o.length &&
            g0(function () {
              n.batchNotifyFn(function () {
                o.forEach(function (i) {
                  n.notifyFn(i);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (n) {
        this.notifyFn = n;
      }),
      (t.setBatchNotifyFunction = function (n) {
        this.batchNotifyFn = n;
      }),
      e
    );
  })(),
  et = new oE(),
  lv = console;
function Nl() {
  return lv;
}
function iE(e) {
  lv = e;
}
var aE = (function () {
    function e(r) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = r.defaultOptions),
        this.setOptions(r.options),
        (this.observers = []),
        (this.cache = r.cache),
        (this.queryKey = r.queryKey),
        (this.queryHash = r.queryHash),
        (this.initialState = r.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = r.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (n) {
        var o;
        (this.options = we({}, this.defaultOptions, n)),
          (this.meta = n == null ? void 0 : n.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (o = this.options.cacheTime) != null ? o : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (n) {
        this.defaultOptions = n;
      }),
      (t.scheduleGc = function () {
        var n = this;
        this.clearGcTimeout(),
          Ld(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              n.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (n, o) {
        var i,
          a,
          s = this.state.data,
          l = Y2(n, s);
        return (
          (i = (a = this.options).isDataEqual) != null && i.call(a, s, l)
            ? (l = s)
            : this.options.structuralSharing !== !1 && (l = Cl(s, l)),
          this.dispatch({
            data: l,
            type: "success",
            dataUpdatedAt: o == null ? void 0 : o.updatedAt,
          }),
          l
        );
      }),
      (t.setState = function (n, o) {
        this.dispatch({ type: "setState", state: n, setStateOptions: o });
      }),
      (t.cancel = function (n) {
        var o,
          i = this.promise;
        return (
          (o = this.retryer) == null || o.cancel(n),
          i ? i.then(_t).catch(_t) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (n) {
          return n.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (n) {
            return n.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (n) {
        return (
          n === void 0 && (n = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !nv(this.state.dataUpdatedAt, n)
        );
      }),
      (t.onFocus = function () {
        var n,
          o = this.observers.find(function (i) {
            return i.shouldFetchOnWindowFocus();
          });
        o && o.refetch(), (n = this.retryer) == null || n.continue();
      }),
      (t.onOnline = function () {
        var n,
          o = this.observers.find(function (i) {
            return i.shouldFetchOnReconnect();
          });
        o && o.refetch(), (n = this.retryer) == null || n.continue();
      }),
      (t.addObserver = function (n) {
        this.observers.indexOf(n) === -1 &&
          (this.observers.push(n),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: n,
          }));
      }),
      (t.removeObserver = function (n) {
        this.observers.indexOf(n) !== -1 &&
          ((this.observers = this.observers.filter(function (o) {
            return o !== n;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: n,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (n, o) {
        var i = this,
          a,
          s,
          l;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && o != null && o.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var u;
            return (
              (u = this.retryer) == null || u.continueRetry(), this.promise
            );
          }
        }
        if ((n && this.setOptions(n), !this.options.queryFn)) {
          var f = this.observers.find(function (g) {
            return g.options.queryFn;
          });
          f && this.setOptions(f.options);
        }
        var d = Sl(this.queryKey),
          h = iv(),
          p = { queryKey: d, pageParam: void 0, meta: this.meta };
        Object.defineProperty(p, "signal", {
          enumerable: !0,
          get: function () {
            if (h) return (i.abortSignalConsumed = !0), h.signal;
          },
        });
        var m = function () {
            return i.options.queryFn
              ? ((i.abortSignalConsumed = !1), i.options.queryFn(p))
              : Promise.reject("Missing queryFn");
          },
          v = {
            fetchOptions: o,
            options: this.options,
            queryKey: d,
            state: this.state,
            fetchFn: m,
            meta: this.meta,
          };
        if ((a = this.options.behavior) != null && a.onFetch) {
          var k;
          (k = this.options.behavior) == null || k.onFetch(v);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((s = v.fetchOptions) == null ? void 0 : s.meta))
        ) {
          var y;
          this.dispatch({
            type: "fetch",
            meta: (y = v.fetchOptions) == null ? void 0 : y.meta,
          });
        }
        return (
          (this.retryer = new sv({
            fn: v.fetchFn,
            abort: h == null || (l = h.abort) == null ? void 0 : l.bind(h),
            onSuccess: function (b) {
              i.setData(b),
                i.cache.config.onSuccess == null ||
                  i.cache.config.onSuccess(b, i),
                i.cacheTime === 0 && i.optionalRemove();
            },
            onError: function (b) {
              (Qs(b) && b.silent) || i.dispatch({ type: "error", error: b }),
                Qs(b) ||
                  (i.cache.config.onError == null ||
                    i.cache.config.onError(b, i),
                  Nl().error(b)),
                i.cacheTime === 0 && i.optionalRemove();
            },
            onFail: function () {
              i.dispatch({ type: "failed" });
            },
            onPause: function () {
              i.dispatch({ type: "pause" });
            },
            onContinue: function () {
              i.dispatch({ type: "continue" });
            },
            retry: v.options.retry,
            retryDelay: v.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (n) {
        var o = this;
        (this.state = this.reducer(this.state, n)),
          et.batch(function () {
            o.observers.forEach(function (i) {
              i.onQueryUpdate(n);
            }),
              o.cache.notify({ query: o, type: "queryUpdated", action: n });
          });
      }),
      (t.getDefaultState = function (n) {
        var o =
            typeof n.initialData == "function"
              ? n.initialData()
              : n.initialData,
          i = typeof n.initialData < "u",
          a = i
            ? typeof n.initialDataUpdatedAt == "function"
              ? n.initialDataUpdatedAt()
              : n.initialDataUpdatedAt
            : 0,
          s = typeof o < "u";
        return {
          data: o,
          dataUpdateCount: 0,
          dataUpdatedAt: s ? (a != null ? a : Date.now()) : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: s ? "success" : "idle",
        };
      }),
      (t.reducer = function (n, o) {
        var i, a;
        switch (o.type) {
          case "failed":
            return we({}, n, { fetchFailureCount: n.fetchFailureCount + 1 });
          case "pause":
            return we({}, n, { isPaused: !0 });
          case "continue":
            return we({}, n, { isPaused: !1 });
          case "fetch":
            return we(
              {},
              n,
              {
                fetchFailureCount: 0,
                fetchMeta: (i = o.meta) != null ? i : null,
                isFetching: !0,
                isPaused: !1,
              },
              !n.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return we({}, n, {
              data: o.data,
              dataUpdateCount: n.dataUpdateCount + 1,
              dataUpdatedAt: (a = o.dataUpdatedAt) != null ? a : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var s = o.error;
            return Qs(s) && s.revert && this.revertState
              ? we({}, this.revertState)
              : we({}, n, {
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return we({}, n, { isInvalidated: !0 });
          case "setState":
            return we({}, n, o.state);
          default:
            return n;
        }
      }),
      e
    );
  })(),
  sE = (function (e) {
    Oi(t, e);
    function t(n) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.config = n || {}),
        (o.queries = []),
        (o.queriesMap = {}),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.build = function (o, i, a) {
        var s,
          l = i.queryKey,
          u = (s = i.queryHash) != null ? s : ah(l, i),
          f = this.get(u);
        return (
          f ||
            ((f = new aE({
              cache: this,
              queryKey: l,
              queryHash: u,
              options: o.defaultQueryOptions(i),
              state: a,
              defaultOptions: o.getQueryDefaults(l),
              meta: i.meta,
            })),
            this.add(f)),
          f
        );
      }),
      (r.add = function (o) {
        this.queriesMap[o.queryHash] ||
          ((this.queriesMap[o.queryHash] = o),
          this.queries.push(o),
          this.notify({ type: "queryAdded", query: o }));
      }),
      (r.remove = function (o) {
        var i = this.queriesMap[o.queryHash];
        i &&
          (o.destroy(),
          (this.queries = this.queries.filter(function (a) {
            return a !== o;
          })),
          i === o && delete this.queriesMap[o.queryHash],
          this.notify({ type: "queryRemoved", query: o }));
      }),
      (r.clear = function () {
        var o = this;
        et.batch(function () {
          o.queries.forEach(function (i) {
            o.remove(i);
          });
        });
      }),
      (r.get = function (o) {
        return this.queriesMap[o];
      }),
      (r.getAll = function () {
        return this.queries;
      }),
      (r.find = function (o, i) {
        var a = Rn(o, i),
          s = a[0];
        return (
          typeof s.exact > "u" && (s.exact = !0),
          this.queries.find(function (l) {
            return f0(s, l);
          })
        );
      }),
      (r.findAll = function (o, i) {
        var a = Rn(o, i),
          s = a[0];
        return Object.keys(s).length > 0
          ? this.queries.filter(function (l) {
              return f0(s, l);
            })
          : this.queries;
      }),
      (r.notify = function (o) {
        var i = this;
        et.batch(function () {
          i.listeners.forEach(function (a) {
            a(o);
          });
        });
      }),
      (r.onFocus = function () {
        var o = this;
        et.batch(function () {
          o.queries.forEach(function (i) {
            i.onFocus();
          });
        });
      }),
      (r.onOnline = function () {
        var o = this;
        et.batch(function () {
          o.queries.forEach(function (i) {
            i.onOnline();
          });
        });
      }),
      t
    );
  })(Ri),
  lE = (function () {
    function e(r) {
      (this.options = we({}, r.defaultOptions, r.options)),
        (this.mutationId = r.mutationId),
        (this.mutationCache = r.mutationCache),
        (this.observers = []),
        (this.state = r.state || uv()),
        (this.meta = r.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (n) {
        this.dispatch({ type: "setState", state: n });
      }),
      (t.addObserver = function (n) {
        this.observers.indexOf(n) === -1 && this.observers.push(n);
      }),
      (t.removeObserver = function (n) {
        this.observers = this.observers.filter(function (o) {
          return o !== n;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(_t).catch(_t))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var n = this,
          o,
          i = this.state.status === "loading",
          a = Promise.resolve();
        return (
          i ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (a = a
              .then(function () {
                n.mutationCache.config.onMutate == null ||
                  n.mutationCache.config.onMutate(n.state.variables, n);
              })
              .then(function () {
                return n.options.onMutate == null
                  ? void 0
                  : n.options.onMutate(n.state.variables);
              })
              .then(function (s) {
                s !== n.state.context &&
                  n.dispatch({
                    type: "loading",
                    context: s,
                    variables: n.state.variables,
                  });
              }))),
          a
            .then(function () {
              return n.executeMutation();
            })
            .then(function (s) {
              (o = s),
                n.mutationCache.config.onSuccess == null ||
                  n.mutationCache.config.onSuccess(
                    o,
                    n.state.variables,
                    n.state.context,
                    n
                  );
            })
            .then(function () {
              return n.options.onSuccess == null
                ? void 0
                : n.options.onSuccess(o, n.state.variables, n.state.context);
            })
            .then(function () {
              return n.options.onSettled == null
                ? void 0
                : n.options.onSettled(
                    o,
                    null,
                    n.state.variables,
                    n.state.context
                  );
            })
            .then(function () {
              return n.dispatch({ type: "success", data: o }), o;
            })
            .catch(function (s) {
              return (
                n.mutationCache.config.onError == null ||
                  n.mutationCache.config.onError(
                    s,
                    n.state.variables,
                    n.state.context,
                    n
                  ),
                Nl().error(s),
                Promise.resolve()
                  .then(function () {
                    return n.options.onError == null
                      ? void 0
                      : n.options.onError(
                          s,
                          n.state.variables,
                          n.state.context
                        );
                  })
                  .then(function () {
                    return n.options.onSettled == null
                      ? void 0
                      : n.options.onSettled(
                          void 0,
                          s,
                          n.state.variables,
                          n.state.context
                        );
                  })
                  .then(function () {
                    throw (n.dispatch({ type: "error", error: s }), s);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var n = this,
          o;
        return (
          (this.retryer = new sv({
            fn: function () {
              return n.options.mutationFn
                ? n.options.mutationFn(n.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              n.dispatch({ type: "failed" });
            },
            onPause: function () {
              n.dispatch({ type: "pause" });
            },
            onContinue: function () {
              n.dispatch({ type: "continue" });
            },
            retry: (o = this.options.retry) != null ? o : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (n) {
        var o = this;
        (this.state = uE(this.state, n)),
          et.batch(function () {
            o.observers.forEach(function (i) {
              i.onMutationUpdate(n);
            }),
              o.mutationCache.notify(o);
          });
      }),
      e
    );
  })();
function uv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function uE(e, t) {
  switch (t.type) {
    case "failed":
      return we({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return we({}, e, { isPaused: !0 });
    case "continue":
      return we({}, e, { isPaused: !1 });
    case "loading":
      return we({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return we({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return we({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return we({}, e, t.state);
    default:
      return e;
  }
}
var cE = (function (e) {
  Oi(t, e);
  function t(n) {
    var o;
    return (
      (o = e.call(this) || this),
      (o.config = n || {}),
      (o.mutations = []),
      (o.mutationId = 0),
      o
    );
  }
  var r = t.prototype;
  return (
    (r.build = function (o, i, a) {
      var s = new lE({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: o.defaultMutationOptions(i),
        state: a,
        defaultOptions: i.mutationKey
          ? o.getMutationDefaults(i.mutationKey)
          : void 0,
        meta: i.meta,
      });
      return this.add(s), s;
    }),
    (r.add = function (o) {
      this.mutations.push(o), this.notify(o);
    }),
    (r.remove = function (o) {
      (this.mutations = this.mutations.filter(function (i) {
        return i !== o;
      })),
        o.cancel(),
        this.notify(o);
    }),
    (r.clear = function () {
      var o = this;
      et.batch(function () {
        o.mutations.forEach(function (i) {
          o.remove(i);
        });
      });
    }),
    (r.getAll = function () {
      return this.mutations;
    }),
    (r.find = function (o) {
      return (
        typeof o.exact > "u" && (o.exact = !0),
        this.mutations.find(function (i) {
          return h0(o, i);
        })
      );
    }),
    (r.findAll = function (o) {
      return this.mutations.filter(function (i) {
        return h0(o, i);
      });
    }),
    (r.notify = function (o) {
      var i = this;
      et.batch(function () {
        i.listeners.forEach(function (a) {
          a(o);
        });
      });
    }),
    (r.onFocus = function () {
      this.resumePausedMutations();
    }),
    (r.onOnline = function () {
      this.resumePausedMutations();
    }),
    (r.resumePausedMutations = function () {
      var o = this.mutations.filter(function (i) {
        return i.state.isPaused;
      });
      return et.batch(function () {
        return o.reduce(function (i, a) {
          return i.then(function () {
            return a.continue().catch(_t);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(Ri);
function dE() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var r,
          n,
          o,
          i,
          a,
          s,
          l =
            (r = t.fetchOptions) == null || (n = r.meta) == null
              ? void 0
              : n.refetchPage,
          u =
            (o = t.fetchOptions) == null || (i = o.meta) == null
              ? void 0
              : i.fetchMore,
          f = u == null ? void 0 : u.pageParam,
          d = (u == null ? void 0 : u.direction) === "forward",
          h = (u == null ? void 0 : u.direction) === "backward",
          p = ((a = t.state.data) == null ? void 0 : a.pages) || [],
          m = ((s = t.state.data) == null ? void 0 : s.pageParams) || [],
          v = iv(),
          k = v == null ? void 0 : v.signal,
          y = m,
          g = !1,
          b =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          w = function (N, L, B, W) {
            return (
              (y = W ? [L].concat(y) : [].concat(y, [L])),
              W ? [B].concat(N) : [].concat(N, [B])
            );
          },
          S = function (N, L, B, W) {
            if (g) return Promise.reject("Cancelled");
            if (typeof B > "u" && !L && N.length) return Promise.resolve(N);
            var R = {
                queryKey: t.queryKey,
                signal: k,
                pageParam: B,
                meta: t.meta,
              },
              F = b(R),
              z = Promise.resolve(F).then(function (H) {
                return w(N, B, H, W);
              });
            if (jl(F)) {
              var U = z;
              U.cancel = F.cancel;
            }
            return z;
          },
          j;
        if (!p.length) j = S([]);
        else if (d) {
          var E = typeof f < "u",
            I = E ? f : m0(t.options, p);
          j = S(p, E, I);
        } else if (h) {
          var O = typeof f < "u",
            C = O ? f : fE(t.options, p);
          j = S(p, O, C, !0);
        } else
          (function () {
            y = [];
            var _ = typeof t.options.getNextPageParam > "u",
              N = l && p[0] ? l(p[0], 0, p) : !0;
            j = N ? S([], _, m[0]) : Promise.resolve(w([], m[0], p[0]));
            for (
              var L = function (R) {
                  j = j.then(function (F) {
                    var z = l && p[R] ? l(p[R], R, p) : !0;
                    if (z) {
                      var U = _ ? m[R] : m0(t.options, F);
                      return S(F, _, U);
                    }
                    return Promise.resolve(w(F, m[R], p[R]));
                  });
                },
                B = 1;
              B < p.length;
              B++
            )
              L(B);
          })();
        var D = j.then(function (_) {
            return { pages: _, pageParams: y };
          }),
          P = D;
        return (
          (P.cancel = function () {
            (g = !0), v == null || v.abort(), jl(j) && j.cancel();
          }),
          D
        );
      };
    },
  };
}
function m0(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function fE(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var hE = (function () {
    function e(r) {
      r === void 0 && (r = {}),
        (this.queryCache = r.queryCache || new sE()),
        (this.mutationCache = r.mutationCache || new cE()),
        (this.defaultOptions = r.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var n = this;
        (this.unsubscribeFocus = pa.subscribe(function () {
          pa.isFocused() &&
            Ws.isOnline() &&
            (n.mutationCache.onFocus(), n.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Ws.subscribe(function () {
            pa.isFocused() &&
              Ws.isOnline() &&
              (n.mutationCache.onOnline(), n.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var n, o;
        (n = this.unsubscribeFocus) == null || n.call(this),
          (o = this.unsubscribeOnline) == null || o.call(this);
      }),
      (t.isFetching = function (n, o) {
        var i = Rn(n, o),
          a = i[0];
        return (a.fetching = !0), this.queryCache.findAll(a).length;
      }),
      (t.isMutating = function (n) {
        return this.mutationCache.findAll(we({}, n, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (n, o) {
        var i;
        return (i = this.queryCache.find(n, o)) == null ? void 0 : i.state.data;
      }),
      (t.getQueriesData = function (n) {
        return this.getQueryCache()
          .findAll(n)
          .map(function (o) {
            var i = o.queryKey,
              a = o.state,
              s = a.data;
            return [i, s];
          });
      }),
      (t.setQueryData = function (n, o, i) {
        var a = Hs(n),
          s = this.defaultQueryOptions(a);
        return this.queryCache.build(this, s).setData(o, i);
      }),
      (t.setQueriesData = function (n, o, i) {
        var a = this;
        return et.batch(function () {
          return a
            .getQueryCache()
            .findAll(n)
            .map(function (s) {
              var l = s.queryKey;
              return [l, a.setQueryData(l, o, i)];
            });
        });
      }),
      (t.getQueryState = function (n, o) {
        var i;
        return (i = this.queryCache.find(n, o)) == null ? void 0 : i.state;
      }),
      (t.removeQueries = function (n, o) {
        var i = Rn(n, o),
          a = i[0],
          s = this.queryCache;
        et.batch(function () {
          s.findAll(a).forEach(function (l) {
            s.remove(l);
          });
        });
      }),
      (t.resetQueries = function (n, o, i) {
        var a = this,
          s = Rn(n, o, i),
          l = s[0],
          u = s[1],
          f = this.queryCache,
          d = we({}, l, { active: !0 });
        return et.batch(function () {
          return (
            f.findAll(l).forEach(function (h) {
              h.reset();
            }),
            a.refetchQueries(d, u)
          );
        });
      }),
      (t.cancelQueries = function (n, o, i) {
        var a = this,
          s = Rn(n, o, i),
          l = s[0],
          u = s[1],
          f = u === void 0 ? {} : u;
        typeof f.revert > "u" && (f.revert = !0);
        var d = et.batch(function () {
          return a.queryCache.findAll(l).map(function (h) {
            return h.cancel(f);
          });
        });
        return Promise.all(d).then(_t).catch(_t);
      }),
      (t.invalidateQueries = function (n, o, i) {
        var a,
          s,
          l,
          u = this,
          f = Rn(n, o, i),
          d = f[0],
          h = f[1],
          p = we({}, d, {
            active:
              (a = (s = d.refetchActive) != null ? s : d.active) != null
                ? a
                : !0,
            inactive: (l = d.refetchInactive) != null ? l : !1,
          });
        return et.batch(function () {
          return (
            u.queryCache.findAll(d).forEach(function (m) {
              m.invalidate();
            }),
            u.refetchQueries(p, h)
          );
        });
      }),
      (t.refetchQueries = function (n, o, i) {
        var a = this,
          s = Rn(n, o, i),
          l = s[0],
          u = s[1],
          f = et.batch(function () {
            return a.queryCache.findAll(l).map(function (h) {
              return h.fetch(
                void 0,
                we({}, u, {
                  meta: { refetchPage: l == null ? void 0 : l.refetchPage },
                })
              );
            });
          }),
          d = Promise.all(f).then(_t);
        return (u != null && u.throwOnError) || (d = d.catch(_t)), d;
      }),
      (t.fetchQuery = function (n, o, i) {
        var a = Hs(n, o, i),
          s = this.defaultQueryOptions(a);
        typeof s.retry > "u" && (s.retry = !1);
        var l = this.queryCache.build(this, s);
        return l.isStaleByTime(s.staleTime)
          ? l.fetch(s)
          : Promise.resolve(l.state.data);
      }),
      (t.prefetchQuery = function (n, o, i) {
        return this.fetchQuery(n, o, i).then(_t).catch(_t);
      }),
      (t.fetchInfiniteQuery = function (n, o, i) {
        var a = Hs(n, o, i);
        return (a.behavior = dE()), this.fetchQuery(a);
      }),
      (t.prefetchInfiniteQuery = function (n, o, i) {
        return this.fetchInfiniteQuery(n, o, i).then(_t).catch(_t);
      }),
      (t.cancelMutations = function () {
        var n = this,
          o = et.batch(function () {
            return n.mutationCache.getAll().map(function (i) {
              return i.cancel();
            });
          });
        return Promise.all(o).then(_t).catch(_t);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (n) {
        return this.mutationCache.build(this, n).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (n) {
        this.defaultOptions = n;
      }),
      (t.setQueryDefaults = function (n, o) {
        var i = this.queryDefaults.find(function (a) {
          return fo(n) === fo(a.queryKey);
        });
        i
          ? (i.defaultOptions = o)
          : this.queryDefaults.push({ queryKey: n, defaultOptions: o });
      }),
      (t.getQueryDefaults = function (n) {
        var o;
        return n
          ? (o = this.queryDefaults.find(function (i) {
              return El(n, i.queryKey);
            })) == null
            ? void 0
            : o.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (n, o) {
        var i = this.mutationDefaults.find(function (a) {
          return fo(n) === fo(a.mutationKey);
        });
        i
          ? (i.defaultOptions = o)
          : this.mutationDefaults.push({ mutationKey: n, defaultOptions: o });
      }),
      (t.getMutationDefaults = function (n) {
        var o;
        return n
          ? (o = this.mutationDefaults.find(function (i) {
              return El(n, i.mutationKey);
            })) == null
            ? void 0
            : o.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (n) {
        if (n != null && n._defaulted) return n;
        var o = we(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(n == null ? void 0 : n.queryKey),
          n,
          { _defaulted: !0 }
        );
        return (
          !o.queryHash && o.queryKey && (o.queryHash = ah(o.queryKey, o)), o
        );
      }),
      (t.defaultQueryObserverOptions = function (n) {
        return this.defaultQueryOptions(n);
      }),
      (t.defaultMutationOptions = function (n) {
        return n != null && n._defaulted
          ? n
          : we(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(n == null ? void 0 : n.mutationKey),
              n,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  pE = (function (e) {
    Oi(t, e);
    function t(n, o) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.client = n),
        (i.options = o),
        (i.trackedProps = []),
        (i.selectError = null),
        i.bindMethods(),
        i.setOptions(o),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (r.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          y0(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (r.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (r.shouldFetchOnReconnect = function () {
        return Id(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (r.shouldFetchOnWindowFocus = function () {
        return Id(
          this.currentQuery,
          this.options,
          this.options.refetchOnWindowFocus
        );
      }),
      (r.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (r.setOptions = function (o, i) {
        var a = this.options,
          s = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(o)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = a.queryKey),
          this.updateQuery();
        var l = this.hasListeners();
        l && v0(this.currentQuery, s, this.options, a) && this.executeFetch(),
          this.updateResult(i),
          l &&
            (this.currentQuery !== s ||
              this.options.enabled !== a.enabled ||
              this.options.staleTime !== a.staleTime) &&
            this.updateStaleTimeout();
        var u = this.computeRefetchInterval();
        l &&
          (this.currentQuery !== s ||
            this.options.enabled !== a.enabled ||
            u !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(u);
      }),
      (r.getOptimisticResult = function (o) {
        var i = this.client.defaultQueryObserverOptions(o),
          a = this.client.getQueryCache().build(this.client, i);
        return this.createResult(a, i);
      }),
      (r.getCurrentResult = function () {
        return this.currentResult;
      }),
      (r.trackResult = function (o, i) {
        var a = this,
          s = {},
          l = function (f) {
            a.trackedProps.includes(f) || a.trackedProps.push(f);
          };
        return (
          Object.keys(o).forEach(function (u) {
            Object.defineProperty(s, u, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return l(u), o[u];
              },
            });
          }),
          (i.useErrorBoundary || i.suspense) && l("error"),
          s
        );
      }),
      (r.getNextResult = function (o) {
        var i = this;
        return new Promise(function (a, s) {
          var l = i.subscribe(function (u) {
            u.isFetching ||
              (l(),
              u.isError && o != null && o.throwOnError ? s(u.error) : a(u));
          });
        });
      }),
      (r.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (r.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (r.refetch = function (o) {
        return this.fetch(
          we({}, o, {
            meta: { refetchPage: o == null ? void 0 : o.refetchPage },
          })
        );
      }),
      (r.fetchOptimistic = function (o) {
        var i = this,
          a = this.client.defaultQueryObserverOptions(o),
          s = this.client.getQueryCache().build(this.client, a);
        return s.fetch().then(function () {
          return i.createResult(s, a);
        });
      }),
      (r.fetch = function (o) {
        var i = this;
        return this.executeFetch(o).then(function () {
          return i.updateResult(), i.currentResult;
        });
      }),
      (r.executeFetch = function (o) {
        this.updateQuery();
        var i = this.currentQuery.fetch(this.options, o);
        return (o != null && o.throwOnError) || (i = i.catch(_t)), i;
      }),
      (r.updateStaleTimeout = function () {
        var o = this;
        if (
          (this.clearStaleTimeout(),
          !(kl || this.currentResult.isStale || !Ld(this.options.staleTime)))
        ) {
          var i = nv(this.currentResult.dataUpdatedAt, this.options.staleTime),
            a = i + 1;
          this.staleTimeoutId = setTimeout(function () {
            o.currentResult.isStale || o.updateResult();
          }, a);
        }
      }),
      (r.computeRefetchInterval = function () {
        var o;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (o = this.options.refetchInterval) != null
          ? o
          : !1;
      }),
      (r.updateRefetchInterval = function (o) {
        var i = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = o),
          !(
            kl ||
            this.options.enabled === !1 ||
            !Ld(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (i.options.refetchIntervalInBackground || pa.isFocused()) &&
                i.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (r.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (r.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (r.clearStaleTimeout = function () {
        this.staleTimeoutId &&
          (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (r.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (r.createResult = function (o, i) {
        var a = this.currentQuery,
          s = this.options,
          l = this.currentResult,
          u = this.currentResultState,
          f = this.currentResultOptions,
          d = o !== a,
          h = d ? o.state : this.currentQueryInitialState,
          p = d ? this.currentResult : this.previousQueryResult,
          m = o.state,
          v = m.dataUpdatedAt,
          k = m.error,
          y = m.errorUpdatedAt,
          g = m.isFetching,
          b = m.status,
          w = !1,
          S = !1,
          j;
        if (i.optimisticResults) {
          var E = this.hasListeners(),
            I = !E && y0(o, i),
            O = E && v0(o, a, i, s);
          (I || O) && ((g = !0), v || (b = "loading"));
        }
        if (
          i.keepPreviousData &&
          !m.dataUpdateCount &&
          p != null &&
          p.isSuccess &&
          b !== "error"
        )
          (j = p.data), (v = p.dataUpdatedAt), (b = p.status), (w = !0);
        else if (i.select && typeof m.data < "u")
          if (
            l &&
            m.data === (u == null ? void 0 : u.data) &&
            i.select === this.selectFn
          )
            j = this.selectResult;
          else
            try {
              (this.selectFn = i.select),
                (j = i.select(m.data)),
                i.structuralSharing !== !1 &&
                  (j = Cl(l == null ? void 0 : l.data, j)),
                (this.selectResult = j),
                (this.selectError = null);
            } catch (P) {
              Nl().error(P), (this.selectError = P);
            }
        else j = m.data;
        if (
          typeof i.placeholderData < "u" &&
          typeof j > "u" &&
          (b === "loading" || b === "idle")
        ) {
          var C;
          if (
            l != null &&
            l.isPlaceholderData &&
            i.placeholderData === (f == null ? void 0 : f.placeholderData)
          )
            C = l.data;
          else if (
            ((C =
              typeof i.placeholderData == "function"
                ? i.placeholderData()
                : i.placeholderData),
            i.select && typeof C < "u")
          )
            try {
              (C = i.select(C)),
                i.structuralSharing !== !1 &&
                  (C = Cl(l == null ? void 0 : l.data, C)),
                (this.selectError = null);
            } catch (P) {
              Nl().error(P), (this.selectError = P);
            }
          typeof C < "u" && ((b = "success"), (j = C), (S = !0));
        }
        this.selectError &&
          ((k = this.selectError),
          (j = this.selectResult),
          (y = Date.now()),
          (b = "error"));
        var D = {
          status: b,
          isLoading: b === "loading",
          isSuccess: b === "success",
          isError: b === "error",
          isIdle: b === "idle",
          data: j,
          dataUpdatedAt: v,
          error: k,
          errorUpdatedAt: y,
          failureCount: m.fetchFailureCount,
          errorUpdateCount: m.errorUpdateCount,
          isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
          isFetchedAfterMount:
            m.dataUpdateCount > h.dataUpdateCount ||
            m.errorUpdateCount > h.errorUpdateCount,
          isFetching: g,
          isRefetching: g && b !== "loading",
          isLoadingError: b === "error" && m.dataUpdatedAt === 0,
          isPlaceholderData: S,
          isPreviousData: w,
          isRefetchError: b === "error" && m.dataUpdatedAt !== 0,
          isStale: sh(o, i),
          refetch: this.refetch,
          remove: this.remove,
        };
        return D;
      }),
      (r.shouldNotifyListeners = function (o, i) {
        if (!i) return !0;
        var a = this.options,
          s = a.notifyOnChangeProps,
          l = a.notifyOnChangePropsExclusions;
        if ((!s && !l) || (s === "tracked" && !this.trackedProps.length))
          return !0;
        var u = s === "tracked" ? this.trackedProps : s;
        return Object.keys(o).some(function (f) {
          var d = f,
            h = o[d] !== i[d],
            p =
              u == null
                ? void 0
                : u.some(function (v) {
                    return v === f;
                  }),
            m =
              l == null
                ? void 0
                : l.some(function (v) {
                    return v === f;
                  });
          return h && !m && (!u || p);
        });
      }),
      (r.updateResult = function (o) {
        var i = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !Z2(this.currentResult, i))
        ) {
          var a = { cache: !0 };
          (o == null ? void 0 : o.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, i) &&
            (a.listeners = !0),
            this.notify(we({}, a, o));
        }
      }),
      (r.updateQuery = function () {
        var o = this.client.getQueryCache().build(this.client, this.options);
        if (o !== this.currentQuery) {
          var i = this.currentQuery;
          (this.currentQuery = o),
            (this.currentQueryInitialState = o.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (i == null || i.removeObserver(this), o.addObserver(this));
        }
      }),
      (r.onQueryUpdate = function (o) {
        var i = {};
        o.type === "success"
          ? (i.onSuccess = !0)
          : o.type === "error" && !Qs(o.error) && (i.onError = !0),
          this.updateResult(i),
          this.hasListeners() && this.updateTimers();
      }),
      (r.notify = function (o) {
        var i = this;
        et.batch(function () {
          o.onSuccess
            ? (i.options.onSuccess == null ||
                i.options.onSuccess(i.currentResult.data),
              i.options.onSettled == null ||
                i.options.onSettled(i.currentResult.data, null))
            : o.onError &&
              (i.options.onError == null ||
                i.options.onError(i.currentResult.error),
              i.options.onSettled == null ||
                i.options.onSettled(void 0, i.currentResult.error)),
            o.listeners &&
              i.listeners.forEach(function (a) {
                a(i.currentResult);
              }),
            o.cache &&
              i.client
                .getQueryCache()
                .notify({
                  query: i.currentQuery,
                  type: "observerResultsUpdated",
                });
        });
      }),
      t
    );
  })(Ri);
function gE(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function y0(e, t) {
  return gE(e, t) || (e.state.dataUpdatedAt > 0 && Id(e, t, t.refetchOnMount));
}
function Id(e, t, r) {
  if (t.enabled !== !1) {
    var n = typeof r == "function" ? r(e) : r;
    return n === "always" || (n !== !1 && sh(e, t));
  }
  return !1;
}
function v0(e, t, r, n) {
  return (
    r.enabled !== !1 &&
    (e !== t || n.enabled === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    sh(e, r)
  );
}
function sh(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var mE = (function (e) {
    Oi(t, e);
    function t(n, o) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.client = n),
        i.setOptions(o),
        i.bindMethods(),
        i.updateResult(),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.bindMethods = function () {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }),
      (r.setOptions = function (o) {
        this.options = this.client.defaultMutationOptions(o);
      }),
      (r.onUnsubscribe = function () {
        if (!this.listeners.length) {
          var o;
          (o = this.currentMutation) == null || o.removeObserver(this);
        }
      }),
      (r.onMutationUpdate = function (o) {
        this.updateResult();
        var i = { listeners: !0 };
        o.type === "success"
          ? (i.onSuccess = !0)
          : o.type === "error" && (i.onError = !0),
          this.notify(i);
      }),
      (r.getCurrentResult = function () {
        return this.currentResult;
      }),
      (r.reset = function () {
        (this.currentMutation = void 0),
          this.updateResult(),
          this.notify({ listeners: !0 });
      }),
      (r.mutate = function (o, i) {
        return (
          (this.mutateOptions = i),
          this.currentMutation && this.currentMutation.removeObserver(this),
          (this.currentMutation = this.client
            .getMutationCache()
            .build(
              this.client,
              we({}, this.options, {
                variables: typeof o < "u" ? o : this.options.variables,
              })
            )),
          this.currentMutation.addObserver(this),
          this.currentMutation.execute()
        );
      }),
      (r.updateResult = function () {
        var o = this.currentMutation ? this.currentMutation.state : uv(),
          i = we({}, o, {
            isLoading: o.status === "loading",
            isSuccess: o.status === "success",
            isError: o.status === "error",
            isIdle: o.status === "idle",
            mutate: this.mutate,
            reset: this.reset,
          });
        this.currentResult = i;
      }),
      (r.notify = function (o) {
        var i = this;
        et.batch(function () {
          i.mutateOptions &&
            (o.onSuccess
              ? (i.mutateOptions.onSuccess == null ||
                  i.mutateOptions.onSuccess(
                    i.currentResult.data,
                    i.currentResult.variables,
                    i.currentResult.context
                  ),
                i.mutateOptions.onSettled == null ||
                  i.mutateOptions.onSettled(
                    i.currentResult.data,
                    null,
                    i.currentResult.variables,
                    i.currentResult.context
                  ))
              : o.onError &&
                (i.mutateOptions.onError == null ||
                  i.mutateOptions.onError(
                    i.currentResult.error,
                    i.currentResult.variables,
                    i.currentResult.context
                  ),
                i.mutateOptions.onSettled == null ||
                  i.mutateOptions.onSettled(
                    void 0,
                    i.currentResult.error,
                    i.currentResult.variables,
                    i.currentResult.context
                  ))),
            o.listeners &&
              i.listeners.forEach(function (a) {
                a(i.currentResult);
              });
        });
      }),
      t
    );
  })(Ri),
  yE = Jf.unstable_batchedUpdates;
et.setBatchNotifyFunction(yE);
var vE = console;
iE(vE);
var b0 = V.createContext(void 0),
  cv = V.createContext(!1);
function dv(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = b0),
      window.ReactQueryClientContext)
    : b0;
}
var fv = function () {
    var t = V.useContext(dv(V.useContext(cv)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  bE = function (t) {
    var r = t.client,
      n = t.contextSharing,
      o = n === void 0 ? !1 : n,
      i = t.children;
    V.useEffect(
      function () {
        return (
          r.mount(),
          function () {
            r.unmount();
          }
        );
      },
      [r]
    );
    var a = dv(o);
    return V.createElement(
      cv.Provider,
      { value: o },
      V.createElement(a.Provider, { value: r }, i)
    );
  };
function xE() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var wE = V.createContext(xE()),
  kE = function () {
    return V.useContext(wE);
  };
function hv(e, t, r) {
  return typeof t == "function"
    ? t.apply(void 0, r)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function lh(e, t, r) {
  var n = V.useRef(!1),
    o = V.useState(0),
    i = o[1],
    a = G2(e, t, r),
    s = fv(),
    l = V.useRef();
  l.current ? l.current.setOptions(a) : (l.current = new mE(s, a));
  var u = l.current.getCurrentResult();
  V.useEffect(function () {
    n.current = !0;
    var d = l.current.subscribe(
      et.batchCalls(function () {
        n.current &&
          i(function (h) {
            return h + 1;
          });
      })
    );
    return function () {
      (n.current = !1), d();
    };
  }, []);
  var f = V.useCallback(function (d, h) {
    l.current.mutate(d, h).catch(_t);
  }, []);
  if (u.error && hv(void 0, l.current.options.useErrorBoundary, [u.error]))
    throw u.error;
  return we({}, u, { mutate: f, mutateAsync: u.mutate });
}
function SE(e, t) {
  var r = V.useRef(!1),
    n = V.useState(0),
    o = n[1],
    i = fv(),
    a = kE(),
    s = i.defaultQueryObserverOptions(e);
  (s.optimisticResults = !0),
    s.onError && (s.onError = et.batchCalls(s.onError)),
    s.onSuccess && (s.onSuccess = et.batchCalls(s.onSuccess)),
    s.onSettled && (s.onSettled = et.batchCalls(s.onSettled)),
    s.suspense &&
      (typeof s.staleTime != "number" && (s.staleTime = 1e3),
      s.cacheTime === 0 && (s.cacheTime = 1)),
    (s.suspense || s.useErrorBoundary) &&
      (a.isReset() || (s.retryOnMount = !1));
  var l = V.useState(function () {
      return new t(i, s);
    }),
    u = l[0],
    f = u.getOptimisticResult(s);
  if (
    (V.useEffect(
      function () {
        (r.current = !0), a.clearReset();
        var d = u.subscribe(
          et.batchCalls(function () {
            r.current &&
              o(function (h) {
                return h + 1;
              });
          })
        );
        return (
          u.updateResult(),
          function () {
            (r.current = !1), d();
          }
        );
      },
      [a, u]
    ),
    V.useEffect(
      function () {
        u.setOptions(s, { listeners: !1 });
      },
      [s, u]
    ),
    s.suspense && f.isLoading)
  )
    throw u
      .fetchOptimistic(s)
      .then(function (d) {
        var h = d.data;
        s.onSuccess == null || s.onSuccess(h),
          s.onSettled == null || s.onSettled(h, null);
      })
      .catch(function (d) {
        a.clearReset(),
          s.onError == null || s.onError(d),
          s.onSettled == null || s.onSettled(void 0, d);
      });
  if (
    f.isError &&
    !a.isReset() &&
    !f.isFetching &&
    hv(s.suspense, s.useErrorBoundary, [f.error, u.getCurrentQuery()])
  )
    throw f.error;
  return s.notifyOnChangeProps === "tracked" && (f = u.trackResult(f, s)), f;
}
function eo(e, t, r) {
  var n = Hs(e, t, r);
  return SE(n, pE);
}
function EE() {
  return (
    (document.title = "Talgtna | عنا"),
    c.jsx("div", {
      className: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
      children: c.jsxs("div", {
        className: "space-y-4",
        children: [
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            open: !0,
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "الهدف ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  "هدفنا هو إرضاء العملاء وتوفير لكم افضل المنتجات بارخص الاسعار",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "النشاط ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children: "بيع المنتجات المجمدات",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "رسالة للمستخدم ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  "نشكركم علي حسن تعاونكم معنا ونرجو ان نكون عند حسن ظنكم",
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "تنوع المنتجات ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'يوفر "تلاجتنا" تشكيلة واسعة من المجمدات بمختلف الأنواع والنكهات، مما يتيح للعملاء اختيار ما يفضلونه وفقًا لذوقهم الشخصي.',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "الجودة ؟ ",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'تهتم "تلاجتنا" بتقديم المنتجات ذات الجودة العالية، حيث يتم اختيار المكونات باهتمام واتباع معايير صارمة .',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "ملائمة للذوق الشخصي ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'ييوفر "تلاجتنا" تشكيله كبيره وواسعه ومختلفه من المنتجات ويخدم هذا الاختلاف العميل بحيث يجد كل عميل ما يناسب ذوقه الشخصي',
              }),
            ],
          }),
          c.jsxs("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            children: [
              c.jsxs("summary", {
                className:
                  "flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900",
                children: [
                  c.jsx("h2", {
                    className: "font-medium  text-primary",
                    children: "خدمة التوصيل ؟",
                  }),
                  c.jsx("svg", {
                    className:
                      "size-5 shrink-0 transition duration-300 group-open:-rotate-180",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              c.jsx("p", {
                className: "mt-4 px-4 leading-relaxed text-gray-700",
                children:
                  'يوفر "تلاجتنا" خدمة توصيل سريعة وموثوقة، مما يوفر الوقت والجهد للعملاء ويتيح لهم الاستمتاع بالمجمدات في أي وقت.',
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var pv = {},
  gv = {},
  vu = {},
  mv = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(mv);
var CE = "Expected a function",
  x0 = NaN,
  jE = "[object Symbol]",
  NE = /^\s+|\s+$/g,
  TE = /^[-+]0x[0-9a-f]+$/i,
  OE = /^0b[01]+$/i,
  RE = /^0o[0-7]+$/i,
  PE = parseInt,
  _E = typeof os == "object" && os && os.Object === Object && os,
  ME = typeof self == "object" && self && self.Object === Object && self,
  LE = _E || ME || Function("return this")(),
  DE = Object.prototype,
  IE = DE.toString,
  AE = Math.max,
  zE = Math.min,
  uc = function () {
    return LE.Date.now();
  };
function FE(e, t, r) {
  var n,
    o,
    i,
    a,
    s,
    l,
    u = 0,
    f = !1,
    d = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(CE);
  (t = w0(t) || 0),
    Ad(r) &&
      ((f = !!r.leading),
      (d = "maxWait" in r),
      (i = d ? AE(w0(r.maxWait) || 0, t) : i),
      (h = "trailing" in r ? !!r.trailing : h));
  function p(j) {
    var E = n,
      I = o;
    return (n = o = void 0), (u = j), (a = e.apply(I, E)), a;
  }
  function m(j) {
    return (u = j), (s = setTimeout(y, t)), f ? p(j) : a;
  }
  function v(j) {
    var E = j - l,
      I = j - u,
      O = t - E;
    return d ? zE(O, i - I) : O;
  }
  function k(j) {
    var E = j - l,
      I = j - u;
    return l === void 0 || E >= t || E < 0 || (d && I >= i);
  }
  function y() {
    var j = uc();
    if (k(j)) return g(j);
    s = setTimeout(y, v(j));
  }
  function g(j) {
    return (s = void 0), h && n ? p(j) : ((n = o = void 0), a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), (u = 0), (n = l = o = s = void 0);
  }
  function w() {
    return s === void 0 ? a : g(uc());
  }
  function S() {
    var j = uc(),
      E = k(j);
    if (((n = arguments), (o = this), (l = j), E)) {
      if (s === void 0) return m(l);
      if (d) return (s = setTimeout(y, t)), p(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), a;
  }
  return (S.cancel = b), (S.flush = w), S;
}
function Ad(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function $E(e) {
  return !!e && typeof e == "object";
}
function UE(e) {
  return typeof e == "symbol" || ($E(e) && IE.call(e) == jE);
}
function w0(e) {
  if (typeof e == "number") return e;
  if (UE(e)) return x0;
  if (Ad(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ad(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(NE, "");
  var r = OE.test(e);
  return r || RE.test(e) ? PE(e.slice(2), r ? 2 : 8) : TE.test(e) ? x0 : +e;
}
var BE = FE,
  yv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return r.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var a = "";
      for (var s in i) t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + " " + a : i + a) : i;
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(yv);
var Ga = yv.exports;
const HE = Si(Ga);
var Z = {},
  uh = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = r(x);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (i) {
      return t.default.createElement("ul", { style: { display: "block" } }, i);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (i) {
      return t.default.createElement("button", null, i + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = n;
})(uh);
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.checkSpecKeys =
  Z.checkNavigable =
  Z.changeSlide =
  Z.canUseDOM =
  Z.canGoNext =
    void 0;
Z.clamp = bv;
Z.extractObject = void 0;
Z.filterSettings = oC;
Z.validSettings =
  Z.swipeStart =
  Z.swipeMove =
  Z.swipeEnd =
  Z.slidesOnRight =
  Z.slidesOnLeft =
  Z.slideHandler =
  Z.siblingDirection =
  Z.safePreventDefault =
  Z.lazyStartIndex =
  Z.lazySlidesOnRight =
  Z.lazySlidesOnLeft =
  Z.lazyEndIndex =
  Z.keyHandler =
  Z.initializedState =
  Z.getWidth =
  Z.getTrackLeft =
  Z.getTrackCSS =
  Z.getTrackAnimateCSS =
  Z.getTotalSlides =
  Z.getSwipeDirection =
  Z.getSlideCount =
  Z.getRequiredLazySlides =
  Z.getPreClones =
  Z.getPostClones =
  Z.getOnDemandLazySlides =
  Z.getNavigableIndexes =
  Z.getHeight =
    void 0;
var WE = vv(x),
  QE = vv(uh);
function vv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Aa(e) {
  "@babel/helpers - typeof";
  return (
    (Aa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Aa(e)
  );
}
function k0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? k0(Object(r), !0).forEach(function (n) {
          VE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : k0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function VE(e, t, r) {
  return (
    (t = qE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qE(e) {
  var t = KE(e, "string");
  return Aa(t) == "symbol" ? t : String(t);
}
function KE(e, t) {
  if (Aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bv(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
var ni = (Z.safePreventDefault = function (t) {
    var r = ["onTouchStart", "onTouchMove", "onWheel"];
    r.includes(t._reactName) || t.preventDefault();
  }),
  xv = (Z.getOnDemandLazySlides = function (t) {
    for (var r = [], n = wv(t), o = kv(t), i = n; i < o; i++)
      t.lazyLoadedList.indexOf(i) < 0 && r.push(i);
    return r;
  });
Z.getRequiredLazySlides = function (t) {
  for (var r = [], n = wv(t), o = kv(t), i = n; i < o; i++) r.push(i);
  return r;
};
var wv = (Z.lazyStartIndex = function (t) {
    return t.currentSlide - YE(t);
  }),
  kv = (Z.lazyEndIndex = function (t) {
    return t.currentSlide + GE(t);
  }),
  YE = (Z.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  GE = (Z.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  zd = (Z.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  Sv = (Z.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  Ev = (Z.getSwipeDirection = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n,
      o,
      i,
      a;
    return (
      (n = t.startX - t.curX),
      (o = t.startY - t.curY),
      (i = Math.atan2(o, n)),
      (a = Math.round((i * 180) / Math.PI)),
      a < 0 && (a = 360 - Math.abs(a)),
      (a <= 45 && a >= 0) || (a <= 360 && a >= 315)
        ? "left"
        : a >= 135 && a <= 225
        ? "right"
        : r === !0
        ? a >= 35 && a <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  Cv = (Z.canGoNext = function (t) {
    var r = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (r = !1)),
      r
    );
  });
Z.extractObject = function (t, r) {
  var n = {};
  return (
    r.forEach(function (o) {
      return (n[o] = t[o]);
    }),
    n
  );
};
Z.initializedState = function (t) {
  var r = WE.default.Children.count(t.children),
    n = t.listRef,
    o = Math.ceil(zd(n)),
    i = t.trackRef && t.trackRef.node,
    a = Math.ceil(zd(i)),
    s;
  if (t.vertical) s = o;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (l *= o / 100),
      (s = Math.ceil((o - l) / t.slidesToShow));
  }
  var u = n && Sv(n.querySelector('[data-index="0"]')),
    f = u * t.slidesToShow,
    d = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (d = r - 1 - t.initialSlide);
  var h = t.lazyLoadedList || [],
    p = xv(Je(Je({}, t), {}, { currentSlide: d, lazyLoadedList: h }));
  h = h.concat(p);
  var m = {
    slideCount: r,
    slideWidth: s,
    listWidth: o,
    trackWidth: a,
    currentSlide: d,
    slideHeight: u,
    listHeight: f,
    lazyLoadedList: h,
  };
  return t.autoplaying === null && t.autoplay && (m.autoplaying = "playing"), m;
};
Z.slideHandler = function (t) {
  var r = t.waitForAnimate,
    n = t.animating,
    o = t.fade,
    i = t.infinite,
    a = t.index,
    s = t.slideCount,
    l = t.lazyLoad,
    u = t.currentSlide,
    f = t.centerMode,
    d = t.slidesToScroll,
    h = t.slidesToShow,
    p = t.useCSS,
    m = t.lazyLoadedList;
  if (r && n) return {};
  var v = a,
    k,
    y,
    g,
    b = {},
    w = {},
    S = i ? a : bv(a, 0, s - 1);
  if (o) {
    if (!i && (a < 0 || a >= s)) return {};
    a < 0 ? (v = a + s) : a >= s && (v = a - s),
      l && m.indexOf(v) < 0 && (m = m.concat(v)),
      (b = {
        animating: !0,
        currentSlide: v,
        lazyLoadedList: m,
        targetSlide: v,
      }),
      (w = { animating: !1, targetSlide: v });
  } else
    (k = v),
      v < 0
        ? ((k = v + s), i ? s % d !== 0 && (k = s - (s % d)) : (k = 0))
        : !Cv(t) && v > u
        ? (v = k = u)
        : f && v >= s
        ? ((v = i ? s : s - 1), (k = i ? 0 : s - 1))
        : v >= s && ((k = v - s), i ? s % d !== 0 && (k = 0) : (k = s - h)),
      !i && v + h >= s && (k = s - h),
      (y = Ol(Je(Je({}, t), {}, { slideIndex: v }))),
      (g = Ol(Je(Je({}, t), {}, { slideIndex: k }))),
      i || (y === g && (v = k), (y = g)),
      l && (m = m.concat(xv(Je(Je({}, t), {}, { currentSlide: v })))),
      p
        ? ((b = {
            animating: !0,
            currentSlide: k,
            trackStyle: jv(Je(Je({}, t), {}, { left: y })),
            lazyLoadedList: m,
            targetSlide: S,
          }),
          (w = {
            animating: !1,
            currentSlide: k,
            trackStyle: Tl(Je(Je({}, t), {}, { left: g })),
            swipeLeft: null,
            targetSlide: S,
          }))
        : (b = {
            currentSlide: k,
            trackStyle: Tl(Je(Je({}, t), {}, { left: g })),
            lazyLoadedList: m,
            targetSlide: S,
          });
  return { state: b, nextState: w };
};
Z.changeSlide = function (t, r) {
  var n,
    o,
    i,
    a,
    s,
    l = t.slidesToScroll,
    u = t.slidesToShow,
    f = t.slideCount,
    d = t.currentSlide,
    h = t.targetSlide,
    p = t.lazyLoad,
    m = t.infinite;
  if (((a = f % l !== 0), (n = a ? 0 : (f - d) % l), r.message === "previous"))
    (i = n === 0 ? l : u - n),
      (s = d - i),
      p && !m && ((o = d - i), (s = o === -1 ? f - 1 : o)),
      m || (s = h - l);
  else if (r.message === "next")
    (i = n === 0 ? l : n),
      (s = d + i),
      p && !m && (s = ((d + l) % f) + n),
      m || (s = h + l);
  else if (r.message === "dots") s = r.index * r.slidesToScroll;
  else if (r.message === "children") {
    if (((s = r.index), m)) {
      var v = eC(Je(Je({}, t), {}, { targetSlide: s }));
      s > r.currentSlide && v === "left"
        ? (s = s - f)
        : s < r.currentSlide && v === "right" && (s = s + f);
    }
  } else r.message === "index" && (s = Number(r.index));
  return s;
};
Z.keyHandler = function (t, r, n) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !r
    ? ""
    : t.keyCode === 37
    ? n
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? n
      ? "previous"
      : "next"
    : "";
};
Z.swipeStart = function (t, r, n) {
  return (
    t.target.tagName === "IMG" && ni(t),
    !r || (!n && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
Z.swipeMove = function (t, r) {
  var n = r.scrolling,
    o = r.animating,
    i = r.vertical,
    a = r.swipeToSlide,
    s = r.verticalSwiping,
    l = r.rtl,
    u = r.currentSlide,
    f = r.edgeFriction,
    d = r.edgeDragged,
    h = r.onEdge,
    p = r.swiped,
    m = r.swiping,
    v = r.slideCount,
    k = r.slidesToScroll,
    y = r.infinite,
    g = r.touchObject,
    b = r.swipeEvent,
    w = r.listHeight,
    S = r.listWidth;
  if (!n) {
    if (o) return ni(t);
    i && a && s && ni(t);
    var j,
      E = {},
      I = Ol(r);
    (g.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (g.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (g.swipeLength = Math.round(Math.sqrt(Math.pow(g.curX - g.startX, 2))));
    var O = Math.round(Math.sqrt(Math.pow(g.curY - g.startY, 2)));
    if (!s && !m && O > 10) return { scrolling: !0 };
    s && (g.swipeLength = O);
    var C = (l ? -1 : 1) * (g.curX > g.startX ? 1 : -1);
    s && (C = g.curY > g.startY ? 1 : -1);
    var D = Math.ceil(v / k),
      P = Ev(r.touchObject, s),
      _ = g.swipeLength;
    return (
      y ||
        (((u === 0 && (P === "right" || P === "down")) ||
          (u + 1 >= D && (P === "left" || P === "up")) ||
          (!Cv(r) && (P === "left" || P === "up"))) &&
          ((_ = g.swipeLength * f),
          d === !1 && h && (h(P), (E.edgeDragged = !0)))),
      !p && b && (b(P), (E.swiped = !0)),
      i ? (j = I + _ * (w / S) * C) : l ? (j = I - _ * C) : (j = I + _ * C),
      s && (j = I + _ * C),
      (E = Je(
        Je({}, E),
        {},
        {
          touchObject: g,
          swipeLeft: j,
          trackStyle: Tl(Je(Je({}, r), {}, { left: j })),
        }
      )),
      Math.abs(g.curX - g.startX) < Math.abs(g.curY - g.startY) * 0.8 ||
        (g.swipeLength > 10 && ((E.swiping = !0), ni(t))),
      E
    );
  }
};
Z.swipeEnd = function (t, r) {
  var n = r.dragging,
    o = r.swipe,
    i = r.touchObject,
    a = r.listWidth,
    s = r.touchThreshold,
    l = r.verticalSwiping,
    u = r.listHeight,
    f = r.swipeToSlide,
    d = r.scrolling,
    h = r.onSwipe,
    p = r.targetSlide,
    m = r.currentSlide,
    v = r.infinite;
  if (!n) return o && ni(t), {};
  var k = l ? u / s : a / s,
    y = Ev(i, l),
    g = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (d || !i.swipeLength) return g;
  if (i.swipeLength > k) {
    ni(t), h && h(y);
    var b,
      w,
      S = v ? m : p;
    switch (y) {
      case "left":
      case "up":
        (w = S + E0(r)), (b = f ? S0(r, w) : w), (g.currentDirection = 0);
        break;
      case "right":
      case "down":
        (w = S - E0(r)), (b = f ? S0(r, w) : w), (g.currentDirection = 1);
        break;
      default:
        b = S;
    }
    g.triggerSlideHandler = b;
  } else {
    var j = Ol(r);
    g.trackStyle = jv(Je(Je({}, r), {}, { left: j }));
  }
  return g;
};
var XE = (Z.getNavigableIndexes = function (t) {
    for (
      var r = t.infinite ? t.slideCount * 2 : t.slideCount,
        n = t.infinite ? t.slidesToShow * -1 : 0,
        o = t.infinite ? t.slidesToShow * -1 : 0,
        i = [];
      n < r;

    )
      i.push(n),
        (n = o + t.slidesToScroll),
        (o += Math.min(t.slidesToScroll, t.slidesToShow));
    return i;
  }),
  S0 = (Z.checkNavigable = function (t, r) {
    var n = XE(t),
      o = 0;
    if (r > n[n.length - 1]) r = n[n.length - 1];
    else
      for (var i in n) {
        if (r < n[i]) {
          r = o;
          break;
        }
        o = n[i];
      }
    return r;
  }),
  E0 = (Z.getSlideCount = function (t) {
    var r = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var n,
        o = t.listRef,
        i = (o.querySelectorAll && o.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(i).every(function (l) {
          if (t.vertical) {
            if (l.offsetTop + Sv(l) / 2 > t.swipeLeft * -1) return (n = l), !1;
          } else if (l.offsetLeft - r + zd(l) / 2 > t.swipeLeft * -1) return (n = l), !1;
          return !0;
        }),
        !n)
      )
        return 0;
      var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        s = Math.abs(n.dataset.index - a) || 1;
      return s;
    } else return t.slidesToScroll;
  }),
  ch = (Z.checkSpecKeys = function (t, r) {
    return r.reduce(function (n, o) {
      return n && t.hasOwnProperty(o);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  Tl = (Z.getTrackCSS = function (t) {
    ch(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var r,
      n,
      o = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (n = o * t.slideHeight) : (r = ZE(t) * t.slideWidth);
    var i = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        s = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      i = Je(
        Je({}, i),
        {},
        { WebkitTransform: a, transform: s, msTransform: l }
      );
    } else t.vertical ? (i.top = t.left) : (i.left = t.left);
    return (
      t.fade && (i = { opacity: 1 }),
      r && (i.width = r),
      n && (i.height = n),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (i.marginTop = t.left + "px")
          : (i.marginLeft = t.left + "px")),
      i
    );
  }),
  jv = (Z.getTrackAnimateCSS = function (t) {
    ch(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var r = Tl(t);
    return (
      t.useTransform
        ? ((r.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (r.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (r.transition = "top " + t.speed + "ms " + t.cssEase)
        : (r.transition = "left " + t.speed + "ms " + t.cssEase),
      r
    );
  }),
  Ol = (Z.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    ch(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var r = t.slideIndex,
      n = t.trackRef,
      o = t.infinite,
      i = t.centerMode,
      a = t.slideCount,
      s = t.slidesToShow,
      l = t.slidesToScroll,
      u = t.slideWidth,
      f = t.listWidth,
      d = t.variableWidth,
      h = t.slideHeight,
      p = t.fade,
      m = t.vertical,
      v = 0,
      k,
      y,
      g = 0;
    if (p || t.slideCount === 1) return 0;
    var b = 0;
    if (
      (o
        ? ((b = -Vs(t)),
          a % l !== 0 && r + l > a && (b = -(r > a ? s - (r - a) : a % l)),
          i && (b += parseInt(s / 2)))
        : (a % l !== 0 && r + l > a && (b = s - (a % l)),
          i && (b = parseInt(s / 2))),
      (v = b * u),
      (g = b * h),
      m ? (k = r * h * -1 + g) : (k = r * u * -1 + v),
      d === !0)
    ) {
      var w,
        S = n && n.node;
      if (
        ((w = r + Vs(t)),
        (y = S && S.childNodes[w]),
        (k = y ? y.offsetLeft * -1 : 0),
        i === !0)
      ) {
        (w = o ? r + Vs(t) : r), (y = S && S.children[w]), (k = 0);
        for (var j = 0; j < w; j++)
          k -= S && S.children[j] && S.children[j].offsetWidth;
        (k -= parseInt(t.centerPadding)), (k += y && (f - y.offsetWidth) / 2);
      }
    }
    return k;
  }),
  Vs = (Z.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  JE = (Z.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  ZE = (Z.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : Vs(t) + t.slideCount + JE(t);
  }),
  eC = (Z.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + tC(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - rC(t)
      ? "right"
      : "left";
  }),
  tC = (Z.slidesOnRight = function (t) {
    var r = t.slidesToShow,
      n = t.centerMode,
      o = t.rtl,
      i = t.centerPadding;
    if (n) {
      var a = (r - 1) / 2 + 1;
      return parseInt(i) > 0 && (a += 1), o && r % 2 === 0 && (a += 1), a;
    }
    return o ? 0 : r - 1;
  }),
  rC = (Z.slidesOnLeft = function (t) {
    var r = t.slidesToShow,
      n = t.centerMode,
      o = t.rtl,
      i = t.centerPadding;
    if (n) {
      var a = (r - 1) / 2 + 1;
      return parseInt(i) > 0 && (a += 1), !o && r % 2 === 0 && (a += 1), a;
    }
    return o ? r - 1 : 0;
  });
Z.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var nC = (Z.validSettings = Object.keys(QE.default));
function oC(e) {
  return nC.reduce(function (t, r) {
    return e.hasOwnProperty(r) && (t[r] = e[r]), t;
  }, {});
}
var bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
bu.Track = void 0;
var Pn = Nv(x),
  cc = Nv(Ga),
  dc = Z;
function Nv(e) {
  return e && e.__esModule ? e : { default: e };
}
function pi(e) {
  "@babel/helpers - typeof";
  return (
    (pi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pi(e)
  );
}
function Fd() {
  return (
    (Fd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fd.apply(this, arguments)
  );
}
function iC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ov(n.key), n);
  }
}
function sC(e, t, r) {
  return (
    t && aC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function lC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $d(e, t);
}
function $d(e, t) {
  return (
    ($d = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    $d(e, t)
  );
}
function uC(e) {
  var t = Tv();
  return function () {
    var n = Rl(e),
      o;
    if (t) {
      var i = Rl(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return cC(this, o);
  };
}
function cC(e, t) {
  if (t && (pi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ud(e);
}
function Ud(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Tv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (Tv = function () {
    return !!e;
  })();
}
function Rl(e) {
  return (
    (Rl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Rl(e)
  );
}
function C0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? C0(Object(r), !0).forEach(function (n) {
          Bd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : C0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Bd(e, t, r) {
  return (
    (t = Ov(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ov(e) {
  var t = dC(e, "string");
  return pi(t) == "symbol" ? t : String(t);
}
function dC(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fc = function (t) {
    var r, n, o, i, a;
    t.rtl ? (a = t.slideCount - 1 - t.index) : (a = t.index),
      (o = a < 0 || a >= t.slideCount),
      t.centerMode
        ? ((i = Math.floor(t.slidesToShow / 2)),
          (n = (a - t.currentSlide) % t.slideCount === 0),
          a > t.currentSlide - i - 1 && a <= t.currentSlide + i && (r = !0))
        : (r = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow);
    var s;
    t.targetSlide < 0
      ? (s = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (s = t.targetSlide - t.slideCount)
      : (s = t.targetSlide);
    var l = a === s;
    return {
      "slick-slide": !0,
      "slick-active": r,
      "slick-center": n,
      "slick-cloned": o,
      "slick-current": l,
    };
  },
  fC = function (t) {
    var r = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (r.width = t.slideWidth),
      t.fade &&
        ((r.position = "relative"),
        t.vertical
          ? (r.top = -t.index * parseInt(t.slideHeight))
          : (r.left = -t.index * parseInt(t.slideWidth)),
        (r.opacity = t.currentSlide === t.index ? 1 : 0),
        (r.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (r.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      r
    );
  },
  hc = function (t, r) {
    return t.key || r;
  },
  hC = function (t) {
    var r,
      n = [],
      o = [],
      i = [],
      a = Pn.default.Children.count(t.children),
      s = (0, dc.lazyStartIndex)(t),
      l = (0, dc.lazyEndIndex)(t);
    return (
      Pn.default.Children.forEach(t.children, function (u, f) {
        var d,
          h = {
            message: "children",
            index: f,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(f) >= 0)
          ? (d = u)
          : (d = Pn.default.createElement("div", null));
        var p = fC(or(or({}, t), {}, { index: f })),
          m = d.props.className || "",
          v = fc(or(or({}, t), {}, { index: f }));
        if (
          (n.push(
            Pn.default.cloneElement(d, {
              key: "original" + hc(d, f),
              "data-index": f,
              className: (0, cc.default)(v, m),
              tabIndex: "-1",
              "aria-hidden": !v["slick-active"],
              style: or(or({ outline: "none" }, d.props.style || {}), p),
              onClick: function (g) {
                d.props && d.props.onClick && d.props.onClick(g),
                  t.focusOnSelect && t.focusOnSelect(h);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var k = a - f;
          k <= (0, dc.getPreClones)(t) &&
            ((r = -k),
            r >= s && (d = u),
            (v = fc(or(or({}, t), {}, { index: r }))),
            o.push(
              Pn.default.cloneElement(d, {
                key: "precloned" + hc(d, r),
                "data-index": r,
                tabIndex: "-1",
                className: (0, cc.default)(v, m),
                "aria-hidden": !v["slick-active"],
                style: or(or({}, d.props.style || {}), p),
                onClick: function (g) {
                  d.props && d.props.onClick && d.props.onClick(g),
                    t.focusOnSelect && t.focusOnSelect(h);
                },
              })
            )),
            (r = a + f),
            r < l && (d = u),
            (v = fc(or(or({}, t), {}, { index: r }))),
            i.push(
              Pn.default.cloneElement(d, {
                key: "postcloned" + hc(d, r),
                "data-index": r,
                tabIndex: "-1",
                className: (0, cc.default)(v, m),
                "aria-hidden": !v["slick-active"],
                style: or(or({}, d.props.style || {}), p),
                onClick: function (g) {
                  d.props && d.props.onClick && d.props.onClick(g),
                    t.focusOnSelect && t.focusOnSelect(h);
                },
              })
            );
        }
      }),
      t.rtl ? o.concat(n, i).reverse() : o.concat(n, i)
    );
  };
bu.Track = (function (e) {
  lC(r, e);
  var t = uC(r);
  function r() {
    var n;
    iC(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (n = t.call.apply(t, [this].concat(i))),
      Bd(Ud(n), "node", null),
      Bd(Ud(n), "handleRef", function (s) {
        n.node = s;
      }),
      n
    );
  }
  return (
    sC(r, [
      {
        key: "render",
        value: function () {
          var o = hC(this.props),
            i = this.props,
            a = i.onMouseEnter,
            s = i.onMouseOver,
            l = i.onMouseLeave,
            u = { onMouseEnter: a, onMouseOver: s, onMouseLeave: l };
          return Pn.default.createElement(
            "div",
            Fd(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              u
            ),
            o
          );
        },
      },
    ]),
    r
  );
})(Pn.default.PureComponent);
var xu = {};
function gi(e) {
  "@babel/helpers - typeof";
  return (
    (gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gi(e)
  );
}
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.Dots = void 0;
var ks = Rv(x),
  pC = Rv(Ga),
  j0 = Z;
function Rv(e) {
  return e && e.__esModule ? e : { default: e };
}
function N0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? N0(Object(r), !0).forEach(function (n) {
          mC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : N0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function mC(e, t, r) {
  return (
    (t = Pv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function yC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Pv(n.key), n);
  }
}
function bC(e, t, r) {
  return (
    t && vC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Pv(e) {
  var t = xC(e, "string");
  return gi(t) == "symbol" ? t : String(t);
}
function xC(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Hd(e, t);
}
function Hd(e, t) {
  return (
    (Hd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Hd(e, t)
  );
}
function kC(e) {
  var t = _v();
  return function () {
    var n = Pl(e),
      o;
    if (t) {
      var i = Pl(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return SC(this, o);
  };
}
function SC(e, t) {
  if (t && (gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return EC(e);
}
function EC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _v() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_v = function () {
    return !!e;
  })();
}
function Pl(e) {
  return (
    (Pl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Pl(e)
  );
}
var CC = function (t) {
  var r;
  return (
    t.infinite
      ? (r = Math.ceil(t.slideCount / t.slidesToScroll))
      : (r = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    r
  );
};
xu.Dots = (function (e) {
  wC(r, e);
  var t = kC(r);
  function r() {
    return yC(this, r), t.apply(this, arguments);
  }
  return (
    bC(r, [
      {
        key: "clickHandler",
        value: function (o, i) {
          i.preventDefault(), this.props.clickHandler(o);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var o = this.props,
              i = o.onMouseEnter,
              a = o.onMouseOver,
              s = o.onMouseLeave,
              l = o.infinite,
              u = o.slidesToScroll,
              f = o.slidesToShow,
              d = o.slideCount,
              h = o.currentSlide,
              p = CC({
                slideCount: d,
                slidesToScroll: u,
                slidesToShow: f,
                infinite: l,
              }),
              m = { onMouseEnter: i, onMouseOver: a, onMouseLeave: s },
              v = [],
              k = 0;
            k < p;
            k++
          ) {
            var y = (k + 1) * u - 1,
              g = l ? y : (0, j0.clamp)(y, 0, d - 1),
              b = g - (u - 1),
              w = l ? b : (0, j0.clamp)(b, 0, d - 1),
              S = (0, pC.default)({
                "slick-active": l ? h >= w && h <= g : h === w,
              }),
              j = {
                message: "dots",
                index: k,
                slidesToScroll: u,
                currentSlide: h,
              },
              E = this.clickHandler.bind(this, j);
            v = v.concat(
              ks.default.createElement(
                "li",
                { key: k, className: S },
                ks.default.cloneElement(this.props.customPaging(k), {
                  onClick: E,
                })
              )
            );
          }
          return ks.default.cloneElement(
            this.props.appendDots(v),
            gC({ className: this.props.dotsClass }, m)
          );
        },
      },
    ]),
    r
  );
})(ks.default.PureComponent);
var mi = {};
function yi(e) {
  "@babel/helpers - typeof";
  return (
    (yi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yi(e)
  );
}
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.PrevArrow = mi.NextArrow = void 0;
var oi = Lv(x),
  Mv = Lv(Ga),
  jC = Z;
function Lv(e) {
  return e && e.__esModule ? e : { default: e };
}
function _l() {
  return (
    (_l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _l.apply(this, arguments)
  );
}
function T0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T0(Object(r), !0).forEach(function (n) {
          NC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : T0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function NC(e, t, r) {
  return (
    (t = Av(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Av(n.key), n);
  }
}
function Iv(e, t, r) {
  return (
    t && TC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Av(e) {
  var t = OC(e, "string");
  return yi(t) == "symbol" ? t : String(t);
}
function OC(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wd(e, t);
}
function Wd(e, t) {
  return (
    (Wd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Wd(e, t)
  );
}
function Fv(e) {
  var t = $v();
  return function () {
    var n = Ll(e),
      o;
    if (t) {
      var i = Ll(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return RC(this, o);
  };
}
function RC(e, t) {
  if (t && (yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return PC(e);
}
function PC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function $v() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return ($v = function () {
    return !!e;
  })();
}
function Ll(e) {
  return (
    (Ll = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ll(e)
  );
}
mi.PrevArrow = (function (e) {
  zv(r, e);
  var t = Fv(r);
  function r() {
    return Dv(this, r), t.apply(this, arguments);
  }
  return (
    Iv(r, [
      {
        key: "clickHandler",
        value: function (o, i) {
          i && i.preventDefault(), this.props.clickHandler(o, i);
        },
      },
      {
        key: "render",
        value: function () {
          var o = { "slick-arrow": !0, "slick-prev": !0 },
            i = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((o["slick-disabled"] = !0), (i = null));
          var a = {
              key: "0",
              "data-role": "none",
              className: (0, Mv.default)(o),
              style: { display: "block" },
              onClick: i,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.prevArrow
              ? (l = oi.default.cloneElement(
                  this.props.prevArrow,
                  Ml(Ml({}, a), s)
                ))
              : (l = oi.default.createElement(
                  "button",
                  _l({ key: "0", type: "button" }, a),
                  " ",
                  "Previous"
                )),
            l
          );
        },
      },
    ]),
    r
  );
})(oi.default.PureComponent);
mi.NextArrow = (function (e) {
  zv(r, e);
  var t = Fv(r);
  function r() {
    return Dv(this, r), t.apply(this, arguments);
  }
  return (
    Iv(r, [
      {
        key: "clickHandler",
        value: function (o, i) {
          i && i.preventDefault(), this.props.clickHandler(o, i);
        },
      },
      {
        key: "render",
        value: function () {
          var o = { "slick-arrow": !0, "slick-next": !0 },
            i = this.clickHandler.bind(this, { message: "next" });
          (0, jC.canGoNext)(this.props) ||
            ((o["slick-disabled"] = !0), (i = null));
          var a = {
              key: "1",
              "data-role": "none",
              className: (0, Mv.default)(o),
              style: { display: "block" },
              onClick: i,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.nextArrow
              ? (l = oi.default.cloneElement(
                  this.props.nextArrow,
                  Ml(Ml({}, a), s)
                ))
              : (l = oi.default.createElement(
                  "button",
                  _l({ key: "1", type: "button" }, a),
                  " ",
                  "Next"
                )),
            l
          );
        },
      },
    ]),
    r
  );
})(oi.default.PureComponent);
var Uv = (function () {
    if (typeof Map < "u") return Map;
    function e(t, r) {
      var n = -1;
      return (
        t.some(function (o, i) {
          return o[0] === r ? ((n = i), !0) : !1;
        }),
        n
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (r) {
          var n = e(this.__entries__, r),
            o = this.__entries__[n];
          return o && o[1];
        }),
        (t.prototype.set = function (r, n) {
          var o = e(this.__entries__, r);
          ~o ? (this.__entries__[o][1] = n) : this.__entries__.push([r, n]);
        }),
        (t.prototype.delete = function (r) {
          var n = this.__entries__,
            o = e(n, r);
          ~o && n.splice(o, 1);
        }),
        (t.prototype.has = function (r) {
          return !!~e(this.__entries__, r);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (r, n) {
          n === void 0 && (n = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            r.call(n, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  Qd =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Dl = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  _C = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Dl)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  MC = 2;
function LC(e, t) {
  var r = !1,
    n = !1,
    o = 0;
  function i() {
    r && ((r = !1), e()), n && s();
  }
  function a() {
    _C(i);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - o < MC) return;
      n = !0;
    } else (r = !0), (n = !1), setTimeout(a, t);
    o = l;
  }
  return s;
}
var DC = 20,
  IC = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  AC = typeof MutationObserver < "u",
  zC = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = LC(this.refresh.bind(this), DC));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var r = this.observers_,
          n = r.indexOf(t);
        ~n && r.splice(n, 1),
          !r.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (r) {
          return r.gatherActive(), r.hasActive();
        });
        return (
          t.forEach(function (r) {
            return r.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Qd ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          AC
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Qd ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var r = t.propertyName,
          n = r === void 0 ? "" : r,
          o = IC.some(function (i) {
            return !!~n.indexOf(i);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Bv = function (e, t) {
    for (var r = 0, n = Object.keys(t); r < n.length; r++) {
      var o = n[r];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  vi = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Dl;
  },
  Hv = wu(0, 0, 0, 0);
function Il(e) {
  return parseFloat(e) || 0;
}
function O0(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return t.reduce(function (n, o) {
    var i = e["border-" + o + "-width"];
    return n + Il(i);
  }, 0);
}
function FC(e) {
  for (
    var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t;
    n < o.length;
    n++
  ) {
    var i = o[n],
      a = e["padding-" + i];
    r[i] = Il(a);
  }
  return r;
}
function $C(e) {
  var t = e.getBBox();
  return wu(0, 0, t.width, t.height);
}
function UC(e) {
  var t = e.clientWidth,
    r = e.clientHeight;
  if (!t && !r) return Hv;
  var n = vi(e).getComputedStyle(e),
    o = FC(n),
    i = o.left + o.right,
    a = o.top + o.bottom,
    s = Il(n.width),
    l = Il(n.height);
  if (
    (n.boxSizing === "border-box" &&
      (Math.round(s + i) !== t && (s -= O0(n, "left", "right") + i),
      Math.round(l + a) !== r && (l -= O0(n, "top", "bottom") + a)),
    !HC(e))
  ) {
    var u = Math.round(s + i) - t,
      f = Math.round(l + a) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(f) !== 1 && (l -= f);
  }
  return wu(o.left, o.top, s, l);
}
var BC = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof vi(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof vi(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function HC(e) {
  return e === vi(e).document.documentElement;
}
function WC(e) {
  return Qd ? (BC(e) ? $C(e) : UC(e)) : Hv;
}
function QC(e) {
  var t = e.x,
    r = e.y,
    n = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    Bv(a, {
      x: t,
      y: r,
      width: n,
      height: o,
      top: r,
      right: t + n,
      bottom: o + r,
      left: t,
    }),
    a
  );
}
function wu(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var VC = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = wu(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = WC(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  qC = (function () {
    function e(t, r) {
      var n = QC(r);
      Bv(this, { target: t, contentRect: n });
    }
    return e;
  })(),
  KC = (function () {
    function e(t, r, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Uv()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = r), (this.callbackCtx_ = n);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof vi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var r = this.observations_;
          r.has(t) ||
            (r.set(t, new VC(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof vi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var r = this.observations_;
          r.has(t) &&
            (r.delete(t), r.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (r) {
            r.isActive() && t.activeObservations_.push(r);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            r = this.activeObservations_.map(function (n) {
              return new qC(n.target, n.broadcastRect());
            });
          this.callback_.call(t, r, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Wv = typeof WeakMap < "u" ? new WeakMap() : new Uv(),
  Qv = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = zC.getInstance(),
        n = new KC(t, r, this);
      Wv.set(this, n);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  Qv.prototype[e] = function () {
    var t;
    return (t = Wv.get(this))[e].apply(t, arguments);
  };
});
var YC = (function () {
  return typeof Dl.ResizeObserver < "u" ? Dl.ResizeObserver : Qv;
})();
const GC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: YC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  XC = Ww(GC);
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.InnerSlider = void 0;
var Xt = Xa(x),
  JC = Xa(mv),
  ZC = Xa(BE),
  ej = Xa(Ga),
  ot = Z,
  tj = bu,
  rj = xu,
  R0 = mi,
  nj = Xa(XC);
function Xa(e) {
  return e && e.__esModule ? e : { default: e };
}
function Eo(e) {
  "@babel/helpers - typeof";
  return (
    (Eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Eo(e)
  );
}
function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Al.apply(this, arguments)
  );
}
function oj(e, t) {
  if (e == null) return {};
  var r = ij(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function ij(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function P0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? P0(Object(r), !0).forEach(function (n) {
          Ee(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : P0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function aj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, qv(n.key), n);
  }
}
function lj(e, t, r) {
  return (
    t && sj(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function uj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Vd(e, t);
}
function Vd(e, t) {
  return (
    (Vd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Vd(e, t)
  );
}
function cj(e) {
  var t = Vv();
  return function () {
    var n = zl(e),
      o;
    if (t) {
      var i = zl(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return dj(this, o);
  };
}
function dj(e, t) {
  if (t && (Eo(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Se(e);
}
function Se(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Vv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (Vv = function () {
    return !!e;
  })();
}
function zl(e) {
  return (
    (zl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    zl(e)
  );
}
function Ee(e, t, r) {
  return (
    (t = qv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qv(e) {
  var t = fj(e, "string");
  return Eo(t) == "symbol" ? t : String(t);
}
function fj(e, t) {
  if (Eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
vu.InnerSlider = (function (e) {
  uj(r, e);
  var t = cj(r);
  function r(n) {
    var o;
    aj(this, r),
      (o = t.call(this, n)),
      Ee(Se(o), "listRefHandler", function (a) {
        return (o.list = a);
      }),
      Ee(Se(o), "trackRefHandler", function (a) {
        return (o.track = a);
      }),
      Ee(Se(o), "adaptHeight", function () {
        if (o.props.adaptiveHeight && o.list) {
          var a = o.list.querySelector(
            '[data-index="'.concat(o.state.currentSlide, '"]')
          );
          o.list.style.height = (0, ot.getHeight)(a) + "px";
        }
      }),
      Ee(Se(o), "componentDidMount", function () {
        if ((o.props.onInit && o.props.onInit(), o.props.lazyLoad)) {
          var a = (0, ot.getOnDemandLazySlides)(de(de({}, o.props), o.state));
          a.length > 0 &&
            (o.setState(function (l) {
              return { lazyLoadedList: l.lazyLoadedList.concat(a) };
            }),
            o.props.onLazyLoad && o.props.onLazyLoad(a));
        }
        var s = de({ listRef: o.list, trackRef: o.track }, o.props);
        o.updateState(s, !0, function () {
          o.adaptHeight(), o.props.autoplay && o.autoPlay("update");
        }),
          o.props.lazyLoad === "progressive" &&
            (o.lazyLoadTimer = setInterval(o.progressiveLazyLoad, 1e3)),
          (o.ro = new nj.default(function () {
            o.state.animating
              ? (o.onWindowResized(!1),
                o.callbackTimers.push(
                  setTimeout(function () {
                    return o.onWindowResized();
                  }, o.props.speed)
                ))
              : o.onWindowResized();
          })),
          o.ro.observe(o.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (l) {
                (l.onfocus = o.props.pauseOnFocus ? o.onSlideFocus : null),
                  (l.onblur = o.props.pauseOnFocus ? o.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", o.onWindowResized)
            : window.attachEvent("onresize", o.onWindowResized);
      }),
      Ee(Se(o), "componentWillUnmount", function () {
        o.animationEndCallback && clearTimeout(o.animationEndCallback),
          o.lazyLoadTimer && clearInterval(o.lazyLoadTimer),
          o.callbackTimers.length &&
            (o.callbackTimers.forEach(function (a) {
              return clearTimeout(a);
            }),
            (o.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", o.onWindowResized)
            : window.detachEvent("onresize", o.onWindowResized),
          o.autoplayTimer && clearInterval(o.autoplayTimer),
          o.ro.disconnect();
      }),
      Ee(Se(o), "componentDidUpdate", function (a) {
        if (
          (o.checkImagesLoad(),
          o.props.onReInit && o.props.onReInit(),
          o.props.lazyLoad)
        ) {
          var s = (0, ot.getOnDemandLazySlides)(de(de({}, o.props), o.state));
          s.length > 0 &&
            (o.setState(function (f) {
              return { lazyLoadedList: f.lazyLoadedList.concat(s) };
            }),
            o.props.onLazyLoad && o.props.onLazyLoad(s));
        }
        o.adaptHeight();
        var l = de(
            de({ listRef: o.list, trackRef: o.track }, o.props),
            o.state
          ),
          u = o.didPropsChange(a);
        u &&
          o.updateState(l, u, function () {
            o.state.currentSlide >=
              Xt.default.Children.count(o.props.children) &&
              o.changeSlide({
                message: "index",
                index:
                  Xt.default.Children.count(o.props.children) -
                  o.props.slidesToShow,
                currentSlide: o.state.currentSlide,
              }),
              o.props.autoplay ? o.autoPlay("update") : o.pause("paused");
          });
      }),
      Ee(Se(o), "onWindowResized", function (a) {
        o.debouncedResize && o.debouncedResize.cancel(),
          (o.debouncedResize = (0, ZC.default)(function () {
            return o.resizeWindow(a);
          }, 50)),
          o.debouncedResize();
      }),
      Ee(Se(o), "resizeWindow", function () {
        var a =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          s = !!(o.track && o.track.node);
        if (s) {
          var l = de(
            de({ listRef: o.list, trackRef: o.track }, o.props),
            o.state
          );
          o.updateState(l, a, function () {
            o.props.autoplay ? o.autoPlay("update") : o.pause("paused");
          }),
            o.setState({ animating: !1 }),
            clearTimeout(o.animationEndCallback),
            delete o.animationEndCallback;
        }
      }),
      Ee(Se(o), "updateState", function (a, s, l) {
        var u = (0, ot.initializedState)(a);
        a = de(de(de({}, a), u), {}, { slideIndex: u.currentSlide });
        var f = (0, ot.getTrackLeft)(a);
        a = de(de({}, a), {}, { left: f });
        var d = (0, ot.getTrackCSS)(a);
        (s ||
          Xt.default.Children.count(o.props.children) !==
            Xt.default.Children.count(a.children)) &&
          (u.trackStyle = d),
          o.setState(u, l);
      }),
      Ee(Se(o), "ssrInit", function () {
        if (o.props.variableWidth) {
          var a = 0,
            s = 0,
            l = [],
            u = (0, ot.getPreClones)(
              de(
                de(de({}, o.props), o.state),
                {},
                { slideCount: o.props.children.length }
              )
            ),
            f = (0, ot.getPostClones)(
              de(
                de(de({}, o.props), o.state),
                {},
                { slideCount: o.props.children.length }
              )
            );
          o.props.children.forEach(function (E) {
            l.push(E.props.style.width), (a += E.props.style.width);
          });
          for (var d = 0; d < u; d++)
            (s += l[l.length - 1 - d]), (a += l[l.length - 1 - d]);
          for (var h = 0; h < f; h++) a += l[h];
          for (var p = 0; p < o.state.currentSlide; p++) s += l[p];
          var m = { width: a + "px", left: -s + "px" };
          if (o.props.centerMode) {
            var v = "".concat(l[o.state.currentSlide], "px");
            m.left = "calc("
              .concat(m.left, " + (100% - ")
              .concat(v, ") / 2 ) ");
          }
          return { trackStyle: m };
        }
        var k = Xt.default.Children.count(o.props.children),
          y = de(de(de({}, o.props), o.state), {}, { slideCount: k }),
          g = (0, ot.getPreClones)(y) + (0, ot.getPostClones)(y) + k,
          b = (100 / o.props.slidesToShow) * g,
          w = 100 / g,
          S = (-w * ((0, ot.getPreClones)(y) + o.state.currentSlide) * b) / 100;
        o.props.centerMode && (S += (100 - (w * b) / 100) / 2);
        var j = { width: b + "%", left: S + "%" };
        return { slideWidth: w + "%", trackStyle: j };
      }),
      Ee(Se(o), "checkImagesLoad", function () {
        var a =
            (o.list &&
              o.list.querySelectorAll &&
              o.list.querySelectorAll(".slick-slide img")) ||
            [],
          s = a.length,
          l = 0;
        Array.prototype.forEach.call(a, function (u) {
          var f = function () {
            return ++l && l >= s && o.onWindowResized();
          };
          if (!u.onclick)
            u.onclick = function () {
              return u.parentNode.focus();
            };
          else {
            var d = u.onclick;
            u.onclick = function (h) {
              d(h), u.parentNode.focus();
            };
          }
          u.onload ||
            (o.props.lazyLoad
              ? (u.onload = function () {
                  o.adaptHeight(),
                    o.callbackTimers.push(
                      setTimeout(o.onWindowResized, o.props.speed)
                    );
                })
              : ((u.onload = f),
                (u.onerror = function () {
                  f(), o.props.onLazyLoadError && o.props.onLazyLoadError();
                })));
        });
      }),
      Ee(Se(o), "progressiveLazyLoad", function () {
        for (
          var a = [],
            s = de(de({}, o.props), o.state),
            l = o.state.currentSlide;
          l < o.state.slideCount + (0, ot.getPostClones)(s);
          l++
        )
          if (o.state.lazyLoadedList.indexOf(l) < 0) {
            a.push(l);
            break;
          }
        for (
          var u = o.state.currentSlide - 1;
          u >= -(0, ot.getPreClones)(s);
          u--
        )
          if (o.state.lazyLoadedList.indexOf(u) < 0) {
            a.push(u);
            break;
          }
        a.length > 0
          ? (o.setState(function (f) {
              return { lazyLoadedList: f.lazyLoadedList.concat(a) };
            }),
            o.props.onLazyLoad && o.props.onLazyLoad(a))
          : o.lazyLoadTimer &&
            (clearInterval(o.lazyLoadTimer), delete o.lazyLoadTimer);
      }),
      Ee(Se(o), "slideHandler", function (a) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = o.props,
          u = l.asNavFor,
          f = l.beforeChange,
          d = l.onLazyLoad,
          h = l.speed,
          p = l.afterChange,
          m = o.state.currentSlide,
          v = (0, ot.slideHandler)(
            de(
              de(de({ index: a }, o.props), o.state),
              {},
              { trackRef: o.track, useCSS: o.props.useCSS && !s }
            )
          ),
          k = v.state,
          y = v.nextState;
        if (k) {
          f && f(m, k.currentSlide);
          var g = k.lazyLoadedList.filter(function (b) {
            return o.state.lazyLoadedList.indexOf(b) < 0;
          });
          d && g.length > 0 && d(g),
            !o.props.waitForAnimate &&
              o.animationEndCallback &&
              (clearTimeout(o.animationEndCallback),
              p && p(m),
              delete o.animationEndCallback),
            o.setState(k, function () {
              u &&
                o.asNavForIndex !== a &&
                ((o.asNavForIndex = a), u.innerSlider.slideHandler(a)),
                y &&
                  (o.animationEndCallback = setTimeout(function () {
                    var b = y.animating,
                      w = oj(y, ["animating"]);
                    o.setState(w, function () {
                      o.callbackTimers.push(
                        setTimeout(function () {
                          return o.setState({ animating: b });
                        }, 10)
                      ),
                        p && p(k.currentSlide),
                        delete o.animationEndCallback;
                    });
                  }, h));
            });
        }
      }),
      Ee(Se(o), "changeSlide", function (a) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = de(de({}, o.props), o.state),
          u = (0, ot.changeSlide)(l, a);
        if (
          !(u !== 0 && !u) &&
          (s === !0 ? o.slideHandler(u, s) : o.slideHandler(u),
          o.props.autoplay && o.autoPlay("update"),
          o.props.focusOnSelect)
        ) {
          var f = o.list.querySelectorAll(".slick-current");
          f[0] && f[0].focus();
        }
      }),
      Ee(Se(o), "clickHandler", function (a) {
        o.clickable === !1 && (a.stopPropagation(), a.preventDefault()),
          (o.clickable = !0);
      }),
      Ee(Se(o), "keyHandler", function (a) {
        var s = (0, ot.keyHandler)(a, o.props.accessibility, o.props.rtl);
        s !== "" && o.changeSlide({ message: s });
      }),
      Ee(Se(o), "selectHandler", function (a) {
        o.changeSlide(a);
      }),
      Ee(Se(o), "disableBodyScroll", function () {
        var a = function (l) {
          (l = l || window.event),
            l.preventDefault && l.preventDefault(),
            (l.returnValue = !1);
        };
        window.ontouchmove = a;
      }),
      Ee(Se(o), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      Ee(Se(o), "swipeStart", function (a) {
        o.props.verticalSwiping && o.disableBodyScroll();
        var s = (0, ot.swipeStart)(a, o.props.swipe, o.props.draggable);
        s !== "" && o.setState(s);
      }),
      Ee(Se(o), "swipeMove", function (a) {
        var s = (0, ot.swipeMove)(
          a,
          de(
            de(de({}, o.props), o.state),
            {},
            {
              trackRef: o.track,
              listRef: o.list,
              slideIndex: o.state.currentSlide,
            }
          )
        );
        s && (s.swiping && (o.clickable = !1), o.setState(s));
      }),
      Ee(Se(o), "swipeEnd", function (a) {
        var s = (0, ot.swipeEnd)(
          a,
          de(
            de(de({}, o.props), o.state),
            {},
            {
              trackRef: o.track,
              listRef: o.list,
              slideIndex: o.state.currentSlide,
            }
          )
        );
        if (s) {
          var l = s.triggerSlideHandler;
          delete s.triggerSlideHandler,
            o.setState(s),
            l !== void 0 &&
              (o.slideHandler(l),
              o.props.verticalSwiping && o.enableBodyScroll());
        }
      }),
      Ee(Se(o), "touchEnd", function (a) {
        o.swipeEnd(a), (o.clickable = !0);
      }),
      Ee(Se(o), "slickPrev", function () {
        o.callbackTimers.push(
          setTimeout(function () {
            return o.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      Ee(Se(o), "slickNext", function () {
        o.callbackTimers.push(
          setTimeout(function () {
            return o.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      Ee(Se(o), "slickGoTo", function (a) {
        var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((a = Number(a)), isNaN(a))) return "";
        o.callbackTimers.push(
          setTimeout(function () {
            return o.changeSlide(
              {
                message: "index",
                index: a,
                currentSlide: o.state.currentSlide,
              },
              s
            );
          }, 0)
        );
      }),
      Ee(Se(o), "play", function () {
        var a;
        if (o.props.rtl) a = o.state.currentSlide - o.props.slidesToScroll;
        else if ((0, ot.canGoNext)(de(de({}, o.props), o.state)))
          a = o.state.currentSlide + o.props.slidesToScroll;
        else return !1;
        o.slideHandler(a);
      }),
      Ee(Se(o), "autoPlay", function (a) {
        o.autoplayTimer && clearInterval(o.autoplayTimer);
        var s = o.state.autoplaying;
        if (a === "update") {
          if (s === "hovered" || s === "focused" || s === "paused") return;
        } else if (a === "leave") {
          if (s === "paused" || s === "focused") return;
        } else if (a === "blur" && (s === "paused" || s === "hovered")) return;
        (o.autoplayTimer = setInterval(o.play, o.props.autoplaySpeed + 50)),
          o.setState({ autoplaying: "playing" });
      }),
      Ee(Se(o), "pause", function (a) {
        o.autoplayTimer &&
          (clearInterval(o.autoplayTimer), (o.autoplayTimer = null));
        var s = o.state.autoplaying;
        a === "paused"
          ? o.setState({ autoplaying: "paused" })
          : a === "focused"
          ? (s === "hovered" || s === "playing") &&
            o.setState({ autoplaying: "focused" })
          : s === "playing" && o.setState({ autoplaying: "hovered" });
      }),
      Ee(Se(o), "onDotsOver", function () {
        return o.props.autoplay && o.pause("hovered");
      }),
      Ee(Se(o), "onDotsLeave", function () {
        return (
          o.props.autoplay &&
          o.state.autoplaying === "hovered" &&
          o.autoPlay("leave")
        );
      }),
      Ee(Se(o), "onTrackOver", function () {
        return o.props.autoplay && o.pause("hovered");
      }),
      Ee(Se(o), "onTrackLeave", function () {
        return (
          o.props.autoplay &&
          o.state.autoplaying === "hovered" &&
          o.autoPlay("leave")
        );
      }),
      Ee(Se(o), "onSlideFocus", function () {
        return o.props.autoplay && o.pause("focused");
      }),
      Ee(Se(o), "onSlideBlur", function () {
        return (
          o.props.autoplay &&
          o.state.autoplaying === "focused" &&
          o.autoPlay("blur")
        );
      }),
      Ee(Se(o), "render", function () {
        var a = (0, ej.default)("slick-slider", o.props.className, {
            "slick-vertical": o.props.vertical,
            "slick-initialized": !0,
          }),
          s = de(de({}, o.props), o.state),
          l = (0, ot.extractObject)(s, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          u = o.props.pauseOnHover;
        l = de(
          de({}, l),
          {},
          {
            onMouseEnter: u ? o.onTrackOver : null,
            onMouseLeave: u ? o.onTrackLeave : null,
            onMouseOver: u ? o.onTrackOver : null,
            focusOnSelect:
              o.props.focusOnSelect && o.clickable ? o.selectHandler : null,
          }
        );
        var f;
        if (o.props.dots === !0 && o.state.slideCount >= o.props.slidesToShow) {
          var d = (0, ot.extractObject)(s, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            h = o.props.pauseOnDotsHover;
          (d = de(
            de({}, d),
            {},
            {
              clickHandler: o.changeSlide,
              onMouseEnter: h ? o.onDotsLeave : null,
              onMouseOver: h ? o.onDotsOver : null,
              onMouseLeave: h ? o.onDotsLeave : null,
            }
          )),
            (f = Xt.default.createElement(rj.Dots, d));
        }
        var p,
          m,
          v = (0, ot.extractObject)(s, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (v.clickHandler = o.changeSlide),
          o.props.arrows &&
            ((p = Xt.default.createElement(R0.PrevArrow, v)),
            (m = Xt.default.createElement(R0.NextArrow, v)));
        var k = null;
        o.props.vertical && (k = { height: o.state.listHeight });
        var y = null;
        o.props.vertical === !1
          ? o.props.centerMode === !0 &&
            (y = { padding: "0px " + o.props.centerPadding })
          : o.props.centerMode === !0 &&
            (y = { padding: o.props.centerPadding + " 0px" });
        var g = de(de({}, k), y),
          b = o.props.touchMove,
          w = {
            className: "slick-list",
            style: g,
            onClick: o.clickHandler,
            onMouseDown: b ? o.swipeStart : null,
            onMouseMove: o.state.dragging && b ? o.swipeMove : null,
            onMouseUp: b ? o.swipeEnd : null,
            onMouseLeave: o.state.dragging && b ? o.swipeEnd : null,
            onTouchStart: b ? o.swipeStart : null,
            onTouchMove: o.state.dragging && b ? o.swipeMove : null,
            onTouchEnd: b ? o.touchEnd : null,
            onTouchCancel: o.state.dragging && b ? o.swipeEnd : null,
            onKeyDown: o.props.accessibility ? o.keyHandler : null,
          },
          S = { className: a, dir: "ltr", style: o.props.style };
        return (
          o.props.unslick &&
            ((w = { className: "slick-list" }), (S = { className: a })),
          Xt.default.createElement(
            "div",
            S,
            o.props.unslick ? "" : p,
            Xt.default.createElement(
              "div",
              Al({ ref: o.listRefHandler }, w),
              Xt.default.createElement(
                tj.Track,
                Al({ ref: o.trackRefHandler }, l),
                o.props.children
              )
            ),
            o.props.unslick ? "" : m,
            o.props.unslick ? "" : f
          )
        );
      }),
      (o.list = null),
      (o.track = null),
      (o.state = de(
        de({}, JC.default),
        {},
        {
          currentSlide: o.props.initialSlide,
          targetSlide: o.props.initialSlide ? o.props.initialSlide : 0,
          slideCount: Xt.default.Children.count(o.props.children),
        }
      )),
      (o.callbackTimers = []),
      (o.clickable = !0),
      (o.debouncedResize = null);
    var i = o.ssrInit();
    return (o.state = de(de({}, o.state), i)), o;
  }
  return (
    lj(r, [
      {
        key: "didPropsChange",
        value: function (o) {
          for (
            var i = !1, a = 0, s = Object.keys(this.props);
            a < s.length;
            a++
          ) {
            var l = s[a];
            if (!o.hasOwnProperty(l)) {
              i = !0;
              break;
            }
            if (
              !(
                Eo(o[l]) === "object" ||
                typeof o[l] == "function" ||
                isNaN(o[l])
              ) &&
              o[l] !== this.props[l]
            ) {
              i = !0;
              break;
            }
          }
          return (
            i ||
            Xt.default.Children.count(this.props.children) !==
              Xt.default.Children.count(o.children)
          );
        },
      },
    ]),
    r
  );
})(Xt.default.Component);
var hj = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  pj = hj,
  gj = pj,
  mj = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  _0 = function (e) {
    var t = "",
      r = Object.keys(e);
    return (
      r.forEach(function (n, o) {
        var i = e[n];
        (n = gj(n)),
          mj(n) && typeof i == "number" && (i = i + "px"),
          i === !0
            ? (t += n)
            : i === !1
            ? (t += "not " + n)
            : (t += "(" + n + ": " + i + ")"),
          o < r.length - 1 && (t += " and ");
      }),
      t
    );
  },
  yj = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (r, n) {
          (t += _0(r)), n < e.length - 1 && (t += ", ");
        }),
        t)
      : _0(e);
  },
  vj = yj,
  pc,
  M0;
function bj() {
  if (M0) return pc;
  M0 = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (pc = e),
    pc
  );
}
var gc, L0;
function Kv() {
  if (L0) return gc;
  L0 = 1;
  function e(n, o) {
    var i = 0,
      a = n.length,
      s;
    for (i; i < a && ((s = o(n[i], i)), s !== !1); i++);
  }
  function t(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }
  function r(n) {
    return typeof n == "function";
  }
  return (gc = { isFunction: r, isArray: t, each: e }), gc;
}
var mc, D0;
function xj() {
  if (D0) return mc;
  D0 = 1;
  var e = bj(),
    t = Kv().each;
  function r(n, o) {
    (this.query = n),
      (this.isUnconditional = o),
      (this.handlers = []),
      (this.mql = window.matchMedia(n));
    var i = this;
    (this.listener = function (a) {
      (i.mql = a.currentTarget || a), i.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (r.prototype = {
      constuctor: r,
      addHandler: function (n) {
        var o = new e(n);
        this.handlers.push(o), this.matches() && o.on();
      },
      removeHandler: function (n) {
        var o = this.handlers;
        t(o, function (i, a) {
          if (i.equals(n)) return i.destroy(), !o.splice(a, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (n) {
          n.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var n = this.matches() ? "on" : "off";
        t(this.handlers, function (o) {
          o[n]();
        });
      },
    }),
    (mc = r),
    mc
  );
}
var yc, I0;
function wj() {
  if (I0) return yc;
  I0 = 1;
  var e = xj(),
    t = Kv(),
    r = t.each,
    n = t.isFunction,
    o = t.isArray;
  function i() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (i.prototype = {
      constructor: i,
      register: function (a, s, l) {
        var u = this.queries,
          f = l && this.browserIsIncapable;
        return (
          u[a] || (u[a] = new e(a, f)),
          n(s) && (s = { match: s }),
          o(s) || (s = [s]),
          r(s, function (d) {
            n(d) && (d = { match: d }), u[a].addHandler(d);
          }),
          this
        );
      },
      unregister: function (a, s) {
        var l = this.queries[a];
        return (
          l && (s ? l.removeHandler(s) : (l.clear(), delete this.queries[a])),
          this
        );
      },
    }),
    (yc = i),
    yc
  );
}
var vc, A0;
function kj() {
  if (A0) return vc;
  A0 = 1;
  var e = wj();
  return (vc = new e()), vc;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = a(x),
    r = vu,
    n = a(vj),
    o = a(uh),
    i = Z;
  function a(O) {
    return O && O.__esModule ? O : { default: O };
  }
  function s(O) {
    "@babel/helpers - typeof";
    return (
      (s =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (C) {
              return typeof C;
            }
          : function (C) {
              return C &&
                typeof Symbol == "function" &&
                C.constructor === Symbol &&
                C !== Symbol.prototype
                ? "symbol"
                : typeof C;
            }),
      s(O)
    );
  }
  function l() {
    return (
      (l = Object.assign
        ? Object.assign.bind()
        : function (O) {
            for (var C = 1; C < arguments.length; C++) {
              var D = arguments[C];
              for (var P in D)
                Object.prototype.hasOwnProperty.call(D, P) && (O[P] = D[P]);
            }
            return O;
          }),
      l.apply(this, arguments)
    );
  }
  function u(O, C) {
    var D = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(O);
      C &&
        (P = P.filter(function (_) {
          return Object.getOwnPropertyDescriptor(O, _).enumerable;
        })),
        D.push.apply(D, P);
    }
    return D;
  }
  function f(O) {
    for (var C = 1; C < arguments.length; C++) {
      var D = arguments[C] != null ? arguments[C] : {};
      C % 2
        ? u(Object(D), !0).forEach(function (P) {
            S(O, P, D[P]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(D))
        : u(Object(D)).forEach(function (P) {
            Object.defineProperty(O, P, Object.getOwnPropertyDescriptor(D, P));
          });
    }
    return O;
  }
  function d(O, C) {
    if (!(O instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(O, C) {
    for (var D = 0; D < C.length; D++) {
      var P = C[D];
      (P.enumerable = P.enumerable || !1),
        (P.configurable = !0),
        "value" in P && (P.writable = !0),
        Object.defineProperty(O, j(P.key), P);
    }
  }
  function p(O, C, D) {
    return (
      C && h(O.prototype, C),
      Object.defineProperty(O, "prototype", { writable: !1 }),
      O
    );
  }
  function m(O, C) {
    if (typeof C != "function" && C !== null)
      throw new TypeError("Super expression must either be null or a function");
    (O.prototype = Object.create(C && C.prototype, {
      constructor: { value: O, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(O, "prototype", { writable: !1 }),
      C && v(O, C);
  }
  function v(O, C) {
    return (
      (v = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (P, _) {
            return (P.__proto__ = _), P;
          }),
      v(O, C)
    );
  }
  function k(O) {
    var C = b();
    return function () {
      var P = w(O),
        _;
      if (C) {
        var N = w(this).constructor;
        _ = Reflect.construct(P, arguments, N);
      } else _ = P.apply(this, arguments);
      return y(this, _);
    };
  }
  function y(O, C) {
    if (C && (s(C) === "object" || typeof C == "function")) return C;
    if (C !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return g(O);
  }
  function g(O) {
    if (O === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return O;
  }
  function b() {
    try {
      var O = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch (C) {}
    return (b = function () {
      return !!O;
    })();
  }
  function w(O) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (D) {
            return D.__proto__ || Object.getPrototypeOf(D);
          }),
      w(O)
    );
  }
  function S(O, C, D) {
    return (
      (C = j(C)),
      C in O
        ? Object.defineProperty(O, C, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (O[C] = D),
      O
    );
  }
  function j(O) {
    var C = E(O, "string");
    return s(C) == "symbol" ? C : String(C);
  }
  function E(O, C) {
    if (s(O) != "object" || !O) return O;
    var D = O[Symbol.toPrimitive];
    if (D !== void 0) {
      var P = D.call(O, C || "default");
      if (s(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(O);
  }
  var I = (0, i.canUseDOM)() && kj();
  e.default = (function (O) {
    m(D, O);
    var C = k(D);
    function D(P) {
      var _;
      return (
        d(this, D),
        (_ = C.call(this, P)),
        S(g(_), "innerSliderRefHandler", function (N) {
          return (_.innerSlider = N);
        }),
        S(g(_), "slickPrev", function () {
          return _.innerSlider.slickPrev();
        }),
        S(g(_), "slickNext", function () {
          return _.innerSlider.slickNext();
        }),
        S(g(_), "slickGoTo", function (N) {
          var L =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return _.innerSlider.slickGoTo(N, L);
        }),
        S(g(_), "slickPause", function () {
          return _.innerSlider.pause("paused");
        }),
        S(g(_), "slickPlay", function () {
          return _.innerSlider.autoPlay("play");
        }),
        (_.state = { breakpoint: null }),
        (_._responsiveMediaHandlers = []),
        _
      );
    }
    return (
      p(D, [
        {
          key: "media",
          value: function (_, N) {
            I.register(_, N),
              this._responsiveMediaHandlers.push({ query: _, handler: N });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var _ = this;
            if (this.props.responsive) {
              var N = this.props.responsive.map(function (B) {
                return B.breakpoint;
              });
              N.sort(function (B, W) {
                return B - W;
              }),
                N.forEach(function (B, W) {
                  var R;
                  W === 0
                    ? (R = (0, n.default)({ minWidth: 0, maxWidth: B }))
                    : (R = (0, n.default)({
                        minWidth: N[W - 1] + 1,
                        maxWidth: B,
                      })),
                    (0, i.canUseDOM)() &&
                      _.media(R, function () {
                        _.setState({ breakpoint: B });
                      });
                });
              var L = (0, n.default)({ minWidth: N.slice(-1)[0] });
              (0, i.canUseDOM)() &&
                this.media(L, function () {
                  _.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (_) {
              I.unregister(_.query, _.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var _ = this,
              N,
              L;
            this.state.breakpoint
              ? ((L = this.props.responsive.filter(function (re) {
                  return re.breakpoint === _.state.breakpoint;
                })),
                (N =
                  L[0].settings === "unslick"
                    ? "unslick"
                    : f(f(f({}, o.default), this.props), L[0].settings)))
              : (N = f(f({}, o.default), this.props)),
              N.centerMode && (N.slidesToScroll > 1, (N.slidesToScroll = 1)),
              N.fade &&
                (N.slidesToShow > 1,
                N.slidesToScroll > 1,
                (N.slidesToShow = 1),
                (N.slidesToScroll = 1));
            var B = t.default.Children.toArray(this.props.children);
            (B = B.filter(function (re) {
              return typeof re == "string" ? !!re.trim() : !!re;
            })),
              N.variableWidth &&
                (N.rows > 1 || N.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (N.variableWidth = !1));
            for (
              var W = [], R = null, F = 0;
              F < B.length;
              F += N.rows * N.slidesPerRow
            ) {
              for (
                var z = [], U = F;
                U < F + N.rows * N.slidesPerRow;
                U += N.slidesPerRow
              ) {
                for (
                  var H = [], J = U;
                  J < U + N.slidesPerRow &&
                  (N.variableWidth &&
                    B[J].props.style &&
                    (R = B[J].props.style.width),
                  !(J >= B.length));
                  J += 1
                )
                  H.push(
                    t.default.cloneElement(B[J], {
                      key: 100 * F + 10 * U + J,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / N.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                z.push(t.default.createElement("div", { key: 10 * F + U }, H));
              }
              N.variableWidth
                ? W.push(
                    t.default.createElement(
                      "div",
                      { key: F, style: { width: R } },
                      z
                    )
                  )
                : W.push(t.default.createElement("div", { key: F }, z));
            }
            if (N === "unslick") {
              var X = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: X }, B);
            } else
              W.length <= N.slidesToShow && !N.infinite && (N.unslick = !0);
            return t.default.createElement(
              r.InnerSlider,
              l(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, i.filterSettings)(N)
              ),
              W
            );
          },
        },
      ]),
      D
    );
  })(t.default.Component);
})(gv);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = r(gv);
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  e.default = t.default;
})(pv);
const Sj = Si(pv),
  Wr = "/talgtna/api",
  Co = "/talgtna";
function Yv({ offers: e }) {
  const [t, r] = x.useState(window.innerWidth);
  window.addEventListener("resize", () => {
    r(window.innerWidth);
  });
  const n = {
    dots: !0,
    infinite: !0,
    speed: 500,
    slidesToShow: t > 1023 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 4e3,
    cssEase: "linear",
    arrows: !1,
  };
  return c.jsx("div", {
    className: "w-[95%] mx-auto my-6",
    children: c.jsx(Sj, {
      ...n,
      children: e.map((o) =>
        c.jsx(
          Qt,
          {
            to: o.product
              ? "/product/".concat(o.product)
              : "/company/".concat(o.company),
            className: "w-full h-44 sm:h-56 md:h-72 pl-1 pr-1",
            children: c.jsx("img", {
              src: Co + o.image,
              alt: o.product ? "" : "".concat(o.company),
              className: "w-full h-full object-fit rounded shadow-md",
            }),
          },
          o.id
        )
      ),
    }),
  });
}
const z0 = (e) => {
    let t;
    const r = new Set(),
      n = (f, d) => {
        const h = typeof f == "function" ? f(t) : f;
        if (!Object.is(h, t)) {
          const p = t;
          (t = (d != null ? d : typeof h != "object" || h === null)
            ? h
            : Object.assign({}, t, h)),
            r.forEach((m) => m(t, p));
        }
      },
      o = () => t,
      l = {
        setState: n,
        getState: o,
        getInitialState: () => u,
        subscribe: (f) => (r.add(f), () => r.delete(f)),
        destroy: () => {
          r.clear();
        },
      },
      u = (t = e(n, o, l));
    return l;
  },
  Ej = (e) => (e ? z0(e) : z0);
var Gv = { exports: {} },
  Xv = {},
  Jv = { exports: {} },
  Zv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bi = x;
function Cj(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jj = typeof Object.is == "function" ? Object.is : Cj,
  Nj = bi.useState,
  Tj = bi.useEffect,
  Oj = bi.useLayoutEffect,
  Rj = bi.useDebugValue;
function Pj(e, t) {
  var r = t(),
    n = Nj({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1];
  return (
    Oj(
      function () {
        (o.value = r), (o.getSnapshot = t), bc(o) && i({ inst: o });
      },
      [e, r, t]
    ),
    Tj(
      function () {
        return (
          bc(o) && i({ inst: o }),
          e(function () {
            bc(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    Rj(r),
    r
  );
}
function bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !jj(e, r);
  } catch (n) {
    return !0;
  }
}
function _j(e, t) {
  return t();
}
var Mj =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? _j
    : Pj;
Zv.useSyncExternalStore =
  bi.useSyncExternalStore !== void 0 ? bi.useSyncExternalStore : Mj;
Jv.exports = Zv;
var Lj = Jv.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ku = x,
  Dj = Lj;
function Ij(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Aj = typeof Object.is == "function" ? Object.is : Ij,
  zj = Dj.useSyncExternalStore,
  Fj = ku.useRef,
  $j = ku.useEffect,
  Uj = ku.useMemo,
  Bj = ku.useDebugValue;
Xv.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = Fj(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = Uj(
    function () {
      function l(p) {
        if (!u) {
          if (((u = !0), (f = p), (p = n(p)), o !== void 0 && a.hasValue)) {
            var m = a.value;
            if (o(m, p)) return (d = m);
          }
          return (d = p);
        }
        if (((m = d), Aj(f, p))) return m;
        var v = n(p);
        return o !== void 0 && o(m, v) ? m : ((f = p), (d = v));
      }
      var u = !1,
        f,
        d,
        h = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        h === null
          ? void 0
          : function () {
              return l(h());
            },
      ];
    },
    [t, r, n, o]
  );
  var s = zj(e, i[0], i[1]);
  return (
    $j(
      function () {
        (a.hasValue = !0), (a.value = s);
      },
      [s]
    ),
    Bj(s),
    s
  );
};
Gv.exports = Xv;
var Hj = Gv.exports;
const Wj = Si(Hj),
  { useDebugValue: Qj } = V,
  { useSyncExternalStoreWithSelector: Vj } = Wj;
const qj = (e) => e;
function Kj(e, t = qj, r) {
  const n = Vj(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return Qj(n), n;
}
const F0 = (e) => {
    const t = typeof e == "function" ? Ej(e) : e,
      r = (n, o) => Kj(t, n, o);
    return Object.assign(r, t), r;
  },
  eb = (e) => (e ? F0(e) : F0),
  Ke = eb((e) => ({
    cart: [],
    discount: {},
    initlize: () => {
      e((t) => {
        const r = JSON.parse(localStorage.getItem("cart")) || [];
        return r && (t.cart = r), t;
      });
    },
    setDiscount: (t, r) => {
      e(
        (n) => ((n.discount = { code: t, value: r }), { discount: n.discount })
      );
    },
    addToCart: (t) => {
      e((r) => {
        if (!r.cart.find((o) => o.id === t.id)) {
          const o = [...r.cart, { ...t }];
          return localStorage.setItem("cart", JSON.stringify(o)), { cart: o };
        }
        return { cart: r.cart };
      });
    },
    incrementQuantity: (t) => {
      e((r) => {
        if (r.cart.find((o) => o.id === t)) {
          const o = r.cart.map((i) =>
            i.id === t && i.quantity < 20
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
          return localStorage.setItem("cart", JSON.stringify(o)), { cart: o };
        }
        return { cart: r.cart };
      });
    },
    decrementQuantity: (t) => {
      e((r) => {
        if (r.cart.find((o) => o.id === t)) {
          const o = r.cart.map((i) =>
            i.id === t && i.quantity > 1
              ? { ...i, quantity: i.quantity - 1 }
              : i
          );
          return localStorage.setItem("cart", JSON.stringify(o)), { cart: o };
        }
        return { cart: r.cart };
      });
    },
    removeFromCart: (t) => {
      e((r) => {
        const n = r.cart.filter((o) => o.id !== t);
        return localStorage.setItem("cart", JSON.stringify(n)), { cart: n };
      });
    },
    getTotalQuantity: () =>
      Ke.getState().cart.reduce((n, o) => n + o.quantity, 0),
    clearCart: () => {
      e(() => (localStorage.setItem("cart", JSON.stringify([])), { cart: [] }));
    },
  })),
  Dt = eb((e) => ({
    isAuthenticated: !1,
    token: "",
    favorites: 0,
    initlize: () => {
      e((t) => {
        const r = localStorage.getItem("customer-token"),
          n = localStorage.getItem("favorites");
        return (
          r && ((t.isAuthenticated = !0), (t.token = r)),
          n && (t.favorites = parseInt(n)),
          t
        );
      });
    },
    login: (t, r) => {
      e(
        (n) => (
          localStorage.setItem("customer-token", t),
          localStorage.setItem("favorites", "".concat(r)),
          (n.isAuthenticated = !0),
          (n.token = t),
          n
        )
      );
    },
    logout: () => {
      e(
        (t) => (
          localStorage.removeItem("customer-token"),
          localStorage.removeItem("favorites"),
          (t.isAuthenticated = !1),
          (t.token = ""),
          t
        )
      );
    },
    setFavorites: () => {
      e((t) => {
        const r = t.favorites + 1;
        return (
          localStorage.setItem("favorites", "".concat(r)), { favorites: r }
        );
      });
    },
  }));
var {
    entries: tb,
    setPrototypeOf: $0,
    isFrozen: Yj,
    getPrototypeOf: Gj,
    getOwnPropertyDescriptor: Xj,
  } = Object,
  { freeze: tr, seal: Or, create: rb } = Object,
  { apply: qd, construct: Kd } = typeof Reflect < "u" && Reflect;
tr ||
  (tr = function (e) {
    return e;
  });
Or ||
  (Or = function (e) {
    return e;
  });
qd ||
  (qd = function (e, t, r) {
    return e.apply(t, r);
  });
Kd ||
  (Kd = function (e, t) {
    return new e(...t);
  });
var Ss = yr(Array.prototype.forEach),
  U0 = yr(Array.prototype.pop),
  Yi = yr(Array.prototype.push),
  qs = yr(String.prototype.toLowerCase),
  xc = yr(String.prototype.toString),
  B0 = yr(String.prototype.match),
  Gi = yr(String.prototype.replace),
  Jj = yr(String.prototype.indexOf),
  Zj = yr(String.prototype.trim),
  Dr = yr(Object.prototype.hasOwnProperty),
  dr = yr(RegExp.prototype.test),
  Xi = eN(TypeError);
function yr(e) {
  return function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
      o < r;
      o++
    )
      n[o - 1] = arguments[o];
    return qd(e, t, n);
  };
}
function eN(e) {
  return function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Kd(e, r);
  };
}
function ke(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qs;
  $0 && $0(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      let i = r(o);
      i !== o && (Yj(t) || (t[n] = i), (o = i));
    }
    e[o] = !0;
  }
  return e;
}
function tN(e) {
  for (let t = 0; t < e.length; t++) Dr(e, t) || (e[t] = null);
  return e;
}
function no(e) {
  let t = rb(null);
  for (let [r, n] of tb(e))
    Dr(e, r) &&
      (Array.isArray(n)
        ? (t[r] = tN(n))
        : n && typeof n == "object" && n.constructor === Object
        ? (t[r] = no(n))
        : (t[r] = n));
  return t;
}
function Es(e, t) {
  for (; e !== null; ) {
    let n = Xj(e, t);
    if (n) {
      if (n.get) return yr(n.get);
      if (typeof n.value == "function") return yr(n.value);
    }
    e = Gj(e);
  }
  function r() {
    return null;
  }
  return r;
}
var H0 = tr([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  wc = tr([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  kc = tr([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  rN = tr([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  Sc = tr([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  nN = tr([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  W0 = tr(["#text"]),
  Q0 = tr([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "xmlns",
    "slot",
  ]),
  Ec = tr([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  V0 = tr([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  Cs = tr(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  oN = Or(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  iN = Or(/<%[\w\W]*|[\w\W]*%>/gm),
  aN = Or(/\${[\w\W]*}/gm),
  sN = Or(/^data-[\-\w.\u00B7-\uFFFF]/),
  lN = Or(/^aria-[\-\w]+$/),
  nb = Or(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  uN = Or(/^(?:\w+script|data):/i),
  cN = Or(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  ob = Or(/^html$/i),
  dN = Or(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),
  q0 = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: oN,
    ERB_EXPR: iN,
    TMPLIT_EXPR: aN,
    DATA_ATTR: sN,
    ARIA_ATTR: lN,
    IS_ALLOWED_URI: nb,
    IS_SCRIPT_OR_DATA: uN,
    ATTR_WHITESPACE: cN,
    DOCTYPE_NAME: ob,
    CUSTOM_ELEMENT: dN,
  }),
  fN = function () {
    return typeof window > "u" ? null : window;
  },
  hN = function (e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let r = null,
      n = "data-tt-policy-suffix";
    t && t.hasAttribute(n) && (r = t.getAttribute(n));
    let o = "dompurify" + (r ? "#" + r : "");
    try {
      return e.createPolicy(o, {
        createHTML(i) {
          return i;
        },
        createScriptURL(i) {
          return i;
        },
      });
    } catch (i) {
      return (
        console.warn("TrustedTypes policy " + o + " could not be created."),
        null
      );
    }
  };
function ib() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fN(),
    t = (T) => ib(T);
  if (
    ((t.version = "3.0.10"),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== 9)
  )
    return (t.isSupported = !1), t;
  let { document: r } = e,
    n = r,
    o = n.currentScript,
    {
      DocumentFragment: i,
      HTMLTemplateElement: a,
      Node: s,
      Element: l,
      NodeFilter: u,
      NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: d,
      DOMParser: h,
      trustedTypes: p,
    } = e,
    m = l.prototype,
    v = Es(m, "cloneNode"),
    k = Es(m, "nextSibling"),
    y = Es(m, "childNodes"),
    g = Es(m, "parentNode");
  if (typeof a == "function") {
    let T = r.createElement("template");
    T.content && T.content.ownerDocument && (r = T.content.ownerDocument);
  }
  let b,
    w = "",
    {
      implementation: S,
      createNodeIterator: j,
      createDocumentFragment: E,
      getElementsByTagName: I,
    } = r,
    { importNode: O } = n,
    C = {};
  t.isSupported =
    typeof tb == "function" &&
    typeof g == "function" &&
    S &&
    S.createHTMLDocument !== void 0;
  let {
      MUSTACHE_EXPR: D,
      ERB_EXPR: P,
      TMPLIT_EXPR: _,
      DATA_ATTR: N,
      ARIA_ATTR: L,
      IS_SCRIPT_OR_DATA: B,
      ATTR_WHITESPACE: W,
      CUSTOM_ELEMENT: R,
    } = q0,
    { IS_ALLOWED_URI: F } = q0,
    z = null,
    U = ke({}, [...H0, ...wc, ...kc, ...Sc, ...W0]),
    H = null,
    J = ke({}, [...Q0, ...Ec, ...V0, ...Cs]),
    X = Object.seal(
      rb(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    re = null,
    ae = null,
    be = !0,
    ge = !0,
    Ne = !1,
    Be = !0,
    ut = !1,
    ie = !1,
    Ie = !1,
    _e = !1,
    pe = !1,
    Le = !1,
    zt = !1,
    ce = !0,
    ft = !1,
    Ft = "user-content-",
    Ot = !0,
    rt = !1,
    De = {},
    Rt = null,
    jt = ke({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]),
    He = null,
    $t = ke({}, ["audio", "video", "img", "source", "image", "track"]),
    mt = null,
    Yt = ke({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    Qr = "http://www.w3.org/1998/Math/MathML",
    yt = "http://www.w3.org/2000/svg",
    ht = "http://www.w3.org/1999/xhtml",
    Pr = ht,
    tn = !1,
    fe = null,
    Ge = ke({}, [Qr, yt, ht], xc),
    Pe = null,
    Gt = ["application/xhtml+xml", "text/html"],
    Ut = "text/html",
    We = null,
    _r = null,
    Mu = r.createElement("form"),
    Di = function (T) {
      return T instanceof RegExp || T instanceof Function;
    },
    Ii = function () {
      let T =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(_r && _r === T)) {
        if (
          ((!T || typeof T != "object") && (T = {}),
          (T = no(T)),
          (Pe =
            Gt.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? Ut : T.PARSER_MEDIA_TYPE),
          (We = Pe === "application/xhtml+xml" ? xc : qs),
          (z = Dr(T, "ALLOWED_TAGS") ? ke({}, T.ALLOWED_TAGS, We) : U),
          (H = Dr(T, "ALLOWED_ATTR") ? ke({}, T.ALLOWED_ATTR, We) : J),
          (fe = Dr(T, "ALLOWED_NAMESPACES")
            ? ke({}, T.ALLOWED_NAMESPACES, xc)
            : Ge),
          (mt = Dr(T, "ADD_URI_SAFE_ATTR")
            ? ke(no(Yt), T.ADD_URI_SAFE_ATTR, We)
            : Yt),
          (He = Dr(T, "ADD_DATA_URI_TAGS")
            ? ke(no($t), T.ADD_DATA_URI_TAGS, We)
            : $t),
          (Rt = Dr(T, "FORBID_CONTENTS") ? ke({}, T.FORBID_CONTENTS, We) : jt),
          (re = Dr(T, "FORBID_TAGS") ? ke({}, T.FORBID_TAGS, We) : {}),
          (ae = Dr(T, "FORBID_ATTR") ? ke({}, T.FORBID_ATTR, We) : {}),
          (De = Dr(T, "USE_PROFILES") ? T.USE_PROFILES : !1),
          (be = T.ALLOW_ARIA_ATTR !== !1),
          (ge = T.ALLOW_DATA_ATTR !== !1),
          (Ne = T.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (Be = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (ut = T.SAFE_FOR_TEMPLATES || !1),
          (ie = T.WHOLE_DOCUMENT || !1),
          (pe = T.RETURN_DOM || !1),
          (Le = T.RETURN_DOM_FRAGMENT || !1),
          (zt = T.RETURN_TRUSTED_TYPE || !1),
          (_e = T.FORCE_BODY || !1),
          (ce = T.SANITIZE_DOM !== !1),
          (ft = T.SANITIZE_NAMED_PROPS || !1),
          (Ot = T.KEEP_CONTENT !== !1),
          (rt = T.IN_PLACE || !1),
          (F = T.ALLOWED_URI_REGEXP || nb),
          (Pr = T.NAMESPACE || ht),
          (X = T.CUSTOM_ELEMENT_HANDLING || {}),
          T.CUSTOM_ELEMENT_HANDLING &&
            Di(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (X.tagNameCheck = T.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          T.CUSTOM_ELEMENT_HANDLING &&
            Di(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (X.attributeNameCheck =
              T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          T.CUSTOM_ELEMENT_HANDLING &&
            typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (X.allowCustomizedBuiltInElements =
              T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          ut && (ge = !1),
          Le && (pe = !0),
          De &&
            ((z = ke({}, W0)),
            (H = []),
            De.html === !0 && (ke(z, H0), ke(H, Q0)),
            De.svg === !0 && (ke(z, wc), ke(H, Ec), ke(H, Cs)),
            De.svgFilters === !0 && (ke(z, kc), ke(H, Ec), ke(H, Cs)),
            De.mathMl === !0 && (ke(z, Sc), ke(H, V0), ke(H, Cs))),
          T.ADD_TAGS && (z === U && (z = no(z)), ke(z, T.ADD_TAGS, We)),
          T.ADD_ATTR && (H === J && (H = no(H)), ke(H, T.ADD_ATTR, We)),
          T.ADD_URI_SAFE_ATTR && ke(mt, T.ADD_URI_SAFE_ATTR, We),
          T.FORBID_CONTENTS &&
            (Rt === jt && (Rt = no(Rt)), ke(Rt, T.FORBID_CONTENTS, We)),
          Ot && (z["#text"] = !0),
          ie && ke(z, ["html", "head", "body"]),
          z.table && (ke(z, ["tbody"]), delete re.tbody),
          T.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Xi(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Xi(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (b = T.TRUSTED_TYPES_POLICY), (w = b.createHTML(""));
        } else
          b === void 0 && (b = hN(p, o)),
            b !== null && typeof w == "string" && (w = b.createHTML(""));
        tr && tr(T), (_r = T);
      }
    },
    M = ke({}, ["mi", "mo", "mn", "ms", "mtext"]),
    A = ke({}, ["foreignobject", "desc", "title", "annotation-xml"]),
    Q = ke({}, ["title", "style", "font", "a", "script"]),
    K = ke({}, [...wc, ...kc, ...rN]),
    te = ke({}, [...Sc, ...nN]),
    me = function (T) {
      let ee = g(T);
      (!ee || !ee.tagName) && (ee = { namespaceURI: Pr, tagName: "template" });
      let Y = qs(T.tagName),
        Te = qs(ee.tagName);
      return fe[T.namespaceURI]
        ? T.namespaceURI === yt
          ? ee.namespaceURI === ht
            ? Y === "svg"
            : ee.namespaceURI === Qr
            ? Y === "svg" && (Te === "annotation-xml" || M[Te])
            : !!K[Y]
          : T.namespaceURI === Qr
          ? ee.namespaceURI === ht
            ? Y === "math"
            : ee.namespaceURI === yt
            ? Y === "math" && A[Te]
            : !!te[Y]
          : T.namespaceURI === ht
          ? (ee.namespaceURI === yt && !A[Te]) ||
            (ee.namespaceURI === Qr && !M[Te])
            ? !1
            : !te[Y] && (Q[Y] || !K[Y])
          : !!(Pe === "application/xhtml+xml" && fe[T.namespaceURI])
        : !1;
    },
    se = function (T) {
      Yi(t.removed, { element: T });
      try {
        T.parentNode.removeChild(T);
      } catch (ee) {
        T.remove();
      }
    },
    ne = function (T, ee) {
      try {
        Yi(t.removed, { attribute: ee.getAttributeNode(T), from: ee });
      } catch (Y) {
        Yi(t.removed, { attribute: null, from: ee });
      }
      if ((ee.removeAttribute(T), T === "is" && !H[T]))
        if (pe || Le)
          try {
            se(ee);
          } catch (Y) {}
        else
          try {
            ee.setAttribute(T, "");
          } catch (Y) {}
    },
    ye = function (T) {
      let ee = null,
        Y = null;
      if (_e) T = "<remove></remove>" + T;
      else {
        let ze = B0(T, /^[\r\n\t ]+/);
        Y = ze && ze[0];
      }
      Pe === "application/xhtml+xml" &&
        Pr === ht &&
        (T =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          T +
          "</body></html>");
      let Te = b ? b.createHTML(T) : T;
      if (Pr === ht)
        try {
          ee = new h().parseFromString(Te, Pe);
        } catch (ze) {}
      if (!ee || !ee.documentElement) {
        ee = S.createDocument(Pr, "template", null);
        try {
          ee.documentElement.innerHTML = tn ? w : Te;
        } catch (ze) {}
      }
      let ct = ee.body || ee.documentElement;
      return (
        T &&
          Y &&
          ct.insertBefore(r.createTextNode(Y), ct.childNodes[0] || null),
        Pr === ht
          ? I.call(ee, ie ? "html" : "body")[0]
          : ie
          ? ee.documentElement
          : ct
      );
    },
    he = function (T) {
      return j.call(
        T.ownerDocument || T,
        T,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION,
        null
      );
    },
    kt = function (T) {
      return (
        T instanceof d &&
        (typeof T.nodeName != "string" ||
          typeof T.textContent != "string" ||
          typeof T.removeChild != "function" ||
          !(T.attributes instanceof f) ||
          typeof T.removeAttribute != "function" ||
          typeof T.setAttribute != "function" ||
          typeof T.namespaceURI != "string" ||
          typeof T.insertBefore != "function" ||
          typeof T.hasChildNodes != "function")
      );
    },
    vt = function (T) {
      return typeof s == "function" && T instanceof s;
    },
    le = function (T, ee, Y) {
      C[T] &&
        Ss(C[T], (Te) => {
          Te.call(t, ee, Y, _r);
        });
    },
    Ae = function (T) {
      let ee = null;
      if ((le("beforeSanitizeElements", T, null), kt(T))) return se(T), !0;
      let Y = We(T.nodeName);
      if (
        (le("uponSanitizeElement", T, { tagName: Y, allowedTags: z }),
        T.hasChildNodes() &&
          !vt(T.firstElementChild) &&
          dr(/<[/\w]/g, T.innerHTML) &&
          dr(/<[/\w]/g, T.textContent))
      )
        return se(T), !0;
      if (!z[Y] || re[Y]) {
        if (
          !re[Y] &&
          xn(Y) &&
          ((X.tagNameCheck instanceof RegExp && dr(X.tagNameCheck, Y)) ||
            (X.tagNameCheck instanceof Function && X.tagNameCheck(Y)))
        )
          return !1;
        if (Ot && !Rt[Y]) {
          let Te = g(T) || T.parentNode,
            ct = y(T) || T.childNodes;
          if (ct && Te) {
            let ze = ct.length;
            for (let ve = ze - 1; ve >= 0; --ve)
              Te.insertBefore(v(ct[ve], !0), k(T));
          }
        }
        return se(T), !0;
      }
      return (T instanceof l && !me(T)) ||
        ((Y === "noscript" || Y === "noembed" || Y === "noframes") &&
          dr(/<\/no(script|embed|frames)/i, T.innerHTML))
        ? (se(T), !0)
        : (ut &&
            T.nodeType === 3 &&
            ((ee = T.textContent),
            Ss([D, P, _], (Te) => {
              ee = Gi(ee, Te, " ");
            }),
            T.textContent !== ee &&
              (Yi(t.removed, { element: T.cloneNode() }),
              (T.textContent = ee))),
          le("afterSanitizeElements", T, null),
          !1);
    },
    pt = function (T, ee, Y) {
      if (ce && (ee === "id" || ee === "name") && (Y in r || Y in Mu))
        return !1;
      if (!(ge && !ae[ee] && dr(N, ee)) && !(be && dr(L, ee))) {
        if (!H[ee] || ae[ee]) {
          if (
            !(
              (xn(T) &&
                ((X.tagNameCheck instanceof RegExp && dr(X.tagNameCheck, T)) ||
                  (X.tagNameCheck instanceof Function && X.tagNameCheck(T))) &&
                ((X.attributeNameCheck instanceof RegExp &&
                  dr(X.attributeNameCheck, ee)) ||
                  (X.attributeNameCheck instanceof Function &&
                    X.attributeNameCheck(ee)))) ||
              (ee === "is" &&
                X.allowCustomizedBuiltInElements &&
                ((X.tagNameCheck instanceof RegExp && dr(X.tagNameCheck, Y)) ||
                  (X.tagNameCheck instanceof Function && X.tagNameCheck(Y))))
            )
          )
            return !1;
        } else if (
          !mt[ee] &&
          !dr(F, Gi(Y, W, "")) &&
          !(
            (ee === "src" || ee === "xlink:href" || ee === "href") &&
            T !== "script" &&
            Jj(Y, "data:") === 0 &&
            He[T]
          ) &&
          !(Ne && !dr(B, Gi(Y, W, ""))) &&
          Y
        )
          return !1;
      }
      return !0;
    },
    xn = function (T) {
      return T !== "annotation-xml" && B0(T, R);
    },
    Mr = function (T) {
      le("beforeSanitizeAttributes", T, null);
      let { attributes: ee } = T;
      if (!ee) return;
      let Y = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: H,
        },
        Te = ee.length;
      for (; Te--; ) {
        let ct = ee[Te],
          { name: ze, namespaceURI: ve, value: Qe } = ct,
          nt = We(ze),
          Re = ze === "value" ? Qe : Zj(Qe);
        if (
          ((Y.attrName = nt),
          (Y.attrValue = Re),
          (Y.keepAttr = !0),
          (Y.forceKeepAttr = void 0),
          le("uponSanitizeAttribute", T, Y),
          (Re = Y.attrValue),
          Y.forceKeepAttr || (ne(ze, T), !Y.keepAttr))
        )
          continue;
        if (!Be && dr(/\/>/i, Re)) {
          ne(ze, T);
          continue;
        }
        ut &&
          Ss([D, P, _], (Ai) => {
            Re = Gi(Re, Ai, " ");
          });
        let kn = We(T.nodeName);
        if (pt(kn, nt, Re)) {
          if (
            (ft &&
              (nt === "id" || nt === "name") &&
              (ne(ze, T), (Re = Ft + Re)),
            b &&
              typeof p == "object" &&
              typeof p.getAttributeType == "function" &&
              !ve)
          )
            switch (p.getAttributeType(kn, nt)) {
              case "TrustedHTML": {
                Re = b.createHTML(Re);
                break;
              }
              case "TrustedScriptURL": {
                Re = b.createScriptURL(Re);
                break;
              }
            }
          try {
            ve ? T.setAttributeNS(ve, ze, Re) : T.setAttribute(ze, Re),
              U0(t.removed);
          } catch (Ai) {}
        }
      }
      le("afterSanitizeAttributes", T, null);
    },
    wn = function T(ee) {
      let Y = null,
        Te = he(ee);
      for (le("beforeSanitizeShadowDOM", ee, null); (Y = Te.nextNode()); )
        le("uponSanitizeShadowNode", Y, null),
          !Ae(Y) && (Y.content instanceof i && T(Y.content), Mr(Y));
      le("afterSanitizeShadowDOM", ee, null);
    };
  return (
    (t.sanitize = function (T) {
      let ee =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        Y = null,
        Te = null,
        ct = null,
        ze = null;
      if (((tn = !T), tn && (T = "<!-->"), typeof T != "string" && !vt(T)))
        if (typeof T.toString == "function") {
          if (((T = T.toString()), typeof T != "string"))
            throw Xi("dirty is not a string, aborting");
        } else throw Xi("toString is not a function");
      if (!t.isSupported) return T;
      if (
        (Ie || Ii(ee), (t.removed = []), typeof T == "string" && (rt = !1), rt)
      ) {
        if (T.nodeName) {
          let nt = We(T.nodeName);
          if (!z[nt] || re[nt])
            throw Xi("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (T instanceof s)
        (Y = ye("<!---->")),
          (Te = Y.ownerDocument.importNode(T, !0)),
          (Te.nodeType === 1 && Te.nodeName === "BODY") ||
          Te.nodeName === "HTML"
            ? (Y = Te)
            : Y.appendChild(Te);
      else {
        if (!pe && !ut && !ie && T.indexOf("<") === -1)
          return b && zt ? b.createHTML(T) : T;
        if (((Y = ye(T)), !Y)) return pe ? null : zt ? w : "";
      }
      Y && _e && se(Y.firstChild);
      let ve = he(rt ? T : Y);
      for (; (ct = ve.nextNode()); )
        Ae(ct) || (ct.content instanceof i && wn(ct.content), Mr(ct));
      if (rt) return T;
      if (pe) {
        if (Le)
          for (ze = E.call(Y.ownerDocument); Y.firstChild; )
            ze.appendChild(Y.firstChild);
        else ze = Y;
        return (
          (H.shadowroot || H.shadowrootmode) && (ze = O.call(n, ze, !0)), ze
        );
      }
      let Qe = ie ? Y.outerHTML : Y.innerHTML;
      return (
        ie &&
          z["!doctype"] &&
          Y.ownerDocument &&
          Y.ownerDocument.doctype &&
          Y.ownerDocument.doctype.name &&
          dr(ob, Y.ownerDocument.doctype.name) &&
          (Qe = "<!DOCTYPE " + Y.ownerDocument.doctype.name + ">\n" + Qe),
        ut &&
          Ss([D, P, _], (nt) => {
            Qe = Gi(Qe, nt, " ");
          }),
        b && zt ? b.createHTML(Qe) : Qe
      );
    }),
    (t.setConfig = function () {
      let T =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Ii(T), (Ie = !0);
    }),
    (t.clearConfig = function () {
      (_r = null), (Ie = !1);
    }),
    (t.isValidAttribute = function (T, ee, Y) {
      _r || Ii({});
      let Te = We(T),
        ct = We(ee);
      return pt(Te, ct, Y);
    }),
    (t.addHook = function (T, ee) {
      typeof ee == "function" && ((C[T] = C[T] || []), Yi(C[T], ee));
    }),
    (t.removeHook = function (T) {
      if (C[T]) return U0(C[T]);
    }),
    (t.removeHooks = function (T) {
      C[T] && (C[T] = []);
    }),
    (t.removeAllHooks = function () {
      C = {};
    }),
    t
  );
}
var pN = ib(),
  gN = (e) => {
    switch (e) {
      case "success":
        return vN;
      case "info":
        return xN;
      case "warning":
        return bN;
      case "error":
        return wN;
      default:
        return null;
    }
  },
  mN = Array(12).fill(0),
  yN = ({ visible: e }) =>
    V.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      V.createElement(
        "div",
        { className: "sonner-spinner" },
        mN.map((t, r) =>
          V.createElement("div", {
            className: "sonner-loading-bar",
            key: "spinner-bar-".concat(r),
          })
        )
      )
    ),
  vN = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  bN = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  xN = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  wN = V.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    V.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  kN = () => {
    let [e, t] = V.useState(!1);
    return (
      V.useEffect(() => {
        let r = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      e
    );
  },
  Yd = 1,
  SN = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: r, ...n } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Yd++,
            i = this.toasts.find((s) => s.id === o),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            i
              ? (this.toasts = this.toasts.map((s) =>
                  s.id === o
                    ? (this.publish({ ...s, ...e, id: o, title: r }),
                      { ...s, ...e, id: o, dismissible: a, title: r })
                    : s
                ))
              : this.addToast({ title: r, ...n, dismissible: a, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let r;
          t.loading !== void 0 &&
            (r = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let n = e instanceof Promise ? e : e(),
            o = r !== void 0;
          return (
            n
              .then((i) => {
                if (i && typeof i.ok == "boolean" && !i.ok) {
                  o = !1;
                  let a =
                      typeof t.error == "function"
                        ? t.error("HTTP error! status: ".concat(i.status))
                        : t.error,
                    s =
                      typeof t.description == "function"
                        ? t.description("HTTP error! status: ".concat(i.status))
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: a,
                    description: s,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let a =
                      typeof t.success == "function" ? t.success(i) : t.success,
                    s =
                      typeof t.description == "function"
                        ? t.description(i)
                        : t.description;
                  this.create({
                    id: r,
                    type: "success",
                    message: a,
                    description: s,
                  });
                }
              })
              .catch((i) => {
                if (t.error !== void 0) {
                  o = !1;
                  let a = typeof t.error == "function" ? t.error(i) : t.error,
                    s =
                      typeof t.description == "function"
                        ? t.description(i)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: a,
                    description: s,
                  });
                }
              })
              .finally(() => {
                var i;
                o && (this.dismiss(r), (r = void 0)),
                  (i = t.finally) == null || i.call(t);
              }),
            r
          );
        }),
        (this.custom = (e, t) => {
          let r = (t == null ? void 0 : t.id) || Yd++;
          return this.create({ jsx: e(r), id: r, ...t }), r;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Ir = new SN(),
  EN = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Yd++;
    return Ir.addToast({ title: e, ...t, id: r }), r;
  },
  CN = EN,
  hr = Object.assign(CN, {
    success: Ir.success,
    info: Ir.info,
    warning: Ir.warning,
    error: Ir.error,
    custom: Ir.custom,
    message: Ir.message,
    promise: Ir.promise,
    dismiss: Ir.dismiss,
    loading: Ir.loading,
  });
function jN(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  (n.type = "text/css"),
    t === "top" && r.firstChild
      ? r.insertBefore(n, r.firstChild)
      : r.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e));
}
jN(
  ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
);
function js(e) {
  return e.label !== void 0 && typeof e.onClick == "function";
}
var NN = 3,
  TN = "32px",
  ON = 4e3,
  RN = 356,
  PN = 14,
  _N = 20,
  MN = 200;
function LN(...e) {
  return e.filter(Boolean).join(" ");
}
var DN = (e) => {
  var t, r, n, o, i, a, s;
  let {
      invert: l,
      toast: u,
      unstyled: f,
      interacting: d,
      setHeights: h,
      visibleToasts: p,
      heights: m,
      index: v,
      toasts: k,
      expanded: y,
      removeToast: g,
      closeButton: b,
      style: w,
      cancelButtonStyle: S,
      actionButtonStyle: j,
      className: E = "",
      descriptionClassName: I = "",
      duration: O,
      position: C,
      gap: D,
      loadingIcon: P,
      expandByDefault: _,
      classNames: N,
      icons: L,
      closeButtonAriaLabel: B = "Close toast",
      pauseWhenPageIsHidden: W,
      cn: R,
    } = e,
    [F, z] = V.useState(!1),
    [U, H] = V.useState(!1),
    [J, X] = V.useState(!1),
    [re, ae] = V.useState(!1),
    [be, ge] = V.useState(0),
    [Ne, Be] = V.useState(0),
    ut = V.useRef(null),
    ie = V.useRef(null),
    Ie = v === 0,
    _e = v + 1 <= p,
    pe = u.type,
    Le = u.dismissible !== !1,
    zt = u.className || "",
    ce = u.descriptionClassName || "",
    ft = V.useMemo(
      () => m.findIndex((fe) => fe.toastId === u.id) || 0,
      [m, u.id]
    ),
    Ft = V.useMemo(() => {
      var fe;
      return (fe = u.closeButton) != null ? fe : b;
    }, [u.closeButton, b]),
    Ot = V.useMemo(() => u.duration || O || ON, [u.duration, O]),
    rt = V.useRef(0),
    De = V.useRef(0),
    Rt = V.useRef(0),
    jt = V.useRef(null),
    [He, $t] = C.split("-"),
    mt = V.useMemo(
      () => m.reduce((fe, Ge, Pe) => (Pe >= ft ? fe : fe + Ge.height), 0),
      [m, ft]
    ),
    Yt = kN(),
    Qr = u.invert || l,
    yt = pe === "loading";
  (De.current = V.useMemo(() => ft * D + mt, [ft, mt])),
    V.useEffect(() => {
      z(!0);
    }, []),
    V.useLayoutEffect(() => {
      if (!F) return;
      let fe = ie.current,
        Ge = fe.style.height;
      fe.style.height = "auto";
      let Pe = fe.getBoundingClientRect().height;
      (fe.style.height = Ge),
        Be(Pe),
        h((Gt) =>
          Gt.find((Ut) => Ut.toastId === u.id)
            ? Gt.map((Ut) => (Ut.toastId === u.id ? { ...Ut, height: Pe } : Ut))
            : [{ toastId: u.id, height: Pe, position: u.position }, ...Gt]
        );
    }, [F, u.title, u.description, h, u.id]);
  let ht = V.useCallback(() => {
    H(!0),
      ge(De.current),
      h((fe) => fe.filter((Ge) => Ge.toastId !== u.id)),
      setTimeout(() => {
        g(u);
      }, MN);
  }, [u, g, h, De]);
  V.useEffect(() => {
    if (
      (u.promise && pe === "loading") ||
      u.duration === 1 / 0 ||
      u.type === "loading"
    )
      return;
    let fe,
      Ge = Ot;
    return (
      y || d || (W && Yt)
        ? (() => {
            if (Rt.current < rt.current) {
              let Pe = new Date().getTime() - rt.current;
              Ge = Ge - Pe;
            }
            Rt.current = new Date().getTime();
          })()
        : Ge !== 1 / 0 &&
          ((rt.current = new Date().getTime()),
          (fe = setTimeout(() => {
            var Pe;
            (Pe = u.onAutoClose) == null || Pe.call(u, u), ht();
          }, Ge))),
      () => clearTimeout(fe)
    );
  }, [y, d, _, u, Ot, ht, u.promise, pe, W, Yt]),
    V.useEffect(() => {
      let fe = ie.current;
      if (fe) {
        let Ge = fe.getBoundingClientRect().height;
        return (
          Be(Ge),
          h((Pe) => [
            { toastId: u.id, height: Ge, position: u.position },
            ...Pe,
          ]),
          () => h((Pe) => Pe.filter((Gt) => Gt.toastId !== u.id))
        );
      }
    }, [h, u.id]),
    V.useEffect(() => {
      u.delete && ht();
    }, [ht, u.delete]);
  function Pr() {
    return L != null && L.loading
      ? V.createElement(
          "div",
          { className: "sonner-loader", "data-visible": pe === "loading" },
          L.loading
        )
      : P
      ? V.createElement(
          "div",
          { className: "sonner-loader", "data-visible": pe === "loading" },
          P
        )
      : V.createElement(yN, { visible: pe === "loading" });
  }
  function tn(fe) {
    return { __html: pN.sanitize(fe) };
  }
  return V.createElement(
    "li",
    {
      "aria-live": u.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: ie,
      className: R(
        E,
        zt,
        N == null ? void 0 : N.toast,
        (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast,
        N == null ? void 0 : N.default,
        N == null ? void 0 : N[pe],
        (r = u == null ? void 0 : u.classNames) == null ? void 0 : r[pe]
      ),
      "data-sonner-toast": "",
      "data-styled": !(u.jsx || u.unstyled || f),
      "data-mounted": F,
      "data-promise": !!u.promise,
      "data-removed": U,
      "data-visible": _e,
      "data-y-position": He,
      "data-x-position": $t,
      "data-index": v,
      "data-front": Ie,
      "data-swiping": J,
      "data-dismissible": Le,
      "data-type": pe,
      "data-invert": Qr,
      "data-swipe-out": re,
      "data-expanded": !!(y || (_ && F)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": k.length - v,
        "--offset": "".concat(U ? be : De.current, "px"),
        "--initial-height": _ ? "auto" : "".concat(Ne, "px"),
        ...w,
        ...u.style,
      },
      onPointerDown: (fe) => {
        yt ||
          !Le ||
          ((ut.current = new Date()),
          ge(De.current),
          fe.target.setPointerCapture(fe.pointerId),
          fe.target.tagName !== "BUTTON" &&
            (X(!0), (jt.current = { x: fe.clientX, y: fe.clientY })));
      },
      onPointerUp: () => {
        var fe, Ge, Pe, Gt;
        if (re || !Le) return;
        jt.current = null;
        let Ut = Number(
            ((fe = ie.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount")
                  .replace("px", "")) || 0
          ),
          We =
            new Date().getTime() -
            ((Ge = ut.current) == null ? void 0 : Ge.getTime()),
          _r = Math.abs(Ut) / We;
        if (Math.abs(Ut) >= _N || _r > 0.11) {
          ge(De.current),
            (Pe = u.onDismiss) == null || Pe.call(u, u),
            ht(),
            ae(!0);
          return;
        }
        (Gt = ie.current) == null ||
          Gt.style.setProperty("--swipe-amount", "0px"),
          X(!1);
      },
      onPointerMove: (fe) => {
        var Ge;
        if (!jt.current || !Le) return;
        let Pe = fe.clientY - jt.current.y,
          Gt = fe.clientX - jt.current.x,
          Ut = (He === "top" ? Math.min : Math.max)(0, Pe),
          We = fe.pointerType === "touch" ? 10 : 2;
        Math.abs(Ut) > We
          ? (Ge = ie.current) == null ||
            Ge.style.setProperty("--swipe-amount", "".concat(Pe, "px"))
          : Math.abs(Gt) > We && (jt.current = null);
      },
    },
    Ft && !u.jsx
      ? V.createElement(
          "button",
          {
            "aria-label": B,
            "data-disabled": yt,
            "data-close-button": !0,
            onClick:
              yt || !Le
                ? () => {}
                : () => {
                    var fe;
                    ht(), (fe = u.onDismiss) == null || fe.call(u, u);
                  },
            className: R(
              N == null ? void 0 : N.closeButton,
              (n = u == null ? void 0 : u.classNames) == null
                ? void 0
                : n.closeButton
            ),
          },
          V.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            V.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            V.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    u.jsx || V.isValidElement(u.title)
      ? u.jsx || u.title
      : V.createElement(
          V.Fragment,
          null,
          pe || u.icon || u.promise
            ? V.createElement(
                "div",
                { "data-icon": "", className: R(N == null ? void 0 : N.icon) },
                u.promise || (u.type === "loading" && !u.icon)
                  ? u.icon || Pr()
                  : null,
                u.type !== "loading"
                  ? u.icon || (L == null ? void 0 : L[pe]) || gN(pe)
                  : null
              )
            : null,
          V.createElement(
            "div",
            {
              "data-content": "",
              className: R(N == null ? void 0 : N.content),
            },
            V.createElement("div", {
              "data-title": "",
              className: R(
                N == null ? void 0 : N.title,
                (o = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : o.title
              ),
              dangerouslySetInnerHTML: tn(u.title),
            }),
            u.description
              ? V.createElement("div", {
                  "data-description": "",
                  className: R(
                    I,
                    ce,
                    N == null ? void 0 : N.description,
                    (i = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : i.description
                  ),
                  dangerouslySetInnerHTML: tn(u.description),
                })
              : null
          ),
          V.isValidElement(u.cancel)
            ? u.cancel
            : u.cancel && js(u.cancel)
            ? V.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: u.cancelButtonStyle || S,
                  onClick: (fe) => {
                    js(u.cancel) && Le && (ht(), u.cancel.onClick(fe));
                  },
                  className: R(
                    N == null ? void 0 : N.cancelButton,
                    (a = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : a.cancelButton
                  ),
                },
                u.cancel.label
              )
            : null,
          V.isValidElement(u.action)
            ? u.action
            : u.action && js(u.action)
            ? V.createElement(
                "button",
                {
                  "data-button": "",
                  style: u.actionButtonStyle || j,
                  onClick: (fe) => {
                    js(u.action) &&
                      (u.action.onClick(fe), !fe.defaultPrevented && ht());
                  },
                  className: R(
                    N == null ? void 0 : N.actionButton,
                    (s = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : s.actionButton
                  ),
                },
                u.action.label
              )
            : null
        )
  );
};
function K0() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var IN = (e) => {
  let {
      invert: t,
      position: r = "bottom-right",
      hotkey: n = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: a,
      offset: s,
      theme: l = "light",
      richColors: u,
      duration: f,
      style: d,
      visibleToasts: h = NN,
      toastOptions: p,
      dir: m = K0(),
      gap: v = PN,
      loadingIcon: k,
      icons: y,
      containerAriaLabel: g = "Notifications",
      pauseWhenPageIsHidden: b,
      cn: w = LN,
    } = e,
    [S, j] = V.useState([]),
    E = V.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(S.filter((U) => U.position).map((U) => U.position))
          )
        ),
      [S, r]
    ),
    [I, O] = V.useState([]),
    [C, D] = V.useState(!1),
    [P, _] = V.useState(!1),
    [N, L] = V.useState(
      l !== "system"
        ? l
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    B = V.useRef(null),
    W = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = V.useRef(null),
    F = V.useRef(!1),
    z = V.useCallback((U) => j((H) => H.filter(({ id: J }) => J !== U.id)), []);
  return (
    V.useEffect(
      () =>
        Ir.subscribe((U) => {
          if (U.dismiss) {
            j((H) => H.map((J) => (J.id === U.id ? { ...J, delete: !0 } : J)));
            return;
          }
          setTimeout(() => {
            Jf.flushSync(() => {
              j((H) => {
                let J = H.findIndex((X) => X.id === U.id);
                return J !== -1
                  ? [...H.slice(0, J), { ...H[J], ...U }, ...H.slice(J + 1)]
                  : [U, ...H];
              });
            });
          });
        }),
      []
    ),
    V.useEffect(() => {
      if (l !== "system") {
        L(l);
        return;
      }
      l === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? L("dark")
          : L("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: U }) => {
              L(U ? "dark" : "light");
            });
    }, [l]),
    V.useEffect(() => {
      S.length <= 1 && D(!1);
    }, [S]),
    V.useEffect(() => {
      let U = (H) => {
        var J, X;
        n.every((re) => H[re] || H.code === re) &&
          (D(!0), (J = B.current) == null || J.focus()),
          H.code === "Escape" &&
            (document.activeElement === B.current ||
              ((X = B.current) != null &&
                X.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
      );
    }, [n]),
    V.useEffect(() => {
      if (B.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (F.current = !1));
        };
    }, [B.current]),
    S.length
      ? V.createElement(
          "section",
          { "aria-label": "".concat(g, " ").concat(W), tabIndex: -1 },
          E.map((U, H) => {
            var J;
            let [X, re] = U.split("-");
            return V.createElement(
              "ol",
              {
                key: U,
                dir: m === "auto" ? K0() : m,
                tabIndex: -1,
                ref: B,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": N,
                "data-rich-colors": u,
                "data-y-position": X,
                "data-x-position": re,
                style: {
                  "--front-toast-height": "".concat(
                    ((J = I[0]) == null ? void 0 : J.height) || 0,
                    "px"
                  ),
                  "--offset":
                    typeof s == "number" ? "".concat(s, "px") : s || TN,
                  "--width": "".concat(RN, "px"),
                  "--gap": "".concat(v, "px"),
                  ...d,
                },
                onBlur: (ae) => {
                  F.current &&
                    !ae.currentTarget.contains(ae.relatedTarget) &&
                    ((F.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (ae) => {
                  (ae.target instanceof HTMLElement &&
                    ae.target.dataset.dismissible === "false") ||
                    F.current ||
                    ((F.current = !0), (R.current = ae.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  P || D(!1);
                },
                onPointerDown: (ae) => {
                  (ae.target instanceof HTMLElement &&
                    ae.target.dataset.dismissible === "false") ||
                    _(!0);
                },
                onPointerUp: () => _(!1),
              },
              S.filter(
                (ae) => (!ae.position && H === 0) || ae.position === U
              ).map((ae, be) => {
                var ge, Ne;
                return V.createElement(DN, {
                  key: ae.id,
                  icons: y,
                  index: be,
                  toast: ae,
                  duration:
                    (ge = p == null ? void 0 : p.duration) != null ? ge : f,
                  className: p == null ? void 0 : p.className,
                  descriptionClassName:
                    p == null ? void 0 : p.descriptionClassName,
                  invert: t,
                  visibleToasts: h,
                  closeButton:
                    (Ne = p == null ? void 0 : p.closeButton) != null ? Ne : i,
                  interacting: P,
                  position: U,
                  style: p == null ? void 0 : p.style,
                  unstyled: p == null ? void 0 : p.unstyled,
                  classNames: p == null ? void 0 : p.classNames,
                  cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                  actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                  removeToast: z,
                  toasts: S.filter((Be) => Be.position == ae.position),
                  heights: I.filter((Be) => Be.position == ae.position),
                  setHeights: O,
                  expandByDefault: o,
                  gap: v,
                  loadingIcon: k,
                  expanded: C,
                  pauseWhenPageIsHidden: b,
                  cn: w,
                });
              })
            );
          })
        )
      : null
  );
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/ var ab = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Y0 = V.createContext && V.createContext(ab),
  AN = ["attr", "size", "title"];
function zN(e, t) {
  if (e == null) return {};
  var r = FN(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function FN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Fl() {
  return (
    (Fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fl.apply(this, arguments)
  );
}
function G0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? G0(Object(r), !0).forEach(function (n) {
          $N(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : G0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $N(e, t, r) {
  return (
    (t = UN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function UN(e) {
  var t = BN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sb(e) {
  return (
    e &&
    e.map((t, r) => V.createElement(t.tag, $l({ key: r }, t.attr), sb(t.child)))
  );
}
function xr(e) {
  return (t) =>
    V.createElement(HN, Fl({ attr: $l({}, e.attr) }, t), sb(e.child));
}
function HN(e) {
  var t = (r) => {
    var { attr: n, size: o, title: i } = e,
      a = zN(e, AN),
      s = o || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      V.createElement(
        "svg",
        Fl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: l,
            style: $l($l({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && V.createElement("title", null, i),
        e.children
      )
    );
  };
  return Y0 !== void 0
    ? V.createElement(Y0.Consumer, null, (r) => t(r))
    : t(ab);
}
function WN(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z",
        },
        child: [],
      },
    ],
  })(e);
}
function QN(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function VN(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function qN(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
        },
        child: [],
      },
    ],
  })(e);
}
function Su({ product: e, isAuthenticated: t, inFavorites: r, refetch: n }) {
  const o = t,
    i = Dt((w) => w),
    a = Ke((w) => w.cart),
    [s, l] = x.useState(!1),
    u = Ke((w) => w.addToCart),
    f = Ke((w) => w.incrementQuantity),
    d = Ke((w) => w.decrementQuantity),
    [h, p] = x.useState(1),
    m = Ke((w) => w.getTotalQuantity()),
    v = lh(
      async (w) => {
        const S = await fetch("".concat(Wr, "/user/fav"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(i.token),
          },
          body: JSON.stringify(w),
        });
        S.ok || hr.error("فشلت في الإضافة إلى المفضلة"),
          (await S.json()).success
            ? (hr.success("تمت الإضافة إلى المفضلة بنجاح"),
              typeof n == "function" && n(),
              i.setFavorites())
            : hr.error("المنتج موجود بالفعل في المفضلة");
      },
      {
        onError: () => {
          hr.error("فشلت في الإضافة إلى المفضلة");
        },
      }
    ),
    k = () => {
      o ? v.mutate({ product_id: y.id }) : hr.error("يجب عليك تسجيل الدخول");
    };
  x.useEffect(() => {
    const w = a.find((S) => S.id === e.id);
    w && (l(!0), p(w.quantity));
  }, [a, e.id, m]);
  const y = {
      id: e.id,
      quantity: h,
      name: e.name,
      image: e.image,
      price: e.price,
    },
    g = () => {
      h < 20 && p(h + 1), f(e.id);
    },
    b = () => {
      h > 1 && p(h - 1), d(e.id);
    };
  return e.available === 0
    ? null
    : c.jsxs(
        "div",
        {
          className: "block rounded-lg p-4 shadow-lg bg-white relative",
          children: [
            c.jsx(Qt, {
              to: "/products/".concat(e.id),
              children: c.jsx("img", {
                alt: e.name,
                src: Co + e.image,
                className: "h-56 w-full rounded-md object-cover",
              }),
            }),
            c.jsx(Qt, {
              to: "/products/".concat(e.id),
              children: c.jsx("div", {
                className: "mt-2",
                children: c.jsxs("dl", {
                  children: [
                    e.offer > 0
                      ? c.jsxs("div", {
                          className: "container",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("dt", {
                                  className: "sr-only",
                                  children: "Price",
                                }),
                                c.jsxs("dd", {
                                  className:
                                    "text-sm text-gray-500 line-through",
                                  children: [e.price + e.offer, " ج"],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("dt", {
                                  className: "sr-only",
                                  children: "Offer Price",
                                }),
                                c.jsxs("dd", {
                                  className: "text-sm text-primary font-bold",
                                  children: [e.price, " ج"],
                                }),
                              ],
                            }),
                          ],
                        })
                      : c.jsxs("div", {
                          children: [
                            c.jsx("dt", {
                              className: "sr-only",
                              children: "Price",
                            }),
                            c.jsxs("dd", {
                              className: "text-sm text-primary",
                              children: [e.price, " ج"],
                            }),
                          ],
                        }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("dt", {
                          className: "sr-only",
                          children: "Product Name",
                        }),
                        c.jsx("dd", {
                          className: "font-medium",
                          children: e.name,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            c.jsxs("div", {
              className:
                "buttons absolute top-5 left-5 flex flex-col text-primary text-3xl gap-2 md:gap-5",
              children: [
                c.jsx("button", {
                  id: "addBtn",
                  onClick: () => u(y),
                  className: "".concat(
                    s ? "hidden" : "flex",
                    " bg-white p-2 rounded shadow z-50x"
                  ),
                  children: c.jsx(WN, {}),
                }),
                c.jsxs("div", {
                  className: "inCart ".concat(
                    s ? "flex" : "hidden",
                    " bg-white p-1 flex-col items-center rounded shadow gap-2"
                  ),
                  children: [
                    c.jsx("button", {
                      onClick: g,
                      className:
                        "text-lg border border-primary rounded-lg cursor-pointer grid place-items-center w-full h-8",
                      children: c.jsx(qN, {}),
                    }),
                    c.jsx("p", { className: "Quantity text-lg", children: h }),
                    c.jsx("button", {
                      onClick: b,
                      className:
                        "text-lg border border-primary rounded-lg cursor-pointer grid place-items-center w-full h-8",
                      children: c.jsx(VN, {}),
                    }),
                  ],
                }),
                o &&
                  !r &&
                  c.jsx("button", {
                    onClick: k,
                    id: "addToFav",
                    className: "bg-white p-2 rounded shadow",
                    children: c.jsx(QN, {
                      className: "".concat(
                        e.isFavorite ? "text-red-500" : "text-black"
                      ),
                    }),
                  }),
              ],
            }),
          ],
        },
        e.id
      );
}
var lb = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  X0 = V.createContext && V.createContext(lb),
  KN = ["attr", "size", "title"];
function YN(e, t) {
  if (e == null) return {};
  var r = GN(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function GN(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ul.apply(this, arguments)
  );
}
function J0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? J0(Object(r), !0).forEach(function (n) {
          XN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : J0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function XN(e, t, r) {
  return (
    (t = JN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JN(e) {
  var t = ZN(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ZN(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ub(e) {
  return (
    e &&
    e.map((t, r) => V.createElement(t.tag, Bl({ key: r }, t.attr), ub(t.child)))
  );
}
function Kt(e) {
  return (t) =>
    V.createElement(eT, Ul({ attr: Bl({}, e.attr) }, t), ub(e.child));
}
function eT(e) {
  var t = (r) => {
    var { attr: n, size: o, title: i } = e,
      a = YN(e, KN),
      s = o || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      V.createElement(
        "svg",
        Ul(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: l,
            style: Bl(Bl({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && V.createElement("title", null, i),
        e.children
      )
    );
  };
  return X0 !== void 0
    ? V.createElement(X0.Consumer, null, (r) => t(r))
    : t(lb);
}
function tT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function rT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function nT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function cb(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function oT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function iT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function aT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
        },
        child: [],
      },
    ],
  })(e);
}
function sT(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function db(e) {
  return Kt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 9l-7 7-7-7",
        },
        child: [],
      },
    ],
  })(e);
}
function lT(e) {
  return Kt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 19l-7-7 7-7",
        },
        child: [],
      },
    ],
  })(e);
}
function fb(e) {
  return Kt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 5l7 7-7 7",
        },
        child: [],
      },
    ],
  })(e);
}
function uT(e) {
  return Kt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 15l7-7 7 7",
        },
        child: [],
      },
    ],
  })(e);
}
function cT(e) {
  return Kt({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18L18 6M6 6l12 12",
        },
        child: [],
      },
    ],
  })(e);
}
const dh = "-";
function dT(e) {
  const t = hT(e),
    { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
  function o(a) {
    const s = a.split(dh);
    return s[0] === "" && s.length !== 1 && s.shift(), hb(s, t) || fT(a);
  }
  function i(a, s) {
    const l = r[a] || [];
    return s && n[a] ? [...l, ...n[a]] : l;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function hb(e, t) {
  var a;
  if (e.length === 0) return t.classGroupId;
  const r = e[0],
    n = t.nextPart.get(r),
    o = n ? hb(e.slice(1), n) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(dh);
  return (a = t.validators.find(({ validator: s }) => s(i))) == null
    ? void 0
    : a.classGroupId;
}
const Z0 = /^\[(.+)\]$/;
function fT(e) {
  if (Z0.test(e)) {
    const t = Z0.exec(e)[1],
      r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
}
function hT(e) {
  const { theme: t, prefix: r } = e,
    n = { nextPart: new Map(), validators: [] };
  return (
    gT(Object.entries(e.classGroups), r).forEach(([i, a]) => {
      Gd(a, n, i, t);
    }),
    n
  );
}
function Gd(e, t, r, n) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : eg(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (pT(o)) {
        Gd(o(n), t, r, n);
        return;
      }
      t.validators.push({ validator: o, classGroupId: r });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Gd(a, eg(t, i), r, n);
    });
  });
}
function eg(e, t) {
  let r = e;
  return (
    t.split(dh).forEach((n) => {
      r.nextPart.has(n) ||
        r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
        (r = r.nextPart.get(n));
    }),
    r
  );
}
function pT(e) {
  return e.isThemeGetter;
}
function gT(e, t) {
  return t
    ? e.map(([r, n]) => {
        const o = n.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s]))
            : i
        );
        return [r, o];
      })
    : e;
}
function mT(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    r = new Map(),
    n = new Map();
  function o(i, a) {
    r.set(i, a), t++, t > e && ((t = 0), (n = r), (r = new Map()));
  }
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0) return a;
      if ((a = n.get(i)) !== void 0) return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    },
  };
}
const pb = "!";
function yT(e) {
  const t = e.separator,
    r = t.length === 1,
    n = t[0],
    o = t.length;
  return function (a) {
    const s = [];
    let l = 0,
      u = 0,
      f;
    for (let v = 0; v < a.length; v++) {
      let k = a[v];
      if (l === 0) {
        if (k === n && (r || a.slice(v, v + o) === t)) {
          s.push(a.slice(u, v)), (u = v + o);
          continue;
        }
        if (k === "/") {
          f = v;
          continue;
        }
      }
      k === "[" ? l++ : k === "]" && l--;
    }
    const d = s.length === 0 ? a : a.substring(u),
      h = d.startsWith(pb),
      p = h ? d.substring(1) : d,
      m = f && f > u ? f - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: m,
    };
  };
}
function vT(e) {
  if (e.length <= 1) return e;
  const t = [];
  let r = [];
  return (
    e.forEach((n) => {
      n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
    }),
    t.push(...r.sort()),
    t
  );
}
function bT(e) {
  return { cache: mT(e.cacheSize), splitModifiers: yT(e), ...dT(e) };
}
const xT = /\s+/;
function wT(e, t) {
  const {
      splitModifiers: r,
      getClassGroupId: n,
      getConflictingClassGroupIds: o,
    } = t,
    i = new Set();
  return e
    .trim()
    .split(xT)
    .map((a) => {
      const {
        modifiers: s,
        hasImportantModifier: l,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = r(a);
      let d = n(f ? u.substring(0, f) : u),
        h = !!f;
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: a };
        if (((d = n(u)), !d))
          return { isTailwindClass: !1, originalClassName: a };
        h = !1;
      }
      const p = vT(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? p + pb : p,
        classGroupId: d,
        originalClassName: a,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((a) => {
      if (!a.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: l, hasPostfixModifier: u } = a,
        f = s + l;
      return i.has(f)
        ? !1
        : (i.add(f), o(l, u).forEach((d) => i.add(s + d)), !0);
    })
    .reverse()
    .map((a) => a.originalClassName)
    .join(" ");
}
function kT() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = gb(t)) && (n && (n += " "), (n += r));
  return n;
}
function gb(e) {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = gb(e[n])) && (r && (r += " "), (r += t));
  return r;
}
function ST(e, ...t) {
  let r,
    n,
    o,
    i = a;
  function a(l) {
    const u = t.reduce((f, d) => d(f), e());
    return (r = bT(u)), (n = r.cache.get), (o = r.cache.set), (i = s), s(l);
  }
  function s(l) {
    const u = n(l);
    if (u) return u;
    const f = wT(l, r);
    return o(l, f), f;
  }
  return function () {
    return i(kT.apply(null, arguments));
  };
}
function Ve(e) {
  const t = (r) => r[e] || [];
  return (t.isThemeGetter = !0), t;
}
const mb = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ET = /^\d+\/\d+$/,
  CT = new Set(["px", "full", "screen"]),
  jT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  NT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  TT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  OT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  RT =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function rn(e) {
  return ho(e) || CT.has(e) || ET.test(e);
}
function En(e) {
  return Pi(e, "length", zT);
}
function ho(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ns(e) {
  return Pi(e, "number", ho);
}
function Ji(e) {
  return !!e && Number.isInteger(Number(e));
}
function PT(e) {
  return e.endsWith("%") && ho(e.slice(0, -1));
}
function xe(e) {
  return mb.test(e);
}
function Cn(e) {
  return jT.test(e);
}
const _T = new Set(["length", "size", "percentage"]);
function MT(e) {
  return Pi(e, _T, yb);
}
function LT(e) {
  return Pi(e, "position", yb);
}
const DT = new Set(["image", "url"]);
function IT(e) {
  return Pi(e, DT, $T);
}
function AT(e) {
  return Pi(e, "", FT);
}
function Zi() {
  return !0;
}
function Pi(e, t, r) {
  const n = mb.exec(e);
  return n
    ? n[1]
      ? typeof t == "string"
        ? n[1] === t
        : t.has(n[1])
      : r(n[2])
    : !1;
}
function zT(e) {
  return NT.test(e) && !TT.test(e);
}
function yb() {
  return !1;
}
function FT(e) {
  return OT.test(e);
}
function $T(e) {
  return RT.test(e);
}
function UT() {
  const e = Ve("colors"),
    t = Ve("spacing"),
    r = Ve("blur"),
    n = Ve("brightness"),
    o = Ve("borderColor"),
    i = Ve("borderRadius"),
    a = Ve("borderSpacing"),
    s = Ve("borderWidth"),
    l = Ve("contrast"),
    u = Ve("grayscale"),
    f = Ve("hueRotate"),
    d = Ve("invert"),
    h = Ve("gap"),
    p = Ve("gradientColorStops"),
    m = Ve("gradientColorStopPositions"),
    v = Ve("inset"),
    k = Ve("margin"),
    y = Ve("opacity"),
    g = Ve("padding"),
    b = Ve("saturate"),
    w = Ve("scale"),
    S = Ve("sepia"),
    j = Ve("skew"),
    E = Ve("space"),
    I = Ve("translate"),
    O = () => ["auto", "contain", "none"],
    C = () => ["auto", "hidden", "clip", "visible", "scroll"],
    D = () => ["auto", xe, t],
    P = () => [xe, t],
    _ = () => ["", rn, En],
    N = () => ["auto", ho, xe],
    L = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    B = () => ["solid", "dashed", "dotted", "double", "none"],
    W = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    R = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    F = () => ["", "0", xe],
    z = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    U = () => [ho, Ns],
    H = () => [ho, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Zi],
      spacing: [rn, En],
      blur: ["none", "", Cn, xe],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Cn, xe],
      borderSpacing: P(),
      borderWidth: _(),
      contrast: U(),
      grayscale: F(),
      hueRotate: H(),
      invert: F(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [PT, En],
      inset: D(),
      margin: D(),
      opacity: U(),
      padding: P(),
      saturate: U(),
      scale: U(),
      sepia: F(),
      skew: H(),
      space: P(),
      translate: P(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", xe] }],
      container: ["container"],
      columns: [{ columns: [Cn] }],
      "break-after": [{ "break-after": z() }],
      "break-before": [{ "break-before": z() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...L(), xe] }],
      overflow: [{ overflow: C() }],
      "overflow-x": [{ "overflow-x": C() }],
      "overflow-y": [{ "overflow-y": C() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Ji, xe] }],
      basis: [{ basis: D() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", xe] }],
      grow: [{ grow: F() }],
      shrink: [{ shrink: F() }],
      order: [{ order: ["first", "last", "none", Ji, xe] }],
      "grid-cols": [{ "grid-cols": [Zi] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Ji, xe] }, xe] }],
      "col-start": [{ "col-start": N() }],
      "col-end": [{ "col-end": N() }],
      "grid-rows": [{ "grid-rows": [Zi] }],
      "row-start-end": [{ row: ["auto", { span: [Ji, xe] }, xe] }],
      "row-start": [{ "row-start": N() }],
      "row-end": [{ "row-end": N() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", xe] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", xe] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...R()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...R(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...R(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [g] }],
      px: [{ px: [g] }],
      py: [{ py: [g] }],
      ps: [{ ps: [g] }],
      pe: [{ pe: [g] }],
      pt: [{ pt: [g] }],
      pr: [{ pr: [g] }],
      pb: [{ pb: [g] }],
      pl: [{ pl: [g] }],
      m: [{ m: [k] }],
      mx: [{ mx: [k] }],
      my: [{ my: [k] }],
      ms: [{ ms: [k] }],
      me: [{ me: [k] }],
      mt: [{ mt: [k] }],
      mr: [{ mr: [k] }],
      mb: [{ mb: [k] }],
      ml: [{ ml: [k] }],
      "space-x": [{ "space-x": [E] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [E] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xe, t] }],
      "min-w": [{ "min-w": [xe, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            xe,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Cn] },
            Cn,
          ],
        },
      ],
      h: [{ h: [xe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [xe, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Cn, En] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Ns,
          ],
        },
      ],
      "font-family": [{ font: [Zi] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            xe,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", ho, Ns] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            rn,
            xe,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", xe] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", xe] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", rn, En] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", rn, xe] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: P() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            xe,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", xe] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...L(), LT] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", MT] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            IT,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [m] }],
      "gradient-via-pos": [{ via: [m] }],
      "gradient-to-pos": [{ to: [m] }],
      "gradient-from": [{ from: [p] }],
      "gradient-via": [{ via: [p] }],
      "gradient-to": [{ to: [p] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...B(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: B() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...B()] }],
      "outline-offset": [{ "outline-offset": [rn, xe] }],
      "outline-w": [{ outline: [rn, En] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: _() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [rn, En] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Cn, AT] }],
      "shadow-color": [{ shadow: [Zi] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": W() }],
      "bg-blend": [{ "bg-blend": W() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [r] }],
      brightness: [{ brightness: [n] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Cn, xe] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [b] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [r] }],
      "backdrop-brightness": [{ "backdrop-brightness": [n] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [b] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            xe,
          ],
        },
      ],
      duration: [{ duration: H() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", xe] }],
      delay: [{ delay: H() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", xe] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [w] }],
      "scale-x": [{ "scale-x": [w] }],
      "scale-y": [{ "scale-y": [w] }],
      rotate: [{ rotate: [Ji, xe] }],
      "translate-x": [{ "translate-x": [I] }],
      "translate-y": [{ "translate-y": [I] }],
      "skew-x": [{ "skew-x": [j] }],
      "skew-y": [{ "skew-y": [j] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            xe,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            xe,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": P() }],
      "scroll-mx": [{ "scroll-mx": P() }],
      "scroll-my": [{ "scroll-my": P() }],
      "scroll-ms": [{ "scroll-ms": P() }],
      "scroll-me": [{ "scroll-me": P() }],
      "scroll-mt": [{ "scroll-mt": P() }],
      "scroll-mr": [{ "scroll-mr": P() }],
      "scroll-mb": [{ "scroll-mb": P() }],
      "scroll-ml": [{ "scroll-ml": P() }],
      "scroll-p": [{ "scroll-p": P() }],
      "scroll-px": [{ "scroll-px": P() }],
      "scroll-py": [{ "scroll-py": P() }],
      "scroll-ps": [{ "scroll-ps": P() }],
      "scroll-pe": [{ "scroll-pe": P() }],
      "scroll-pt": [{ "scroll-pt": P() }],
      "scroll-pr": [{ "scroll-pr": P() }],
      "scroll-pb": [{ "scroll-pb": P() }],
      "scroll-pl": [{ "scroll-pl": P() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", xe] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [rn, En, Ns] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const $ = ST(UT);
function oo(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function za(e) {
  if (!oo(e)) return e;
  const t = {};
  for (const r in e) t[r] = za(e[r]);
  return t;
}
function G(e, t) {
  if (oo(t) && Object.keys(t).length === 0) return za({ ...e, ...t });
  const r = { ...e, ...t };
  if (oo(t) && oo(e))
    for (const n in t)
      oo(t[n]) && n in e && oo(e[n])
        ? (r[n] = G(e[n], t[n]))
        : (r[n] = oo(t[n]) ? za(t[n]) : t[n]);
  return r;
}
const BT = {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: { off: "rounded-lg border", on: "border-b" },
    },
    content: {
      base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
    },
    title: {
      arrow: { base: "h-6 w-6 shrink-0", open: { off: "", on: "rotate-180" } },
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "",
      open: {
        off: "",
        on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
      },
    },
  },
  HT = {
    base: "flex flex-col gap-2 p-4 text-sm",
    borderAccent: "border-t-4",
    closeButton: {
      base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
      icon: "h-5 w-5",
      color: {
        info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
        gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        failure:
          "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
        success:
          "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
        warning:
          "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
        red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
        green:
          "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
        yellow:
          "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
        blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
        cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
        pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
        lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
        dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
        indigo:
          "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
        purple:
          "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
        teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
        light:
          "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
      },
    },
    color: {
      info: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
      gray: "border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
      failure:
        "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
      success:
        "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
      warning:
        "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
      red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
      green:
        "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
      yellow:
        "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
      blue: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
      cyan: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
      pink: "border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
      lime: "border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",
      dark: "border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",
      indigo:
        "border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",
      purple:
        "border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
      teal: "border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",
      light:
        "border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200",
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    rounded: "rounded-lg",
    wrapper: "flex items-center",
  },
  WT = {
    root: {
      base: "flex items-center justify-center space-x-4 rounded",
      bordered: "p-1 ring-2",
      rounded: "rounded-full",
      color: {
        dark: "ring-gray-800 dark:ring-gray-800",
        failure: "ring-red-500 dark:ring-red-700",
        gray: "ring-gray-500 dark:ring-gray-400",
        info: "ring-cyan-400 dark:ring-cyan-800",
        light: "ring-gray-300 dark:ring-gray-500",
        purple: "ring-purple-500 dark:ring-purple-600",
        success: "ring-green-500 dark:ring-green-500",
        warning: "ring-yellow-300 dark:ring-yellow-500",
        pink: "ring-pink-500 dark:ring-pink-500",
      },
      img: {
        base: "rounded",
        off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
        on: "",
        placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400",
      },
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-20 w-20",
        xl: "h-36 w-36",
      },
      stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
      statusPosition: {
        "bottom-left": "-bottom-1 -left-1",
        "bottom-center": "-bottom-1",
        "bottom-right": "-bottom-1 -right-1",
        "top-left": "-left-1 -top-1",
        "top-center": "-top-1",
        "top-right": "-right-1 -top-1",
        "center-right": "-right-1",
        center: "",
        "center-left": "-left-1",
      },
      status: {
        away: "bg-yellow-400",
        base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
        busy: "bg-red-400",
        offline: "bg-gray-400",
        online: "bg-green-400",
      },
      initials: {
        text: "font-medium text-gray-600 dark:text-gray-300",
        base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600",
      },
    },
    group: { base: "flex -space-x-4" },
    groupCounter: {
      base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
    },
  },
  QT = {
    root: {
      base: "flex h-fit items-center gap-1 font-semibold",
      color: {
        info: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
        gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
        failure:
          "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
        success:
          "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
        warning:
          "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
        indigo:
          "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",
        purple:
          "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",
        pink: "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",
        blue: "bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",
        cyan: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",
        dark: "bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",
        light:
          "bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",
        green:
          "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
        lime: "bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",
        red: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
        teal: "bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",
        yellow:
          "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
      },
      href: "group",
      size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
    },
    icon: {
      off: "rounded px-2 py-0.5",
      on: "rounded-full p-1.5",
      size: { xs: "h-3 w-3", sm: "h-3.5 w-3.5" },
    },
  },
  VT = {
    root: {
      base: "text-xl font-semibold italic text-gray-900 dark:text-white",
    },
  },
  qT = {
    root: { base: "", list: "flex items-center" },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
      },
      icon: "mr-2 h-4 w-4",
    },
  },
  KT = {
    base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
    fullSized: "w-full",
    color: {
      dark: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
      failure:
        "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
      gray: ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
      info: "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
      light:
        "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
      purple:
        "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
      success:
        "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
      warning:
        "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
      blue: "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      cyan: "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
      green:
        "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
      indigo:
        "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
      lime: "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
      pink: "border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",
      red: "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
      teal: "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
      yellow:
        "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700",
    },
    disabled: "cursor-not-allowed opacity-50",
    isProcessing: "cursor-wait",
    spinnerSlot: "absolute top-0 flex h-full items-center",
    spinnerLeftPosition: {
      xs: "left-2",
      sm: "left-3",
      md: "left-4",
      lg: "left-5",
      xl: "left-6",
    },
    gradient: {
      cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
      failure:
        "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
      info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800 ",
      lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
      pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
      purple:
        "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
      success:
        "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
      teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800",
    },
    gradientDuoTone: {
      cyanToBlue:
        "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
      greenToBlue:
        "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
      pinkToOrange:
        "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
      purpleToBlue:
        "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
      purpleToPink:
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
      redToYellow:
        "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
      tealToLime:
        "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700",
    },
    inner: {
      base: "flex items-stretch transition-all duration-200",
      position: {
        none: "",
        start: "rounded-r-none",
        middle: "rounded-none",
        end: "rounded-l-none",
      },
      outline: "border border-transparent",
      isProcessingPadding: {
        xs: "pl-8",
        sm: "pl-10",
        md: "pl-12",
        lg: "pl-16",
        xl: "pl-20",
      },
    },
    label:
      "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
    outline: {
      color: {
        gray: "border border-gray-900 dark:border-white",
        default: "border-0",
        light: "",
      },
      off: "",
      on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
      pill: { off: "rounded-md", on: "rounded-full" },
    },
    pill: { off: "rounded-lg", on: "rounded-full" },
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
      xl: "px-6 py-3 text-base",
    },
  },
  YT = {
    base: "inline-flex",
    position: {
      none: "",
      start: "rounded-r-none focus:ring-2",
      middle: "rounded-none border-l-0 pl-0 focus:ring-2",
      end: "rounded-l-none border-l-0 pl-0 focus:ring-2",
    },
  },
  GT = {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: { off: "flex-col", on: "flex-col md:max-w-xl md:flex-row" },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  },
  XT = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  },
  JT = {
    root: {
      base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
      color: {
        default:
          "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
        dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
        failure:
          "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
        gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
        info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
        light:
          "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
        purple:
          "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
        success:
          "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
        warning:
          "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
        blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
        cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
        green:
          "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
        indigo:
          "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
        lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
        pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
        red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
        teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
        yellow:
          "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      },
    },
  },
  ZT = {
    root: {
      base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
      icon: "h-5 w-5",
    },
  },
  e4 = {
    root: { base: "relative" },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner:
          "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
      },
      header: {
        base: "",
        title:
          "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "mb-2 flex justify-between",
          button: {
            base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
            prev: "",
            next: "",
            view: "",
          },
        },
      },
      view: { base: "p-1" },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
          today:
            "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title:
            "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
            selected: "bg-cyan-700 text-white hover:bg-cyan-600",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-cyan-700 text-white hover:bg-cyan-600",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-cyan-700 text-white hover:bg-cyan-600",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-cyan-700 text-white hover:bg-cyan-600",
            disabled: "text-gray-500",
          },
        },
      },
    },
  },
  t4 = {
    root: {
      base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
      backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
      edge: "bottom-16",
      position: {
        top: {
          on: "left-0 right-0 top-0 w-full transform-none",
          off: "left-0 right-0 top-0 w-full -translate-y-full",
        },
        right: {
          on: "right-0 top-0 h-screen w-80 transform-none",
          off: "right-0 top-0 h-screen w-80 translate-x-full",
        },
        bottom: {
          on: "bottom-0 left-0 right-0 w-full transform-none",
          off: "bottom-0 left-0 right-0 w-full translate-y-full",
        },
        left: {
          on: "left-0 top-0 h-screen w-80 transform-none",
          off: "left-0 top-0 h-screen w-80 -translate-x-full",
        },
      },
    },
    header: {
      inner: {
        closeButton:
          "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        closeIcon: "h-4 w-4",
        titleIcon: "me-2.5 h-4 w-4",
        titleText:
          "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400",
      },
      collapsed: { on: "hidden", off: "block" },
    },
    items: { base: "" },
  },
  Nn = {
    arrowIcon: "ml-2 h-4 w-4",
    content: "py-1 focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  },
  r4 = {
    root: { base: "flex" },
    field: {
      base: "relative w-full",
      input: {
        base: "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-base" },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
      },
    },
  },
  n4 = {
    input: {
      default: {
        filled: {
          sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
          md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
        },
        outlined: {
          sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
          md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        },
        standard: {
          sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
          md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        },
      },
      success: {
        filled: {
          sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
          md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
        },
        outlined: {
          sm: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
          md: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        },
        standard: {
          sm: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
          md: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        },
      },
      error: {
        filled: {
          sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
          md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
        },
        outlined: {
          sm: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
          md: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        },
        standard: {
          sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
          md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        },
      },
    },
    label: {
      default: {
        filled: {
          sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
          md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        },
        outlined: {
          sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
          md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        },
        standard: {
          sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
          md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        },
      },
      success: {
        filled: {
          sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
          md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
        },
        outlined: {
          sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
          md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
        },
        standard: {
          sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
          md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
        },
      },
      error: {
        filled: {
          sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
          md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
        },
        outlined: {
          sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
          md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
        },
        standard: {
          sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
          md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
        },
      },
    },
    helperText: {
      default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
      success: "mt-2 text-xs text-green-600 dark:text-green-400",
      error: "mt-2 text-xs text-red-600 dark:text-red-400",
    },
  },
  o4 = {
    root: {
      base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
      link: { base: "me-4 last:mr-0 md:mr-6", href: "hover:underline" },
      col: "flex-col space-y-4",
    },
    icon: { base: "text-gray-500 dark:hover:text-white", size: "h-5 w-5" },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
    },
    divider: {
      base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8",
    },
    copyright: {
      base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
    },
  },
  i4 = {
    root: {
      base: "mt-2 text-sm",
      colors: {
        gray: "text-gray-500 dark:text-gray-400",
        info: "text-cyan-700 dark:text-cyan-800",
        success: "text-green-600 dark:text-green-500",
        failure: "text-red-600 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600",
      },
    },
  },
  a4 = {
    root: {
      base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
      icon: "inline-block",
    },
  },
  s4 = {
    root: {
      base: "text-sm font-medium",
      disabled: "opacity-50",
      colors: {
        default: "text-gray-900 dark:text-white",
        info: "text-cyan-500 dark:text-cyan-600",
        failure: "text-red-700 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600",
        success: "text-green-700 dark:text-green-500",
      },
    },
  },
  l4 = {
    root: {
      base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
      ordered: { off: "list-disc", on: "list-decimal" },
      horizontal:
        "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
      unstyled: "list-none",
      nested: "mt-2 ps-5",
    },
    item: {
      withIcon: { off: "", on: "flex items-center" },
      icon: "me-2 h-3.5 w-3.5 flex-shrink-0",
    },
  },
  u4 = {
    root: {
      base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    },
    item: {
      base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
      link: {
        base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
        active: {
          off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
          on: "bg-cyan-700 text-white dark:bg-gray-800",
        },
        disabled: {
          off: "",
          on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900",
        },
        href: { off: "", on: "" },
        icon: "mr-2 h-4 w-4 fill-current",
      },
    },
  },
  Ks = {
    root: {
      base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: { on: "rounded", off: "" },
      bordered: { on: "border", off: "" },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: { on: "", off: "container" },
      },
    },
    brand: { base: "flex items-center" },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: { on: "hidden", off: "" },
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
  c4 = {
    ...Ks,
    dropdown: {
      base: "",
      toggle: {
        ...Nn,
        floating: {
          ...Nn.floating,
          base: $(Nn.floating.base, "mt-2 block"),
          content: $(Nn.floating.content, "text-gray-500 dark:text-gray-400"),
          style: {
            ...Nn.floating.style,
            auto: $(Nn.floating.style.auto, "text-gray-500 dark:text-gray-400"),
          },
        },
        inlineWrapper: $(
          Nn.inlineWrapper,
          "flex w-full items-center justify-between"
        ),
      },
    },
    dropdownToggle: {
      base: $(
        Ks.link.base,
        Ks.link.active.off,
        "flex w-full items-center justify-between"
      ),
    },
  },
  d4 = {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
      positions: {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        center: "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
    },
    body: { base: "flex-1 overflow-auto p-6", popup: "pt-0" },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  },
  f4 = {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        active:
          "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        disabled: "cursor-not-allowed opacity-50",
      },
    },
  },
  h4 = {
    base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
    content: "z-10 overflow-hidden rounded-[7px]",
    arrow: {
      base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
      placement: "-4px",
    },
  },
  p4 = {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
    color: {
      dark: "bg-gray-600 dark:bg-gray-300",
      blue: "bg-blue-600",
      red: "bg-red-600 dark:bg-red-500",
      green: "bg-green-600 dark:bg-green-500",
      yellow: "bg-yellow-400",
      indigo: "bg-indigo-600 dark:bg-indigo-500",
      purple: "bg-purple-600 dark:bg-purple-500",
      cyan: "bg-cyan-600",
      gray: "bg-gray-500",
      lime: "bg-lime-600",
      pink: "bg-pink-500",
      teal: "bg-teal-600",
    },
    size: { sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" },
  },
  g4 = {
    root: {
      base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600",
    },
  },
  m4 = {
    root: { base: "flex" },
    field: {
      base: "relative w-full",
      input: {
        base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
        sizes: { sm: "h-1", md: "h-2", lg: "h-3" },
      },
    },
  },
  y4 = {
    root: { base: "flex items-center" },
    star: {
      empty: "text-gray-300 dark:text-gray-500",
      filled: "text-yellow-400",
      sizes: { sm: "h-5 w-5", md: "h-7 w-7", lg: "h-10 w-10" },
    },
  },
  v4 = {
    base: "flex items-center",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
    progress: {
      base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
      fill: "h-5 rounded bg-yellow-400",
      label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
    },
  },
  b4 = {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      select: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        withIcon: { on: "pl-10", off: "" },
        withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
        withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
      },
    },
  },
  x4 = {
    root: {
      base: "h-full",
      collapsed: { on: "w-16", off: "w-64" },
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        open: { off: "", on: "text-gray-900" },
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out",
          open: { on: "rotate-180", off: "" },
        },
      },
      list: "space-y-2 py-2",
    },
    cta: {
      base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
      color: {
        blue: "bg-cyan-50 dark:bg-cyan-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-alternative-50 dark:bg-alternative-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900",
      },
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-100 dark:bg-gray-700",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold",
      },
      content: { base: "flex-1 whitespace-nowrap px-3" },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100",
      },
      label: "",
      listItem: "",
    },
    items: { base: "" },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
      },
      img: "mr-3 h-6 sm:h-7",
    },
  },
  w4 = {
    base: "inline animate-spin text-gray-200",
    color: {
      failure: "fill-red-600",
      gray: "fill-gray-600",
      info: "fill-cyan-600",
      pink: "fill-pink-600",
      purple: "fill-purple-600",
      success: "fill-green-500",
      warning: "fill-yellow-400",
    },
    light: {
      off: {
        base: "dark:text-gray-600",
        color: {
          failure: "",
          gray: "dark:fill-gray-300",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: "",
        },
      },
      on: {
        base: "",
        color: {
          failure: "",
          gray: "",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: "",
        },
      },
    },
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
  },
  k4 = {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  },
  S4 = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills:
          "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-cyan-600 text-white",
              off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 flex w-full rounded-none first:ml-0",
            active: {
              on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
              off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      styles: { default: "", underline: "", pills: "", fullWidth: "" },
    },
    tabpanel: "py-3",
  },
  E4 = {
    base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
    colors: {
      gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      failure:
        "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      warning:
        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
      success:
        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
    },
    withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
  },
  C4 = {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withRightIcon: { on: "pr-10", off: "" },
        withIcon: { on: "pl-10", off: "" },
        withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
        withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
      },
    },
  },
  j4 = {
    root: {
      direction: {
        horizontal: "sm:flex",
        vertical: "relative border-l border-gray-200 dark:border-gray-700",
      },
    },
    item: {
      root: { horizontal: "relative mb-6 sm:mb-0", vertical: "mb-10 ml-6" },
      content: {
        root: { base: "mt-3 sm:pr-8" },
        body: {
          base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
        },
        time: {
          base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        },
        title: { base: "text-lg font-semibold text-gray-900 dark:text-white" },
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
        marker: {
          base: {
            horizontal:
              "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
            vertical:
              "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          },
          icon: {
            base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
            wrapper:
              "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
          },
        },
        vertical: "",
      },
    },
  },
  N4 = {
    root: {
      base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
      closed: "opacity-0 ease-out",
    },
    toggle: {
      base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-5 w-5 shrink-0",
    },
  },
  T4 = {
    root: {
      base: "group relative flex items-center rounded-lg focus:outline-none",
      active: { on: "cursor-pointer", off: "cursor-not-allowed opacity-50" },
      label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
    },
    toggle: {
      base: "rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
      checked: {
        on: "after:translate-x-full after:border-white",
        off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
        color: {
          blue: "border-cyan-700 bg-cyan-700",
          dark: "bg-dark-700 border-dark-900",
          failure: "border-red-900 bg-red-700",
          gray: "border-gray-600 bg-gray-500",
          green: "border-green-700 bg-green-600",
          light: "bg-light-700 border-light-900",
          red: "border-red-900 bg-red-700",
          purple: "border-purple-900 bg-purple-700",
          success: "border-green-500 bg-green-500",
          yellow: "border-yellow-400 bg-yellow-400",
          warning: "border-yellow-600 bg-yellow-600",
          cyan: "border-cyan-500 bg-cyan-500",
          lime: "border-lime-400 bg-lime-400",
          indigo: "border-indigo-400 bg-indigo-400",
          teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
          info: "border-cyan-600 bg-cyan-600",
          pink: "border-pink-600 bg-pink-600",
        },
      },
      sizes: {
        sm: "h-5 w-9 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4",
        md: "h-6 w-11 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5",
        lg: "h-7 w-14 after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6",
      },
    },
  },
  O4 = {
    target: "w-fit",
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
    hidden: "invisible opacity-0",
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    content: "relative z-20",
  },
  R4 = {
    accordion: BT,
    alert: HT,
    avatar: WT,
    badge: QT,
    blockquote: VT,
    breadcrumb: qT,
    button: KT,
    buttonGroup: YT,
    card: GT,
    carousel: XT,
    checkbox: JT,
    datepicker: e4,
    darkThemeToggle: ZT,
    drawer: t4,
    dropdown: Nn,
    fileInput: r4,
    floatingLabel: n4,
    footer: o4,
    helperText: i4,
    kbd: a4,
    label: s4,
    listGroup: u4,
    list: l4,
    megaMenu: c4,
    modal: d4,
    navbar: Ks,
    pagination: f4,
    popover: h4,
    progress: p4,
    radio: g4,
    rangeSlider: m4,
    rating: y4,
    ratingAdvanced: v4,
    select: b4,
    textInput: C4,
    textarea: E4,
    toggleSwitch: T4,
    sidebar: x4,
    spinner: w4,
    table: k4,
    tabs: S4,
    timeline: j4,
    toast: N4,
    tooltip: O4,
  },
  P4 = { theme: za(R4) };
function ue() {
  return za(P4.theme);
}
const vb = x.createContext(void 0);
function bb() {
  const e = x.useContext(vb);
  if (!e)
    throw new Error(
      "useAccordionContext should be used within the AccordionPanelContext provider!"
    );
  return e;
}
const xb = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { isOpen: o } = bb(),
      i = G(ue().accordion.content, r);
    return c.jsx("div", {
      className: $(i.base, t),
      "data-testid": "flowbite-accordion-content",
      hidden: !o,
      ...n,
      children: e,
    });
  },
  wb = ({ children: e, ...t }) => {
    const { alwaysOpen: r } = t,
      [n, o] = x.useState(t.isOpen),
      i = r ? { ...t, isOpen: n, setOpen: () => o(!n) } : t;
    return c.jsx(vb.Provider, { value: i, children: e });
  },
  kb = ({ as: e = "h2", children: t, className: r, theme: n = {}, ...o }) => {
    const { arrowIcon: i, flush: a, isOpen: s, setOpen: l } = bb(),
      u = () => typeof l < "u" && l(),
      f = G(ue().accordion.title, n);
    return c.jsxs("button", {
      className: $(
        f.base,
        f.flush[a ? "on" : "off"],
        f.open[s ? "on" : "off"],
        r
      ),
      onClick: u,
      type: "button",
      ...o,
      children: [
        c.jsx(e, {
          className: f.heading,
          "data-testid": "flowbite-accordion-heading",
          children: t,
        }),
        i &&
          c.jsx(i, {
            "aria-hidden": !0,
            className: $(f.arrow.base, f.arrow.open[s ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow",
          }),
      ],
    });
  },
  Sb = ({
    alwaysOpen: e = !1,
    arrowIcon: t = cb,
    children: r,
    flush: n = !1,
    collapseAll: o = !1,
    className: i,
    theme: a = {},
    ...s
  }) => {
    const [l, u] = x.useState(o ? -1 : 0),
      f = x.useMemo(
        () =>
          x.Children.map(r, (h, p) =>
            x.cloneElement(h, {
              alwaysOpen: e,
              arrowIcon: t,
              flush: n,
              isOpen: l === p,
              setOpen: () => u(l === p ? -1 : p),
            })
          ),
        [e, t, r, n, l]
      ),
      d = G(ue().accordion.root, a);
    return c.jsx("div", {
      className: $(d.base, d.flush[n ? "on" : "off"], i),
      "data-testid": "flowbite-accordion",
      ...s,
      children: f,
    });
  };
Sb.displayName = "Accordion";
wb.displayName = "Accordion.Panel";
kb.displayName = "Accordion.Title";
xb.displayName = "Accordion.Content";
Object.assign(Sb, { Panel: wb, Title: kb, Content: xb });
const Eb = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const o = G(ue().avatar.group, r);
  return c.jsx("div", {
    "data-testid": "avatar-group-element",
    className: $(o.base, t),
    ...n,
    children: e,
  });
};
Eb.displayName = "Avatar.Group";
const Cb = ({ className: e, href: t, theme: r = {}, total: n, ...o }) => {
  const i = G(ue().avatar.groupCounter, r);
  return c.jsxs("a", {
    href: t,
    className: $(i.base, e),
    ...o,
    children: ["+", n],
  });
};
Cb.displayName = "Avatar.GroupCounter";
const jb = ({
  alt: e = "",
  bordered: t = !1,
  children: r,
  className: n,
  color: o = "light",
  img: i,
  placeholderInitials: a = "",
  rounded: s = !1,
  size: l = "md",
  stacked: u = !1,
  status: f,
  statusPosition: d = "top-left",
  theme: h = {},
  ...p
}) => {
  const m = G(ue().avatar, h),
    v = $(
      m.root.img.base,
      t && m.root.bordered,
      t && m.root.color[o],
      s && m.root.rounded,
      u && m.root.stacked,
      m.root.img.on,
      m.root.size[l]
    ),
    k = {
      className: $(v, m.root.img.on),
      "data-testid": "flowbite-avatar-img",
    };
  return c.jsxs("div", {
    className: $(m.root.base, n),
    "data-testid": "flowbite-avatar",
    ...p,
    children: [
      c.jsxs("div", {
        className: "relative",
        children: [
          i
            ? typeof i == "string"
              ? c.jsx("img", { alt: e, src: i, ...k })
              : i({ alt: e, ...k })
            : a
            ? c.jsx("div", {
                className: $(
                  m.root.img.off,
                  m.root.initials.base,
                  u && m.root.stacked,
                  t && m.root.bordered,
                  t && m.root.color[o],
                  m.root.size[l],
                  s && m.root.rounded
                ),
                "data-testid": "flowbite-avatar-initials-placeholder",
                children: c.jsx("span", {
                  className: $(m.root.initials.text),
                  "data-testid": "flowbite-avatar-initials-placeholder-text",
                  children: a,
                }),
              })
            : c.jsx("div", {
                className: $(v, m.root.img.off),
                "data-testid": "flowbite-avatar-img",
                children: c.jsx("svg", {
                  className: m.root.img.placeholder,
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: c.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                    clipRule: "evenodd",
                  }),
                }),
              }),
          f &&
            c.jsx("span", {
              "data-testid": "flowbite-avatar-status",
              className: $(
                m.root.status.base,
                m.root.status[f],
                m.root.statusPosition[d]
              ),
            }),
        ],
      }),
      r && c.jsx("div", { children: r }),
    ],
  });
};
jb.displayName = "Avatar";
Object.assign(jb, { Group: Eb, Counter: Cb });
const Hl = ({
  children: e,
  color: t = "info",
  href: r,
  icon: n,
  size: o = "xs",
  className: i,
  theme: a = {},
  ...s
}) => {
  const l = G(ue().badge, a),
    u = () =>
      c.jsxs("span", {
        className: $(
          l.root.base,
          l.root.color[t],
          l.root.size[o],
          l.icon[n ? "on" : "off"],
          i
        ),
        "data-testid": "flowbite-badge",
        ...s,
        children: [
          n &&
            c.jsx(n, {
              "aria-hidden": !0,
              className: l.icon.size[o],
              "data-testid": "flowbite-badge-icon",
            }),
          e && c.jsx("span", { children: e }),
        ],
      });
  return r
    ? c.jsx("a", { className: l.root.href, href: r, children: c.jsx(u, {}) })
    : c.jsx(u, {});
};
Hl.displayName = "Badge";
const Nb = ({
  className: e,
  color: t = "info",
  light: r,
  size: n = "md",
  theme: o = {},
  ...i
}) => {
  const a = G(ue().spinner, o);
  return c.jsx("span", {
    role: "status",
    ...i,
    children: c.jsxs("svg", {
      fill: "none",
      viewBox: "0 0 100 101",
      className: $(
        a.base,
        a.color[t],
        a.light[r ? "on" : "off"].base,
        a.light[r ? "on" : "off"].color[t],
        a.size[n],
        e
      ),
      children: [
        c.jsx("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor",
        }),
        c.jsx("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill",
        }),
      ],
    }),
  });
};
Nb.displayName = "Spinner";
const fh = x.forwardRef(
  ({ children: e, as: t, href: r, type: n = "button", ...o }, i) => {
    const a = t || (r ? "a" : "button");
    return x.createElement(a, { ref: i, href: r, type: n, ...o }, e);
  }
);
fh.displayName = "ButtonBaseComponent";
const Tb = (e, t, r) =>
    x.Children.map(e, (n, o) =>
      x.isValidElement(n)
        ? n.props.children
          ? x.cloneElement(n, {
              ...n.props,
              children: Tb(n.props.children, t, r),
              positionInGroup: tg(o, x.Children.count(e)),
            })
          : x.cloneElement(n, {
              outline: t,
              pill: r,
              positionInGroup: tg(o, x.Children.count(e)),
            })
        : n
    ),
  tg = (e, t) => (e === 0 ? "start" : e === t - 1 ? "end" : "middle"),
  Ob = ({
    children: e,
    className: t,
    outline: r,
    pill: n,
    theme: o = {},
    ...i
  }) => {
    const a = x.useMemo(() => Tb(e, r, n), [e, r, n]),
      s = G(ue().buttonGroup, o);
    return c.jsx("div", {
      className: $(s.base, t),
      role: "group",
      ...i,
      children: a,
    });
  };
Ob.displayName = "Button.Group";
const Rb = x.forwardRef(
  (
    {
      children: e,
      className: t,
      color: r = "info",
      disabled: n,
      fullSized: o,
      isProcessing: i = !1,
      processingLabel: a = "Loading...",
      processingSpinner: s,
      gradientDuoTone: l,
      gradientMonochrome: u,
      label: f,
      outline: d = !1,
      pill: h = !1,
      positionInGroup: p = "none",
      size: m = "md",
      theme: v = {},
      ...k
    },
    y
  ) => {
    var j;
    const { buttonGroup: g, button: b } = ue(),
      w = G(b, v),
      S = k;
    return c.jsx(fh, {
      ref: y,
      disabled: n,
      className: $(
        w.base,
        n && w.disabled,
        !l && !u && w.color[r],
        l && !u && w.gradientDuoTone[l],
        !l && u && w.gradient[u],
        d && ((j = w.outline.color[r]) != null ? j : w.outline.color.default),
        w.pill[h ? "on" : "off"],
        o && w.fullSized,
        g.position[p],
        t
      ),
      ...S,
      children: c.jsx("span", {
        className: $(
          w.inner.base,
          w.outline[d ? "on" : "off"],
          w.outline.pill[d && h ? "on" : "off"],
          w.size[m],
          d && !w.outline.color[r] && w.inner.outline,
          i && w.isProcessing,
          i && w.inner.isProcessingPadding[m],
          w.inner.position[p]
        ),
        children: c.jsxs(c.Fragment, {
          children: [
            i &&
              c.jsx("span", {
                className: $(w.spinnerSlot, w.spinnerLeftPosition[m]),
                children: s || c.jsx(Nb, { size: m }),
              }),
            typeof e < "u"
              ? e
              : c.jsx("span", {
                  "data-testid": "flowbite-button-label",
                  className: $(w.label),
                  children: i ? a : f,
                }),
          ],
        }),
      }),
    });
  }
);
Rb.displayName = "Button";
const Ja = Object.assign(Rb, { Group: Ob }),
  Pb = ({ children: e, ...t }) => {
    const r = (n) => {
      const i = n.target.closest('[role="banner"]');
      i == null || i.remove();
    };
    return c.jsx(Ja, { onClick: r, ...t, children: e });
  };
Pb.displayName = "Banner.CollapseButton";
const _b = ({ children: e, ...t }) =>
  c.jsx("div", {
    "data-testid": "flowbite-banner",
    role: "banner",
    tabIndex: -1,
    ...t,
    children: e,
  });
_b.displayName = "Banner";
Object.assign(_b, { CollapseButton: Pb });
const Mb = x.forwardRef(
  ({ children: e, className: t, href: r, icon: n, theme: o = {}, ...i }, a) => {
    const s = typeof r < "u",
      l = s ? "a" : "span",
      u = G(ue().breadcrumb.item, o);
    return c.jsxs("li", {
      className: $(u.base, t),
      ...i,
      children: [
        c.jsx(fb, {
          "aria-hidden": !0,
          className: u.chevron,
          "data-testid": "flowbite-breadcrumb-separator",
        }),
        c.jsxs(l, {
          ref: a,
          className: u.href[s ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href: r,
          children: [
            n && c.jsx(n, { "aria-hidden": !0, className: u.icon }),
            e,
          ],
        }),
      ],
    });
  }
);
Mb.displayName = "Breadcrumb.Item";
const Lb = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const o = G(ue().breadcrumb.root, r);
  return c.jsx("nav", {
    "aria-label": "Breadcrumb",
    className: $(o.base, t),
    ...n,
    children: c.jsx("ol", { className: o.list, children: e }),
  });
};
Lb.displayName = "Breadcrumb";
Object.assign(Lb, { Item: Mb });
var hh = { exports: {} };
function Db(e, t = 100, r = {}) {
  if (typeof e != "function")
    throw new TypeError(
      "Expected the first parameter to be a function, got `".concat(
        typeof e,
        "`."
      )
    );
  if (t < 0) throw new RangeError("`wait` must not be negative.");
  const { immediate: n } = typeof r == "boolean" ? { immediate: r } : r;
  let o, i, a, s, l;
  function u() {
    const d = Date.now() - s;
    if (d < t && d >= 0) a = setTimeout(u, t - d);
    else if (((a = void 0), !n)) {
      const h = o,
        p = i;
      (o = void 0), (i = void 0), (l = e.apply(h, p));
    }
  }
  const f = function (...d) {
    if (o && this !== o)
      throw new Error("Debounced method called with different contexts.");
    (o = this), (i = d), (s = Date.now());
    const h = n && !a;
    if ((a || (a = setTimeout(u, t)), h)) {
      const p = o,
        m = i;
      (o = void 0), (i = void 0), (l = e.apply(p, m));
    }
    return l;
  };
  return (
    (f.clear = () => {
      a && (clearTimeout(a), (a = void 0));
    }),
    (f.flush = () => {
      if (!a) return;
      const d = o,
        h = i;
      (o = void 0),
        (i = void 0),
        (l = e.apply(d, h)),
        clearTimeout(a),
        (a = void 0);
    }),
    f
  );
}
hh.exports.debounce = Db;
hh.exports = Db;
var _4 = hh.exports;
const M4 = Si(_4);
var L4 = Object.defineProperty,
  D4 = (e, t, r) =>
    t in e
      ? L4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  St = (e, t, r) => (D4(e, typeof t != "symbol" ? t + "" : t, r), r);
const I4 = 300,
  A4 = 0;
class z4 extends x.PureComponent {
  constructor(t) {
    super(t),
      St(this, "container"),
      St(this, "scrolling"),
      St(this, "started"),
      St(this, "pressed"),
      St(this, "isMobile", !1),
      St(this, "internal"),
      St(this, "scrollLeft"),
      St(this, "scrollTop"),
      St(this, "clientX"),
      St(this, "clientY"),
      St(this, "onEndScroll", () => {
        (this.scrolling = !1),
          !this.pressed && this.started && this.processEnd();
      }),
      St(this, "onScroll", () => {
        const r = this.container.current;
        (r.scrollLeft !== this.scrollLeft || r.scrollTop !== this.scrollTop) &&
          ((this.scrolling = !0), this.processScroll(), this.onEndScroll());
      }),
      St(this, "onTouchStart", (r) => {
        const { nativeMobileScroll: n } = this.props;
        if (this.isDraggable(r.target))
          if (((this.internal = !0), n && this.scrolling)) this.pressed = !0;
          else {
            const o = r.touches[0];
            this.processClick(o.clientX, o.clientY),
              !n && this.props.stopPropagation && r.stopPropagation();
          }
      }),
      St(this, "onTouchEnd", () => {
        const { nativeMobileScroll: r } = this.props;
        this.pressed &&
          (this.started && (!this.scrolling || !r)
            ? this.processEnd()
            : (this.pressed = !1),
          this.forceUpdate());
      }),
      St(this, "onTouchMove", (r) => {
        const { nativeMobileScroll: n } = this.props;
        if (this.pressed && (!n || !this.isMobile)) {
          const o = r.touches[0];
          o && this.processMove(o.clientX, o.clientY),
            r.preventDefault(),
            this.props.stopPropagation && r.stopPropagation();
        }
      }),
      St(this, "onMouseDown", (r) => {
        var n, o;
        this.isDraggable(r.target) &&
          this.isScrollable() &&
          ((this.internal = !0),
          ((o = (n = this.props) == null ? void 0 : n.buttons) == null
            ? void 0
            : o.indexOf(r.button)) !== -1 &&
            (this.processClick(r.clientX, r.clientY),
            r.preventDefault(),
            this.props.stopPropagation && r.stopPropagation()));
      }),
      St(this, "onMouseMove", (r) => {
        this.pressed &&
          (this.processMove(r.clientX, r.clientY),
          r.preventDefault(),
          this.props.stopPropagation && r.stopPropagation());
      }),
      St(this, "onMouseUp", (r) => {
        this.pressed &&
          (this.started
            ? this.processEnd()
            : ((this.internal = !1),
              (this.pressed = !1),
              this.forceUpdate(),
              this.props.onClick && this.props.onClick(r)),
          r.preventDefault(),
          this.props.stopPropagation && r.stopPropagation());
      }),
      (this.container = V.createRef()),
      (this.onEndScroll = M4(this.onEndScroll, I4)),
      (this.scrolling = !1),
      (this.started = !1),
      (this.pressed = !1),
      (this.internal = !1),
      (this.getRef = this.getRef.bind(this));
  }
  componentDidMount() {
    const { nativeMobileScroll: t } = this.props,
      r = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp),
      window.addEventListener("mousemove", this.onMouseMove),
      window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }),
      window.addEventListener("touchend", this.onTouchEnd),
      r.addEventListener("touchstart", this.onTouchStart, { passive: !1 }),
      r.addEventListener("mousedown", this.onMouseDown, { passive: !1 }),
      t &&
        ((this.isMobile = this.isMobileDevice()),
        this.isMobile && this.forceUpdate());
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp),
      window.removeEventListener("mousemove", this.onMouseMove),
      window.removeEventListener("touchmove", this.onTouchMove),
      window.removeEventListener("touchend", this.onTouchEnd);
  }
  getElement() {
    return this.container.current;
  }
  isMobileDevice() {
    return (
      typeof window.orientation < "u" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
  isDraggable(t) {
    const r = this.props.ignoreElements;
    if (r) {
      const n = t.closest(r);
      return n === null || n.contains(this.getElement());
    } else return !0;
  }
  isScrollable() {
    const t = this.container.current;
    return (
      t && (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight)
    );
  }
  processClick(t, r) {
    const n = this.container.current;
    (this.scrollLeft = n == null ? void 0 : n.scrollLeft),
      (this.scrollTop = n == null ? void 0 : n.scrollTop),
      (this.clientX = t),
      (this.clientY = r),
      (this.pressed = !0);
  }
  processStart(t = !0) {
    const { onStartScroll: r } = this.props;
    (this.started = !0),
      t && document.body.classList.add("cursor-grab"),
      r && r({ external: !this.internal }),
      this.forceUpdate();
  }
  processScroll() {
    if (this.started) {
      const { onScroll: t } = this.props;
      t && t({ external: !this.internal });
    } else this.processStart(!1);
  }
  processMove(t, r) {
    const {
        horizontal: n,
        vertical: o,
        activationDistance: i,
        onScroll: a,
      } = this.props,
      s = this.container.current;
    this.started
      ? (n && (s.scrollLeft -= t - this.clientX),
        o && (s.scrollTop -= r - this.clientY),
        a && a({ external: !this.internal }),
        (this.clientX = t),
        (this.clientY = r),
        (this.scrollLeft = s.scrollLeft),
        (this.scrollTop = s.scrollTop))
      : ((n && Math.abs(t - this.clientX) > i) ||
          (o && Math.abs(r - this.clientY) > i)) &&
        ((this.clientX = t), (this.clientY = r), this.processStart());
  }
  processEnd() {
    const { onEndScroll: t } = this.props;
    this.container.current && t && t({ external: !this.internal }),
      (this.pressed = !1),
      (this.started = !1),
      (this.scrolling = !1),
      (this.internal = !1),
      document.body.classList.remove("cursor-grab"),
      this.forceUpdate();
  }
  getRef(t) {
    [this.container, this.props.innerRef].forEach((r) => {
      r && (typeof r == "function" ? r(t) : (r.current = t));
    });
  }
  render() {
    const {
      children: t,
      draggingClassName: r,
      className: n,
      style: o,
      hideScrollbars: i,
    } = this.props;
    return c.jsx("div", {
      className: HE(n, this.pressed && r, {
        "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab":
          this.pressed,
        "overflow-auto": this.isMobile,
        "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]":
          i,
        "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent":
          i,
      }),
      style: o,
      ref: this.getRef,
      onScroll: this.onScroll,
      children: t,
    });
  }
}
St(z4, "defaultProps", {
  nativeMobileScroll: !0,
  hideScrollbars: !0,
  activationDistance: 10,
  vertical: !0,
  horizontal: !0,
  stopPropagation: !1,
  style: {},
  buttons: [A4],
});
const F4 = x.forwardRef(
  ({ className: e, color: t = "default", theme: r = {}, ...n }, o) => {
    const i = G(ue().checkbox, r);
    return c.jsx("input", {
      ref: o,
      type: "checkbox",
      className: $(i.root.base, i.root.color[t], e),
      ...n,
    });
  }
);
F4.displayName = "Checkbox";
const Za = ({
  children: e,
  className: t,
  color: r = "default",
  theme: n = {},
  value: o,
  ...i
}) => {
  var s;
  const a = G(ue().helperText, n);
  return c.jsx("p", {
    className: $(a.root.base, a.root.colors[r], t),
    ...i,
    children: (s = o != null ? o : e) != null ? s : "",
  });
};
Za.displayName = "HelperText";
const Ib = x.forwardRef(
  (
    {
      addon: e,
      className: t,
      color: r = "gray",
      helperText: n,
      icon: o,
      rightIcon: i,
      shadow: a,
      sizing: s = "md",
      theme: l = {},
      type: u = "text",
      ...f
    },
    d
  ) => {
    const h = G(ue().textInput, l);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs("div", {
          className: $(h.base, t),
          children: [
            e && c.jsx("span", { className: h.addon, children: e }),
            c.jsxs("div", {
              className: h.field.base,
              children: [
                o &&
                  c.jsx("div", {
                    className: h.field.icon.base,
                    children: c.jsx(o, { className: h.field.icon.svg }),
                  }),
                i &&
                  c.jsx("div", {
                    "data-testid": "right-icon",
                    className: h.field.rightIcon.base,
                    children: c.jsx(i, { className: h.field.rightIcon.svg }),
                  }),
                c.jsx("input", {
                  className: $(
                    h.field.input.base,
                    h.field.input.colors[r],
                    h.field.input.sizes[s],
                    h.field.input.withIcon[o ? "on" : "off"],
                    h.field.input.withRightIcon[i ? "on" : "off"],
                    h.field.input.withAddon[e ? "on" : "off"],
                    h.field.input.withShadow[a ? "on" : "off"]
                  ),
                  type: u,
                  ...f,
                  ref: d,
                }),
              ],
            }),
          ],
        }),
        n && c.jsx(Za, { color: r, children: n }),
      ],
    });
  }
);
Ib.displayName = "TextInput";
const Ab = x.createContext(void 0);
function Eu() {
  const e = x.useContext(Ab);
  if (!e)
    throw new Error(
      "useDatePickerContext should be used within the DatePickerContext provider!"
    );
  return e;
}
var Xe = ((e) => (
    (e[(e.Days = 0)] = "Days"),
    (e[(e.Months = 1)] = "Months"),
    (e[(e.Years = 2)] = "Years"),
    (e[(e.Decades = 3)] = "Decades"),
    e
  ))(Xe || {}),
  zb = ((e) => (
    (e[(e.Sunday = 0)] = "Sunday"),
    (e[(e.Monday = 1)] = "Monday"),
    (e[(e.Tuesday = 2)] = "Tuesday"),
    (e[(e.Wednesday = 3)] = "Wednesday"),
    (e[(e.Thursday = 4)] = "Thursday"),
    (e[(e.Friday = 5)] = "Friday"),
    (e[(e.Saturday = 6)] = "Saturday"),
    e
  ))(zb || {});
const es = (e, t, r) => {
    const n = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
    if (t && r) {
      const o = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
        i = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
      return n >= o && n <= i;
    }
    if (t) {
      const o = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
      return n >= o;
    }
    if (r) {
      const o = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
      return n <= o;
    }
    return !0;
  },
  Cu = (e, t) => (
    (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())),
    (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())),
    e.getTime() === t.getTime()
  ),
  $4 = (e, t, r) => (
    es(e, t, r) || (t && e < t ? (e = t) : r && e > r && (e = r)), e
  ),
  U4 = (e, t) => {
    const r = new Date(e.getFullYear(), e.getMonth(), 1);
    let o = r.getDay() - t;
    return o < 0 && (o += 7), ph(r, -o);
  },
  B4 = (e, t) => {
    const r = [],
      n = new Date(0);
    n.setDate(n.getDate() - n.getDay() + t);
    const o = new Intl.DateTimeFormat(e, { weekday: "short" });
    for (let i = 0; i < 7; i++) r.push(o.format(ph(n, i)));
    return r;
  },
  ph = (e, t) => {
    const r = new Date(e);
    return r.setDate(r.getDate() + t), r;
  },
  H4 = (e, t) => {
    const r = new Date(e);
    return r.setMonth(r.getMonth() + t), r;
  },
  Ko = (e, t) => {
    const r = new Date(e);
    return r.setFullYear(r.getFullYear() + t), r;
  },
  ga = (e, t, r) => {
    let n = { day: "numeric", month: "long", year: "numeric" };
    return r && (n = r), new Intl.DateTimeFormat(e, n).format(t);
  },
  Yo = (e, t) => {
    const r = e.getFullYear();
    return Math.floor(r / t) * t;
  },
  W4 = (e, t) => {
    const r = e.getFullYear(),
      n = t + 9;
    return r >= t && r <= n;
  },
  Q4 = ({ theme: e = {} }) => {
    const {
        theme: t,
        weekStart: r,
        minDate: n,
        maxDate: o,
        viewDate: i,
        selectedDate: a,
        changeSelectedDate: s,
        language: l,
      } = Eu(),
      u = G(t.views.days, e),
      f = B4(l, r),
      d = U4(i, r);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("div", {
          className: u.header.base,
          children: f.map((h, p) =>
            c.jsx("span", { className: u.header.title, children: h }, p)
          ),
        }),
        c.jsx("div", {
          className: u.items.base,
          children: [...Array(42)].map((h, p) => {
            const m = ph(d, p),
              v = ga(l, m, { day: "numeric" }),
              k = Cu(a, m),
              y = !es(m, n, o);
            return c.jsx(
              "button",
              {
                disabled: y,
                type: "button",
                className: $(
                  u.items.item.base,
                  k && u.items.item.selected,
                  y && u.items.item.disabled
                ),
                onClick: () => {
                  y || s(m, !0);
                },
                children: v,
              },
              p
            );
          }),
        }),
      ],
    });
  },
  V4 = ({ theme: e = {} }) => {
    const {
        theme: t,
        selectedDate: r,
        viewDate: n,
        setViewDate: o,
        setView: i,
      } = Eu(),
      a = G(t.views.decades, e);
    return c.jsx("div", {
      className: a.items.base,
      children: [...Array(12)].map((s, l) => {
        const f = Yo(n, 100) - 10 + l * 10,
          d = new Date(f, 0, 1),
          h = Ko(d, 9),
          p = W4(n, f),
          m = !es(n, d, h);
        return c.jsx(
          "button",
          {
            disabled: m,
            type: "button",
            className: $(
              a.items.item.base,
              p && a.items.item.selected,
              m && a.items.item.disabled
            ),
            onClick: () => {
              m || (o(Ko(n, f - r.getFullYear())), i(Xe.Years));
            },
            children: f,
          },
          l
        );
      }),
    });
  },
  q4 = ({ theme: e = {} }) => {
    const {
        theme: t,
        minDate: r,
        maxDate: n,
        selectedDate: o,
        viewDate: i,
        language: a,
        setViewDate: s,
        setView: l,
      } = Eu(),
      u = G(t.views.months, e);
    return c.jsx("div", {
      className: u.items.base,
      children: [...Array(12)].map((f, d) => {
        const h = new Date(i.getTime());
        h.setMonth(d);
        const p = ga(a, h, { month: "short" }),
          m = Cu(o, h),
          v = !es(h, r, n);
        return c.jsx(
          "button",
          {
            disabled: v,
            type: "button",
            className: $(
              u.items.item.base,
              m && u.items.item.selected,
              v && u.items.item.disabled
            ),
            onClick: () => {
              v || (s(h), l(Xe.Days));
            },
            children: p,
          },
          d
        );
      }),
    });
  },
  K4 = ({ theme: e = {} }) => {
    const {
        theme: t,
        selectedDate: r,
        minDate: n,
        maxDate: o,
        viewDate: i,
        setViewDate: a,
        setView: s,
      } = Eu(),
      l = G(t.views.years, e);
    return c.jsx("div", {
      className: l.items.base,
      children: [...Array(12)].map((u, f) => {
        const h = Yo(i, 10) - 1 + f * 1,
          p = new Date(i.getTime());
        p.setFullYear(h);
        const m = Cu(r, p),
          v = !es(p, n, o);
        return c.jsx(
          "button",
          {
            disabled: v,
            type: "button",
            className: $(
              l.items.item.base,
              m && l.items.item.selected,
              v && l.items.item.disabled
            ),
            onClick: () => {
              v || (a(p), s(Xe.Months));
            },
            children: h,
          },
          f
        );
      }),
    });
  },
  Y4 = (
    {
      title: e,
      open: t,
      inline: r = !1,
      autoHide: n = !0,
      showClearButton: o = !0,
      labelClearButton: i = "Clear",
      showTodayButton: a = !0,
      labelTodayButton: s = "Today",
      defaultDate: l = new Date(),
      minDate: u,
      maxDate: f,
      language: d = "en",
      weekStart: h = zb.Sunday,
      className: p,
      theme: m = {},
      onSelectedDateChanged: v,
      ...k
    },
    y
  ) => {
    const g = G(ue().datepicker, m);
    l = $4(l, u, f);
    const [b, w] = x.useState(t),
      [S, j] = x.useState(Xe.Days),
      [E, I] = x.useState(l),
      [O, C] = x.useState(l),
      D = x.useRef(null),
      P = x.useRef(null),
      _ = (F, z) => {
        I(F), v && v(F), n && S === Xe.Days && z == !0 && !r && w(!1);
      },
      N = () => {
        _(l, !0), l && C(l);
      };
    x.useImperativeHandle(y, () => ({
      focus() {
        var F;
        (F = D.current) == null || F.focus();
      },
      clear() {
        N();
      },
    }));
    const L = (F) => {
        switch (F) {
          case Xe.Decades:
            return c.jsx(V4, { theme: g.views.decades });
          case Xe.Years:
            return c.jsx(K4, { theme: g.views.years });
          case Xe.Months:
            return c.jsx(q4, { theme: g.views.months });
          case Xe.Days:
          default:
            return c.jsx(Q4, { theme: g.views.days });
        }
      },
      B = () => {
        switch (S) {
          case Xe.Days:
            return Xe.Months;
          case Xe.Months:
            return Xe.Years;
          case Xe.Years:
            return Xe.Decades;
        }
        return S;
      },
      W = () => {
        switch (S) {
          case Xe.Decades:
            return "".concat(Yo(O, 100), " - ").concat(Yo(O, 100) + 90);
          case Xe.Years:
            return "".concat(Yo(O, 10), " - ").concat(Yo(O, 10) + 9);
          case Xe.Months:
            return ga(d, O, { year: "numeric" });
          case Xe.Days:
          default:
            return ga(d, O, { month: "long", year: "numeric" });
        }
      },
      R = (F, z, U) => {
        switch (F) {
          case Xe.Days:
            return new Date(H4(z, U));
          case Xe.Months:
            return new Date(Ko(z, U));
          case Xe.Years:
            return new Date(Ko(z, U * 10));
          case Xe.Decades:
            return new Date(Ko(z, U * 100));
          default:
            return new Date(Ko(z, U * 10));
        }
      };
    return (
      x.useEffect(() => {
        const F = (z) => {
          var J, X;
          const U =
              (J = P == null ? void 0 : P.current) == null
                ? void 0
                : J.contains(z.target),
            H =
              (X = D == null ? void 0 : D.current) == null
                ? void 0
                : X.contains(z.target);
          !U && !H && w(!1);
        };
        return (
          document.addEventListener("mousedown", F),
          () => {
            document.removeEventListener("mousedown", F);
          }
        );
      }, [D, P, w]),
      c.jsx(Ab.Provider, {
        value: {
          theme: g,
          language: d,
          minDate: u,
          maxDate: f,
          weekStart: h,
          isOpen: b,
          setIsOpen: w,
          view: S,
          setView: j,
          viewDate: O,
          setViewDate: C,
          selectedDate: E,
          setSelectedDate: I,
          changeSelectedDate: _,
        },
        children: c.jsxs("div", {
          className: $(g.root.base, p),
          children: [
            !r &&
              c.jsx(Ib, {
                theme: g.root.input,
                icon: nT,
                ref: D,
                onFocus: () => {
                  Cu(O, E) || C(E), w(!0);
                },
                value: E && ga(d, E),
                readOnly: !0,
                ...k,
              }),
            (b || r) &&
              c.jsx("div", {
                ref: P,
                className: $(g.popup.root.base, r && g.popup.root.inline),
                children: c.jsxs("div", {
                  className: g.popup.root.inner,
                  children: [
                    c.jsxs("div", {
                      className: g.popup.header.base,
                      children: [
                        e &&
                          c.jsx("div", {
                            className: g.popup.header.title,
                            children: e,
                          }),
                        c.jsxs("div", {
                          className: g.popup.header.selectors.base,
                          children: [
                            c.jsx("button", {
                              type: "button",
                              className: $(
                                g.popup.header.selectors.button.base,
                                g.popup.header.selectors.button.prev
                              ),
                              onClick: () => C(R(S, O, -1)),
                              children: c.jsx(tT, {}),
                            }),
                            c.jsx("button", {
                              type: "button",
                              className: $(
                                g.popup.header.selectors.button.base,
                                g.popup.header.selectors.button.view
                              ),
                              onClick: () => j(B()),
                              children: W(),
                            }),
                            c.jsx("button", {
                              type: "button",
                              className: $(
                                g.popup.header.selectors.button.base,
                                g.popup.header.selectors.button.next
                              ),
                              onClick: () => C(R(S, O, 1)),
                              children: c.jsx(rT, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: g.popup.view.base,
                      children: L(S),
                    }),
                    (o || a) &&
                      c.jsxs("div", {
                        className: g.popup.footer.base,
                        children: [
                          a &&
                            c.jsx("button", {
                              type: "button",
                              className: $(
                                g.popup.footer.button.base,
                                g.popup.footer.button.today
                              ),
                              onClick: () => {
                                const F = new Date();
                                _(F, !0), C(F);
                              },
                              children: s,
                            }),
                          o &&
                            c.jsx("button", {
                              type: "button",
                              className: $(
                                g.popup.footer.button.base,
                                g.popup.footer.button.clear
                              ),
                              onClick: () => {
                                _(l, !0), l && C(l);
                              },
                              children: i,
                            }),
                        ],
                      }),
                  ],
                }),
              }),
          ],
        }),
      })
    );
  },
  G4 = x.forwardRef(Y4);
G4.displayName = "Datepicker";
const Fb = x.createContext(void 0);
function $b() {
  const e = x.useContext(Fb);
  if (!e)
    throw new Error(
      "useDrawerContext should be used within the DrawerContext provider!"
    );
  return e;
}
function X4(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
        child: [],
      },
    ],
  })(e);
}
function J4(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        },
        child: [],
      },
    ],
  })(e);
}
const Ub = ({
  children: e,
  className: t,
  closeIcon: r = J4,
  theme: n = {},
  title: o,
  titleIcon: i = X4,
  ...a
}) => {
  const s = x.useId(),
    { id: l, isOpen: u, onClose: f, theme: d } = $b(),
    h = G(d.header, n);
  return c.jsxs("div", {
    className: t,
    ...a,
    children: [
      c.jsxs("h5", {
        className: h.inner.titleText,
        id: l,
        children: [
          c.jsx(i, { "aria-hidden": !0, className: h.inner.titleIcon }),
          o,
        ],
      }),
      c.jsxs("button", {
        onClick: f,
        "data-testid": "close-drawer",
        className: h.inner.closeButton,
        children: [
          c.jsx(r, { "aria-hidden": !0, className: h.inner.closeIcon }),
          c.jsx("span", { className: "sr-only", children: "Close menu" }),
        ],
      }),
      c.jsx("span", {
        className: h.collapsed[u ? "on" : "off"],
        id: "flowbite-drawer-header-".concat(s),
        children: e,
      }),
    ],
  });
};
Ub.displayName = "Drawer.Header";
const Bb = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const { theme: o } = $b(),
    i = G(o.items, r);
  return c.jsx("div", {
    "data-testid": "flowbite-drawer-items",
    className: $(i.base, t),
    ...n,
    children: e,
  });
};
Bb.displayName = "Drawer.Items";
const Hb = ({
  backdrop: e = !0,
  children: t,
  className: r,
  edge: n = !1,
  position: o = "left",
  onClose: i,
  open: a = !1,
  theme: s = {},
  ...l
}) => {
  const u = x.useId(),
    f = G(ue().drawer, s);
  return (
    x.useEffect(() => {
      const d = (h) => {
        h.key === "Escape" && a && i && i();
      };
      return (
        document.addEventListener("keydown", d),
        () => document.removeEventListener("keydown", d)
      );
    }, [i, a]),
    c.jsxs(Fb.Provider, {
      value: { theme: f, onClose: i, isOpen: a, id: u },
      children: [
        c.jsx("div", {
          "aria-modal": !0,
          "aria-describedby": "drawer-dialog-".concat(u),
          role: "dialog",
          tabIndex: -1,
          "data-testid": "flowbite-drawer",
          className: $(
            f.root.base,
            f.root.position[o][a ? "on" : "off"],
            n && !a && f.root.edge,
            r
          ),
          ...l,
          children: t,
        }),
        a &&
          e &&
          c.jsx("div", { onClick: () => i(), className: f.root.backdrop }),
      ],
    })
  );
};
Hb.displayName = "Drawer";
Object.assign(Hb, { Header: Ub, Items: Bb });
function Po(e) {
  return Wb(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function cr(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function bn(e) {
  var t;
  return (t = (Wb(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Wb(e) {
  return e instanceof Node || e instanceof cr(e).Node;
}
function $e(e) {
  return e instanceof Element || e instanceof cr(e).Element;
}
function At(e) {
  return e instanceof HTMLElement || e instanceof cr(e).HTMLElement;
}
function Xd(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof cr(e).ShadowRoot;
}
function ts(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = Rr(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(o)
  );
}
function Z4(e) {
  return ["table", "td", "th"].includes(Po(e));
}
function gh(e) {
  const t = mh(),
    r = Rr(e);
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n)
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n)
    )
  );
}
function eO(e) {
  let t = gn(e);
  for (; At(t) && !Kn(t); ) {
    if (gh(t)) return t;
    t = gn(t);
  }
  return null;
}
function mh() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Kn(e) {
  return ["html", "body", "#document"].includes(Po(e));
}
function Rr(e) {
  return cr(e).getComputedStyle(e);
}
function ju(e) {
  return $e(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function gn(e) {
  if (Po(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Xd(e) && e.host) || bn(e);
  return Xd(t) ? t.host : t;
}
function Qb(e) {
  const t = gn(e);
  return Kn(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : At(t) && ts(t)
    ? t
    : Qb(t);
}
function Qn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Qb(e),
    i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = cr(o);
  return i
    ? t.concat(
        a,
        a.visualViewport || [],
        ts(o) ? o : [],
        a.frameElement && r ? Qn(a.frameElement) : []
      )
    : t.concat(o, Qn(o, [], r));
}
function Yr(e) {
  let t = e.activeElement;
  for (
    ;
    ((r = t) == null || (r = r.shadowRoot) == null
      ? void 0
      : r.activeElement) != null;

  ) {
    var r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function xt(e, t) {
  if (!e || !t) return !1;
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Xd(r)) {
    let n = t;
    for (; n; ) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function yh() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Vb() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: r, version: n } = t;
          return r + "/" + n;
        })
        .join(" ")
    : navigator.userAgent;
}
function qb(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : Jd() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function vh(e) {
  return tO()
    ? !1
    : (!Jd() && e.width === 0 && e.height === 0) ||
        (Jd() &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === "mouse") ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === "touch");
}
function bh() {
  return /apple/i.test(navigator.vendor);
}
function Jd() {
  const e = /android/i;
  return e.test(yh()) || e.test(Vb());
}
function Kb() {
  return yh().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function tO() {
  return Vb().includes("jsdom/");
}
function Wl(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
function rO(e) {
  return "nativeEvent" in e;
}
function nO(e) {
  return e.matches("html,body");
}
function Zt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Cc(e, t) {
  if (t == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
function Ln(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const oO =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function xh(e) {
  return At(e) && e.matches(oO);
}
function Mt(e) {
  e.preventDefault(), e.stopPropagation();
}
function Yb(e) {
  return e ? e.getAttribute("role") === "combobox" && xh(e) : !1;
}
const iO = ["top", "right", "bottom", "left"],
  rg = ["start", "end"],
  ng = iO.reduce((e, t) => e.concat(t, t + "-" + rg[0], t + "-" + rg[1]), []),
  xi = Math.min,
  mo = Math.max,
  Ql = Math.round,
  Go = Math.floor,
  Yn = (e) => ({ x: e, y: e }),
  aO = { left: "right", right: "left", bottom: "top", top: "bottom" },
  sO = { start: "end", end: "start" };
function Zd(e, t, r) {
  return mo(e, xi(t, r));
}
function _i(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mn(e) {
  return e.split("-")[0];
}
function Zr(e) {
  return e.split("-")[1];
}
function Gb(e) {
  return e === "x" ? "y" : "x";
}
function wh(e) {
  return e === "y" ? "height" : "width";
}
function Nu(e) {
  return ["top", "bottom"].includes(mn(e)) ? "y" : "x";
}
function kh(e) {
  return Gb(Nu(e));
}
function Xb(e, t, r) {
  r === void 0 && (r = !1);
  const n = Zr(e),
    o = kh(e),
    i = wh(o);
  let a =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (a = ql(a)), [a, ql(a)];
}
function lO(e) {
  const t = ql(e);
  return [Vl(e), t, Vl(t)];
}
function Vl(e) {
  return e.replace(/start|end/g, (t) => sO[t]);
}
function uO(e, t, r) {
  const n = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? o : n) : t ? n : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function cO(e, t, r, n) {
  const o = Zr(e);
  let i = uO(mn(e), r === "start", n);
  return (
    o && ((i = i.map((a) => a + "-" + o)), t && (i = i.concat(i.map(Vl)))), i
  );
}
function ql(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aO[t]);
}
function dO(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Jb(e) {
  return typeof e != "number"
    ? dO(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Kl(e) {
  const { x: t, y: r, width: n, height: o } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r,
  };
}
function og(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = Nu(t),
    a = kh(t),
    s = wh(a),
    l = mn(t),
    u = i === "y",
    f = n.x + n.width / 2 - o.width / 2,
    d = n.y + n.height / 2 - o.height / 2,
    h = n[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: f, y: n.y - o.height };
      break;
    case "bottom":
      p = { x: f, y: n.y + n.height };
      break;
    case "right":
      p = { x: n.x + n.width, y: d };
      break;
    case "left":
      p = { x: n.x - o.width, y: d };
      break;
    default:
      p = { x: n.x, y: n.y };
  }
  switch (Zr(t)) {
    case "start":
      p[a] -= h * (r && u ? -1 : 1);
      break;
    case "end":
      p[a] += h * (r && u ? -1 : 1);
      break;
  }
  return p;
}
const fO = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: a,
    } = r,
    s = i.filter(Boolean),
    l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: d } = og(u, n, l),
    h = n,
    p = {},
    m = 0;
  for (let v = 0; v < s.length; v++) {
    const { name: k, fn: y } = s[v],
      {
        x: g,
        y: b,
        data: w,
        reset: S,
      } = await y({
        x: f,
        y: d,
        initialPlacement: n,
        placement: h,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: a,
        elements: { reference: e, floating: t },
      });
    (f = g != null ? g : f),
      (d = b != null ? b : d),
      (p = { ...p, [k]: { ...p[k], ...w } }),
      S &&
        m <= 50 &&
        (m++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: f, y: d } = og(u, h, l))),
        (v = -1));
  }
  return { x: f, y: d, placement: h, strategy: o, middlewareData: p };
};
async function Sh(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: a, elements: s, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = _i(t, e),
    m = Jb(p),
    k = s[h ? (d === "floating" ? "reference" : "floating") : d],
    y = Kl(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(k))) == null ||
          r
            ? k
            : k.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: l,
      })
    ),
    g = d === "floating" ? { ...a.floating, x: n, y: o } : a.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    w = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Kl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: g,
            offsetParent: b,
            strategy: l,
          })
        : g
    );
  return {
    top: (y.top - S.top + m.top) / w.y,
    bottom: (S.bottom - y.bottom + m.bottom) / w.y,
    left: (y.left - S.left + m.left) / w.x,
    right: (S.right - y.right + m.right) / w.x,
  };
}
const hO = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
        x: r,
        y: n,
        placement: o,
        rects: i,
        platform: a,
        elements: s,
        middlewareData: l,
      } = t,
      { element: u, padding: f = 0 } = _i(e, t) || {};
    if (u == null) return {};
    const d = Jb(f),
      h = { x: r, y: n },
      p = kh(o),
      m = wh(p),
      v = await a.getDimensions(u),
      k = p === "y",
      y = k ? "top" : "left",
      g = k ? "bottom" : "right",
      b = k ? "clientHeight" : "clientWidth",
      w = i.reference[m] + i.reference[p] - h[p] - i.floating[m],
      S = h[p] - i.reference[p],
      j = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = j ? j[b] : 0;
    (!E || !(await (a.isElement == null ? void 0 : a.isElement(j)))) &&
      (E = s.floating[b] || i.floating[m]);
    const I = w / 2 - S / 2,
      O = E / 2 - v[m] / 2 - 1,
      C = xi(d[y], O),
      D = xi(d[g], O),
      P = C,
      _ = E - v[m] - D,
      N = E / 2 - v[m] / 2 + I,
      L = Zd(P, N, _),
      B =
        !l.arrow &&
        Zr(o) != null &&
        N !== L &&
        i.reference[m] / 2 - (N < P ? C : D) - v[m] / 2 < 0,
      W = B ? (N < P ? N - P : N - _) : 0;
    return {
      [p]: h[p] + W,
      data: {
        [p]: L,
        centerOffset: N - L - W,
        ...(B && { alignmentOffset: W }),
      },
      reset: B,
    };
  },
});
function pO(e, t, r) {
  return (
    e
      ? [...r.filter((o) => Zr(o) === e), ...r.filter((o) => Zr(o) !== e)]
      : r.filter((o) => mn(o) === o)
  ).filter((o) => (e ? Zr(o) === e || (t ? Vl(o) !== o : !1) : !0));
}
const gO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "autoPlacement",
        options: e,
        async fn(t) {
          var r, n, o;
          const {
              rects: i,
              middlewareData: a,
              placement: s,
              platform: l,
              elements: u,
            } = t,
            {
              crossAxis: f = !1,
              alignment: d,
              allowedPlacements: h = ng,
              autoAlignment: p = !0,
              ...m
            } = _i(e, t),
            v = d !== void 0 || h === ng ? pO(d || null, p, h) : h,
            k = await Sh(t, m),
            y = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0,
            g = v[y];
          if (g == null) return {};
          const b = Xb(
            g,
            i,
            await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
          );
          if (s !== g) return { reset: { placement: v[0] } };
          const w = [k[mn(g)], k[b[0]], k[b[1]]],
            S = [
              ...(((n = a.autoPlacement) == null ? void 0 : n.overflows) || []),
              { placement: g, overflows: w },
            ],
            j = v[y + 1];
          if (j)
            return {
              data: { index: y + 1, overflows: S },
              reset: { placement: j },
            };
          const E = S.map((C) => {
              const D = Zr(C.placement);
              return [
                C.placement,
                D && f
                  ? C.overflows.slice(0, 2).reduce((P, _) => P + _, 0)
                  : C.overflows[0],
                C.overflows,
              ];
            }).sort((C, D) => C[1] - D[1]),
            O =
              ((o = E.filter((C) =>
                C[2].slice(0, Zr(C[0]) ? 2 : 3).every((D) => D <= 0)
              )[0]) == null
                ? void 0
                : o[0]) || E[0][0];
          return O !== s
            ? { data: { index: y + 1, overflows: S }, reset: { placement: O } }
            : {};
        },
      }
    );
  },
  mO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: s,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: v = !0,
              ...k
            } = _i(e, t);
          if ((r = i.arrow) != null && r.alignmentOffset) return {};
          const y = mn(o),
            g = mn(s) === s,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            w = h || (g || !v ? [ql(s)] : lO(s));
          !h && m !== "none" && w.push(...cO(s, v, m, b));
          const S = [s, ...w],
            j = await Sh(t, k),
            E = [];
          let I = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((f && E.push(j[y]), d)) {
            const P = Xb(o, a, b);
            E.push(j[P[0]], j[P[1]]);
          }
          if (
            ((I = [...I, { placement: o, overflows: E }]),
            !E.every((P) => P <= 0))
          ) {
            var O, C;
            const P = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1,
              _ = S[P];
            if (_)
              return {
                data: { index: P, overflows: I },
                reset: { placement: _ },
              };
            let N =
              (C = I.filter((L) => L.overflows[0] <= 0).sort(
                (L, B) => L.overflows[1] - B.overflows[1]
              )[0]) == null
                ? void 0
                : C.placement;
            if (!N)
              switch (p) {
                case "bestFit": {
                  var D;
                  const L =
                    (D = I.map((B) => [
                      B.placement,
                      B.overflows
                        .filter((W) => W > 0)
                        .reduce((W, R) => W + R, 0),
                    ]).sort((B, W) => B[1] - W[1])[0]) == null
                      ? void 0
                      : D[0];
                  L && (N = L);
                  break;
                }
                case "initialPlacement":
                  N = s;
                  break;
              }
            if (o !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
async function yO(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    a = mn(r),
    s = Zr(r),
    l = Nu(r) === "y",
    u = ["left", "top"].includes(a) ? -1 : 1,
    f = i && l ? -1 : 1,
    d = _i(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: m,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    s && typeof m == "number" && (p = s === "end" ? m * -1 : m),
    l ? { x: p * f, y: h * u } : { x: h * u, y: p * f }
  );
}
const vO = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: o, y: i, placement: a, middlewareData: s } = t,
            l = await yO(t, e);
          return a === ((r = s.offset) == null ? void 0 : r.placement) &&
            (n = s.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: a } };
        },
      }
    );
  },
  bO = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: a = !1,
              limiter: s = {
                fn: (k) => {
                  let { x: y, y: g } = k;
                  return { x: y, y: g };
                },
              },
              ...l
            } = _i(e, t),
            u = { x: r, y: n },
            f = await Sh(t, l),
            d = Nu(mn(o)),
            h = Gb(d);
          let p = u[h],
            m = u[d];
          if (i) {
            const k = h === "y" ? "top" : "left",
              y = h === "y" ? "bottom" : "right",
              g = p + f[k],
              b = p - f[y];
            p = Zd(g, p, b);
          }
          if (a) {
            const k = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              g = m + f[k],
              b = m - f[y];
            m = Zd(g, m, b);
          }
          const v = s.fn({ ...t, [h]: p, [d]: m });
          return { ...v, data: { x: v.x - r, y: v.y - n } };
        },
      }
    );
  };
function Zb(e) {
  const t = Rr(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const o = At(e),
    i = o ? e.offsetWidth : r,
    a = o ? e.offsetHeight : n,
    s = Ql(r) !== i || Ql(n) !== a;
  return s && ((r = i), (n = a)), { width: r, height: n, $: s };
}
function Eh(e) {
  return $e(e) ? e : e.contextElement;
}
function ii(e) {
  const t = Eh(e);
  if (!At(t)) return Yn(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: o, $: i } = Zb(t);
  let a = (i ? Ql(r.width) : r.width) / n,
    s = (i ? Ql(r.height) : r.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: a, y: s }
  );
}
const xO = Yn(0);
function ex(e) {
  const t = cr(e);
  return !mh() || !t.visualViewport
    ? xO
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function wO(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== cr(e)) ? !1 : t;
}
function jo(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(),
    i = Eh(e);
  let a = Yn(1);
  t && (n ? $e(n) && (a = ii(n)) : (a = ii(e)));
  const s = wO(i, r, n) ? ex(i) : Yn(0);
  let l = (o.left + s.x) / a.x,
    u = (o.top + s.y) / a.y,
    f = o.width / a.x,
    d = o.height / a.y;
  if (i) {
    const h = cr(i),
      p = n && $e(n) ? cr(n) : n;
    let m = h,
      v = m.frameElement;
    for (; v && n && p !== m; ) {
      const k = ii(v),
        y = v.getBoundingClientRect(),
        g = Rr(v),
        b = y.left + (v.clientLeft + parseFloat(g.paddingLeft)) * k.x,
        w = y.top + (v.clientTop + parseFloat(g.paddingTop)) * k.y;
      (l *= k.x),
        (u *= k.y),
        (f *= k.x),
        (d *= k.y),
        (l += b),
        (u += w),
        (m = cr(v)),
        (v = m.frameElement);
    }
  }
  return Kl({ width: f, height: d, x: l, y: u });
}
const kO = [":popover-open", ":modal"];
function Ch(e) {
  return kO.some((t) => {
    try {
      return e.matches(t);
    } catch (r) {
      return !1;
    }
  });
}
function SO(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: o } = e;
  const i = o === "fixed",
    a = bn(n),
    s = t ? Ch(t.floating) : !1;
  if (n === a || (s && i)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Yn(1);
  const f = Yn(0),
    d = At(n);
  if (
    (d || (!d && !i)) &&
    ((Po(n) !== "body" || ts(a)) && (l = ju(n)), At(n))
  ) {
    const h = jo(n);
    (u = ii(n)), (f.x = h.x + n.clientLeft), (f.y = h.y + n.clientTop);
  }
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + f.x,
    y: r.y * u.y - l.scrollTop * u.y + f.y,
  };
}
function EO(e) {
  return Array.from(e.getClientRects());
}
function tx(e) {
  return jo(bn(e)).left + ju(e).scrollLeft;
}
function CO(e) {
  const t = bn(e),
    r = ju(e),
    n = e.ownerDocument.body,
    o = mo(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = mo(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + tx(e);
  const s = -r.scrollTop;
  return (
    Rr(n).direction === "rtl" && (a += mo(t.clientWidth, n.clientWidth) - o),
    { width: o, height: i, x: a, y: s }
  );
}
function jO(e, t) {
  const r = cr(e),
    n = bn(e),
    o = r.visualViewport;
  let i = n.clientWidth,
    a = n.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    const u = mh();
    (!u || (u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s, y: l };
}
function NO(e, t) {
  const r = jo(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft,
    i = At(e) ? ii(e) : Yn(1),
    a = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    l = o * i.x,
    u = n * i.y;
  return { width: a, height: s, x: l, y: u };
}
function ig(e, t, r) {
  let n;
  if (t === "viewport") n = jO(e, r);
  else if (t === "document") n = CO(bn(e));
  else if ($e(t)) n = NO(t, r);
  else {
    const o = ex(e);
    n = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Kl(n);
}
function rx(e, t) {
  const r = gn(e);
  return r === t || !$e(r) || Kn(r)
    ? !1
    : Rr(r).position === "fixed" || rx(r, t);
}
function TO(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Qn(e, [], !1).filter((s) => $e(s) && Po(s) !== "body"),
    o = null;
  const i = Rr(e).position === "fixed";
  let a = i ? gn(e) : e;
  for (; $e(a) && !Kn(a); ) {
    const s = Rr(a),
      l = gh(a);
    !l && s.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ts(a) && !l && rx(e, a))
      )
        ? (n = n.filter((f) => f !== a))
        : (o = s),
      (a = gn(a));
  }
  return t.set(e, n), n;
}
function OO(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const a = [
      ...(r === "clippingAncestors"
        ? Ch(t)
          ? []
          : TO(t, this._c)
        : [].concat(r)),
      n,
    ],
    s = a[0],
    l = a.reduce((u, f) => {
      const d = ig(t, f, o);
      return (
        (u.top = mo(d.top, u.top)),
        (u.right = xi(d.right, u.right)),
        (u.bottom = xi(d.bottom, u.bottom)),
        (u.left = mo(d.left, u.left)),
        u
      );
    }, ig(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function RO(e) {
  const { width: t, height: r } = Zb(e);
  return { width: t, height: r };
}
function PO(e, t, r) {
  const n = At(t),
    o = bn(t),
    i = r === "fixed",
    a = jo(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = Yn(0);
  if (n || (!n && !i))
    if (((Po(t) !== "body" || ts(o)) && (s = ju(t)), n)) {
      const d = jo(t, !0, i, t);
      (l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop);
    } else o && (l.x = tx(o));
  const u = a.left + s.scrollLeft - l.x,
    f = a.top + s.scrollTop - l.y;
  return { x: u, y: f, width: a.width, height: a.height };
}
function jc(e) {
  return Rr(e).position === "static";
}
function ag(e, t) {
  return !At(e) || Rr(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function nx(e, t) {
  const r = cr(e);
  if (Ch(e)) return r;
  if (!At(e)) {
    let o = gn(e);
    for (; o && !Kn(o); ) {
      if ($e(o) && !jc(o)) return o;
      o = gn(o);
    }
    return r;
  }
  let n = ag(e, t);
  for (; n && Z4(n) && jc(n); ) n = ag(n, t);
  return n && Kn(n) && jc(n) && !gh(n) ? r : n || eO(e) || r;
}
const _O = async function (e) {
  const t = this.getOffsetParent || nx,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: PO(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function MO(e) {
  return Rr(e).direction === "rtl";
}
const LO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: SO,
  getDocumentElement: bn,
  getClippingRect: OO,
  getOffsetParent: nx,
  getElementRects: _O,
  getClientRects: EO,
  getDimensions: RO,
  getScale: ii,
  isElement: $e,
  isRTL: MO,
};
function DO(e, t) {
  let r = null,
    n;
  const o = bn(e);
  function i() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), (r = null);
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const { left: u, top: f, width: d, height: h } = e.getBoundingClientRect();
    if ((s || t(), !d || !h)) return;
    const p = Go(f),
      m = Go(o.clientWidth - (u + d)),
      v = Go(o.clientHeight - (f + h)),
      k = Go(u),
      g = {
        rootMargin: -p + "px " + -m + "px " + -v + "px " + -k + "px",
        threshold: mo(0, xi(1, l)) || 1,
      };
    let b = !0;
    function w(S) {
      const j = S[0].intersectionRatio;
      if (j !== l) {
        if (!b) return a();
        j
          ? a(!1, j)
          : (n = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      b = !1;
    }
    try {
      r = new IntersectionObserver(w, { ...g, root: o.ownerDocument });
    } catch (S) {
      r = new IntersectionObserver(w, g);
    }
    r.observe(e);
  }
  return a(!0), i;
}
function ox(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    u = Eh(e),
    f = o || i ? [...(u ? Qn(u) : []), ...Qn(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", r, { passive: !0 }),
      i && y.addEventListener("resize", r);
  });
  const d = u && s ? DO(u, r) : null;
  let h = -1,
    p = null;
  a &&
    ((p = new ResizeObserver((y) => {
      let [g] = y;
      g &&
        g.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var b;
          (b = p) == null || b.observe(t);
        }))),
        r();
    })),
    u && !l && p.observe(u),
    p.observe(t));
  let m,
    v = l ? jo(e) : null;
  l && k();
  function k() {
    const y = jo(e);
    v &&
      (y.x !== v.x ||
        y.y !== v.y ||
        y.width !== v.width ||
        y.height !== v.height) &&
      r(),
      (v = y),
      (m = requestAnimationFrame(k));
  }
  return (
    r(),
    () => {
      var y;
      f.forEach((g) => {
        o && g.removeEventListener("scroll", r),
          i && g.removeEventListener("resize", r);
      }),
        d == null || d(),
        (y = p) == null || y.disconnect(),
        (p = null),
        l && cancelAnimationFrame(m);
    }
  );
}
const IO = vO,
  AO = gO,
  zO = bO,
  FO = mO,
  sg = hO,
  $O = (e, t, r) => {
    const n = new Map(),
      o = { platform: LO, ...r },
      i = { ...o.platform, _c: n };
    return fO(e, t, { ...o, platform: i });
  };
var Ys = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Yl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Yl(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !Yl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ix(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lg(e, t) {
  const r = ix(e);
  return Math.round(t * r) / r;
}
function ug(e) {
  const t = x.useRef(e);
  return (
    Ys(() => {
      t.current = e;
    }),
    t
  );
}
function UO(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: o,
      elements: { reference: i, floating: a } = {},
      transform: s = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [f, d] = x.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = x.useState(n);
  Yl(h, n) || p(n);
  const [m, v] = x.useState(null),
    [k, y] = x.useState(null),
    g = x.useCallback((W) => {
      W !== j.current && ((j.current = W), v(W));
    }, []),
    b = x.useCallback((W) => {
      W !== E.current && ((E.current = W), y(W));
    }, []),
    w = i || m,
    S = a || k,
    j = x.useRef(null),
    E = x.useRef(null),
    I = x.useRef(f),
    O = l != null,
    C = ug(l),
    D = ug(o),
    P = x.useCallback(() => {
      if (!j.current || !E.current) return;
      const W = { placement: t, strategy: r, middleware: h };
      D.current && (W.platform = D.current),
        $O(j.current, E.current, W).then((R) => {
          const F = { ...R, isPositioned: !0 };
          _.current &&
            !Yl(I.current, F) &&
            ((I.current = F),
            Va.flushSync(() => {
              d(F);
            }));
        });
    }, [h, t, r, D]);
  Ys(() => {
    u === !1 &&
      I.current.isPositioned &&
      ((I.current.isPositioned = !1), d((W) => ({ ...W, isPositioned: !1 })));
  }, [u]);
  const _ = x.useRef(!1);
  Ys(
    () => (
      (_.current = !0),
      () => {
        _.current = !1;
      }
    ),
    []
  ),
    Ys(() => {
      if ((w && (j.current = w), S && (E.current = S), w && S)) {
        if (C.current) return C.current(w, S, P);
        P();
      }
    }, [w, S, P, C, O]);
  const N = x.useMemo(
      () => ({ reference: j, floating: E, setReference: g, setFloating: b }),
      [g, b]
    ),
    L = x.useMemo(() => ({ reference: w, floating: S }), [w, S]),
    B = x.useMemo(() => {
      const W = { position: r, left: 0, top: 0 };
      if (!L.floating) return W;
      const R = lg(L.floating, f.x),
        F = lg(L.floating, f.y);
      return s
        ? {
            ...W,
            transform: "translate(" + R + "px, " + F + "px)",
            ...(ix(L.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: R, top: F };
    }, [r, s, L.floating, f.x, f.y]);
  return x.useMemo(
    () => ({ ...f, update: P, refs: N, elements: L, floatingStyles: B }),
    [f, P, N, L, B]
  );
}
const BO = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: o } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? sg({ element: n.current, padding: o }).fn(r)
            : {}
          : n
          ? sg({ element: n, padding: o }).fn(r)
          : {};
      },
    };
  },
  HO = (e, t) => ({ ...IO(e), options: [e, t] }),
  WO = (e, t) => ({ ...zO(e), options: [e, t] }),
  QO = (e, t) => ({ ...FO(e), options: [e, t] }),
  VO = (e, t) => ({ ...AO(e), options: [e, t] }),
  qO = (e, t) => ({ ...BO(e), options: [e, t] });
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var KO = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  Gl = KO.join(","),
  ax = typeof Element > "u",
  wi = ax
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Xl =
    !ax && Element.prototype.getRootNode
      ? function (e) {
          var t;
          return e == null || (t = e.getRootNode) === null || t === void 0
            ? void 0
            : t.call(e);
        }
      : function (e) {
          return e == null ? void 0 : e.ownerDocument;
        },
  Jl = function e(t, r) {
    var n;
    r === void 0 && (r = !0);
    var o =
        t == null || (n = t.getAttribute) === null || n === void 0
          ? void 0
          : n.call(t, "inert"),
      i = o === "" || o === "true",
      a = i || (r && t && e(t.parentNode));
    return a;
  },
  YO = function (t) {
    var r,
      n =
        t == null || (r = t.getAttribute) === null || r === void 0
          ? void 0
          : r.call(t, "contenteditable");
    return n === "" || n === "true";
  },
  GO = function (t, r, n) {
    if (Jl(t)) return [];
    var o = Array.prototype.slice.apply(t.querySelectorAll(Gl));
    return r && wi.call(t, Gl) && o.unshift(t), (o = o.filter(n)), o;
  },
  XO = function e(t, r, n) {
    for (var o = [], i = Array.from(t); i.length; ) {
      var a = i.shift();
      if (!Jl(a, !1))
        if (a.tagName === "SLOT") {
          var s = a.assignedElements(),
            l = s.length ? s : a.children,
            u = e(l, !0, n);
          n.flatten
            ? o.push.apply(o, u)
            : o.push({ scopeParent: a, candidates: u });
        } else {
          var f = wi.call(a, Gl);
          f && n.filter(a) && (r || !t.includes(a)) && o.push(a);
          var d =
              a.shadowRoot ||
              (typeof n.getShadowRoot == "function" && n.getShadowRoot(a)),
            h = !Jl(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
          if (d && h) {
            var p = e(d === !0 ? a.children : d.children, !0, n);
            n.flatten
              ? o.push.apply(o, p)
              : o.push({ scopeParent: a, candidates: p });
          } else i.unshift.apply(i, a.children);
        }
    }
    return o;
  },
  sx = function (t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  },
  lx = function (t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || YO(t)) &&
      !sx(t)
      ? 0
      : t.tabIndex;
  },
  JO = function (t, r) {
    var n = lx(t);
    return n < 0 && r && !sx(t) ? 0 : n;
  },
  ZO = function (t, r) {
    return t.tabIndex === r.tabIndex
      ? t.documentOrder - r.documentOrder
      : t.tabIndex - r.tabIndex;
  },
  ux = function (t) {
    return t.tagName === "INPUT";
  },
  e5 = function (t) {
    return ux(t) && t.type === "hidden";
  },
  t5 = function (t) {
    var r =
      t.tagName === "DETAILS" &&
      Array.prototype.slice.apply(t.children).some(function (n) {
        return n.tagName === "SUMMARY";
      });
    return r;
  },
  r5 = function (t, r) {
    for (var n = 0; n < t.length; n++)
      if (t[n].checked && t[n].form === r) return t[n];
  },
  n5 = function (t) {
    if (!t.name) return !0;
    var r = t.form || Xl(t),
      n = function (s) {
        return r.querySelectorAll('input[type="radio"][name="' + s + '"]');
      },
      o;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      o = n(window.CSS.escape(t.name));
    else
      try {
        o = n(t.name);
      } catch (a) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            a.message
          ),
          !1
        );
      }
    var i = r5(o, t.form);
    return !i || i === t;
  },
  o5 = function (t) {
    return ux(t) && t.type === "radio";
  },
  i5 = function (t) {
    return o5(t) && !n5(t);
  },
  a5 = function (t) {
    var r,
      n = t && Xl(t),
      o = (r = n) === null || r === void 0 ? void 0 : r.host,
      i = !1;
    if (n && n !== t) {
      var a, s, l;
      for (
        i = !!(
          ((a = o) !== null &&
            a !== void 0 &&
            (s = a.ownerDocument) !== null &&
            s !== void 0 &&
            s.contains(o)) ||
          (t != null &&
            (l = t.ownerDocument) !== null &&
            l !== void 0 &&
            l.contains(t))
        );
        !i && o;

      ) {
        var u, f, d;
        (n = Xl(o)),
          (o = (u = n) === null || u === void 0 ? void 0 : u.host),
          (i = !!(
            (f = o) !== null &&
            f !== void 0 &&
            (d = f.ownerDocument) !== null &&
            d !== void 0 &&
            d.contains(o)
          ));
      }
    }
    return i;
  },
  cg = function (t) {
    var r = t.getBoundingClientRect(),
      n = r.width,
      o = r.height;
    return n === 0 && o === 0;
  },
  s5 = function (t, r) {
    var n = r.displayCheck,
      o = r.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden") return !0;
    var i = wi.call(t, "details>summary:first-of-type"),
      a = i ? t.parentElement : t;
    if (wi.call(a, "details:not([open]) *")) return !0;
    if (!n || n === "full" || n === "legacy-full") {
      if (typeof o == "function") {
        for (var s = t; t; ) {
          var l = t.parentElement,
            u = Xl(t);
          if (l && !l.shadowRoot && o(l) === !0) return cg(t);
          t.assignedSlot
            ? (t = t.assignedSlot)
            : !l && u !== t.ownerDocument
            ? (t = u.host)
            : (t = l);
        }
        t = s;
      }
      if (a5(t)) return !t.getClientRects().length;
      if (n !== "legacy-full") return !0;
    } else if (n === "non-zero-area") return cg(t);
    return !1;
  },
  l5 = function (t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var r = t.parentElement; r; ) {
        if (r.tagName === "FIELDSET" && r.disabled) {
          for (var n = 0; n < r.children.length; n++) {
            var o = r.children.item(n);
            if (o.tagName === "LEGEND")
              return wi.call(r, "fieldset[disabled] *") ? !0 : !o.contains(t);
          }
          return !0;
        }
        r = r.parentElement;
      }
    return !1;
  },
  u5 = function (t, r) {
    return !(r.disabled || Jl(r) || e5(r) || s5(r, t) || t5(r) || l5(r));
  },
  ef = function (t, r) {
    return !(i5(r) || lx(r) < 0 || !u5(t, r));
  },
  c5 = function (t) {
    var r = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(r) || r >= 0);
  },
  d5 = function e(t) {
    var r = [],
      n = [];
    return (
      t.forEach(function (o, i) {
        var a = !!o.scopeParent,
          s = a ? o.scopeParent : o,
          l = JO(s, a),
          u = a ? e(o.candidates) : s;
        l === 0
          ? a
            ? r.push.apply(r, u)
            : r.push(s)
          : n.push({
              documentOrder: i,
              tabIndex: l,
              item: o,
              isScope: a,
              content: u,
            });
      }),
      n
        .sort(ZO)
        .reduce(function (o, i) {
          return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
        }, [])
        .concat(r)
    );
  },
  Tu = function (t, r) {
    r = r || {};
    var n;
    return (
      r.getShadowRoot
        ? (n = XO([t], r.includeContainer, {
            filter: ef.bind(null, r),
            flatten: !1,
            getShadowRoot: r.getShadowRoot,
            shadowRootFilter: c5,
          }))
        : (n = GO(t, r.includeContainer, ef.bind(null, r))),
      d5(n)
    );
  },
  f5 = function (t, r) {
    if (((r = r || {}), !t)) throw new Error("No node provided");
    return wi.call(t, Gl) === !1 ? !1 : ef(r, t);
  };
function cx(e) {
  return x.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((r) => {
              typeof r == "function" ? r(t) : r != null && (r.current = t);
            });
          },
    e
  );
}
const h5 = sf.useInsertionEffect,
  p5 = h5 || ((e) => e());
function Gr(e) {
  const t = x.useRef(() => {});
  return (
    p5(() => {
      t.current = e;
    }),
    x.useCallback(function () {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...n);
    }, [])
  );
}
const jh = "ArrowUp",
  rs = "ArrowDown",
  ki = "ArrowLeft",
  Mi = "ArrowRight";
function Ts(e, t, r) {
  return Math.floor(e / t) !== r;
}
function ma(e, t) {
  return t < 0 || t >= e.current.length;
}
function Nc(e, t) {
  return Wt(e, { disabledIndices: t });
}
function dg(e, t) {
  return Wt(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t,
  });
}
function Wt(e, t) {
  let {
    startingIndex: r = -1,
    decrement: n = !1,
    disabledIndices: o,
    amount: i = 1,
  } = t === void 0 ? {} : t;
  const a = e.current,
    s = o
      ? (u) => o.includes(u)
      : (u) => {
          const f = a[u];
          return (
            f == null ||
            f.hasAttribute("disabled") ||
            f.getAttribute("aria-disabled") === "true"
          );
        };
  let l = r;
  do l += n ? -i : i;
  while (l >= 0 && l <= a.length - 1 && s(l));
  return l;
}
function g5(e, t) {
  let {
      event: r,
      orientation: n,
      loop: o,
      cols: i,
      disabledIndices: a,
      minIndex: s,
      maxIndex: l,
      prevIndex: u,
      stopEvent: f = !1,
    } = t,
    d = u;
  if (r.key === jh) {
    if ((f && Mt(r), u === -1)) d = l;
    else if (
      ((d = Wt(e, {
        startingIndex: d,
        amount: i,
        decrement: !0,
        disabledIndices: a,
      })),
      o && (u - i < s || d < 0))
    ) {
      const h = u % i,
        p = l % i,
        m = l - (p - h);
      p === h ? (d = l) : (d = p > h ? m : m - i);
    }
    ma(e, d) && (d = u);
  }
  if (
    (r.key === rs &&
      (f && Mt(r),
      u === -1
        ? (d = s)
        : ((d = Wt(e, { startingIndex: u, amount: i, disabledIndices: a })),
          o &&
            u + i > l &&
            (d = Wt(e, {
              startingIndex: (u % i) - i,
              amount: i,
              disabledIndices: a,
            }))),
      ma(e, d) && (d = u)),
    n === "both")
  ) {
    const h = Go(u / i);
    r.key === Mi &&
      (f && Mt(r),
      u % i !== i - 1
        ? ((d = Wt(e, { startingIndex: u, disabledIndices: a })),
          o &&
            Ts(d, i, h) &&
            (d = Wt(e, { startingIndex: u - (u % i) - 1, disabledIndices: a })))
        : o &&
          (d = Wt(e, { startingIndex: u - (u % i) - 1, disabledIndices: a })),
      Ts(d, i, h) && (d = u)),
      r.key === ki &&
        (f && Mt(r),
        u % i !== 0
          ? ((d = Wt(e, {
              startingIndex: u,
              disabledIndices: a,
              decrement: !0,
            })),
            o &&
              Ts(d, i, h) &&
              (d = Wt(e, {
                startingIndex: u + (i - (u % i)),
                decrement: !0,
                disabledIndices: a,
              })))
          : o &&
            (d = Wt(e, {
              startingIndex: u + (i - (u % i)),
              decrement: !0,
              disabledIndices: a,
            })),
        Ts(d, i, h) && (d = u));
    const p = Go(l / i) === h;
    ma(e, d) &&
      (o && p
        ? (d =
            r.key === ki
              ? l
              : Wt(e, { startingIndex: u - (u % i) - 1, disabledIndices: a }))
        : (d = u));
  }
  return d;
}
function m5(e, t, r) {
  const n = [];
  let o = 0;
  return (
    e.forEach((i, a) => {
      let { width: s, height: l } = i,
        u = !1;
      for (r && (o = 0); !u; ) {
        const f = [];
        for (let d = 0; d < s; d++)
          for (let h = 0; h < l; h++) f.push(o + d + h * t);
        (o % t) + s <= t && f.every((d) => n[d] == null)
          ? (f.forEach((d) => {
              n[d] = a;
            }),
            (u = !0))
          : o++;
      }
    }),
    [...n]
  );
}
function y5(e, t, r, n, o) {
  if (e === -1) return -1;
  const i = r.indexOf(e);
  switch (o) {
    case "tl":
      return i;
    case "tr":
      return i + t[e].width - 1;
    case "bl":
      return i + (t[e].height - 1) * n;
    case "br":
      return r.lastIndexOf(e);
  }
}
function v5(e, t) {
  return t.flatMap((r, n) => (e.includes(r) ? [n] : []));
}
let fg = 0;
function on(e, t) {
  t === void 0 && (t = {});
  const { preventScroll: r = !1, cancelPrevious: n = !0, sync: o = !1 } = t;
  n && cancelAnimationFrame(fg);
  const i = () => (e == null ? void 0 : e.focus({ preventScroll: r }));
  o ? i() : (fg = requestAnimationFrame(i));
}
var Fe = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function b5(e, t) {
  const r = e.compareDocumentPosition(t);
  return r & Node.DOCUMENT_POSITION_FOLLOWING ||
    r & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : r & Node.DOCUMENT_POSITION_PRECEDING ||
      r & Node.DOCUMENT_POSITION_CONTAINS
    ? 1
    : 0;
}
function x5(e, t) {
  if (e.size !== t.size) return !1;
  for (const [r, n] of e.entries()) if (n !== t.get(r)) return !1;
  return !0;
}
const dx = x.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: { current: [] },
});
function w5(e) {
  let { children: t, elementsRef: r, labelsRef: n } = e;
  const [o, i] = x.useState(() => new Map()),
    a = x.useCallback((l) => {
      i((u) => new Map(u).set(l, null));
    }, []),
    s = x.useCallback((l) => {
      i((u) => {
        const f = new Map(u);
        return f.delete(l), f;
      });
    }, []);
  return (
    Fe(() => {
      const l = new Map(o);
      Array.from(l.keys())
        .sort(b5)
        .forEach((f, d) => {
          l.set(f, d);
        }),
        x5(o, l) || i(l);
    }, [o]),
    x.createElement(
      dx.Provider,
      {
        value: x.useMemo(
          () => ({
            register: a,
            unregister: s,
            map: o,
            elementsRef: r,
            labelsRef: n,
          }),
          [a, s, o, r, n]
        ),
      },
      t
    )
  );
}
function k5(e) {
  let { label: t } = e === void 0 ? {} : e;
  const [r, n] = x.useState(null),
    o = x.useRef(null),
    {
      register: i,
      unregister: a,
      map: s,
      elementsRef: l,
      labelsRef: u,
    } = x.useContext(dx),
    f = x.useCallback(
      (d) => {
        if (((o.current = d), r !== null && ((l.current[r] = d), u))) {
          var h;
          const p = t !== void 0;
          u.current[r] = p
            ? t
            : (h = d == null ? void 0 : d.textContent) != null
            ? h
            : null;
        }
      },
      [r, l, u, t]
    );
  return (
    Fe(() => {
      const d = o.current;
      if (d)
        return (
          i(d),
          () => {
            a(d);
          }
        );
    }, [i, a]),
    Fe(() => {
      const d = o.current ? s.get(o.current) : null;
      d != null && n(d);
    }, [s]),
    x.useMemo(() => ({ ref: f, index: r == null ? -1 : r }), [r, f])
  );
}
function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fa.apply(this, arguments)
  );
}
let Tc = !1,
  S5 = 0;
const hg = () => "floating-ui-" + S5++;
function E5() {
  const [e, t] = x.useState(() => (Tc ? hg() : void 0));
  return (
    Fe(() => {
      e == null && t(hg());
    }, []),
    x.useEffect(() => {
      Tc || (Tc = !0);
    }, []),
    e
  );
}
const C5 = sf.useId,
  Ou = C5 || E5;
function j5() {
  const e = new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...(e.get(t) || []), r]);
    },
    off(t, r) {
      var n;
      e.set(
        t,
        ((n = e.get(t)) == null ? void 0 : n.filter((o) => o !== r)) || []
      );
    },
  };
}
const N5 = x.createContext(null),
  T5 = x.createContext(null),
  Ru = () => {
    var e;
    return ((e = x.useContext(N5)) == null ? void 0 : e.id) || null;
  },
  ns = () => x.useContext(T5);
function No(e) {
  return "data-floating-ui-" + e;
}
function en(e) {
  const t = x.useRef(e);
  return (
    Fe(() => {
      t.current = e;
    }),
    t
  );
}
const pg = No("safe-polygon");
function Oc(e, t, r) {
  return r && !Wl(r) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function O5(e, t) {
  t === void 0 && (t = {});
  const {
      open: r,
      onOpenChange: n,
      dataRef: o,
      events: i,
      elements: { domReference: a, floating: s },
      refs: l,
    } = e,
    {
      enabled: u = !0,
      delay: f = 0,
      handleClose: d = null,
      mouseOnly: h = !1,
      restMs: p = 0,
      move: m = !0,
    } = t,
    v = ns(),
    k = Ru(),
    y = en(d),
    g = en(f),
    b = x.useRef(),
    w = x.useRef(),
    S = x.useRef(),
    j = x.useRef(),
    E = x.useRef(!0),
    I = x.useRef(!1),
    O = x.useRef(() => {}),
    C = x.useCallback(() => {
      var N;
      const L = (N = o.current.openEvent) == null ? void 0 : N.type;
      return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
    }, [o]);
  x.useEffect(() => {
    if (!u) return;
    function N(L) {
      let { open: B } = L;
      B || (clearTimeout(w.current), clearTimeout(j.current), (E.current = !0));
    }
    return (
      i.on("openchange", N),
      () => {
        i.off("openchange", N);
      }
    );
  }, [u, i]),
    x.useEffect(() => {
      if (!u || !y.current || !r) return;
      function N(B) {
        C() && n(!1, B, "hover");
      }
      const L = Zt(s).documentElement;
      return (
        L.addEventListener("mouseleave", N),
        () => {
          L.removeEventListener("mouseleave", N);
        }
      );
    }, [s, r, n, u, y, C]);
  const D = x.useCallback(
      function (N, L, B) {
        L === void 0 && (L = !0), B === void 0 && (B = "hover");
        const W = Oc(g.current, "close", b.current);
        W && !S.current
          ? (clearTimeout(w.current),
            (w.current = setTimeout(() => n(!1, N, B), W)))
          : L && (clearTimeout(w.current), n(!1, N, B));
      },
      [g, n]
    ),
    P = x.useCallback(() => {
      O.current(), (S.current = void 0);
    }, []),
    _ = x.useCallback(() => {
      if (I.current) {
        const N = Zt(l.floating.current).body;
        (N.style.pointerEvents = ""), N.removeAttribute(pg), (I.current = !1);
      }
    }, [l]);
  return (
    x.useEffect(() => {
      if (!u) return;
      function N() {
        return o.current.openEvent
          ? ["click", "mousedown"].includes(o.current.openEvent.type)
          : !1;
      }
      function L(R) {
        if (
          (clearTimeout(w.current),
          (E.current = !1),
          (h && !Wl(b.current)) || (p > 0 && Oc(g.current, "open") === 0))
        )
          return;
        const F = Oc(g.current, "open", b.current);
        F
          ? (w.current = setTimeout(() => {
              n(!0, R, "hover");
            }, F))
          : n(!0, R, "hover");
      }
      function B(R) {
        if (N()) return;
        O.current();
        const F = Zt(s);
        if ((clearTimeout(j.current), y.current)) {
          r || clearTimeout(w.current),
            (S.current = y.current({
              ...e,
              tree: v,
              x: R.clientX,
              y: R.clientY,
              onClose() {
                _(), P(), D(R, !0, "safe-polygon");
              },
            }));
          const U = S.current;
          F.addEventListener("mousemove", U),
            (O.current = () => {
              F.removeEventListener("mousemove", U);
            });
          return;
        }
        (b.current === "touch" ? !xt(s, R.relatedTarget) : !0) && D(R);
      }
      function W(R) {
        N() ||
          y.current == null ||
          y.current({
            ...e,
            tree: v,
            x: R.clientX,
            y: R.clientY,
            onClose() {
              _(), P(), D(R);
            },
          })(R);
      }
      if ($e(a)) {
        const R = a;
        return (
          r && R.addEventListener("mouseleave", W),
          s == null || s.addEventListener("mouseleave", W),
          m && R.addEventListener("mousemove", L, { once: !0 }),
          R.addEventListener("mouseenter", L),
          R.addEventListener("mouseleave", B),
          () => {
            r && R.removeEventListener("mouseleave", W),
              s == null || s.removeEventListener("mouseleave", W),
              m && R.removeEventListener("mousemove", L),
              R.removeEventListener("mouseenter", L),
              R.removeEventListener("mouseleave", B);
          }
        );
      }
    }, [a, s, u, e, h, p, m, D, P, _, n, r, v, g, y, o]),
    Fe(() => {
      var N;
      if (
        u &&
        r &&
        (N = y.current) != null &&
        N.__options.blockPointerEvents &&
        C()
      ) {
        const B = Zt(s).body;
        if (
          (B.setAttribute(pg, ""),
          (B.style.pointerEvents = "none"),
          (I.current = !0),
          $e(a) && s)
        ) {
          var L;
          const W = a,
            R =
              v == null ||
              (L = v.nodesRef.current.find((F) => F.id === k)) == null ||
              (L = L.context) == null
                ? void 0
                : L.elements.floating;
          return (
            R && (R.style.pointerEvents = ""),
            (W.style.pointerEvents = "auto"),
            (s.style.pointerEvents = "auto"),
            () => {
              (W.style.pointerEvents = ""), (s.style.pointerEvents = "");
            }
          );
        }
      }
    }, [u, r, k, s, a, v, y, C]),
    Fe(() => {
      r || ((b.current = void 0), P(), _());
    }, [r, P, _]),
    x.useEffect(
      () => () => {
        P(), clearTimeout(w.current), clearTimeout(j.current), _();
      },
      [u, a, P, _]
    ),
    x.useMemo(() => {
      if (!u) return {};
      function N(L) {
        b.current = L.pointerType;
      }
      return {
        reference: {
          onPointerDown: N,
          onPointerEnter: N,
          onMouseMove(L) {
            r ||
              p === 0 ||
              (clearTimeout(j.current),
              (j.current = setTimeout(() => {
                E.current || n(!0, L.nativeEvent, "hover");
              }, p)));
          },
        },
        floating: {
          onMouseEnter() {
            clearTimeout(w.current);
          },
          onMouseLeave(L) {
            D(L.nativeEvent, !1);
          },
        },
      };
    }, [u, p, r, n, D])
  );
}
function R5(e, t) {
  var r;
  let n = [],
    o = (r = e.find((i) => i.id === t)) == null ? void 0 : r.parentId;
  for (; o; ) {
    const i = e.find((a) => a.id === o);
    (o = i == null ? void 0 : i.parentId), i && (n = n.concat(i));
  }
  return n;
}
function yo(e, t) {
  let r = e.filter((o) => {
      var i;
      return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
    }),
    n = r;
  for (; n.length; )
    (n = e.filter((o) => {
      var i;
      return (i = n) == null
        ? void 0
        : i.some((a) => {
            var s;
            return (
              o.parentId === a.id && ((s = o.context) == null ? void 0 : s.open)
            );
          });
    })),
      (r = r.concat(n));
  return r;
}
function P5(e, t) {
  let r,
    n = -1;
  function o(i, a) {
    a > n && ((r = i), (n = a)),
      yo(e, i).forEach((l) => {
        o(l.id, a + 1);
      });
  }
  return o(t, 0), e.find((i) => i.id === r);
}
let Lo = new WeakMap(),
  Os = new WeakSet(),
  Rs = {},
  Rc = 0;
const _5 = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
  fx = (e) => e && (e.host || fx(e.parentNode)),
  M5 = (e, t) =>
    t
      .map((r) => {
        if (e.contains(r)) return r;
        const n = fx(r);
        return e.contains(n) ? n : null;
      })
      .filter((r) => r != null);
function L5(e, t, r, n) {
  const o = "data-floating-ui-inert",
    i = n ? "inert" : r ? "aria-hidden" : null,
    a = M5(t, e),
    s = new Set(),
    l = new Set(a),
    u = [];
  Rs[o] || (Rs[o] = new WeakMap());
  const f = Rs[o];
  a.forEach(d), h(t), s.clear();
  function d(p) {
    !p || s.has(p) || (s.add(p), p.parentNode && d(p.parentNode));
  }
  function h(p) {
    !p ||
      l.has(p) ||
      Array.prototype.forEach.call(p.children, (m) => {
        if (s.has(m)) h(m);
        else {
          const v = i ? m.getAttribute(i) : null,
            k = v !== null && v !== "false",
            y = (Lo.get(m) || 0) + 1,
            g = (f.get(m) || 0) + 1;
          Lo.set(m, y),
            f.set(m, g),
            u.push(m),
            y === 1 && k && Os.add(m),
            g === 1 && m.setAttribute(o, ""),
            !k && i && m.setAttribute(i, "true");
        }
      });
  }
  return (
    Rc++,
    () => {
      u.forEach((p) => {
        const m = (Lo.get(p) || 0) - 1,
          v = (f.get(p) || 0) - 1;
        Lo.set(p, m),
          f.set(p, v),
          m || (!Os.has(p) && i && p.removeAttribute(i), Os.delete(p)),
          v || p.removeAttribute(o);
      }),
        Rc--,
        Rc ||
          ((Lo = new WeakMap()),
          (Lo = new WeakMap()),
          (Os = new WeakSet()),
          (Rs = {}));
    }
  );
}
function gg(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = Zt(e[0]).body;
  return L5(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r);
}
const $a = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == "function" &&
    ResizeObserver.toString().includes("[native code]")
      ? "full"
      : "none",
});
function hx(e, t) {
  const r = Tu(e, $a());
  t === "prev" && r.reverse();
  const n = r.indexOf(Yr(Zt(e)));
  return r.slice(n + 1)[0];
}
function px() {
  return hx(document.body, "next");
}
function gx() {
  return hx(document.body, "prev");
}
function ya(e, t) {
  const r = t || e.currentTarget,
    n = e.relatedTarget;
  return !n || !xt(r, n);
}
function D5(e) {
  Tu(e, $a()).forEach((r) => {
    (r.dataset.tabindex = r.getAttribute("tabindex") || ""),
      r.setAttribute("tabindex", "-1");
  });
}
function I5(e) {
  e.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex,
      n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
const Nh = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0,
};
let A5;
function mg(e) {
  e.key === "Tab" && (e.target, clearTimeout(A5));
}
const Zl = x.forwardRef(function (t, r) {
    const [n, o] = x.useState();
    Fe(
      () => (
        bh() && o("button"),
        document.addEventListener("keydown", mg),
        () => {
          document.removeEventListener("keydown", mg);
        }
      ),
      []
    );
    const i = {
      ref: r,
      tabIndex: 0,
      role: n,
      "aria-hidden": n ? void 0 : !0,
      [No("focus-guard")]: "",
      style: Nh,
    };
    return x.createElement("span", Fa({}, t, i));
  }),
  mx = x.createContext(null),
  yg = No("portal");
function z5(e) {
  let { id: t, root: r } = e === void 0 ? {} : e;
  const [n, o] = x.useState(null),
    i = Ou(),
    a = yx(),
    s = x.useRef(null);
  return (
    Fe(
      () => () => {
        n == null || n.remove(),
          queueMicrotask(() => {
            s.current = null;
          });
      },
      [n]
    ),
    Fe(() => {
      if (s.current) return;
      const l = t ? document.getElementById(t) : null;
      if (!l) return;
      const u = document.createElement("div");
      (u.id = i),
        u.setAttribute(yg, ""),
        l.appendChild(u),
        (s.current = u),
        o(u);
    }, [t, i]),
    Fe(() => {
      if (s.current) return;
      let l = r || (a == null ? void 0 : a.portalNode);
      l && !$e(l) && (l = l.current), (l = l || document.body);
      let u = null;
      t && ((u = document.createElement("div")), (u.id = t), l.appendChild(u));
      const f = document.createElement("div");
      (f.id = i),
        f.setAttribute(yg, ""),
        (l = u || l),
        l.appendChild(f),
        (s.current = f),
        o(f);
    }, [t, r, i, a]),
    n
  );
}
function F5(e) {
  let { children: t, id: r, root: n = null, preserveTabOrder: o = !0 } = e;
  const i = z5({ id: r, root: n }),
    [a, s] = x.useState(null),
    l = x.useRef(null),
    u = x.useRef(null),
    f = x.useRef(null),
    d = x.useRef(null),
    h = !!a && !a.modal && a.open && o && !!(n || i);
  return (
    x.useEffect(() => {
      if (!i || !o || (a != null && a.modal)) return;
      function p(m) {
        i && ya(m) && (m.type === "focusin" ? I5 : D5)(i);
      }
      return (
        i.addEventListener("focusin", p, !0),
        i.addEventListener("focusout", p, !0),
        () => {
          i.removeEventListener("focusin", p, !0),
            i.removeEventListener("focusout", p, !0);
        }
      );
    }, [i, o, a == null ? void 0 : a.modal]),
    x.createElement(
      mx.Provider,
      {
        value: x.useMemo(
          () => ({
            preserveTabOrder: o,
            beforeOutsideRef: l,
            afterOutsideRef: u,
            beforeInsideRef: f,
            afterInsideRef: d,
            portalNode: i,
            setFocusManagerState: s,
          }),
          [o, i]
        ),
      },
      h &&
        i &&
        x.createElement(Zl, {
          "data-type": "outside",
          ref: l,
          onFocus: (p) => {
            if (ya(p, i)) {
              var m;
              (m = f.current) == null || m.focus();
            } else {
              const v =
                gx() || (a == null ? void 0 : a.refs.domReference.current);
              v == null || v.focus();
            }
          },
        }),
      h && i && x.createElement("span", { "aria-owns": i.id, style: Nh }),
      i && Va.createPortal(t, i),
      h &&
        i &&
        x.createElement(Zl, {
          "data-type": "outside",
          ref: u,
          onFocus: (p) => {
            if (ya(p, i)) {
              var m;
              (m = d.current) == null || m.focus();
            } else {
              const v =
                px() || (a == null ? void 0 : a.refs.domReference.current);
              v == null || v.focus(),
                a != null &&
                  a.closeOnFocusOut &&
                  (a == null || a.onOpenChange(!1, p.nativeEvent));
            }
          },
        })
    )
  );
}
const yx = () => x.useContext(mx),
  vg = 20;
let io = [];
function Pc(e) {
  io = io.filter((r) => r.isConnected);
  let t = e;
  if (!(!t || Po(t) === "body")) {
    if (!f5(t, $a())) {
      const r = Tu(t, $a())[0];
      if (!r) return;
      t = r;
    }
    io.push(t), io.length > vg && (io = io.slice(-vg));
  }
}
function bg() {
  return io
    .slice()
    .reverse()
    .find((e) => e.isConnected);
}
const $5 = x.forwardRef(function (t, r) {
  return x.createElement(
    "button",
    Fa({}, t, { type: "button", ref: r, tabIndex: -1, style: Nh })
  );
});
function vx(e) {
  const {
      context: t,
      children: r,
      disabled: n = !1,
      order: o = ["content"],
      guards: i = !0,
      initialFocus: a = 0,
      returnFocus: s = !0,
      modal: l = !0,
      visuallyHiddenDismiss: u = !1,
      closeOnFocusOut: f = !0,
    } = e,
    {
      open: d,
      refs: h,
      nodeId: p,
      onOpenChange: m,
      events: v,
      dataRef: k,
      elements: { domReference: y, floating: g },
    } = t,
    b = typeof a == "number" && a < 0,
    w = Yb(y) && b,
    S = _5() ? i : !0,
    j = en(o),
    E = en(a),
    I = en(s),
    O = ns(),
    C = yx(),
    D = x.useRef(null),
    P = x.useRef(null),
    _ = x.useRef(!1),
    N = x.useRef(!1),
    L = C != null,
    B = x.useCallback(
      function (z) {
        return z === void 0 && (z = g), z ? Tu(z, $a()) : [];
      },
      [g]
    ),
    W = x.useCallback(
      (z) => {
        const U = B(z);
        return j.current
          .map((H) =>
            y && H === "reference" ? y : g && H === "floating" ? g : U
          )
          .filter(Boolean)
          .flat();
      },
      [y, g, j, B]
    );
  x.useEffect(() => {
    if (n || !l) return;
    function z(H) {
      if (H.key === "Tab") {
        xt(g, Yr(Zt(g))) && B().length === 0 && !w && Mt(H);
        const J = W(),
          X = Ln(H);
        j.current[0] === "reference" &&
          X === y &&
          (Mt(H), H.shiftKey ? on(J[J.length - 1]) : on(J[1])),
          j.current[1] === "floating" &&
            X === g &&
            H.shiftKey &&
            (Mt(H), on(J[0]));
      }
    }
    const U = Zt(g);
    return (
      U.addEventListener("keydown", z),
      () => {
        U.removeEventListener("keydown", z);
      }
    );
  }, [n, y, g, l, j, w, B, W]),
    x.useEffect(() => {
      if (n || !f) return;
      function z() {
        (N.current = !0),
          setTimeout(() => {
            N.current = !1;
          });
      }
      function U(H) {
        const J = H.relatedTarget;
        queueMicrotask(() => {
          const X = !(
            xt(y, J) ||
            xt(g, J) ||
            xt(J, g) ||
            xt(C == null ? void 0 : C.portalNode, J) ||
            (J != null && J.hasAttribute(No("focus-guard"))) ||
            (O &&
              (yo(O.nodesRef.current, p).find((re) => {
                var ae, be;
                return (
                  xt(
                    (ae = re.context) == null ? void 0 : ae.elements.floating,
                    J
                  ) ||
                  xt(
                    (be = re.context) == null
                      ? void 0
                      : be.elements.domReference,
                    J
                  )
                );
              }) ||
                R5(O.nodesRef.current, p).find((re) => {
                  var ae, be;
                  return (
                    ((ae = re.context) == null
                      ? void 0
                      : ae.elements.floating) === J ||
                    ((be = re.context) == null
                      ? void 0
                      : be.elements.domReference) === J
                  );
                })))
          );
          J && X && !N.current && J !== bg() && ((_.current = !0), m(!1, H));
        });
      }
      if (g && At(y))
        return (
          y.addEventListener("focusout", U),
          y.addEventListener("pointerdown", z),
          !l && g.addEventListener("focusout", U),
          () => {
            y.removeEventListener("focusout", U),
              y.removeEventListener("pointerdown", z),
              !l && g.removeEventListener("focusout", U);
          }
        );
    }, [n, y, g, l, p, O, C, m, f]),
    x.useEffect(() => {
      var z;
      if (n) return;
      const U = Array.from(
        (C == null || (z = C.portalNode) == null
          ? void 0
          : z.querySelectorAll("[" + No("portal") + "]")) || []
      );
      if (g) {
        const H = [
            g,
            ...U,
            D.current,
            P.current,
            j.current.includes("reference") || w ? y : null,
          ].filter((X) => X != null),
          J = l || w ? gg(H, S, !S) : gg(H);
        return () => {
          J();
        };
      }
    }, [n, y, g, l, j, C, w, S]),
    Fe(() => {
      if (n || !g) return;
      const z = Zt(g),
        U = Yr(z);
      queueMicrotask(() => {
        const H = W(g),
          J = E.current,
          X = (typeof J == "number" ? H[J] : J.current) || g,
          re = xt(g, U);
        !b && !re && d && on(X, { preventScroll: X === g });
      });
    }, [n, d, g, b, W, E]),
    Fe(() => {
      if (n || !g) return;
      let z = !1;
      const U = Zt(g),
        H = Yr(U),
        J = k.current;
      Pc(H);
      function X(re) {
        let { reason: ae, event: be, nested: ge } = re;
        ae === "escape-key" &&
          h.domReference.current &&
          Pc(h.domReference.current),
          ae === "hover" && be.type === "mouseleave" && (_.current = !0),
          ae === "outside-press" &&
            (ge
              ? ((_.current = !1), (z = !0))
              : (_.current = !(qb(be) || vh(be))));
      }
      return (
        v.on("openchange", X),
        () => {
          v.off("openchange", X);
          const re = Yr(U),
            ae =
              xt(g, re) ||
              (O &&
                yo(O.nodesRef.current, p).some((Ne) => {
                  var Be;
                  return xt(
                    (Be = Ne.context) == null ? void 0 : Be.elements.floating,
                    re
                  );
                }));
          (ae ||
            (J.openEvent &&
              ["click", "mousedown"].includes(J.openEvent.type))) &&
            h.domReference.current &&
            Pc(h.domReference.current);
          const ge = bg();
          I.current &&
            !_.current &&
            At(ge) &&
            (!(ge !== re && re !== U.body) || ae) &&
            on(ge, { cancelPrevious: !1, preventScroll: z });
        }
      );
    }, [n, g, I, k, h, v, O, p]),
    Fe(() => {
      if (!(n || !C))
        return (
          C.setFocusManagerState({
            modal: l,
            closeOnFocusOut: f,
            open: d,
            onOpenChange: m,
            refs: h,
          }),
          () => {
            C.setFocusManagerState(null);
          }
        );
    }, [n, C, l, d, m, h, f]),
    Fe(() => {
      if (n || !g || typeof MutationObserver != "function" || b) return;
      const z = () => {
        const H = g.getAttribute("tabindex");
        j.current.includes("floating") ||
        (Yr(Zt(g)) !== h.domReference.current && B().length === 0)
          ? H !== "0" && g.setAttribute("tabindex", "0")
          : H !== "-1" && g.setAttribute("tabindex", "-1");
      };
      z();
      const U = new MutationObserver(z);
      return (
        U.observe(g, { childList: !0, subtree: !0, attributes: !0 }),
        () => {
          U.disconnect();
        }
      );
    }, [n, g, h, j, B, b]);
  function R(z) {
    return n || !u || !l
      ? null
      : x.createElement(
          $5,
          { ref: z === "start" ? D : P, onClick: (U) => m(!1, U.nativeEvent) },
          typeof u == "string" ? u : "Dismiss"
        );
  }
  const F = !n && S && (L || l);
  return x.createElement(
    x.Fragment,
    null,
    F &&
      x.createElement(Zl, {
        "data-type": "inside",
        ref: C == null ? void 0 : C.beforeInsideRef,
        onFocus: (z) => {
          if (l) {
            const H = W();
            on(o[0] === "reference" ? H[0] : H[H.length - 1]);
          } else if (C != null && C.preserveTabOrder && C.portalNode)
            if (((_.current = !1), ya(z, C.portalNode))) {
              const H = px() || y;
              H == null || H.focus();
            } else {
              var U;
              (U = C.beforeOutsideRef.current) == null || U.focus();
            }
        },
      }),
    !w && R("start"),
    r,
    R("end"),
    F &&
      x.createElement(Zl, {
        "data-type": "inside",
        ref: C == null ? void 0 : C.afterInsideRef,
        onFocus: (z) => {
          if (l) on(W()[0]);
          else if (C != null && C.preserveTabOrder && C.portalNode)
            if ((f && (_.current = !0), ya(z, C.portalNode))) {
              const H = gx() || y;
              H == null || H.focus();
            } else {
              var U;
              (U = C.afterOutsideRef.current) == null || U.focus();
            }
        },
      })
  );
}
const _c = new Set(),
  U5 = x.forwardRef(function (t, r) {
    let { lockScroll: n = !1, ...o } = t;
    const i = Ou();
    return (
      Fe(() => {
        if (!n) return;
        _c.add(i);
        const a = /iP(hone|ad|od)|iOS/.test(yh()),
          s = document.body.style,
          u =
            Math.round(document.documentElement.getBoundingClientRect().left) +
            document.documentElement.scrollLeft
              ? "paddingLeft"
              : "paddingRight",
          f = window.innerWidth - document.documentElement.clientWidth,
          d = s.left ? parseFloat(s.left) : window.pageXOffset,
          h = s.top ? parseFloat(s.top) : window.pageYOffset;
        if (((s.overflow = "hidden"), f && (s[u] = f + "px"), a)) {
          var p, m;
          const v =
              ((p = window.visualViewport) == null ? void 0 : p.offsetLeft) ||
              0,
            k =
              ((m = window.visualViewport) == null ? void 0 : m.offsetTop) || 0;
          Object.assign(s, {
            position: "fixed",
            top: -(h - Math.floor(k)) + "px",
            left: -(d - Math.floor(v)) + "px",
            right: "0",
          });
        }
        return () => {
          _c.delete(i),
            _c.size === 0 &&
              (Object.assign(s, { overflow: "", [u]: "" }),
              a &&
                (Object.assign(s, {
                  position: "",
                  top: "",
                  left: "",
                  right: "",
                }),
                window.scrollTo(d, h)));
        };
      }, [i, n]),
      x.createElement(
        "div",
        Fa({ ref: r }, o, {
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...o.style,
          },
        })
      )
    );
  });
function xg(e) {
  return At(e.target) && e.target.tagName === "BUTTON";
}
function wg(e) {
  return xh(e);
}
function bx(e, t) {
  t === void 0 && (t = {});
  const {
      open: r,
      onOpenChange: n,
      dataRef: o,
      elements: { domReference: i },
    } = e,
    {
      enabled: a = !0,
      event: s = "click",
      toggle: l = !0,
      ignoreMouse: u = !1,
      keyboardHandlers: f = !0,
    } = t,
    d = x.useRef(),
    h = x.useRef(!1);
  return x.useMemo(
    () =>
      a
        ? {
            reference: {
              onPointerDown(p) {
                d.current = p.pointerType;
              },
              onMouseDown(p) {
                p.button === 0 &&
                  ((Wl(d.current, !0) && u) ||
                    (s !== "click" &&
                      (r &&
                      l &&
                      (!o.current.openEvent ||
                        o.current.openEvent.type === "mousedown")
                        ? n(!1, p.nativeEvent, "click")
                        : (p.preventDefault(),
                          n(!0, p.nativeEvent, "click")))));
              },
              onClick(p) {
                if (s === "mousedown" && d.current) {
                  d.current = void 0;
                  return;
                }
                (Wl(d.current, !0) && u) ||
                  (r &&
                  l &&
                  (!o.current.openEvent || o.current.openEvent.type === "click")
                    ? n(!1, p.nativeEvent, "click")
                    : n(!0, p.nativeEvent, "click"));
              },
              onKeyDown(p) {
                (d.current = void 0),
                  !(p.defaultPrevented || !f || xg(p)) &&
                    (p.key === " " &&
                      !wg(i) &&
                      (p.preventDefault(), (h.current = !0)),
                    p.key === "Enter" && n(!(r && l), p.nativeEvent, "click"));
              },
              onKeyUp(p) {
                p.defaultPrevented ||
                  !f ||
                  xg(p) ||
                  wg(i) ||
                  (p.key === " " &&
                    h.current &&
                    ((h.current = !1), n(!(r && l), p.nativeEvent, "click")));
              },
            },
          }
        : {},
    [a, o, s, u, f, i, l, r, n]
  );
}
const B5 = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  H5 = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  kg = (e) => {
    var t, r;
    return {
      escapeKey:
        typeof e == "boolean"
          ? e
          : (t = e == null ? void 0 : e.escapeKey) != null
          ? t
          : !1,
      outsidePress:
        typeof e == "boolean"
          ? e
          : (r = e == null ? void 0 : e.outsidePress) != null
          ? r
          : !0,
    };
  };
function xx(e, t) {
  t === void 0 && (t = {});
  const {
      open: r,
      onOpenChange: n,
      nodeId: o,
      elements: { reference: i, domReference: a, floating: s },
      dataRef: l,
    } = e,
    {
      enabled: u = !0,
      escapeKey: f = !0,
      outsidePress: d = !0,
      outsidePressEvent: h = "pointerdown",
      referencePress: p = !1,
      referencePressEvent: m = "pointerdown",
      ancestorScroll: v = !1,
      bubbles: k,
      capture: y,
    } = t,
    g = ns(),
    b = Gr(typeof d == "function" ? d : () => !1),
    w = typeof d == "function" ? b : d,
    S = x.useRef(!1),
    j = x.useRef(!1),
    { escapeKey: E, outsidePress: I } = kg(k),
    { escapeKey: O, outsidePress: C } = kg(y),
    D = Gr((L) => {
      if (!r || !u || !f || L.key !== "Escape") return;
      const B = g ? yo(g.nodesRef.current, o) : [];
      if (!E && (L.stopPropagation(), B.length > 0)) {
        let W = !0;
        if (
          (B.forEach((R) => {
            var F;
            if (
              (F = R.context) != null &&
              F.open &&
              !R.context.dataRef.current.__escapeKeyBubbles
            ) {
              W = !1;
              return;
            }
          }),
          !W)
        )
          return;
      }
      n(!1, rO(L) ? L.nativeEvent : L, "escape-key");
    }),
    P = Gr((L) => {
      var B;
      const W = () => {
        var R;
        D(L), (R = Ln(L)) == null || R.removeEventListener("keydown", W);
      };
      (B = Ln(L)) == null || B.addEventListener("keydown", W);
    }),
    _ = Gr((L) => {
      const B = S.current;
      S.current = !1;
      const W = j.current;
      if (
        ((j.current = !1),
        (h === "click" && W) || B || (typeof w == "function" && !w(L)))
      )
        return;
      const R = Ln(L),
        F = "[" + No("inert") + "]",
        z = Zt(s).querySelectorAll(F);
      let U = $e(R) ? R : null;
      for (; U && !Kn(U); ) {
        const X = gn(U);
        if (Kn(X) || !$e(X)) break;
        U = X;
      }
      if (
        z.length &&
        $e(R) &&
        !nO(R) &&
        !xt(R, s) &&
        Array.from(z).every((X) => !xt(U, X))
      )
        return;
      if (At(R) && s) {
        const X = R.clientWidth > 0 && R.scrollWidth > R.clientWidth,
          re = R.clientHeight > 0 && R.scrollHeight > R.clientHeight;
        let ae = re && L.offsetX > R.clientWidth;
        if (
          (re &&
            Rr(R).direction === "rtl" &&
            (ae = L.offsetX <= R.offsetWidth - R.clientWidth),
          ae || (X && L.offsetY > R.clientHeight))
        )
          return;
      }
      const H =
        g &&
        yo(g.nodesRef.current, o).some((X) => {
          var re;
          return Cc(
            L,
            (re = X.context) == null ? void 0 : re.elements.floating
          );
        });
      if (Cc(L, s) || Cc(L, a) || H) return;
      const J = g ? yo(g.nodesRef.current, o) : [];
      if (J.length > 0) {
        let X = !0;
        if (
          (J.forEach((re) => {
            var ae;
            if (
              (ae = re.context) != null &&
              ae.open &&
              !re.context.dataRef.current.__outsidePressBubbles
            ) {
              X = !1;
              return;
            }
          }),
          !X)
        )
          return;
      }
      n(!1, L, "outside-press");
    }),
    N = Gr((L) => {
      var B;
      const W = () => {
        var R;
        _(L), (R = Ln(L)) == null || R.removeEventListener(h, W);
      };
      (B = Ln(L)) == null || B.addEventListener(h, W);
    });
  return (
    x.useEffect(() => {
      if (!r || !u) return;
      (l.current.__escapeKeyBubbles = E), (l.current.__outsidePressBubbles = I);
      function L(R) {
        n(!1, R, "ancestor-scroll");
      }
      const B = Zt(s);
      f && B.addEventListener("keydown", O ? P : D, O),
        w && B.addEventListener(h, C ? N : _, C);
      let W = [];
      return (
        v &&
          ($e(a) && (W = Qn(a)),
          $e(s) && (W = W.concat(Qn(s))),
          !$e(i) &&
            i &&
            i.contextElement &&
            (W = W.concat(Qn(i.contextElement)))),
        (W = W.filter((R) => {
          var F;
          return (
            R !== ((F = B.defaultView) == null ? void 0 : F.visualViewport)
          );
        })),
        W.forEach((R) => {
          R.addEventListener("scroll", L, { passive: !0 });
        }),
        () => {
          f && B.removeEventListener("keydown", O ? P : D, O),
            w && B.removeEventListener(h, C ? N : _, C),
            W.forEach((R) => {
              R.removeEventListener("scroll", L);
            });
        }
      );
    }, [l, s, a, i, f, w, h, r, n, v, u, E, I, D, O, P, _, C, N]),
    x.useEffect(() => {
      S.current = !1;
    }, [w, h]),
    x.useMemo(
      () =>
        u
          ? {
              reference: {
                onKeyDown: D,
                [B5[m]]: (L) => {
                  p && n(!1, L.nativeEvent, "reference-press");
                },
              },
              floating: {
                onKeyDown: D,
                onMouseDown() {
                  j.current = !0;
                },
                onMouseUp() {
                  j.current = !0;
                },
                [H5[h]]: () => {
                  S.current = !0;
                },
              },
            }
          : {},
      [u, p, h, m, n, D]
    )
  );
}
function wx(e) {
  var t;
  e === void 0 && (e = {});
  const { open: r = !1, onOpenChange: n, nodeId: o } = e,
    [i, a] = x.useState(null),
    s = ((t = e.elements) == null ? void 0 : t.reference) || i,
    l = UO(e),
    u = ns(),
    f = Ru() != null,
    d = Gr((S, j, E) => {
      S && (p.current.openEvent = j),
        m.emit("openchange", { open: S, event: j, reason: E, nested: f }),
        n == null || n(S, j, E);
    }),
    h = x.useRef(null),
    p = x.useRef({}),
    m = x.useState(() => j5())[0],
    v = Ou(),
    k = x.useCallback(
      (S) => {
        const j = $e(S)
          ? {
              getBoundingClientRect: () => S.getBoundingClientRect(),
              contextElement: S,
            }
          : S;
        l.refs.setReference(j);
      },
      [l.refs]
    ),
    y = x.useCallback(
      (S) => {
        ($e(S) || S === null) && ((h.current = S), a(S)),
          ($e(l.refs.reference.current) ||
            l.refs.reference.current === null ||
            (S !== null && !$e(S))) &&
            l.refs.setReference(S);
      },
      [l.refs]
    ),
    g = x.useMemo(
      () => ({
        ...l.refs,
        setReference: y,
        setPositionReference: k,
        domReference: h,
      }),
      [l.refs, y, k]
    ),
    b = x.useMemo(() => ({ ...l.elements, domReference: s }), [l.elements, s]),
    w = x.useMemo(
      () => ({
        ...l,
        refs: g,
        elements: b,
        dataRef: p,
        nodeId: o,
        floatingId: v,
        events: m,
        open: r,
        onOpenChange: d,
      }),
      [l, o, v, m, r, d, g, b]
    );
  return (
    Fe(() => {
      const S = u == null ? void 0 : u.nodesRef.current.find((j) => j.id === o);
      S && (S.context = w);
    }),
    x.useMemo(() => ({ ...l, context: w, refs: g, elements: b }), [l, g, b, w])
  );
}
function W5(e, t) {
  t === void 0 && (t = {});
  const {
      open: r,
      onOpenChange: n,
      events: o,
      refs: i,
      elements: { domReference: a },
    } = e,
    { enabled: s = !0, visibleOnly: l = !0 } = t,
    u = x.useRef(!1),
    f = x.useRef(),
    d = x.useRef(!0);
  return (
    x.useEffect(() => {
      if (!s) return;
      const h = cr(a);
      function p() {
        !r && At(a) && a === Yr(Zt(a)) && (u.current = !0);
      }
      function m() {
        d.current = !0;
      }
      return (
        h.addEventListener("blur", p),
        h.addEventListener("keydown", m, !0),
        () => {
          h.removeEventListener("blur", p),
            h.removeEventListener("keydown", m, !0);
        }
      );
    }, [a, r, s]),
    x.useEffect(() => {
      if (!s) return;
      function h(p) {
        let { reason: m } = p;
        (m === "reference-press" || m === "escape-key") && (u.current = !0);
      }
      return (
        o.on("openchange", h),
        () => {
          o.off("openchange", h);
        }
      );
    }, [o, s]),
    x.useEffect(
      () => () => {
        clearTimeout(f.current);
      },
      []
    ),
    x.useMemo(
      () =>
        s
          ? {
              reference: {
                onPointerDown(h) {
                  vh(h.nativeEvent) || (d.current = !1);
                },
                onMouseLeave() {
                  u.current = !1;
                },
                onFocus(h) {
                  if (u.current) return;
                  const p = Ln(h.nativeEvent);
                  if (l && $e(p))
                    try {
                      if (bh() && Kb()) throw Error();
                      if (!p.matches(":focus-visible")) return;
                    } catch (m) {
                      if (!d.current && !xh(p)) return;
                    }
                  n(!0, h.nativeEvent, "focus");
                },
                onBlur(h) {
                  u.current = !1;
                  const p = h.relatedTarget,
                    m =
                      $e(p) &&
                      p.hasAttribute(No("focus-guard")) &&
                      p.getAttribute("data-type") === "outside";
                  f.current = window.setTimeout(() => {
                    const v = Yr(a ? a.ownerDocument : document);
                    (!p && v === a) ||
                      xt(i.floating.current, v) ||
                      xt(a, v) ||
                      m ||
                      n(!1, h.nativeEvent, "focus");
                  });
                },
              },
            }
          : {},
      [s, l, a, i, n]
    )
  );
}
const Sg = "active",
  Eg = "selected";
function Mc(e, t, r) {
  const n = new Map(),
    o = r === "item";
  let i = e;
  if (o && e) {
    const { [Sg]: a, [Eg]: s, ...l } = e;
    i = l;
  }
  return {
    ...(r === "floating" && { tabIndex: -1 }),
    ...i,
    ...t
      .map((a) => {
        const s = a ? a[r] : null;
        return typeof s == "function" ? (e ? s(e) : null) : s;
      })
      .concat(e)
      .reduce(
        (a, s) => (
          s &&
            Object.entries(s).forEach((l) => {
              let [u, f] = l;
              if (!(o && [Sg, Eg].includes(u)))
                if (u.indexOf("on") === 0) {
                  if ((n.has(u) || n.set(u, []), typeof f == "function")) {
                    var d;
                    (d = n.get(u)) == null || d.push(f),
                      (a[u] = function () {
                        for (
                          var h, p = arguments.length, m = new Array(p), v = 0;
                          v < p;
                          v++
                        )
                          m[v] = arguments[v];
                        return (h = n.get(u)) == null
                          ? void 0
                          : h.map((k) => k(...m)).find((k) => k !== void 0);
                      });
                  }
                } else a[u] = f;
            }),
          a
        ),
        {}
      ),
  };
}
function kx(e) {
  e === void 0 && (e = []);
  const t = e,
    r = x.useCallback((i) => Mc(i, e, "reference"), t),
    n = x.useCallback((i) => Mc(i, e, "floating"), t),
    o = x.useCallback(
      (i) => Mc(i, e, "item"),
      e.map((i) => (i == null ? void 0 : i.item))
    );
  return x.useMemo(
    () => ({ getReferenceProps: r, getFloatingProps: n, getItemProps: o }),
    [r, n, o]
  );
}
let Cg = !1;
function Pu(e, t, r) {
  switch (e) {
    case "vertical":
      return t;
    case "horizontal":
      return r;
    default:
      return t || r;
  }
}
function jg(e, t) {
  return Pu(t, e === jh || e === rs, e === ki || e === Mi);
}
function Lc(e, t, r) {
  return (
    Pu(t, e === rs, r ? e === ki : e === Mi) ||
    e === "Enter" ||
    e === " " ||
    e === ""
  );
}
function Q5(e, t, r) {
  return Pu(t, r ? e === ki : e === Mi, e === rs);
}
function Ng(e, t, r) {
  return Pu(t, r ? e === Mi : e === ki, e === jh);
}
function V5(e, t) {
  const {
      open: r,
      onOpenChange: n,
      refs: o,
      elements: { domReference: i, floating: a },
    } = e,
    {
      listRef: s,
      activeIndex: l,
      onNavigate: u = () => {},
      enabled: f = !0,
      selectedIndex: d = null,
      allowEscape: h = !1,
      loop: p = !1,
      nested: m = !1,
      rtl: v = !1,
      virtual: k = !1,
      focusItemOnOpen: y = "auto",
      focusItemOnHover: g = !0,
      openOnArrowKeyDown: b = !0,
      disabledIndices: w = void 0,
      orientation: S = "vertical",
      cols: j = 1,
      scrollItemIntoView: E = !0,
      virtualItemRef: I,
      itemSizes: O,
      dense: C = !1,
    } = t,
    D = Ru(),
    P = ns(),
    _ = Gr(u),
    N = x.useRef(y),
    L = x.useRef(d != null ? d : -1),
    B = x.useRef(null),
    W = x.useRef(!0),
    R = x.useRef(_),
    F = x.useRef(!!a),
    z = x.useRef(!1),
    U = x.useRef(!1),
    H = en(w),
    J = en(r),
    X = en(E),
    [re, ae] = x.useState(),
    [be, ge] = x.useState(),
    Ne = Gr(function (ie, Ie, _e) {
      _e === void 0 && (_e = !1);
      const pe = ie.current[Ie.current];
      pe &&
        (k
          ? (ae(pe.id),
            P == null || P.events.emit("virtualfocus", pe),
            I && (I.current = pe))
          : on(pe, {
              preventScroll: !0,
              sync: Kb() && bh() ? Cg || z.current : !1,
            }),
        requestAnimationFrame(() => {
          const Le = X.current;
          Le &&
            pe &&
            (_e || !W.current) &&
            (pe.scrollIntoView == null ||
              pe.scrollIntoView(
                typeof Le == "boolean"
                  ? { block: "nearest", inline: "nearest" }
                  : Le
              ));
        }));
    });
  Fe(() => {
    document.createElement("div").focus({
      get preventScroll() {
        return (Cg = !0), !1;
      },
    });
  }, []),
    Fe(() => {
      f &&
        (r && a
          ? N.current && d != null && ((U.current = !0), (L.current = d), _(d))
          : F.current && ((L.current = -1), R.current(null)));
    }, [f, r, a, d, _]),
    Fe(() => {
      if (f && r && a)
        if (l == null) {
          if (((z.current = !1), d != null)) return;
          if (
            (F.current && ((L.current = -1), Ne(s, L)),
            !F.current &&
              N.current &&
              (B.current != null || (N.current === !0 && B.current == null)))
          ) {
            let ie = 0;
            const Ie = () => {
              s.current[0] == null
                ? (ie < 2 && (ie ? requestAnimationFrame : queueMicrotask)(Ie),
                  ie++)
                : ((L.current =
                    B.current == null || Lc(B.current, S, v) || m
                      ? Nc(s, H.current)
                      : dg(s, H.current)),
                  (B.current = null),
                  _(L.current));
            };
            Ie();
          }
        } else
          ma(s, l) || ((L.current = l), Ne(s, L, U.current), (U.current = !1));
    }, [f, r, a, l, d, m, s, S, v, _, Ne, H]),
    Fe(() => {
      var ie;
      if (!f || a || !P || k || !F.current) return;
      const Ie = P.nodesRef.current,
        _e =
          (ie = Ie.find((zt) => zt.id === D)) == null ||
          (ie = ie.context) == null
            ? void 0
            : ie.elements.floating,
        pe = Yr(Zt(a)),
        Le = Ie.some(
          (zt) => zt.context && xt(zt.context.elements.floating, pe)
        );
      _e && !Le && W.current && _e.focus({ preventScroll: !0 });
    }, [f, a, P, D, k]),
    Fe(() => {
      if (!f || !P || !k || D) return;
      function ie(Ie) {
        ge(Ie.id), I && (I.current = Ie);
      }
      return (
        P.events.on("virtualfocus", ie),
        () => {
          P.events.off("virtualfocus", ie);
        }
      );
    }, [f, P, k, D, I]),
    Fe(() => {
      (R.current = _), (F.current = !!a);
    }),
    Fe(() => {
      r || (B.current = null);
    }, [r]);
  const Be = l != null,
    ut = x.useMemo(() => {
      function ie(_e) {
        if (!r) return;
        const pe = s.current.indexOf(_e);
        pe !== -1 && _(pe);
      }
      return {
        onFocus(_e) {
          let { currentTarget: pe } = _e;
          ie(pe);
        },
        onClick: (_e) => {
          let { currentTarget: pe } = _e;
          return pe.focus({ preventScroll: !0 });
        },
        ...(g && {
          onMouseMove(_e) {
            let { currentTarget: pe } = _e;
            ie(pe);
          },
          onPointerLeave(_e) {
            let { pointerType: pe } = _e;
            !W.current ||
              pe === "touch" ||
              ((L.current = -1),
              Ne(s, L),
              _(null),
              k || on(o.floating.current, { preventScroll: !0 }));
          },
        }),
      };
    }, [r, o, Ne, g, s, _, k]);
  return x.useMemo(() => {
    if (!f) return {};
    const ie = H.current;
    function Ie(ce) {
      if (
        ((W.current = !1),
        (z.current = !0),
        !J.current && ce.currentTarget === o.floating.current)
      )
        return;
      if (m && Ng(ce.key, S, v)) {
        Mt(ce),
          n(!1, ce.nativeEvent, "list-navigation"),
          At(i) && !k && i.focus();
        return;
      }
      const ft = L.current,
        Ft = Nc(s, ie),
        Ot = dg(s, ie);
      if (
        (ce.key === "Home" && (Mt(ce), (L.current = Ft), _(L.current)),
        ce.key === "End" && (Mt(ce), (L.current = Ot), _(L.current)),
        j > 1)
      ) {
        const rt =
            O ||
            Array.from({ length: s.current.length }, () => ({
              width: 1,
              height: 1,
            })),
          De = m5(rt, j, C),
          Rt = De.findIndex(
            (He) => He != null && !(ie != null && ie.includes(He))
          ),
          jt = De.reduce(
            (He, $t, mt) =>
              $t != null && !(ie != null && ie.includes($t)) ? mt : He,
            -1
          );
        if (
          ((L.current =
            De[
              g5(
                {
                  current: De.map((He) => (He != null ? s.current[He] : null)),
                },
                {
                  event: ce,
                  orientation: S,
                  loop: p,
                  cols: j,
                  disabledIndices: v5([...(ie || []), void 0], De),
                  minIndex: Rt,
                  maxIndex: jt,
                  prevIndex: y5(
                    L.current,
                    rt,
                    De,
                    j,
                    ce.key === rs ? "bl" : ce.key === Mi ? "tr" : "tl"
                  ),
                  stopEvent: !0,
                }
              )
            ]),
          _(L.current),
          S === "both")
        )
          return;
      }
      if (jg(ce.key, S)) {
        if (
          (Mt(ce),
          r && !k && Yr(ce.currentTarget.ownerDocument) === ce.currentTarget)
        ) {
          (L.current = Lc(ce.key, S, v) ? Ft : Ot), _(L.current);
          return;
        }
        Lc(ce.key, S, v)
          ? p
            ? (L.current =
                ft >= Ot
                  ? h && ft !== s.current.length
                    ? -1
                    : Ft
                  : Wt(s, { startingIndex: ft, disabledIndices: ie }))
            : (L.current = Math.min(
                Ot,
                Wt(s, { startingIndex: ft, disabledIndices: ie })
              ))
          : p
          ? (L.current =
              ft <= Ft
                ? h && ft !== -1
                  ? s.current.length
                  : Ot
                : Wt(s, {
                    startingIndex: ft,
                    decrement: !0,
                    disabledIndices: ie,
                  }))
          : (L.current = Math.max(
              Ft,
              Wt(s, { startingIndex: ft, decrement: !0, disabledIndices: ie })
            )),
          ma(s, L.current) ? _(null) : _(L.current);
      }
    }
    function _e(ce) {
      y === "auto" && qb(ce.nativeEvent) && (N.current = !0);
    }
    function pe(ce) {
      (N.current = y), y === "auto" && vh(ce.nativeEvent) && (N.current = !0);
    }
    const Le = k && r && Be && { "aria-activedescendant": be || re },
      zt = s.current.find((ce) => (ce == null ? void 0 : ce.id) === re);
    return {
      reference: {
        ...Le,
        onKeyDown(ce) {
          W.current = !1;
          const ft = ce.key.indexOf("Arrow") === 0,
            Ft = Q5(ce.key, S, v),
            Ot = Ng(ce.key, S, v),
            rt = jg(ce.key, S),
            De = (m ? Ft : rt) || ce.key === "Enter" || ce.key.trim() === "";
          if (k && r) {
            const $t =
                P == null
                  ? void 0
                  : P.nodesRef.current.find((Yt) => Yt.parentId == null),
              mt = P && $t ? P5(P.nodesRef.current, $t.id) : null;
            if (ft && mt && I) {
              const Yt = new KeyboardEvent("keydown", {
                key: ce.key,
                bubbles: !0,
              });
              if (Ft || Ot) {
                var Rt, jt;
                const Qr =
                    ((Rt = mt.context) == null
                      ? void 0
                      : Rt.elements.domReference) === ce.currentTarget,
                  yt =
                    Ot && !Qr
                      ? (jt = mt.context) == null
                        ? void 0
                        : jt.elements.domReference
                      : Ft
                      ? zt
                      : null;
                yt && (Mt(ce), yt.dispatchEvent(Yt), ge(void 0));
              }
              if (
                rt &&
                mt.context &&
                mt.context.open &&
                mt.parentId &&
                ce.currentTarget !== mt.context.elements.domReference
              ) {
                var He;
                Mt(ce),
                  (He = mt.context.elements.domReference) == null ||
                    He.dispatchEvent(Yt);
                return;
              }
            }
            return Ie(ce);
          }
          if (!(!r && !b && ft)) {
            if ((De && (B.current = m && rt ? null : ce.key), m)) {
              Ft &&
                (Mt(ce),
                r
                  ? ((L.current = Nc(s, ie)), _(L.current))
                  : n(!0, ce.nativeEvent, "list-navigation"));
              return;
            }
            rt &&
              (d != null && (L.current = d),
              Mt(ce),
              !r && b ? n(!0, ce.nativeEvent, "list-navigation") : Ie(ce),
              r && _(L.current));
          }
        },
        onFocus() {
          r && _(null);
        },
        onPointerDown: pe,
        onMouseDown: _e,
        onClick: _e,
      },
      floating: {
        "aria-orientation": S === "both" ? void 0 : S,
        ...(!Yb(i) && Le),
        onKeyDown: Ie,
        onPointerMove() {
          W.current = !0;
        },
      },
      item: ut,
    };
  }, [
    i,
    o,
    re,
    be,
    H,
    J,
    s,
    f,
    S,
    v,
    k,
    r,
    Be,
    m,
    d,
    b,
    h,
    j,
    p,
    y,
    _,
    n,
    ut,
    P,
    I,
    O,
    C,
  ]);
}
const q5 = new Map([
  ["select", "listbox"],
  ["combobox", "listbox"],
  ["label", !1],
]);
function Sx(e, t) {
  var r;
  t === void 0 && (t = {});
  const { open: n, floatingId: o } = e,
    { enabled: i = !0, role: a = "dialog" } = t,
    s = (r = q5.get(a)) != null ? r : a,
    l = Ou(),
    f = Ru() != null;
  return x.useMemo(() => {
    if (!i) return {};
    const d = { id: o, ...(s && { role: s }) };
    return s === "tooltip" || a === "label"
      ? {
          reference: {
            ["aria-" + (a === "label" ? "labelledby" : "describedby")]: n
              ? o
              : void 0,
          },
          floating: d,
        }
      : {
          reference: {
            "aria-expanded": n ? "true" : "false",
            "aria-haspopup": s === "alertdialog" ? "dialog" : s,
            "aria-controls": n ? o : void 0,
            ...(s === "listbox" && { role: "combobox" }),
            ...(s === "menu" && { id: l }),
            ...(s === "menu" && f && { role: "menuitem" }),
            ...(a === "select" && { "aria-autocomplete": "none" }),
            ...(a === "combobox" && { "aria-autocomplete": "list" }),
          },
          floating: { ...d, ...(s === "menu" && { "aria-labelledby": l }) },
          item(h) {
            let { active: p, selected: m } = h;
            const v = { role: "option", ...(p && { id: o + "-option" }) };
            switch (a) {
              case "select":
                return { ...v, "aria-selected": p && m };
              case "combobox":
                return { ...v, ...(p && { "aria-selected": !0 }) };
            }
            return {};
          },
        };
  }, [i, a, s, n, o, l, f]);
}
function K5(e, t) {
  var r;
  const { open: n, dataRef: o } = e,
    {
      listRef: i,
      activeIndex: a,
      onMatch: s,
      onTypingChange: l,
      enabled: u = !0,
      findMatch: f = null,
      resetMs: d = 750,
      ignoreKeys: h = [],
      selectedIndex: p = null,
    } = t,
    m = x.useRef(),
    v = x.useRef(""),
    k = x.useRef((r = p != null ? p : a) != null ? r : -1),
    y = x.useRef(null),
    g = Gr(s),
    b = Gr(l),
    w = en(f),
    S = en(h);
  return (
    Fe(() => {
      n && (clearTimeout(m.current), (y.current = null), (v.current = ""));
    }, [n]),
    Fe(() => {
      if (n && v.current === "") {
        var j;
        k.current = (j = p != null ? p : a) != null ? j : -1;
      }
    }, [n, p, a]),
    x.useMemo(() => {
      if (!u) return {};
      function j(O) {
        O
          ? o.current.typing || ((o.current.typing = O), b(O))
          : o.current.typing && ((o.current.typing = O), b(O));
      }
      function E(O, C, D) {
        const P = w.current
          ? w.current(C, D)
          : C.find(
              (_) =>
                (_ == null
                  ? void 0
                  : _.toLocaleLowerCase().indexOf(D.toLocaleLowerCase())) === 0
            );
        return P ? O.indexOf(P) : -1;
      }
      function I(O) {
        const C = i.current;
        if (
          (v.current.length > 0 &&
            v.current[0] !== " " &&
            (E(C, C, v.current) === -1 ? j(!1) : O.key === " " && Mt(O)),
          C == null ||
            S.current.includes(O.key) ||
            O.key.length !== 1 ||
            O.ctrlKey ||
            O.metaKey ||
            O.altKey)
        )
          return;
        n && O.key !== " " && (Mt(O), j(!0)),
          C.every((N) => {
            var L, B;
            return N
              ? ((L = N[0]) == null ? void 0 : L.toLocaleLowerCase()) !==
                  ((B = N[1]) == null ? void 0 : B.toLocaleLowerCase())
              : !0;
          }) &&
            v.current === O.key &&
            ((v.current = ""), (k.current = y.current)),
          (v.current += O.key),
          clearTimeout(m.current),
          (m.current = setTimeout(() => {
            (v.current = ""), (k.current = y.current), j(!1);
          }, d));
        const P = k.current,
          _ = E(
            C,
            [...C.slice((P || 0) + 1), ...C.slice(0, (P || 0) + 1)],
            v.current
          );
        _ !== -1
          ? (g(_), (y.current = _))
          : O.key !== " " && ((v.current = ""), j(!1));
      }
      return {
        reference: { onKeyDown: I },
        floating: {
          onKeyDown: I,
          onKeyUp(O) {
            O.key === " " && j(!1);
          },
        },
      };
    }, [u, n, o, i, d, S, w, g, b])
  );
}
function Tg(e, t) {
  const [r, n] = e;
  let o = !1;
  const i = t.length;
  for (let a = 0, s = i - 1; a < i; s = a++) {
    const [l, u] = t[a] || [0, 0],
      [f, d] = t[s] || [0, 0];
    u >= n != d >= n && r <= ((f - l) * (n - u)) / (d - u) + l && (o = !o);
  }
  return o;
}
function Y5(e, t) {
  return (
    e[0] >= t.x &&
    e[0] <= t.x + t.width &&
    e[1] >= t.y &&
    e[1] <= t.y + t.height
  );
}
function G5(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: r = !1,
    requireIntent: n = !0,
  } = e;
  let o,
    i = !1,
    a = null,
    s = null,
    l = performance.now();
  function u(d, h) {
    const p = performance.now(),
      m = p - l;
    if (a === null || s === null || m === 0)
      return (a = d), (s = h), (l = p), null;
    const v = d - a,
      k = h - s,
      g = Math.sqrt(v * v + k * k) / m;
    return (a = d), (s = h), (l = p), g;
  }
  const f = (d) => {
    let {
      x: h,
      y: p,
      placement: m,
      elements: v,
      onClose: k,
      nodeId: y,
      tree: g,
    } = d;
    return function (w) {
      function S() {
        clearTimeout(o), k();
      }
      if (
        (clearTimeout(o),
        !v.domReference || !v.floating || m == null || h == null || p == null)
      )
        return;
      const { clientX: j, clientY: E } = w,
        I = [j, E],
        O = Ln(w),
        C = w.type === "mouseleave",
        D = xt(v.floating, O),
        P = xt(v.domReference, O),
        _ = v.domReference.getBoundingClientRect(),
        N = v.floating.getBoundingClientRect(),
        L = m.split("-")[0],
        B = h > N.right - N.width / 2,
        W = p > N.bottom - N.height / 2,
        R = Y5(I, _),
        F = N.width > _.width,
        z = N.height > _.height,
        U = (F ? _ : N).left,
        H = (F ? _ : N).right,
        J = (z ? _ : N).top,
        X = (z ? _ : N).bottom;
      if (D && ((i = !0), !C)) return;
      if ((P && (i = !1), P && !C)) {
        i = !0;
        return;
      }
      if (
        (C && $e(w.relatedTarget) && xt(v.floating, w.relatedTarget)) ||
        (g &&
          yo(g.nodesRef.current, y).some((be) => {
            let { context: ge } = be;
            return ge == null ? void 0 : ge.open;
          }))
      )
        return;
      if (
        (L === "top" && p >= _.bottom - 1) ||
        (L === "bottom" && p <= _.top + 1) ||
        (L === "left" && h >= _.right - 1) ||
        (L === "right" && h <= _.left + 1)
      )
        return S();
      let re = [];
      switch (L) {
        case "top":
          re = [
            [U, _.top + 1],
            [U, N.bottom - 1],
            [H, N.bottom - 1],
            [H, _.top + 1],
          ];
          break;
        case "bottom":
          re = [
            [U, N.top + 1],
            [U, _.bottom - 1],
            [H, _.bottom - 1],
            [H, N.top + 1],
          ];
          break;
        case "left":
          re = [
            [N.right - 1, X],
            [N.right - 1, J],
            [_.left + 1, J],
            [_.left + 1, X],
          ];
          break;
        case "right":
          re = [
            [_.right - 1, X],
            [_.right - 1, J],
            [N.left + 1, J],
            [N.left + 1, X],
          ];
          break;
      }
      function ae(be) {
        let [ge, Ne] = be;
        switch (L) {
          case "top": {
            const Be = [
                F ? ge + t / 2 : B ? ge + t * 4 : ge - t * 4,
                Ne + t + 1,
              ],
              ut = [F ? ge - t / 2 : B ? ge + t * 4 : ge - t * 4, Ne + t + 1],
              ie = [
                [N.left, B || F ? N.bottom - t : N.top],
                [N.right, B ? (F ? N.bottom - t : N.top) : N.bottom - t],
              ];
            return [Be, ut, ...ie];
          }
          case "bottom": {
            const Be = [F ? ge + t / 2 : B ? ge + t * 4 : ge - t * 4, Ne - t],
              ut = [F ? ge - t / 2 : B ? ge + t * 4 : ge - t * 4, Ne - t],
              ie = [
                [N.left, B || F ? N.top + t : N.bottom],
                [N.right, B ? (F ? N.top + t : N.bottom) : N.top + t],
              ];
            return [Be, ut, ...ie];
          }
          case "left": {
            const Be = [
                ge + t + 1,
                z ? Ne + t / 2 : W ? Ne + t * 4 : Ne - t * 4,
              ],
              ut = [ge + t + 1, z ? Ne - t / 2 : W ? Ne + t * 4 : Ne - t * 4];
            return [
              ...[
                [W || z ? N.right - t : N.left, N.top],
                [W ? (z ? N.right - t : N.left) : N.right - t, N.bottom],
              ],
              Be,
              ut,
            ];
          }
          case "right": {
            const Be = [ge - t, z ? Ne + t / 2 : W ? Ne + t * 4 : Ne - t * 4],
              ut = [ge - t, z ? Ne - t / 2 : W ? Ne + t * 4 : Ne - t * 4],
              ie = [
                [W || z ? N.left + t : N.right, N.top],
                [W ? (z ? N.left + t : N.right) : N.left + t, N.bottom],
              ];
            return [Be, ut, ...ie];
          }
        }
      }
      if (!Tg([j, E], re)) {
        if (i && !R) return S();
        if (!C && n) {
          const be = u(w.clientX, w.clientY);
          if (be !== null && be < 0.1) return S();
        }
        Tg([j, E], ae([h, p]))
          ? !i && n && (o = window.setTimeout(S, 40))
          : S();
      }
    };
  };
  return (f.__options = { blockPointerEvents: r }), f;
}
const X5 = ({ arrowRef: e, placement: t }) => {
    const r = [];
    return (
      r.push(HO(8)),
      r.push(t === "auto" ? VO() : QO()),
      r.push(WO({ padding: 8 })),
      e != null && e.current && r.push(qO({ element: e.current })),
      r
    );
  },
  J5 = ({ placement: e }) => (e === "auto" ? void 0 : e),
  Z5 = ({ placement: e }) =>
    ({ top: "bottom", right: "left", bottom: "top", left: "right" }[
      e.split("-")[0]
    ]),
  Ex = ({ open: e, arrowRef: t, placement: r = "top", setOpen: n }) =>
    wx({
      placement: J5({ placement: r }),
      open: e,
      onOpenChange: n,
      whileElementsMounted: ox,
      middleware: X5({ placement: r, arrowRef: t }),
    }),
  Cx = ({
    context: e,
    trigger: t,
    role: r = "tooltip",
    interactions: n = [],
  }) =>
    kx([
      bx(e, { enabled: t === "click" }),
      O5(e, { enabled: t === "hover", handleClose: G5() }),
      xx(e),
      Sx(e, { role: r }),
      ...n,
    ]),
  jx = x.createContext(void 0);
function Th() {
  const e = x.useContext(jx);
  if (!e)
    throw new Error(
      "useDropdownContext should be used within the DropdownContext provider!"
    );
  return e;
}
const Oh = ({ className: e, theme: t = {}, ...r }) => {
    var i;
    const { theme: n } = Th(),
      o = (i = t.divider) != null ? i : n.floating.divider;
    return c.jsx("div", { className: $(o, e), ...r });
  },
  Nx = ({ children: e, className: t, theme: r = {}, ...n }) => {
    var a;
    const { theme: o } = Th(),
      i = (a = r.header) != null ? a : o.floating.header;
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("div", { className: $(i, t), ...n, children: e }),
        c.jsx(Oh, {}),
      ],
    });
  },
  Tx = x.forwardRef(
    (
      { children: e, className: t, icon: r, onClick: n, theme: o = {}, ...i },
      a
    ) => {
      const { ref: s, index: l } = k5({
          label: typeof e == "string" ? e : void 0,
        }),
        u = cx([a, s]),
        {
          theme: f,
          activeIndex: d,
          dismissOnClick: h,
          getItemProps: p,
          handleSelect: m,
        } = Th(),
        v = d === l,
        k = G(f.floating.item, o),
        y = i;
      return c.jsx("li", {
        role: "menuitem",
        className: k.container,
        children: c.jsxs(fh, {
          ref: u,
          className: $(k.base, t),
          ...y,
          ...p({
            onClick: () => {
              n == null || n(), h && m(null);
            },
          }),
          tabIndex: v ? 0 : -1,
          children: [r && c.jsx(r, { className: k.icon }), e],
        }),
      });
    }
  );
Tx.displayName = "DropdownItem";
const eR = { top: uT, right: fb, bottom: db, left: lT },
  tR = ({
    refs: e,
    children: t,
    inline: r,
    theme: n,
    disabled: o,
    setButtonWidth: i,
    getReferenceProps: a,
    renderTrigger: s,
    ...l
  }) => {
    const u = e.reference,
      f = a();
    if (
      (x.useEffect(() => {
        u.current && (i == null || i(u.current.clientWidth));
      }, [u, i]),
      s)
    ) {
      const d = s(n);
      return x.cloneElement(d, {
        ref: e.setReference,
        disabled: o,
        ...f,
        ...d.props,
      });
    }
    return r
      ? c.jsx("button", {
          type: "button",
          ref: e.setReference,
          className: n == null ? void 0 : n.inlineWrapper,
          disabled: o,
          ...f,
          children: t,
        })
      : c.jsx(Ja, {
          ...l,
          disabled: o,
          type: "button",
          ref: e.setReference,
          ...f,
          children: t,
        });
  },
  Ox = ({
    children: e,
    className: t,
    dismissOnClick: r = !0,
    theme: n = {},
    renderTrigger: o,
    ...i
  }) => {
    const [a, s] = x.useState(!1),
      [l, u] = x.useState(null),
      [f, d] = x.useState(null),
      [h, p] = x.useState(void 0),
      m = x.useRef([]),
      v = x.useRef([]),
      k = G(ue().dropdown, n),
      y = i,
      g = i["data-testid"] || "flowbite-dropdown-target",
      {
        placement: b = i.inline ? "bottom-start" : "bottom",
        trigger: w = "click",
        label: S,
        inline: j,
        arrowIcon: E = !0,
        ...I
      } = y,
      O = x.useCallback((z) => {
        d(z), s(!1);
      }, []),
      C = x.useCallback(
        (z) => {
          a ? u(z) : O(z);
        },
        [a, O]
      ),
      {
        context: D,
        floatingStyles: P,
        refs: _,
      } = Ex({ open: a, setOpen: s, placement: b }),
      N = V5(D, {
        listRef: m,
        activeIndex: l,
        selectedIndex: f,
        onNavigate: u,
      }),
      L = K5(D, { listRef: v, activeIndex: l, selectedIndex: f, onMatch: C }),
      {
        getReferenceProps: B,
        getFloatingProps: W,
        getItemProps: R,
      } = Cx({ context: D, role: "menu", trigger: w, interactions: [N, L] }),
      F = x.useMemo(() => {
        var U;
        const [z] = b.split("-");
        return (U = eR[z]) != null ? U : db;
      }, [b]);
    return c.jsxs(jx.Provider, {
      value: {
        theme: k,
        activeIndex: l,
        dismissOnClick: r,
        getItemProps: R,
        handleSelect: O,
      },
      children: [
        c.jsxs(tR, {
          ...I,
          refs: _,
          inline: j,
          theme: k,
          "data-testid": g,
          className: $(k.floating.target, I.className),
          setButtonWidth: p,
          getReferenceProps: B,
          renderTrigger: o,
          children: [S, E && c.jsx(F, { className: k.arrowIcon })],
        }),
        a &&
          c.jsx(vx, {
            context: D,
            modal: !1,
            children: c.jsx("div", {
              ref: _.setFloating,
              style: { ...P, minWidth: h },
              "data-testid": "flowbite-dropdown",
              "aria-expanded": a,
              ...W({
                className: $(
                  k.floating.base,
                  k.floating.animation,
                  "duration-100",
                  !a && k.floating.hidden,
                  k.floating.style.auto,
                  t
                ),
              }),
              children: c.jsx(w5, {
                elementsRef: m,
                labelsRef: v,
                children: c.jsx("ul", {
                  className: k.content,
                  tabIndex: -1,
                  children: e,
                }),
              }),
            }),
          }),
      ],
    });
  };
Ox.displayName = "Dropdown";
Nx.displayName = "Dropdown.Header";
Oh.displayName = "Dropdown.Divider";
const rR = Object.assign(Ox, { Item: Tx, Header: Nx, Divider: Oh }),
  nR = x.forwardRef(
    (
      {
        className: e,
        color: t = "gray",
        helperText: r,
        sizing: n = "md",
        theme: o = {},
        ...i
      },
      a
    ) => {
      const s = G(ue().fileInput, o);
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("div", {
            className: $(s.root.base, e),
            children: c.jsx("div", {
              className: s.field.base,
              children: c.jsx("input", {
                className: $(
                  s.field.input.base,
                  s.field.input.colors[t],
                  s.field.input.sizes[n]
                ),
                ...i,
                type: "file",
                ref: a,
              }),
            }),
          }),
          r && c.jsx(Za, { color: t, children: r }),
        ],
      });
    }
  );
nR.displayName = "FileInput";
const oR = x.forwardRef(
  (
    {
      label: e,
      helperText: t,
      color: r = "default",
      sizing: n = "md",
      variant: o,
      disabled: i = !1,
      theme: a = {},
      className: s,
      ...l
    },
    u
  ) => {
    const f = x.useId(),
      d = G(ue().floatingLabel, a);
    return c.jsxs("div", {
      children: [
        c.jsxs("div", {
          className: $("relative", o === "standard" ? "z-0" : ""),
          children: [
            c.jsx("input", {
              type: "text",
              id: l.id ? l.id : "floatingLabel" + f,
              "aria-describedby": "outlined_success_help",
              className: $(d.input[r][o][n], s),
              placeholder: " ",
              "data-testid": "floating-label",
              disabled: i,
              ...l,
              ref: u,
            }),
            c.jsx("label", {
              htmlFor: l.id ? l.id : "floatingLabel" + f,
              className: $(d.label[r][o][n], s),
              children: e,
            }),
          ],
        }),
        c.jsx("p", {
          id: "outlined_helper_text" + f,
          className: $(d.helperText[r], s),
          children: t,
        }),
      ],
    });
  }
);
oR.displayName = "FloatingLabel";
const Rx = ({
    alt: e,
    className: t,
    children: r,
    href: n,
    name: o,
    src: i,
    theme: a = {},
    ...s
  }) => {
    const l = G(ue().footer.brand, a);
    return c.jsx("div", {
      children: n
        ? c.jsxs("a", {
            "data-testid": "flowbite-footer-brand",
            href: n,
            className: $(l.base, t),
            ...s,
            children: [
              c.jsx("img", { alt: e, src: i, className: l.img }),
              c.jsx("span", {
                "data-testid": "flowbite-footer-brand-span",
                className: l.span,
                children: o,
              }),
              r,
            ],
          })
        : c.jsx("img", {
            alt: e,
            "data-testid": "flowbite-footer-brand",
            src: i,
            className: $(l.img, t),
            ...s,
          }),
    });
  },
  Px = ({ by: e, className: t, href: r, theme: n = {}, year: o, ...i }) => {
    const a = G(ue().footer.copyright, n);
    return c.jsxs("div", {
      "data-testid": "flowbite-footer-copyright",
      className: $(a.base, t),
      ...i,
      children: [
        "© ",
        o,
        r
          ? c.jsx("a", { href: r, className: a.href, children: e })
          : c.jsx("span", {
              "data-testid": "flowbite-footer-copyright-span",
              className: a.span,
              children: e,
            }),
      ],
    });
  },
  _x = ({ className: e, theme: t = {}, ...r }) => {
    const n = G(ue().footer.divider, t);
    return c.jsx("hr", {
      "data-testid": "footer-divider",
      className: $(n.base, e),
      ...r,
    });
  },
  Mx = ({
    ariaLabel: e,
    className: t,
    href: r,
    icon: n,
    theme: o = {},
    ...i
  }) => {
    const a = G(ue().footer.icon, o);
    return c.jsx("div", {
      children: r
        ? c.jsx("a", {
            "aria-label": e,
            "data-testid": "flowbite-footer-icon",
            href: r,
            className: $(a.base, t),
            ...i,
            children: c.jsx(n, { className: a.size }),
          })
        : c.jsx(n, {
            "data-testid": "flowbite-footer-icon",
            className: a.size,
            ...i,
          }),
    });
  },
  Lx = ({
    as: e = "a",
    children: t,
    className: r,
    href: n,
    theme: o = {},
    ...i
  }) => {
    const a = G(ue().footer.groupLink.link, o);
    return c.jsx("li", {
      className: $(a.base, r),
      children: c.jsx(e, { href: n, className: a.href, ...i, children: t }),
    });
  },
  Dx = ({ children: e, className: t, col: r = !1, theme: n = {}, ...o }) => {
    const i = G(ue().footer.groupLink, n);
    return c.jsx("ul", {
      "data-testid": "footer-groupLink",
      className: $(i.base, r && i.col, t),
      ...o,
      children: e,
    });
  },
  Ix = ({ as: e = "h2", className: t, theme: r = {}, title: n, ...o }) => {
    const i = G(ue().footer.title, r);
    return c.jsx(e, {
      "data-testid": "flowbite-footer-title",
      className: $(i.base, t),
      ...o,
      children: n,
    });
  },
  Ax = ({
    bgDark: e = !1,
    children: t,
    className: r,
    container: n = !1,
    theme: o = {},
    ...i
  }) => {
    const a = G(ue().footer, o);
    return c.jsx("footer", {
      "data-testid": "flowbite-footer",
      className: $(a.root.base, e && a.root.bgDark, n && a.root.container, r),
      ...i,
      children: t,
    });
  };
Ax.displayName = "Footer";
Px.displayName = "Footer.Copyright";
Lx.displayName = "Footer.Link";
Rx.displayName = "Footer.Brand";
Dx.displayName = "Footer.LinkGroup";
Mx.displayName = "Footer.Icon";
Ix.displayName = "Footer.Title";
_x.displayName = "Footer.Divider";
Object.assign(Ax, {
  Copyright: Px,
  Link: Lx,
  LinkGroup: Dx,
  Brand: Rx,
  Icon: Mx,
  Title: Ix,
  Divider: _x,
});
const zx = ({ children: e, className: t, icon: r, theme: n = {}, ...o }) => {
    const i = G(ue().list.item, n);
    return c.jsxs("li", {
      className: $(i.withIcon[r ? "on" : "off"], t),
      ...o,
      children: [r && c.jsx(r, { className: $(i.icon) }), e],
    });
  },
  Fx = ({
    children: e,
    className: t,
    unstyled: r,
    nested: n,
    ordered: o,
    horizontal: i,
    theme: a = {},
    ...s
  }) => {
    const l = G(ue().list, a),
      u = o ? "ol" : "ul";
    return c.jsx(u, {
      className: $(
        l.root.base,
        l.root.ordered[o ? "on" : "off"],
        r && l.root.unstyled,
        n && l.root.nested,
        i && l.root.horizontal,
        t
      ),
      ...s,
      children: e,
    });
  };
Fx.displayName = "List";
zx.displayName = "List.Item";
Object.assign(Fx, { Item: zx });
const $x = ({
    active: e,
    children: t,
    className: r,
    href: n,
    icon: o,
    onClick: i,
    theme: a = {},
    disabled: s,
    ...l
  }) => {
    const u = G(ue().listGroup.item, a),
      f = typeof n < "u",
      d = f ? "a" : "button";
    return c.jsx("li", {
      className: $(u.base, r),
      children: c.jsxs(d, {
        href: n,
        onClick: i,
        type: f ? void 0 : "button",
        disabled: s,
        className: $(
          u.link.active[e ? "on" : "off"],
          u.link.disabled[s ? "on" : "off"],
          u.link.base,
          u.link.href[f ? "on" : "off"]
        ),
        ...l,
        children: [
          o &&
            c.jsx(o, {
              "aria-hidden": !0,
              "data-testid": "flowbite-list-group-item-icon",
              className: u.link.icon,
            }),
          t,
        ],
      }),
    });
  },
  Ux = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const o = G(ue().listGroup, r);
    return c.jsx("ul", { className: $(o.root.base, t), ...n, children: e });
  };
Ux.displayName = "ListGroup";
$x.displayName = "ListGroup.Item";
Object.assign(Ux, { Item: $x });
const Bx = x.createContext(void 0);
function _u() {
  const e = x.useContext(Bx);
  if (!e)
    throw new Error(
      "useNavBarContext should be used within the NavbarContext provider!"
    );
  return e;
}
const Hx = ({
    as: e = "a",
    children: t,
    className: r,
    theme: n = {},
    ...o
  }) => {
    const { theme: i } = _u(),
      a = G(i.brand, n);
    return c.jsx(e, { className: $(a.base, r), ...o, children: t });
  },
  Wx = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o, isOpen: i } = _u(),
      a = G(o.collapse, r);
    return c.jsx("div", {
      "data-testid": "flowbite-navbar-collapse",
      className: $(a.base, a.hidden[i ? "off" : "on"], t),
      ...n,
      children: c.jsx("ul", { className: a.list, children: e }),
    });
  },
  Qx = ({
    active: e,
    as: t = "a",
    disabled: r,
    children: n,
    className: o,
    theme: i = {},
    onClick: a,
    ...s
  }) => {
    const { theme: l, setIsOpen: u } = _u(),
      f = G(l.link, i),
      d = (h) => {
        u(!1), a == null || a(h);
      };
    return c.jsx("li", {
      children: c.jsx(t, {
        className: $(
          f.base,
          e && f.active.on,
          !e && !r && f.active.off,
          f.disabled[r ? "on" : "off"],
          o
        ),
        onClick: d,
        ...s,
        children: n,
      }),
    });
  };
function iR(e) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
const Vx = ({ barIcon: e = iR, className: t, theme: r = {}, ...n }) => {
    const { theme: o, isOpen: i, setIsOpen: a } = _u(),
      s = G(o.toggle, r),
      l = () => {
        a(!i);
      };
    return c.jsxs("button", {
      "data-testid": "flowbite-navbar-toggle",
      onClick: l,
      className: $(s.base, t),
      ...n,
      children: [
        c.jsx("span", { className: "sr-only", children: "Open main menu" }),
        c.jsx(e, { "aria-hidden": !0, className: s.icon }),
      ],
    });
  },
  qx = ({
    border: e,
    children: t,
    className: r,
    fluid: n = !1,
    menuOpen: o,
    rounded: i,
    theme: a = {},
    ...s
  }) => {
    const [l, u] = x.useState(o),
      f = G(ue().navbar, a);
    return c.jsx(Bx.Provider, {
      value: { theme: f, isOpen: l, setIsOpen: u },
      children: c.jsx("nav", {
        className: $(
          f.root.base,
          f.root.bordered[e ? "on" : "off"],
          f.root.rounded[i ? "on" : "off"],
          r
        ),
        ...s,
        children: c.jsx("div", {
          className: $(f.root.inner.base, f.root.inner.fluid[n ? "on" : "off"]),
          children: t,
        }),
      }),
    });
  };
qx.displayName = "Navbar";
Hx.displayName = "Navbar.Brand";
Wx.displayName = "Navbar.Collapse";
Qx.displayName = "Navbar.Link";
Vx.displayName = "Navbar.Toggle";
const aR = Object.assign(qx, { Brand: Hx, Collapse: Wx, Link: Qx, Toggle: Vx }),
  Kx = ({ children: e, className: t, theme: r = {}, toggle: n, ...o }) => {
    const [i, a] = x.useState(void 0),
      s = G(ue().megaMenu.dropdown, r);
    if (n)
      return c.jsx(rR, {
        inline: !0,
        label: n,
        placement: "bottom",
        theme: s.toggle,
        className: $(s.base, t),
        children: e,
      });
    const l = x.useId(),
      u = x.useRef(null);
    return (
      x.useEffect(() => {
        var d;
        a(
          (d = (function () {
            var p;
            const h = (p = u.current) == null ? void 0 : p.closest("nav");
            return h == null
              ? void 0
              : h.querySelector('[aria-haspopup="menu"]');
          })()) == null
            ? void 0
            : d.id
        );
      }, []),
      c.jsx("div", {
        "aria-labelledby": i,
        id: l,
        ref: u,
        role: "menu",
        className: $(s.base, t),
        ...o,
        children: e,
      })
    );
  };
Kx.displayName = "MegaMenu.Dropdown";
const Yx = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const o = x.useId(),
    i = x.useRef(null),
    [a, s] = x.useState(void 0),
    [l, u] = x.useState(void 0),
    f = G(ue().megaMenu.dropdownToggle, r),
    d = function () {
      var m;
      const p = (m = i.current) == null ? void 0 : m.closest("nav");
      return p == null ? void 0 : p.querySelector('[role="menu"]');
    },
    h = function () {
      var p;
      (p = d()) == null || p.classList.toggle("hidden"), u(!l);
    };
  return (
    x.useEffect(() => {
      const p = d(),
        m = p == null ? void 0 : p.classList.contains("hidden");
      s(p == null ? void 0 : p.id), u(!m);
    }, []),
    c.jsx("button", {
      "aria-controls": a,
      "aria-expanded": l,
      "aria-haspopup": "menu",
      id: o,
      onClick: h,
      ref: i,
      className: $(f.base, t),
      ...n,
      children: e,
    })
  );
};
Yx.displayName = "MegaMenu.DropdownToggle";
const Gx = ({ children: e, theme: t = {}, ...r }) => {
  const n = G(ue().megaMenu, t);
  return c.jsx(aR, { fluid: !0, theme: n, ...r, children: e });
};
Object.assign(Gx, { Dropdown: Kx, DropdownToggle: Yx });
Gx.displayName = "MegaMenu";
const Xx = x.createContext(void 0);
function Rh() {
  const e = x.useContext(Xx);
  if (!e)
    throw new Error(
      "useModalContext should be used within the ModalContext provider!"
    );
  return e;
}
const Jx = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o, popup: i } = Rh(),
      a = G(o.body, r);
    return c.jsx("div", {
      className: $(a.base, i && [a.popup], t),
      ...n,
      children: e,
    });
  },
  Zx = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o, popup: i } = Rh(),
      a = G(o.footer, r);
    return c.jsx("div", {
      className: $(a.base, !i && a.popup, t),
      ...n,
      children: e,
    });
  },
  ew = ({
    as: e = "h3",
    children: t,
    className: r,
    theme: n = {},
    id: o,
    ...i
  }) => {
    const a = x.useId(),
      s = o || a,
      { theme: l, popup: u, onClose: f, setHeaderId: d } = Rh(),
      h = G(l.header, n);
    return (
      x.useLayoutEffect(() => (d(s), () => d(void 0)), [s, d]),
      c.jsxs("div", {
        className: $(h.base, u && h.popup, r),
        ...i,
        children: [
          c.jsx(e, { id: s, className: h.title, children: t }),
          c.jsx("button", {
            "aria-label": "Close",
            className: h.close.base,
            type: "button",
            onClick: f,
            children: c.jsx(cT, { "aria-hidden": !0, className: h.close.icon }),
          }),
        ],
      })
    );
  },
  tw = x.forwardRef(
    (
      {
        children: e,
        className: t,
        dismissible: r = !1,
        onClose: n,
        popup: o,
        position: i = "center",
        root: a,
        show: s,
        size: l = "2xl",
        theme: u = {},
        initialFocus: f,
        ...d
      },
      h
    ) => {
      const [p, m] = x.useState(void 0),
        v = G(ue().modal, u),
        { context: k } = wx({ open: s, onOpenChange: () => n && n() }),
        y = cx([k.refs.setFloating, h]),
        g = bx(k),
        b = xx(k, { outsidePressEvent: "mousedown", enabled: r }),
        w = Sx(k),
        { getFloatingProps: S } = kx([g, b, w]);
      return s
        ? c.jsx(Xx.Provider, {
            value: { theme: v, popup: o, onClose: n, setHeaderId: m },
            children: c.jsx(F5, {
              root: a,
              children: c.jsx(U5, {
                lockScroll: !0,
                "data-testid": "modal-overlay",
                className: $(
                  v.root.base,
                  v.root.positions[i],
                  s ? v.root.show.on : v.root.show.off,
                  t
                ),
                ...d,
                children: c.jsx(vx, {
                  context: k,
                  initialFocus: f,
                  children: c.jsx("div", {
                    ref: y,
                    ...S(d),
                    "aria-labelledby": p,
                    className: $(v.content.base, v.root.sizes[l]),
                    children: c.jsx("div", {
                      className: v.content.inner,
                      children: e,
                    }),
                  }),
                }),
              }),
            }),
          })
        : null;
    }
  );
tw.displayName = "Modal";
ew.displayName = "Modal.Header";
Jx.displayName = "Modal.Body";
Zx.displayName = "Modal.Footer";
Object.assign(tw, { Header: ew, Body: Jx, Footer: Zx });
const sR = (e, t) =>
    e >= t ? [] : [...Array(t - e + 1).keys()].map((r) => r + e),
  Ph = ({
    active: e,
    children: t,
    className: r,
    onClick: n,
    theme: o = {},
    ...i
  }) => {
    const a = G(ue().pagination, o);
    return c.jsx("button", {
      type: "button",
      className: $(e && a.pages.selector.active, r),
      onClick: n,
      ...i,
      children: t,
    });
  };
Ph.displayName = "Pagination.Button";
const tf = ({
  children: e,
  className: t,
  onClick: r,
  theme: n = {},
  disabled: o = !1,
  ...i
}) => {
  const a = G(ue().pagination, n);
  return c.jsx("button", {
    type: "button",
    className: $(o && a.pages.selector.disabled, t),
    disabled: o,
    onClick: r,
    ...i,
    children: e,
  });
};
tf.displayName = "Pagination.Navigation";
const rw = ({
  className: e,
  currentPage: t,
  layout: r = "pagination",
  nextLabel: n = "Next",
  onPageChange: o,
  previousLabel: i = "Previous",
  renderPaginationButton: a = (d) => c.jsx(Ph, { ...d }),
  showIcons: s = !1,
  theme: l = {},
  totalPages: u,
  ...f
}) => {
  const d = G(ue().pagination, l),
    h = Math.min(Math.max(r === "pagination" ? t + 2 : t + 4, 5), u),
    p = Math.max(1, h - 4),
    m = () => {
      o(Math.min(t + 1, u));
    },
    v = () => {
      o(Math.max(t - 1, 1));
    };
  return c.jsxs("nav", {
    className: $(d.base, e),
    ...f,
    children: [
      r === "table" &&
        c.jsxs("div", {
          className: d.layout.table.base,
          children: [
            "Showing ",
            c.jsx("span", { className: d.layout.table.span, children: p }),
            " to ",
            c.jsx("span", { className: d.layout.table.span, children: h }),
            " of ",
            c.jsx("span", { className: d.layout.table.span, children: u }),
            " Entries",
          ],
        }),
      c.jsxs("ul", {
        className: d.pages.base,
        children: [
          c.jsx("li", {
            children: c.jsxs(tf, {
              className: $(d.pages.previous.base, s && d.pages.showIcon),
              onClick: v,
              disabled: t === 1,
              children: [
                s &&
                  c.jsx(oT, {
                    "aria-hidden": !0,
                    className: d.pages.previous.icon,
                  }),
                i,
              ],
            }),
          }),
          r === "pagination" &&
            sR(p, h).map((k) =>
              c.jsx(
                "li",
                {
                  "aria-current": k === t ? "page" : void 0,
                  children: a({
                    className: $(
                      d.pages.selector.base,
                      t === k && d.pages.selector.active
                    ),
                    active: k === t,
                    onClick: () => o(k),
                    children: k,
                  }),
                },
                k
              )
            ),
          c.jsx("li", {
            children: c.jsxs(tf, {
              className: $(d.pages.next.base, s && d.pages.showIcon),
              onClick: m,
              disabled: t === u,
              children: [
                n,
                s &&
                  c.jsx(iT, {
                    "aria-hidden": !0,
                    className: d.pages.next.icon,
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
rw.displayName = "Pagination";
Object.assign(rw, { Button: Ph });
const lR = x.forwardRef(({ className: e, theme: t = {}, ...r }, n) => {
  const o = G(ue().radio, t);
  return c.jsx("input", {
    ref: n,
    type: "radio",
    className: $(o.root.base, e),
    ...r,
  });
});
lR.displayName = "Radio";
const uR = x.forwardRef(
  ({ className: e, sizing: t = "md", theme: r = {}, ...n }, o) => {
    const i = G(ue().rangeSlider, r);
    return c.jsx(c.Fragment, {
      children: c.jsx("div", {
        "data-testid": "flowbite-range-slider",
        className: $(i.root.base, e),
        children: c.jsx("div", {
          className: i.field.base,
          children: c.jsx("input", {
            ref: o,
            type: "range",
            className: $(i.field.input.base, i.field.input.sizes[t]),
            ...n,
          }),
        }),
      }),
    });
  }
);
uR.displayName = "RangeSlider";
const nw = ({
    children: e,
    className: t,
    percentFilled: r = 0,
    theme: n = {},
    ...o
  }) => {
    const i = G(ue().ratingAdvanced, n);
    return c.jsxs("div", {
      className: $(i.base, t),
      ...o,
      children: [
        c.jsx("span", { className: i.label, children: e }),
        c.jsx("div", {
          className: i.progress.base,
          children: c.jsx("div", {
            className: i.progress.fill,
            "data-testid": "flowbite-rating-fill",
            style: { width: "".concat(r, "%") },
          }),
        }),
        c.jsx("span", {
          className: i.progress.label,
          children: "".concat(r, "%"),
        }),
      ],
    });
  },
  ow = x.createContext(void 0);
function cR() {
  const e = x.useContext(ow);
  if (!e)
    throw new Error(
      "useRatingContext should be used within the RatingContext provider!"
    );
  return e;
}
const iw = ({
    className: e,
    filled: t = !0,
    starIcon: r = aT,
    theme: n = {},
    ...o
  }) => {
    const { theme: i, size: a = "sm" } = cR(),
      s = G(i.star, n);
    return c.jsx(r, {
      "data-testid": "flowbite-rating-star",
      className: $(s.sizes[a], s[t ? "filled" : "empty"], e),
      ...o,
    });
  },
  aw = ({ children: e, className: t, size: r = "sm", theme: n = {}, ...o }) => {
    const i = G(ue().rating, n);
    return c.jsx(ow.Provider, {
      value: { theme: i, size: r },
      children: c.jsx("div", {
        className: $(i.root.base, t),
        ...o,
        children: e,
      }),
    });
  };
aw.displayName = "Rating";
iw.displayName = "Rating.Star";
nw.displayName = "Rating.Advanced";
Object.assign(aw, { Star: iw, Advanced: nw });
const dR = x.forwardRef(
  (
    {
      addon: e,
      children: t,
      className: r,
      color: n = "gray",
      helperText: o,
      icon: i,
      shadow: a,
      sizing: s = "md",
      theme: l = {},
      ...u
    },
    f
  ) => {
    const d = G(ue().select, l);
    return c.jsxs("div", {
      className: $(d.base, r),
      children: [
        e && c.jsx("span", { className: d.addon, children: e }),
        c.jsxs("div", {
          className: d.field.base,
          children: [
            i &&
              c.jsx("div", {
                className: d.field.icon.base,
                children: c.jsx(i, { className: d.field.icon.svg }),
              }),
            c.jsx("select", {
              className: $(
                d.field.select.base,
                d.field.select.colors[n],
                d.field.select.sizes[s],
                d.field.select.withIcon[i ? "on" : "off"],
                d.field.select.withAddon[e ? "on" : "off"],
                d.field.select.withShadow[a ? "on" : "off"]
              ),
              ...u,
              ref: f,
              children: t,
            }),
            o && c.jsx(Za, { color: n, children: o }),
          ],
        }),
      ],
    });
  }
);
dR.displayName = "Select";
const fR = ({
    animation: e = "duration-300",
    arrow: t = !0,
    children: r,
    className: n,
    content: o,
    placement: i = "top",
    style: a = "dark",
    theme: s,
    trigger: l = "hover",
    minWidth: u,
    ...f
  }) => {
    const d = x.useRef(null),
      [h, p] = x.useState(!1),
      m = Ex({ open: h, placement: i, arrowRef: d, setOpen: p }),
      {
        context: v,
        middlewareData: { arrow: { x: k, y } = {} },
        refs: g,
        strategy: b,
        update: w,
        x: S,
        y: j,
      } = m,
      E = W5(v),
      { getFloatingProps: I, getReferenceProps: O } = Cx({
        context: v,
        role: "tooltip",
        trigger: l,
        interactions: [E],
      });
    return (
      x.useEffect(() => {
        if (g.reference.current && g.floating.current && h)
          return ox(g.reference.current, g.floating.current, w);
      }, [h, g.floating, g.reference, w]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx("div", {
            ref: g.setReference,
            className: s.target,
            "data-testid": "flowbite-tooltip-target",
            ...O(),
            children: r,
          }),
          c.jsxs("div", {
            ref: g.setFloating,
            "data-testid": "flowbite-tooltip",
            ...I({
              className: $(
                s.base,
                e && "".concat(s.animation, " ").concat(e),
                !h && s.hidden,
                s.style[a],
                n
              ),
              style: {
                position: b,
                top: j != null ? j : " ",
                left: S != null ? S : " ",
                minWidth: u,
              },
              ...f,
            }),
            children: [
              c.jsx("div", { className: s.content, children: o }),
              t &&
                c.jsx("div", {
                  className: $(
                    s.arrow.base,
                    a === "dark" && s.arrow.style.dark,
                    a === "light" && s.arrow.style.light,
                    a === "auto" && s.arrow.style.auto
                  ),
                  "data-testid": "flowbite-tooltip-arrow",
                  ref: d,
                  style: {
                    top: y != null ? y : " ",
                    left: k != null ? k : " ",
                    right: " ",
                    bottom: " ",
                    [Z5({ placement: m.placement })]: s.arrow.placement,
                  },
                  children: " ",
                }),
            ],
          }),
        ],
      })
    );
  },
  _h = ({
    animation: e = "duration-300",
    arrow: t = !0,
    children: r,
    className: n,
    content: o,
    placement: i = "top",
    style: a = "dark",
    theme: s = {},
    trigger: l = "hover",
    ...u
  }) => {
    const f = G(ue().tooltip, s);
    return c.jsx(fR, {
      animation: e,
      arrow: t,
      content: o,
      placement: i,
      style: a,
      theme: f,
      trigger: l,
      className: n,
      ...u,
      children: r,
    });
  };
_h.displayName = "Tooltip";
const sw = x.createContext(void 0);
function Li() {
  const e = x.useContext(sw);
  if (!e)
    throw new Error(
      "useSidebarContext should be used within the SidebarContext provider!"
    );
  return e;
}
const Mh = x.createContext(void 0);
function hR() {
  const e = x.useContext(Mh);
  if (!e)
    throw new Error(
      "useSidebarItemContext should be used within the SidebarItemContext provider!"
    );
  return e;
}
const lw = ({
  children: e,
  className: t,
  icon: r,
  label: n,
  chevronIcon: o = cb,
  renderChevronIcon: i,
  open: a = !1,
  theme: s = {},
  ...l
}) => {
  const u = x.useId(),
    [f, d] = x.useState(a),
    { theme: h, isCollapsed: p } = Li(),
    m = G(h.collapse, s);
  x.useEffect(() => d(a), [a]);
  const v = ({ children: k }) =>
    c.jsx("li", {
      children:
        p && !f
          ? c.jsx(_h, { content: n, placement: "right", children: k })
          : k,
    });
  return c.jsxs(v, {
    children: [
      c.jsxs("button", {
        id: "flowbite-sidebar-collapse-".concat(u),
        onClick: () => d(!f),
        title: n,
        type: "button",
        className: $(m.button, t),
        ...l,
        children: [
          r &&
            c.jsx(r, {
              "aria-hidden": !0,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: $(m.icon.base, m.icon.open[f ? "on" : "off"]),
            }),
          p
            ? c.jsx("span", { className: "sr-only", children: n })
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx("span", {
                    "data-testid": "flowbite-sidebar-collapse-label",
                    className: m.label.base,
                    children: n,
                  }),
                  i
                    ? i(m, f)
                    : c.jsx(o, {
                        "aria-hidden": !0,
                        className: $(
                          m.label.icon.base,
                          m.label.icon.open[f ? "on" : "off"]
                        ),
                      }),
                ],
              }),
        ],
      }),
      c.jsx("ul", {
        "aria-labelledby": "flowbite-sidebar-collapse-".concat(u),
        hidden: !f,
        className: m.list,
        children: c.jsx(Mh.Provider, {
          value: { isInsideCollapse: !0 },
          children: e,
        }),
      }),
    ],
  });
};
lw.displayName = "Sidebar.Collapse";
const uw = ({
  children: e,
  color: t = "info",
  className: r,
  theme: n = {},
  ...o
}) => {
  const { theme: i, isCollapsed: a } = Li(),
    s = G(i.cta, n);
  return c.jsx("div", {
    "data-testid": "sidebar-cta",
    hidden: a,
    className: $(s.base, s.color[t], r),
    ...o,
    children: e,
  });
};
uw.displayName = "Sidebar.CTA";
const pR = ({
    id: e,
    theme: t,
    isCollapsed: r,
    tooltipChildren: n,
    children: o,
    ...i
  }) =>
    c.jsx("li", {
      ...i,
      children: r
        ? c.jsx(_h, {
            content: c.jsx(cw, { id: e, theme: t, children: n }),
            placement: "right",
            children: o,
          })
        : o,
    }),
  cw = ({ id: e, theme: t, children: r }) =>
    c.jsx("span", {
      "data-testid": "flowbite-sidebar-item-content",
      id: "flowbite-sidebar-item-".concat(e),
      className: $(t.content.base),
      children: r,
    }),
  dw = x.forwardRef(
    (
      {
        active: e,
        as: t = "a",
        children: r,
        className: n,
        icon: o,
        label: i,
        labelColor: a = "info",
        theme: s = {},
        ...l
      },
      u
    ) => {
      var v, k, y, g, b;
      const f = x.useId(),
        { theme: d, isCollapsed: h } = Li(),
        { isInsideCollapse: p } = hR(),
        m = G(d.item, s);
      return c.jsx(pR, {
        theme: m,
        className: m.listItem,
        id: f,
        isCollapsed: h,
        tooltipChildren: r,
        children: c.jsxs(t, {
          "aria-labelledby": "flowbite-sidebar-item-".concat(f),
          ref: u,
          className: $(
            m.base,
            e && m.active,
            !h && p && ((v = m.collapsed) == null ? void 0 : v.insideCollapse),
            n
          ),
          ...l,
          children: [
            o &&
              c.jsx(o, {
                "aria-hidden": !0,
                "data-testid": "flowbite-sidebar-item-icon",
                className: $(
                  (k = m.icon) == null ? void 0 : k.base,
                  e && ((y = m.icon) == null ? void 0 : y.active)
                ),
              }),
            h &&
              !o &&
              c.jsx("span", {
                className: (g = m.collapsed) == null ? void 0 : g.noIcon,
                children:
                  (b = r.charAt(0).toLocaleUpperCase()) != null ? b : "?",
              }),
            !h && c.jsx(cw, { id: f, theme: m, children: r }),
            !h &&
              i &&
              c.jsx(Hl, {
                color: a,
                "data-testid": "flowbite-sidebar-label",
                hidden: h,
                className: m.label,
                children: i,
              }),
          ],
        }),
      });
    }
  );
dw.displayName = "Sidebar.Item";
const fw = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const { theme: o } = Li(),
    i = G(o.itemGroup, r);
  return c.jsx("ul", {
    "data-testid": "flowbite-sidebar-item-group",
    className: $(i.base, t),
    ...n,
    children: c.jsx(Mh.Provider, {
      value: { isInsideCollapse: !1 },
      children: e,
    }),
  });
};
fw.displayName = "Sidebar.ItemGroup";
const hw = ({ children: e, className: t, theme: r = {}, ...n }) => {
  const { theme: o } = Li(),
    i = G(o.items, r);
  return c.jsx("div", {
    className: $(i.base, t),
    "data-testid": "flowbite-sidebar-items",
    ...n,
    children: e,
  });
};
hw.displayName = "Sidebar.Items";
const pw = ({
  children: e,
  className: t,
  href: r,
  img: n,
  imgAlt: o = "",
  theme: i = {},
  ...a
}) => {
  const s = x.useId(),
    { theme: l, isCollapsed: u } = Li(),
    f = G(l.logo, i);
  return c.jsxs("a", {
    "aria-labelledby": "flowbite-sidebar-logo-".concat(s),
    href: r,
    className: $(f.base, t),
    ...a,
    children: [
      c.jsx("img", { alt: o, src: n, className: f.img }),
      c.jsx("span", {
        className: f.collapsed[u ? "on" : "off"],
        id: "flowbite-sidebar-logo-".concat(s),
        children: e,
      }),
    ],
  });
};
pw.displayName = "Sidebar.Logo";
const gw = ({
  children: e,
  as: t = "nav",
  collapseBehavior: r = "collapse",
  collapsed: n = !1,
  theme: o = {},
  className: i,
  ...a
}) => {
  const s = G(ue().sidebar, o);
  return c.jsx(sw.Provider, {
    value: { theme: s, isCollapsed: n },
    children: c.jsx(t, {
      "aria-label": "Sidebar",
      hidden: n && r === "hide",
      className: $(s.root.base, s.root.collapsed[n ? "on" : "off"], i),
      ...a,
      children: c.jsx("div", { className: s.root.inner, children: e }),
    }),
  });
};
gw.displayName = "Sidebar";
Object.assign(gw, {
  Collapse: lw,
  CTA: uw,
  Item: dw,
  Items: hw,
  ItemGroup: fw,
  Logo: pw,
});
const mw = x.createContext(void 0);
function gR() {
  const e = x.useContext(mw);
  if (!e)
    throw new Error(
      "useTableBodyContext should be used within the TableBodyContext provider!"
    );
  return e;
}
const yw = x.createContext(void 0);
function Lh() {
  const e = x.useContext(yw);
  if (!e)
    throw new Error(
      "useTableContext should be used within the TableContext provider!"
    );
  return e;
}
const vw = x.forwardRef(
  ({ children: e, className: t, theme: r = {}, ...n }, o) => {
    const { theme: i } = Lh(),
      a = G(i.body, r);
    return c.jsx(mw.Provider, {
      value: { theme: a },
      children: c.jsx("tbody", {
        className: $(a.base, t),
        ref: o,
        ...n,
        children: e,
      }),
    });
  }
);
vw.displayName = "Table.Body";
const bw = x.forwardRef(
  ({ children: e, className: t, theme: r = {}, ...n }, o) => {
    const { theme: i } = gR(),
      a = G(i.cell, r);
    return c.jsx("td", { className: $(a.base, t), ref: o, ...n, children: e });
  }
);
bw.displayName = "Table.Cell";
const xw = x.createContext(void 0);
function mR() {
  const e = x.useContext(xw);
  if (!e)
    throw new Error(
      "useTableHeadContext should be used within the TableHeadContext provider!"
    );
  return e;
}
const ww = x.forwardRef(
  ({ children: e, className: t, theme: r = {}, ...n }, o) => {
    const { theme: i } = Lh(),
      a = G(i.head, r);
    return c.jsx(xw.Provider, {
      value: { theme: a },
      children: c.jsx("thead", {
        className: $(a.base, t),
        ref: o,
        ...n,
        children: c.jsx("tr", { children: e }),
      }),
    });
  }
);
ww.displayName = "Table.Head";
const kw = x.forwardRef(
  ({ children: e, className: t, theme: r = {}, ...n }, o) => {
    const { theme: i } = mR(),
      a = G(i.cell, r);
    return c.jsx("th", { className: $(a.base, t), ref: o, ...n, children: e });
  }
);
kw.displayName = "Table.HeadCell";
const Sw = x.forwardRef(
  ({ children: e, className: t, theme: r = {}, ...n }, o) => {
    const { theme: i, hoverable: a, striped: s } = Lh(),
      l = G(i.row, r);
    return c.jsx("tr", {
      ref: o,
      "data-testid": "table-row-element",
      className: $(l.base, s && l.striped, a && l.hovered, t),
      ...n,
      children: e,
    });
  }
);
Sw.displayName = "Table.Row";
const Ew = x.forwardRef(
  (
    {
      children: e,
      className: t,
      striped: r,
      hoverable: n,
      theme: o = {},
      ...i
    },
    a
  ) => {
    const s = G(ue().table, o);
    return c.jsx("div", {
      "data-testid": "table-element",
      className: $(s.root.wrapper),
      children: c.jsxs(yw.Provider, {
        value: { theme: s, striped: r, hoverable: n },
        children: [
          c.jsx("div", { className: $(s.root.shadow, t) }),
          c.jsx("table", {
            className: $(s.root.base, t),
            ...i,
            ref: a,
            children: e,
          }),
        ],
      }),
    });
  }
);
Ew.displayName = "Table";
Object.assign(Ew, { Head: ww, Body: vw, Row: Sw, Cell: bw, HeadCell: kw });
const Cw = ({ children: e, className: t }) =>
  c.jsx("div", { className: t, children: e });
Cw.displayName = "Tabs.Item";
const jw = x.forwardRef(
  (
    {
      children: e,
      className: t,
      onActiveTabChange: r,
      style: n = "default",
      theme: o = {},
      ...i
    },
    a
  ) => {
    const s = G(ue().tabs, o),
      l = x.useId(),
      u = x.useMemo(
        () => x.Children.map(x.Children.toArray(e), ({ props: w }) => w),
        [e]
      ),
      f = x.useRef([]),
      [d, h] = x.useState(
        Math.max(
          0,
          u.findIndex((w) => w.active)
        )
      ),
      [p, m] = x.useState(-1),
      v = (w) => {
        h(w), r && r(w);
      },
      k = ({ target: w }) => {
        v(w), m(w);
      },
      y = ({ event: w, target: S }) => {
        w.key === "ArrowLeft" && m(Math.max(0, p - 1)),
          w.key === "ArrowRight" && m(Math.min(u.length - 1, p + 1)),
          w.key === "Enter" && (v(S), m(S));
      },
      g = s.tablist.tabitem.styles[n],
      b = s.tabitemcontainer.styles[n];
    return (
      x.useEffect(() => {
        var w;
        (w = f.current[p]) == null || w.focus();
      }, [p]),
      x.useImperativeHandle(a, () => ({ setActiveTab: v })),
      c.jsxs("div", {
        className: $(s.base, t),
        children: [
          c.jsx("div", {
            "aria-label": "Tabs",
            role: "tablist",
            className: $(s.tablist.base, s.tablist.styles[n], t),
            ...i,
            children: u.map((w, S) =>
              c.jsxs(
                "button",
                {
                  type: "button",
                  "aria-controls": "".concat(l, "-tabpanel-").concat(S),
                  "aria-selected": S === d,
                  className: $(
                    s.tablist.tabitem.base,
                    g.base,
                    S === d && g.active.on,
                    S !== d && !w.disabled && g.active.off
                  ),
                  disabled: w.disabled,
                  id: "".concat(l, "-tab-").concat(S),
                  onClick: () => k({ target: S }),
                  onKeyDown: (j) => y({ event: j, target: S }),
                  ref: (j) => (f.current[S] = j),
                  role: "tab",
                  tabIndex: S === p ? 0 : -1,
                  style: { zIndex: S === p ? 2 : 1 },
                  children: [
                    w.icon &&
                      c.jsx(w.icon, { className: s.tablist.tabitem.icon }),
                    w.title,
                  ],
                },
                S
              )
            ),
          }),
          c.jsx("div", {
            className: $(s.tabitemcontainer.base, b),
            children: u.map((w, S) =>
              c.jsx(
                "div",
                {
                  "aria-labelledby": "".concat(l, "-tab-").concat(S),
                  className: s.tabpanel,
                  hidden: S !== d,
                  id: "".concat(l, "-tabpanel-").concat(S),
                  role: "tabpanel",
                  tabIndex: 0,
                  children: w.children,
                },
                S
              )
            ),
          }),
        ],
      })
    );
  }
);
jw.displayName = "Tabs";
Object.assign(jw, { Item: Cw });
const yR = x.forwardRef(
  (
    {
      className: e,
      color: t = "gray",
      helperText: r,
      shadow: n,
      theme: o = {},
      ...i
    },
    a
  ) => {
    const s = G(ue().textarea, o);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("textarea", {
          ref: a,
          className: $(s.base, s.colors[t], s.withShadow[n ? "on" : "off"], e),
          ...i,
        }),
        r && c.jsx(Za, { color: t, children: r }),
      ],
    });
  }
);
yR.displayName = "Textarea";
const Nw = x.createContext(void 0);
function Dh() {
  const e = x.useContext(Nw);
  if (!e)
    throw new Error(
      "useTimelineContentContext should be used within the TimelineContentContext provider!"
    );
  return e;
}
const Tw = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o } = Dh(),
      i = G(o.body, r);
    return c.jsx("div", { className: $(i.base, t), ...n, children: e });
  },
  Ow = x.createContext(void 0);
function Ih() {
  const e = x.useContext(Ow);
  if (!e)
    throw new Error(
      "useTimelineContext should be used within the TimelineContext provider!"
    );
  return e;
}
const Rw = x.createContext(void 0);
function Pw() {
  const e = x.useContext(Rw);
  if (!e)
    throw new Error(
      "useTimelineItemContext should be used within the TimelineItemContext provider!"
    );
  return e;
}
const _w = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { horizontal: o } = Ih(),
      { theme: i } = Pw(),
      a = G(i.content, r);
    return c.jsx(Nw.Provider, {
      value: { theme: a },
      children: c.jsx("div", {
        "data-testid": "timeline-content",
        className: $(o && a.root.base, t),
        ...n,
        children: e,
      }),
    });
  },
  Mw = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o, horizontal: i } = Ih(),
      a = G(o.item, r);
    return c.jsx(Rw.Provider, {
      value: { theme: a },
      children: c.jsx("li", {
        "data-testid": "timeline-item",
        className: $(i && a.root.horizontal, !i && a.root.vertical, t),
        ...n,
        children: e,
      }),
    });
  },
  Lw = ({ children: e, className: t, icon: r, theme: n = {}, ...o }) => {
    const { horizontal: i } = Ih(),
      { theme: a } = Pw(),
      s = G(a.point, n);
    return c.jsxs("div", {
      "data-testid": "timeline-point",
      className: $(i && s.horizontal, !i && s.vertical, t),
      ...o,
      children: [
        e,
        r
          ? c.jsx("span", {
              className: $(s.marker.icon.wrapper),
              children: c.jsx(r, {
                "aria-hidden": !0,
                className: $(s.marker.icon.base),
              }),
            })
          : c.jsx("div", {
              className: $(
                i && s.marker.base.horizontal,
                !i && s.marker.base.vertical
              ),
            }),
        i && c.jsx("div", { className: $(s.line) }),
      ],
    });
  },
  Dw = ({ children: e, className: t, theme: r = {}, ...n }) => {
    const { theme: o } = Dh(),
      i = G(o.time, r);
    return c.jsx("time", { className: $(i.base, t), ...n, children: e });
  },
  Iw = ({ as: e = "h3", children: t, className: r, theme: n = {}, ...o }) => {
    const { theme: i } = Dh(),
      a = G(i.title, n);
    return c.jsx(e, { className: $(a.base, r), ...o, children: t });
  },
  Aw = ({ children: e, className: t, horizontal: r, theme: n = {}, ...o }) => {
    const i = G(ue().timeline, n);
    return c.jsx(Ow.Provider, {
      value: { theme: i, horizontal: r },
      children: c.jsx("ol", {
        "data-testid": "timeline-component",
        className: $(
          r && i.root.direction.horizontal,
          !r && i.root.direction.vertical,
          t
        ),
        ...o,
        children: e,
      }),
    });
  };
Aw.displayName = "Timeline";
Mw.displayName = "Timeline.Item";
Lw.displayName = "Timeline.Point";
_w.displayName = "Timeline.Content";
Dw.displayName = "Timeline.Time";
Iw.displayName = "Timeline.Title";
Tw.displayName = "Timeline.Body";
Object.assign(Aw, {
  Item: Mw,
  Point: Lw,
  Content: _w,
  Time: Dw,
  Title: Iw,
  Body: Tw,
});
const zw = x.createContext(void 0);
function vR() {
  const e = x.useContext(zw);
  if (!e)
    throw new Error(
      "useToastContext should be used within the ToastContext provider!"
    );
  return e;
}
const Fw = ({
    className: e,
    onClick: t,
    theme: r = {},
    xIcon: n = sT,
    onDismiss: o,
    ...i
  }) => {
    const {
        theme: a,
        duration: s,
        isClosed: l,
        isRemoved: u,
        setIsClosed: f,
        setIsRemoved: d,
      } = vR(),
      h = G(a.toggle, r),
      p = (m) => {
        if ((t && t(m), o)) {
          o();
          return;
        }
        f(!l), setTimeout(() => d(!u), s);
      };
    return c.jsx("button", {
      "aria-label": "Close",
      onClick: p,
      type: "button",
      className: $(h.base, e),
      ...i,
      children: c.jsx(n, { "aria-hidden": !0, className: h.icon }),
    });
  },
  bR = {
    75: "duration-75",
    100: "duration-100",
    150: "duration-150",
    200: "duration-200",
    300: "duration-300",
    500: "duration-500",
    700: "duration-700",
    1e3: "duration-1000",
  },
  $w = ({
    children: e,
    className: t,
    duration: r = 300,
    theme: n = {},
    ...o
  }) => {
    const [i, a] = x.useState(!1),
      [s, l] = x.useState(!1),
      u = G(ue().toast, n);
    return s
      ? null
      : c.jsx(zw.Provider, {
          value: {
            theme: u,
            duration: r,
            isClosed: i,
            isRemoved: s,
            setIsClosed: a,
            setIsRemoved: l,
          },
          children: c.jsx("div", {
            "data-testid": "flowbite-toast",
            role: "alert",
            className: $(u.root.base, bR[r], i && u.root.closed, t),
            ...o,
            children: e,
          }),
        });
  };
$w.displayName = "Toast";
Fw.displayName = "Toast.Toggle";
Object.assign($w, { Toggle: Fw });
const xR = x.forwardRef(
  (
    {
      checked: e,
      className: t,
      color: r = "blue",
      sizing: n = "md",
      disabled: o,
      label: i,
      name: a,
      onChange: s,
      theme: l = {},
      ...u
    },
    f
  ) => {
    const d = x.useId(),
      h = G(ue().toggleSwitch, l),
      p = () => s(!e),
      m = () => {
        p();
      },
      v = (k) => {
        k.code == "Enter" && k.preventDefault();
      };
    return c.jsxs(c.Fragment, {
      children: [
        a && e
          ? c.jsx("input", {
              ref: f,
              checked: e,
              hidden: !0,
              name: a,
              readOnly: !0,
              type: "checkbox",
              className: "sr-only",
            })
          : null,
        c.jsxs("button", {
          "aria-checked": e,
          "aria-labelledby": "".concat(d, "-flowbite-toggleswitch-label"),
          disabled: o,
          id: "".concat(d, "-flowbite-toggleswitch"),
          onClick: m,
          onKeyDown: v,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: $(h.root.base, h.root.active[o ? "off" : "on"], t),
          ...u,
          children: [
            c.jsx("div", {
              "data-testid": "flowbite-toggleswitch-toggle",
              className: $(
                h.toggle.base,
                h.toggle.checked[e ? "on" : "off"],
                e && h.toggle.checked.color[r],
                h.toggle.sizes[n]
              ),
            }),
            i != null && i.length
              ? c.jsx("span", {
                  "data-testid": "flowbite-toggleswitch-label",
                  id: "".concat(d, "-flowbite-toggleswitch-label"),
                  className: h.root.label,
                  children: i,
                })
              : null,
          ],
        }),
      ],
    });
  }
);
xR.displayName = "ToggleSwitch";
function wR() {
  var u, f, d;
  const e = Dt((h) => h),
    { name: t } = yu(),
    {
      isLoading: r,
      error: n,
      data: o,
      refetch: i,
    } = eo({
      queryKey: ["category", { name: t }],
      queryFn: () =>
        fetch("".concat(Wr, "/category/").concat(t), {
          headers: { Authorization: "Bearer ".concat(e.token) },
        }).then((h) => h.json()),
      enabled: !1,
    });
  if (
    ((document.title = "Talgtna | ".concat(t)),
    x.useEffect(() => {
      i();
    }, [t, i]),
    r)
  )
    return c.jsx("p", { children: "Loading..." });
  if (n)
    return c.jsxs("p", { children: ["An error has occurred: ", n.message] });
  const a = (u = o == null ? void 0 : o.offers) != null ? u : [],
    s = (f = o == null ? void 0 : o.categories) != null ? f : [],
    l = (d = o == null ? void 0 : o.products) != null ? d : [];
  return (
    o != null &&
      o.favorites &&
      l.forEach((h) => {
        o.favorites.find((m) => m.product === h.id) &&
          Object.assign(h, { isFavorite: !0 });
      }),
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(Yv, { offers: a }),
        c.jsx("div", {
          className: "w-full overflow-x-scroll grid place-items-center",
          children: c.jsx("div", {
            className:
              "categories w-full flex items-center gap-2 md:gap-5 px-2 md:px-5 my-3 justify-center",
            children: s.map((h) =>
              c.jsx(
                Ja,
                {
                  href: "/category/".concat(h.name),
                  className: "bg-primary text-nowrap shadow-md",
                  children: h.name,
                },
                h.id
              )
            ),
          }),
        }),
        c.jsx("div", {
          className:
            "products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
          children: l.map((h) =>
            c.jsx(
              Su,
              {
                product: h,
                inFavorites: !1,
                isAuthenticated: e.isAuthenticated,
              },
              h.id
            )
          ),
        }),
      ],
    })
  );
}
function kR(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Uw(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bw(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function SR(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function ER(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z",
        },
        child: [],
      },
    ],
  })(e);
}
function CR({ product: e }) {
  const t = Ke((o) => o.removeFromCart),
    r = Ke((o) => o.incrementQuantity),
    n = Ke((o) => o.decrementQuantity);
  return c.jsx("div", {
    className:
      "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6",
    children: c.jsxs("div", {
      className:
        "space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0",
      children: [
        c.jsx(Qt, {
          to: "/product/".concat(e.id),
          className: "shrink-0 md:order-1",
          children: c.jsx("img", {
            className: "h-20 w-20",
            src: Co + e.image,
            alt: e.name,
          }),
        }),
        c.jsx("label", {
          htmlFor: "counter-input",
          className: "sr-only",
          children: "اختر الكمية:",
        }),
        c.jsxs("div", {
          className:
            "flex items-center justify-between md:order-3 md:justify-end",
          children: [
            c.jsxs("div", {
              className: "flex items-center",
              children: [
                c.jsx("button", {
                  type: "button",
                  onClick: () => n(e.id),
                  id: "decrement-button-4",
                  "data-input-counter-decrement": "counter-input-4",
                  className:
                    "inline-flex  h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700",
                  children: c.jsx(Uw, {}),
                }),
                c.jsx("input", {
                  type: "text",
                  id: "counter-input-4",
                  "data-input-counter": !0,
                  className:
                    "w-10 shrink-0 border-0 bg-transparent text-center text-md font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white",
                  placeholder: "",
                  value: e.quantity,
                  required: !0,
                }),
                c.jsx("button", {
                  type: "button",
                  onClick: () => r(e.id),
                  id: "increment-button-4",
                  "data-input-counter-increment": "counter-input-4",
                  className:
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border  border-primary-300 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700",
                  children: c.jsx(Bw, {}),
                }),
              ],
            }),
            c.jsx("div", {
              className: "text-end md:order-4 md:w-32",
              children: c.jsxs("p", {
                className: "text-base font-bold text-gray-900 dark:text-white",
                children: [e.price, " ج"],
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: "w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md",
          children: [
            c.jsx("a", {
              href: "#",
              className:
                "text-base font-medium text-gray-900 hover:underline dark:text-white",
              children: e.name,
            }),
            c.jsx("div", {
              className: "flex items-center gap-4",
              children: c.jsxs("button", {
                type: "button",
                onClick: () => t(e.id),
                className:
                  "inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500",
                children: [c.jsx(ER, {}), "   حذف"],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const jR = "/talgtna/assets/cart-BuiO4yb9.png";
function NR() {
  const e = Ke((u) => u.cart),
    t = Ke((u) => u.getTotalQuantity()),
    [r, n] = x.useState(0),
    i = Ke((u) => u.discount).value,
    a = 25,
    s = r + a;
  let l = s;
  return (
    i && (l = s - i),
    (document.title = "Talgtna | السلة"),
    x.useEffect(() => {
      n(e.reduce((u, f) => u + f.price * f.quantity, 0));
    }, [e, t]),
    c.jsxs("section", {
      className: "bg-white py-8 antialiased dark:bg-gray-900 md:py-16",
      children: [
        e.length > 0 &&
          c.jsxs("div", {
            className: "mx-auto max-w-screen-xl px-4 2xl:px-0",
            children: [
              c.jsx("h2", {
                className:
                  "text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl",
                children: "عربة التسوق",
              }),
              c.jsxs("div", {
                className:
                  "mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8",
                children: [
                  c.jsx("div", {
                    className:
                      "mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl",
                    children: c.jsx("div", {
                      className: "space-y-6",
                      children: e.map((u) => c.jsx(CR, { product: u }, u.id)),
                    }),
                  }),
                  c.jsx("div", {
                    className:
                      "mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full",
                    children: c.jsxs("div", {
                      className:
                        "space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6",
                      children: [
                        c.jsx("p", {
                          className:
                            "text-xl font-semibold text-gray-900 dark:text-white",
                          children: "ملخص الطلب",
                        }),
                        c.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            c.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                c.jsxs("dl", {
                                  className:
                                    "flex items-center justify-between gap-4",
                                  children: [
                                    c.jsx("dt", {
                                      className:
                                        "text-base font-normal text-gray-500 dark:text-gray-400",
                                      children: "السعر الأصلي",
                                    }),
                                    c.jsxs("dd", {
                                      className:
                                        "text-base font-medium text-gray-900 dark:text-white",
                                      children: [r, " ج"],
                                    }),
                                  ],
                                }),
                                i !== 0 ||
                                  i !== void 0 ||
                                  c.jsxs("dl", {
                                    className:
                                      "flex items-center justify-between gap-4",
                                    children: [
                                      c.jsx("dt", {
                                        className:
                                          "text-base font-normal text-gray-500 dark:text-gray-400",
                                        children: "التوفير",
                                      }),
                                      c.jsxs("dd", {
                                        className:
                                          "text-base font-medium text-green-600",
                                        children: [i, " ج"],
                                      }),
                                    ],
                                  }),
                                c.jsxs("dl", {
                                  className:
                                    "flex items-center justify-between gap-4",
                                  children: [
                                    c.jsx("dt", {
                                      className:
                                        "text-base font-normal text-gray-500 dark:text-gray-400",
                                      children: "توصيل",
                                    }),
                                    c.jsxs("dd", {
                                      className:
                                        "text-base font-medium text-red-600",
                                      children: [a, " ج"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("dl", {
                              className:
                                "flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",
                              children: [
                                c.jsx("dt", {
                                  className:
                                    "text-base font-bold text-gray-900 dark:text-white",
                                  children: "المجموع",
                                }),
                                c.jsxs("dd", {
                                  className:
                                    "text-base font-bold text-gray-900 dark:text-white",
                                  children: [l, " ج"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx(Qt, {
                          to: "/order",
                          className:
                            "flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                          children: "الطلب",
                        }),
                        c.jsxs("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            c.jsx("span", {
                              className:
                                "text-sm font-normal text-gray-500 dark:text-gray-400",
                              children: "أو",
                            }),
                            c.jsxs(Qt, {
                              to: "/",
                              className:
                                "inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500",
                              children: ["مواصلة التسوق ", c.jsx(kR, {})],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        e.length === 0 &&
          c.jsx("div", {
            className: "w-full grid place-items-center",
            children: c.jsxs("div", {
              className:
                "flex items-center justify-center flex-col gap-4 mt-12 w-64 shadow-md border border-gray-200 rounded p-4",
              children: [
                c.jsx("img", {
                  className: "h-40 w-40",
                  src: jR,
                  alt: "empty cart",
                }),
                c.jsx(Qt, {
                  to: "/",
                  className:
                    "flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                  children: "مواصلة التسوق",
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function TR() {
  return (
    (document.title = "Talgtna | الشكوي"),
    c.jsxs("div", {
      className:
        "my-10 mx-auto rounded-md shadow-md w-[95%] md:w-[80%] h-screen flex flex-col items-center justify-center gap-5 bg-white",
      children: [
        c.jsx("h1", {
          className: "text-2xl md:text-3xl font-bold text-primary mb-10",
          children: "سياسة التوصيل والاسترجاع",
        }),
        c.jsx("p", {
          children:
            "1. اكتب رسالتك من خلال البرنامج (تواصل معنا) عند وجود اي خطأ في الطلب او شكوه",
        }),
        c.jsx("p", { children: "2. احضار اصل فاتورة الشراء" }),
        c.jsx("p", { children: "3. توافر المنتج موضوع الشكوي" }),
        c.jsx("p", {
          children: "4. ان يكون طلب الاسترجاع خلال 24 ساعه من تاريخ الطلب",
        }),
        c.jsx("p", {
          children:
            "5. اني يكون تم حفظ المنتج بالطريقة الصحيحة لأن الشركة تخلي مسؤوليتها عن سوء التخزين",
        }),
        c.jsx("h1", {
          className: "text-2xl md:text-3xl font-bold text-primary mb-10",
          children: "نشكركم على حسن تعاونكم معنا",
        }),
      ],
    })
  );
}
function OR() {
  const [e, t] = x.useState(""),
    [r, n] = x.useState(""),
    [o, i] = x.useState(""),
    [a, s] = x.useState("");
  document.title = "Talgtna | تواصل معنا";
  const l = lh(
      async (f) => {
        const d = await fetch("".concat(Wr, "/contact"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(f),
        });
        return (
          t(""),
          n(""),
          i(""),
          s(""),
          d.ok || hr.error("فشل في إرسال الرسالة"),
          d.json()
        );
      },
      {
        onSuccess: () => {
          hr.success("تم إرسال الرسالة بنجاح");
        },
        onError: () => {
          hr.error("فشل في إرسال الرسالة");
        },
      }
    ),
    u = () => {
      l.mutate({ name: e, email: r, phone: o, message: a });
    };
  return c.jsx("div", {
    className: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8",
    children: c.jsxs("div", {
      className: "grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5",
      children: [
        c.jsxs("div", {
          className: "lg:col-span-2 lg:py-12",
          children: [
            c.jsx("p", {
              className: "max-w-xl text-lg",
              children:
                "وفي الوقت نفسه، فإن حقيقة استقلالنا التام عن الشركة المصنعة وعن سيطرة المجموعة الأخرى تمنحك الثقة في أننا سنوصي فقط بما هو مناسب لك.",
            }),
            c.jsx("div", {
              className: "mt-8",
              children: c.jsx("a", {
                href: "tel:01212158465",
                className: "text-2xl font-bold text-primary hover:underline",
                children: "01212158465",
              }),
            }),
          ],
        }),
        c.jsx("div", {
          className: "rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12",
          children: c.jsxs("div", {
            id: "contactForm",
            className: "space-y-4",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "name",
                    children: "الاسم",
                  }),
                  c.jsx("input", {
                    className:
                      "w-full rounded-lg border border-primary p-3 text-sm",
                    placeholder: "الاسم",
                    type: "text",
                    required: !0,
                    id: "name",
                    onChange: (f) => t(f.target.value),
                    value: e,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "email",
                        children: "البريد الالكتروني",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm",
                        placeholder: "البريد الالكتروني",
                        type: "email",
                        required: !0,
                        id: "email",
                        onChange: (f) => n(f.target.value),
                        value: r,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "phone",
                        children: "رقم الهاتف",
                      }),
                      c.jsx("input", {
                        dir: "rtl",
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm",
                        placeholder: "رقم الهاتف",
                        required: !0,
                        type: "tel",
                        id: "phone",
                        onChange: (f) => i(f.target.value),
                        value: o,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "message",
                    children: "الرسالة",
                  }),
                  c.jsx("textarea", {
                    className:
                      "w-full rounded-lg border border-primary p-3 text-sm",
                    placeholder: "الرسالة",
                    required: !0,
                    id: "message",
                    onChange: (f) => s(f.target.value),
                    value: a,
                  }),
                ],
              }),
              c.jsx("div", {
                className: "mt-4",
                children: c.jsxs("button", {
                  type: "submit",
                  onClick: u,
                  className:
                    "w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto flex justify-center items-center gap-5 duration-300 transition-all border hover:border-primary hover:bg-white hover:text-primary",
                  children: [
                    c.jsx("p", { children: "ارسال" }),
                    c.jsx("i", { className: "bx bx-send rotate-180 text-xl" }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function RR() {
  var s;
  const e = Dt((l) => l.token),
    t = Dt((l) => l.isAuthenticated),
    r = Ti();
  t || (hr.error("يجب عليك تسجيل الدخول"), r("/"));
  const {
    isLoading: n,
    error: o,
    data: i,
  } = eo("favorites", () =>
    fetch("".concat(Wr, "/user/favorites"), {
      headers: { Authorization: "Bearer ".concat(e) },
    }).then((l) => l.json())
  );
  document.title = "Talgtna | المفضلات";
  const a = (s = i == null ? void 0 : i.products) != null ? s : [];
  return n
    ? c.jsx("p", { children: "Loading..." })
    : o
    ? c.jsxs("p", { children: ["An error has occurred: ", o.message] })
    : c.jsxs(c.Fragment, {
        children: [
          a.length === 0 &&
            c.jsx("div", {
              className: "w-full h-screen grid place-items-center",
              children: c.jsx("p", { children: "لا يوجد منتجات في المفضلات" }),
            }),
          c.jsx("div", {
            className:
              "products my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
            children: a.map((l) =>
              c.jsx(
                Su,
                { product: l, inFavorites: !0, isAuthenticated: t },
                l.id
              )
            ),
          }),
        ],
      });
}
function PR(e) {
  return e.soon === 1
    ? c.jsxs("div", {
        className: "bg-white h-auto shadow-md rounded-md w-full relative",
        children: [
          c.jsx("div", {
            className:
              "absolute w-full h-full bg-black/50 rounded-md grid place-items-center",
            children: c.jsx("p", {
              className: "text-primary font-bold text-3xl",
              children: "قريبا",
            }),
          }),
          c.jsx("img", {
            src: Co + e.image,
            alt: e.name,
            className: "w-full h-[115px] rounded-md",
          }),
          c.jsx("p", {
            className: "text-center my-1 text-primary",
            children: e.name,
          }),
        ],
      })
    : c.jsxs(
        Qt,
        {
          to: "/company/".concat(e.name),
          className: "bg-white h-auto shadow-md rounded-md w-full",
          children: [
            c.jsx("img", {
              src: Co + e.image,
              alt: e.name,
              className: "w-full h-[115px] rounded-md",
            }),
            c.jsx("p", {
              className: "text-center my-1 text-primary",
              children: e.name,
            }),
          ],
        },
        e.id
      );
}
function _R() {
  var a, s, l;
  const {
      isLoading: e,
      error: t,
      data: r,
    } = eo("home", () => fetch("".concat(Wr)).then((u) => u.json())),
    n = (a = r == null ? void 0 : r.categories) != null ? a : [],
    o = (s = r == null ? void 0 : r.companies) != null ? s : [],
    i = (l = r == null ? void 0 : r.offers) != null ? l : [];
  return e
    ? c.jsx("p", { children: "Loading..." })
    : t
    ? c.jsxs("p", { children: ["An error has occurred: ", t.message] })
    : c.jsxs(c.Fragment, {
        children: [
          c.jsx(Yv, { offers: i }),
          c.jsxs("main", {
            children: [
              c.jsx("div", {
                className: "w-full overflow-x-scroll grid place-items-center",
                children: c.jsx("div", {
                  className:
                    "categories w-full flex items-center gap-2 md:gap-5 px-2 md:px-5 my-3 justify-center",
                  children: n.map((u) =>
                    c.jsx(
                      Ja,
                      {
                        href: "/category/".concat(u.name),
                        className: "bg-primary text-nowrap shadow-md",
                        children: u.name,
                      },
                      u.id
                    )
                  ),
                }),
              }),
              c.jsx("div", {
                className:
                  "companies my-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 px-2 md:px-5 place-items-center",
                children: o.map((u) => c.jsx(PR, { ...u }, u.id)),
              }),
            ],
          }),
        ],
      });
}
function MR() {
  const e = Ke((y) => y.cart),
    t = Dt((y) => y),
    r = Dt((y) => y.token),
    n = Dt((y) => y.login),
    o = Ke((y) => y.getTotalQuantity()),
    i = Ke((y) => y.clearCart),
    [a, s] = x.useState(0),
    l = Ti(),
    u = Ke((y) => y.discount),
    f = a + 25,
    d = u.value,
    h = f - d,
    [p, m] = x.useState({
      name: "",
      phone: "",
      spare_phone: "",
      street: "",
      floor: "",
      building: "",
      city: "",
      method: "",
    });
  x.useEffect(() => {
    const y = localStorage.getItem("order_info");
    if (y)
      try {
        const g = JSON.parse(y);
        m((b) => ({ ...b, ...g }));
      } catch (g) {
        console.error("Failed to parse saved order info", g);
      }
  }, []),
    (document.title = "Talgtna | الطلب");
  const v = lh(
    async (y) => {
      const g = { "Content-Type": "application/json" };
      t.isAuthenticated && (g.Authorization = "Bearer ".concat(r));
      const b = await fetch("".concat(Wr, "/order"), {
        method: "POST",
        headers: g,
        body: JSON.stringify(y),
      });
      return b.ok || hr.error("فشل في الطلب"), b.json();
    },
    {
      onSuccess: (y) => {
        i(),
          n(y.token, y.favorites),
          l("/ordersuccess/" + y.order),
          hr.success("تم إرسال الطلب بنجاح");
      },
    }
  );
  x.useEffect(() => {
    e.length === 0 && l("/"),
      s(e.reduce((y, g) => y + g.price * g.quantity, 0));
  }, [e, o]);
  const k = (y) => {
    y.preventDefault();
    const g = new FormData(y.currentTarget),
      b = {
        name: g.get("name"),
        phone: g.get("phone"),
        spare_phone: g.get("spare_phone"),
        street: g.get("street"),
        floor: g.get("floor"),
        building: g.get("building"),
        city: g.get("city"),
        method: g.get("method"),
        cart: e,
        discount: u,
        total: h,
      };
    g.get("save_order_data") === "on" &&
      localStorage.setItem(
        "order_info",
        JSON.stringify({
          phone: g.get("phone"),
          spare_phone: g.get("spare_phone"),
          street: g.get("street"),
          floor: g.get("floor"),
          building: g.get("building"),
          city: g.get("city"),
          method: g.get("method"),
        })
      ),
      v.mutate(b);
  };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("section", {
        className: "grid place-items-center py-7",
        children: c.jsxs("div", {
          id: "checkout",
          className:
            "mb-8 flex flex-col w-[95%] md:w-4/5 justify-end bg-white p-8 lg:p-12 rounded shadow",
          children: [
            c.jsx("div", {
              className: "w-full",
              children: c.jsxs("dl", {
                className: "space-y-0.5 text-sm text-gray-700",
                children: [
                  c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx("dt", { children: "المجموع الفرعي" }),
                      c.jsxs("dd", { id: "subtotal", children: [a, " ج.م"] }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx("dt", { children: "توصيل" }),
                      c.jsx("dd", { children: "25 ج.م" }),
                    ],
                  }),
                  d &&
                    c.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        c.jsx("dt", { children: "خصم" }),
                        c.jsxs("dd", {
                          id: "discountValue",
                          children: [d, " ج.م"],
                        }),
                      ],
                    }),
                  c.jsxs("div", {
                    className: "flex justify-between !text-base font-medium",
                    children: [
                      c.jsx("dt", { children: "إجمالي" }),
                      c.jsxs("dd", {
                        id: "total",
                        children: [d ? h : f, " ج.م"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsxs("form", {
              id: "couponForm",
              className: "hidden w-full mt-8  grid-cols-3 gap-4",
              children: [
                c.jsx("input", {
                  type: "text",
                  name: "coupon",
                  id: "coupon",
                  placeholder: "كود الخصم",
                  className:
                    "rounded-lg border border-primary h-9 p-3 col-span-2",
                }),
                c.jsx("button", {
                  className: "rounded-lg bg-primary text-white h-9 px-4",
                  type: "submit",
                  children: "تأكيد",
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        className: "grid place-items-center py-7",
        children: c.jsx("div", {
          className:
            "rounded-lg bg-white w-[95%] md:w-4/5 p-8 shadow-lg lg:col-span-3 lg:p-12",
          children: c.jsxs("form", {
            id: "orderForm",
            onSubmit: (y) => k(y),
            className: "space-y-4",
            children: [
              t.isAuthenticated
                ? null
                : c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "name",
                        children: "الاسم",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg p-3 text-sm border border-primary",
                        placeholder: "الاسم",
                        type: "text",
                        id: "name",
                        required: !0,
                        name: "name",
                      }),
                    ],
                  }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "phone",
                        children: "رقم الهاتف",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-end",
                        placeholder: "رقم الهاتف",
                        type: "tel",
                        id: "phone",
                        required: !0,
                        name: "phone",
                        value: p.phone,
                        onChange: (y) => m({ ...p, phone: y.target.value }),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "spare_phone",
                        children: "رقم هاتف احتياطي",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-end",
                        placeholder: "رقم هاتف احتياطي",
                        type: "tel",
                        id: "spare_phone",
                        name: "spare_phone",
                        value: p.spare_phone,
                        onChange: (y) =>
                          m({ ...p, spare_phone: y.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "street",
                        children: "شارع",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-start",
                        placeholder: "شارع",
                        type: "text",
                        id: "street",
                        required: !0,
                        name: "street",
                        value: p.street,
                        onChange: (y) => m({ ...p, street: y.target.value }),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className: "sr-only",
                        htmlFor: "building",
                        children: "عماره",
                      }),
                      c.jsx("input", {
                        className:
                          "w-full rounded-lg border border-primary p-3 text-sm text-start",
                        placeholder: "عماره",
                        type: "text",
                        id: "building",
                        required: !0,
                        name: "building",
                        value: p.building,
                        onChange: (y) => m({ ...p, building: y.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "sr-only",
                    htmlFor: "floor",
                    children: "طابق",
                  }),
                  c.jsx("input", {
                    className:
                      "w-full rounded-lg p-3 text-sm border border-primary",
                    placeholder: "طابق",
                    type: "text",
                    id: "floor",
                    required: !0,
                    name: "floor",
                    value: p.floor,
                    onChange: (y) => m({ ...p, floor: y.target.value }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "cities",
                        className: "block text-sm font-medium text-gray-900",
                        children: "المدن",
                      }),
                      c.jsxs("select", {
                        required: !0,
                        id: "cities",
                        name: "city",
                        className:
                          "mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm",
                        value: p.city,
                        onChange: (y) => m({ ...p, city: y.target.value }),
                        children: [
                          c.jsx("option", {
                            value: "",
                            children: "أختر المدينه",
                          }),
                          c.jsx("option", {
                            value: "الشروق",
                            children: "الشروق",
                          }),
                          c.jsx("option", { value: "بدر", children: "بدر" }),
                          c.jsx("option", {
                            value: "مدينتي",
                            children: "مدينتي",
                          }),
                          c.jsx("option", {
                            value: "المستقبل",
                            children: "المستقبل",
                          }),
                          c.jsx("option", {
                            value: "كمبوند البروج",
                            children: "كمبوند البروج",
                          }),
                          c.jsx("option", {
                            value: "العبور",
                            children: "العبور",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        htmlFor: "payment",
                        className: "block text-sm font-medium text-gray-900",
                        children: "طريقة الدفع",
                      }),
                      c.jsxs("select", {
                        required: !0,
                        name: "method",
                        id: "payment",
                        className:
                          "mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm",
                        value: p.method,
                        onChange: (y) => m({ ...p, method: y.target.value }),
                        children: [
                          c.jsx("option", {
                            value: "",
                            children: "اختار طريقة الدفع",
                          }),
                          c.jsx("option", {
                            value: "cash_on_delivery",
                            children: "الدفع عند الاستلام",
                          }),
                          c.jsx("option", {
                            value: "digital_wallet",
                            children:
                              "الدفع باستخدام المحفظة الرقمية عند التسليم",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.isAuthenticated &&
                c.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    c.jsx("label", {
                      htmlFor: "save_order_data",
                      className: "block text-sm font-medium text-gray-900",
                      children: "حفظ البينات",
                    }),
                    c.jsx("input", {
                      type: "checkbox",
                      name: "save_order_data",
                      id: "save_order_data",
                    }),
                  ],
                }),
              c.jsx("div", {
                className: "mt-4",
                children: c.jsx("button", {
                  type: "submit",
                  className:
                    "inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto",
                  children: "اطلب الان",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function LR({ order: e }) {
  const t = JSON.parse(e.discount);
  return c.jsx("div", {
    className:
      " w-11/12 md:w-4/5 flow-root shadow-lg bg-white rounded-lg border border-gray-100 py-3 mx-5 sm:mx-14",
    children: c.jsxs("dl", {
      className: "-my-3 divide-gray-100 text-sm",
      children: [
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "رقم الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2",
              children: e.id.substring(0, 8),
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "تاريخ الطلب",
            }),
            c.jsx("dd", {
              dir: "ltr",
              className: "text-gray-700 text-end sm:col-span-2",
              children: e.created_at,
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "طريقة الدفع",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children:
                e.method === "creditcard_on_delivery" ? "Credit Card" : "Cash",
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "منتجات الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2",
              children: c.jsxs("table", {
                className: "w-full",
                children: [
                  c.jsx("thead", {
                    children: c.jsxs("tr", {
                      className: "grid grid-cols-4",
                      children: [
                        c.jsx("th", { children: "منتج" }),
                        c.jsx("th", { children: "سعر" }),
                        c.jsx("th", { children: "كمية" }),
                        c.jsx("th", { children: "المجموع" }),
                      ],
                    }),
                  }),
                  c.jsx("tbody", {
                    className: "divide-y",
                    children: e.products.map((r) =>
                      c.jsxs(
                        "tr",
                        {
                          className: "grid grid-cols-4 place-items-center",
                          children: [
                            c.jsx("td", {
                              className: "text-center sm:hidden",
                              children:
                                r.name.length <= 20
                                  ? r.name
                                  : r.name.substring(0, 18) + "...",
                            }),
                            c.jsx("td", {
                              className: "text-center hidden sm:block",
                              children: r.name,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.price,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.quantity,
                            }),
                            c.jsx("td", {
                              className: "text-center",
                              children: r.quantity * r.price,
                            }),
                          ],
                        },
                        r.id
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "إجمالي الطلب",
            }),
            t.code !== ""
              ? c.jsxs("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: [e.total - t.value, " ج.م"],
                })
              : c.jsxs("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: [e.total, " ج.م"],
                }),
          ],
        }),
        t.code !== ""
          ? c.jsxs("div", {
              className:
                "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
              children: [
                c.jsx("dt", {
                  className: "font-bold  text-primary",
                  children: "قسيمة",
                }),
                c.jsx("dd", {
                  className: "text-gray-700 sm:col-span-2",
                  children: t.code,
                }),
              ],
            })
          : null,
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "الطلب مدفوع",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children: e.paid == 1 ? "نعم" : "لا",
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",
          children: [
            c.jsx("dt", {
              className: "font-bold  text-primary",
              children: "تم تسليم الطلب",
            }),
            c.jsx("dd", {
              className: "text-gray-700 sm:col-span-2 capitalize",
              children: e.delivered == 1 ? "نعم" : "لا",
            }),
          ],
        }),
      ],
    }),
  });
}
function DR() {
  const e = Dt((a) => a.token),
    t = Dt((a) => a.isAuthenticated),
    r = Ti();
  t || (hr.error("يجب عليك تسجيل الدخول"), r("/"));
  const {
    isLoading: n,
    error: o,
    data: i,
  } = eo("history", () =>
    fetch("".concat(Wr, "/order/history"), {
      headers: { Authorization: "Bearer ".concat(e) },
    }).then((a) => a.json())
  );
  return n
    ? c.jsx("p", { children: "Loading..." })
    : o
    ? c.jsxs("p", { children: ["An error has occurred: ", o.message] })
    : ((document.title = "Talgtna | سجل الطلبات"),
      (i == null ? void 0 : i.orders.length) == 0
        ? c.jsx("div", {
            className: "w-full h-screen grid place-items-center",
            children: c.jsxs("div", {
              className:
                "bg-white w-11/12 md:w-5/6 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center",
              children: [
                c.jsx("i", {
                  className: "bx bxs-package text-primary text-[200px]",
                }),
                c.jsx("p", {
                  className: "text-center text-primary",
                  children: "لا يوجد طلبات",
                }),
              ],
            }),
          })
        : c.jsx(c.Fragment, {
            children: c.jsx("div", {
              className: "w-full h-auto grid place-items-center my-7 gap-5",
              children:
                i == null
                  ? void 0
                  : i.orders.map((a) => c.jsx(LR, { order: a }, a.id)),
            }),
          }));
}
function IR() {
  const { order: e } = yu();
  return (
    (document.title = "Talgtna | رقم الطلب ".concat(e)),
    c.jsx("div", {
      className:
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90vh] grid place-items-center",
      children: c.jsx("article", {
        className: "rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8",
        children: c.jsxs("div", {
          className: "flex items-center sm:gap-8",
          children: [
            c.jsx("div", {
              className:
                "hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-primary",
              "aria-hidden": "true",
              children: c.jsx("i", {
                className: "text-primary",
                children: "تم",
              }),
            }),
            c.jsx("div", {
              children: c.jsx("h3", {
                className: "mt-4 text-lg font-medium sm:text-xl",
                children: c.jsxs("a", {
                  className: "hover:underline",
                  children: ["تم إنشاء الطلب بنجاح رقم الطلب هو ( ", e, " )"],
                }),
              }),
            }),
          ],
        }),
      }),
    })
  );
}
function AR() {
  var k;
  const { id: e } = yu(),
    t = Dt((y) => y),
    r = Ke((y) => y.cart),
    n = Ke((y) => y.addToCart),
    o = Ke((y) => y.incrementQuantity),
    i = Ke((y) => y.decrementQuantity),
    [a, s] = x.useState(1),
    l = Ke((y) => y.getTotalQuantity());
  x.useEffect(() => {
    const y = parseInt(e),
      g = r.find((b) => b.id === y);
    g && s(g.quantity);
  }, [r, e, l]);
  const u = () => {
      const y = parseInt(e);
      r.find((b) => b.id === y) && o(m.id), a < 20 && s(a + 1);
    },
    f = () => {
      const y = parseInt(e);
      r.find((b) => b.id === y) && i(m.id), a > 1 && s(a - 1);
    },
    {
      isLoading: d,
      error: h,
      data: p,
    } = eo("home", () =>
      fetch("".concat(Wr, "/products/").concat(e)).then((y) => y.json())
    );
  if (d) return c.jsx("p", { children: "Loading..." });
  if (h)
    return c.jsxs("p", { children: ["An error has occurred: ", h.message] });
  const m = (k = p == null ? void 0 : p.product) != null ? k : {};
  document.title = "Talgtna | ".concat(m.name);
  const v = {
    id: m.id,
    quantity: a,
    name: m.name,
    image: m.image,
    price: m.price,
  };
  return c.jsx(c.Fragment, {
    children: c.jsx("div", {
      className: "grid place-items-center ",
      children: c.jsxs(
        "div",
        {
          className:
            "product relative w-11/12 md:w-10/12 my-5 rounded p-2 shadow bg-white grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 place-items-center",
          children: [
            c.jsxs("section", {
              id: "productDitails",
              className: "flex flex-col gap-2 md:gap-5",
              children: [
                c.jsx("h1", {
                  className: "text-2xl text-primary",
                  children: m.name,
                }),
                c.jsx("p", {
                  className: "text-gray-400",
                  children: m.description,
                }),
                m.offer > 0
                  ? c.jsxs("div", {
                      className: "container",
                      children: [
                        c.jsxs("p", {
                          className: "line-through text-gray-500",
                          children: [m.price + m.offer, " ج"],
                        }),
                        c.jsxs("p", {
                          className: "text-primary font-bold",
                          children: [m.price, " ج"],
                        }),
                      ],
                    })
                  : c.jsxs("p", { children: [m.price, " ج"] }),
                c.jsxs("div", {
                  className: "cart grid gap-2 md:gap-5",
                  children: [
                    c.jsxs("div", {
                      className:
                        "buttons flex border border-primary w-full md:w-64 items-center justify-between h-9 rounded gap-2 md:gap-5",
                      children: [
                        c.jsx("button", {
                          onClick: u,
                          className:
                            "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                          children: c.jsx(Bw, {}),
                        }),
                        c.jsx("p", { className: "Quantity", children: a }),
                        c.jsx("button", {
                          onClick: f,
                          className:
                            "w-full text-xl grid place-items-center cursor-pointer h-full duration-300 hover:bg-primary hover:text-white transition ease-in-out",
                          children: c.jsx(Uw, {}),
                        }),
                      ],
                    }),
                    c.jsx("button", {
                      onClick: () => n(v),
                      className:
                        "w-full md:w-64 h-9 rounded bg-primary text-white",
                      children: "اضافة الى السلة",
                    }),
                    t.token
                      ? c.jsx("button", {
                          className:
                            "absolute top-0 left-0 w-11 h-11 bg-primary text-white rounded grid place-items-center shadow-xl",
                          children: c.jsx(SR, {}),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            c.jsx("section", {
              id: "productImage ",
              className:
                "grid place-items-center w-full row-start-1 md:col-start-2",
              children: c.jsx("img", {
                src: "".concat(Co).concat(m.image),
                alt: m.name,
                className: "w-full md:w-[398px] rounded shadow",
              }),
            }),
          ],
        },
        m.id
      ),
    }),
  });
}
function zR() {
  var l, u;
  const e = Dt((f) => f),
    { name: t } = yu(),
    {
      isLoading: r,
      error: n,
      data: o,
      refetch: i,
    } = eo("company", () =>
      fetch("".concat(Wr, "/company/").concat(t), {
        headers: { Authorization: "Bearer ".concat(e.token) },
      }).then((f) => f.json())
    );
  if (((document.title = "Talgtna | ".concat(t)), r))
    return c.jsx("p", { children: "Loading..." });
  if (n)
    return c.jsxs("p", { children: ["An error has occurred: ", n.message] });
  const a = (l = o == null ? void 0 : o.company) != null ? l : {},
    s = (u = o == null ? void 0 : o.products) != null ? u : [];
  return (
    o != null &&
      o.favorites &&
      s.forEach((f) => {
        o.favorites.find((h) => h.product === f.id) &&
          Object.assign(f, { isFavorite: !0 });
      }),
    c.jsxs(c.Fragment, {
      children: [
        c.jsxs("div", {
          className:
            "company my-3 flex flex-col sm:flex-row gap-5 bg-white rounded shadow items-center sm:items-start p-4",
          children: [
            c.jsx("img", {
              src: "".concat(Co).concat(a.image),
              alt: a.name,
              className: "rounded w-1/2 md:w-[225px] shadow",
            }),
            c.jsx("h1", {
              className: "text-2xl font-bold mt-3 text-primary text-center",
              children: a.name,
            }),
          ],
        }),
        c.jsx("div", {
          className:
            "products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
          children: s.map((f) =>
            c.jsx(
              Su,
              {
                product: f,
                inFavorites: !1,
                refetch: i,
                isAuthenticated: e.isAuthenticated,
              },
              f.id
            )
          ),
        }),
      ],
    })
  );
}
function FR({ coupon: e }) {
  const t = Ke((r) => r.setDiscount);
  return c.jsxs("div", {
    className: "w-11/12 md:w-5/6 relative",
    children: [
      c.jsxs("div", {
        className:
          "bg-white shadow-md h-32 rounded mb-4 grid place-items-center grid-cols-3 grid-rows-1",
        children: [
          c.jsx("div", {
            className:
              "body col-span-2 bg-primary w-full h-full grid place-items-center",
            children: c.jsx("h1", {
              className: "text-white text-center",
              children: e.code,
            }),
          }),
          c.jsxs("h1", {
            className: "col-span-1 rotate-90",
            children: [e.value, " EGP"],
          }),
        ],
      }),
      c.jsx("button", {
        onClick: () => t(e.code, e.value),
        className:
          "bg-primary text-white absolute h-10 w-24 rounded -top-10 left-0 cursor-pointer",
        children: "استخدام",
      }),
    ],
  });
}
function $R() {
  document.title = "Talgtna | كوبونات";
  const e = Dt((s) => s.token),
    t = Dt((s) => s.isAuthenticated),
    r = Ti();
  t || (hr.error("يجب عليك تسجيل الدخول"), r("/"));
  const {
    isLoading: n,
    error: o,
    data: i,
  } = eo("coupons", () =>
    fetch("".concat(Wr, "/user/coupons"), {
      headers: { Authorization: "Bearer ".concat(e) },
    }).then((s) => s.json())
  );
  if (n) return c.jsx("p", { children: "Loading..." });
  if (o)
    return c.jsxs("p", { children: ["An error has occurred: ", o.message] });
  if ((i == null ? void 0 : i.coupons.length) == 0)
    return c.jsx("div", {
      className: "w-full h-screen grid place-items-center",
      children: c.jsxs("div", {
        className:
          "bg-white w-11/12 md:w-5/6 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center",
        children: [
          c.jsx("i", { className: "bx bxs-package text-primary text-[200px]" }),
          c.jsx("p", {
            className: "text-center text-primary",
            children: "لا يوجد كوبونات",
          }),
        ],
      }),
    });
  const a = i == null ? void 0 : i.coupons;
  return c.jsx(c.Fragment, {
    children: c.jsx("div", {
      className: "w-full h-screen grid place-items-center my-5",
      children: a == null ? void 0 : a.map((s) => c.jsx(FR, { coupon: s })),
    }),
  });
}
const UR = "/talgtna/assets/logo-1IH4SuYE.png";
function BR(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "ellipse",
        attr: {
          transform: "rotate(-1.057 159.995 423.97) scale(.99997)",
          cx: "160",
          cy: "424",
          rx: "24",
          ry: "24",
        },
        child: [],
      },
      {
        tag: "ellipse",
        attr: {
          transform: "matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)",
          cx: "384.5",
          cy: "424",
          rx: "24",
          ry: "24",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function HR(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z",
        },
        child: [],
      },
    ],
  })(e);
}
function WR(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function Dc(e) {
  return xr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function QR() {
  const [e, t] = x.useState(!1),
    [r, n] = x.useState(!1),
    [o, i] = x.useState(""),
    a = Dt((d) => d.isAuthenticated),
    s = Ke((d) => d.getTotalQuantity()),
    l = Dt((d) => d.favorites),
    u = Ti(),
    f = (d) => {
      d.preventDefault(), o && (n(!1), i(""), u("/search?query=".concat(o)));
    };
  return c.jsxs("nav", {
    className:
      "relative h-14 w-full bg-white shadow-sm flex items-center justify-between px-2 md:px-6 gap-5",
    children: [
      c.jsxs("div", {
        className: "flex items-center gap-2 md:gap-5",
        children: [
          c.jsx("button", {
            id: "menuBtn",
            onClick: () => t(!e),
            children: c.jsx(WR, { className: "text-3xl" }),
          }),
          c.jsxs(Qt, {
            onClick: () => t(!1),
            to: "/cart",
            className: "cart relative",
            children: [
              s > 0
                ? c.jsx(Hl, {
                    className:
                      "absolute -top-2 -right-2 bg-primary text-white font-bold",
                    children: s,
                  })
                : null,
              c.jsx(BR, { className: "text-3xl" }),
              c.jsx("p", {
                className: "text-3xl sr-only",
                children: "سلة الشراء",
              }),
            ],
          }),
          a
            ? c.jsxs(Qt, {
                onClick: () => t(!1),
                to: "/favorites",
                className: "relative",
                children: [
                  c.jsx(HR, { className: "text-3xl" }),
                  l > 0
                    ? c.jsx(Hl, {
                        className:
                          "absolute -top-2 -right-2 bg-primary text-white font-bold",
                        children: l,
                      })
                    : null,
                  c.jsx("p", {
                    className: "text-3xl sr-only",
                    children: "المفضلة",
                  }),
                ],
              })
            : null,
          c.jsx("button", {
            id: "searchBtn",
            className: "md:hidden",
            onClick: () => n(!r),
            children: c.jsx(Dc, { className: "text-3xl" }),
          }),
          c.jsxs("form", {
            action: "/search",
            className: "hidden md:block relative w-[60%]",
            onSubmit: (d) => f(d),
            children: [
              c.jsx("input", {
                type: "search",
                name: "query",
                placeholder: "ابحث عن منتجاتك ...",
                className:
                  "w-full h-full border border-primary rounded-md px-3 py-1",
                value: o,
                onChange: (d) => i(d.target.value),
              }),
              c.jsx("button", {
                type: "submit",
                className:
                  "absolute bg-primary top-1/2 -translate-y-1/2 w-11 left-0 h-full rounded-l-md flex items-center justify-center",
                children: c.jsx(Dc, {
                  className: "text-3xl text-white text-center",
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsx(Qt, {
        onClick: () => t(!1),
        to: "/",
        className: "logo h-full",
        children: c.jsx("img", {
          src: UR,
          alt: "logo",
          className: " w-30 h-full",
        }),
      }),
      c.jsxs("div", {
        className:
          "menu absolute bg-white h-[90vh] w-[250px] top-[105%] rounded shadow-xl z-50 right-0 flex flex-col gap-4 p-4 duration-300 transition-all ".concat(
            e ? "translate-x-0" : " translate-x-[250px]"
          ),
        children: [
          c.jsx(Qt, {
            onClick: () => t(!1),
            to: "/",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "الصفحة الرئيسية",
          }),
          a
            ? c.jsx(Qt, {
                onClick: () => t(!1),
                to: "/order/history",
                className:
                  "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
                children: "سجل الطلبات",
              })
            : null,
          c.jsx(Qt, {
            onClick: () => t(!1),
            to: "/contact",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "تواصل معنا",
          }),
          c.jsx(Qt, {
            onClick: () => t(!1),
            to: "/about",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "معلومات عنا",
          }),
          c.jsx(Qt, {
            onClick: () => t(!1),
            to: "/complaint",
            className:
              "w-full py-2 duration-300 hover:bg-primary hover:pr-1 hover:text-white rounded",
            children: "الشكوي",
          }),
        ],
      }),
      c.jsx("div", {
        className: "h-14 bg-white duration-300 w-full absolute "
          .concat(
            r ? "z-10" : "-z-10",
            " left-0 top-[56px] shadow-md grid place-items-center "
          )
          .concat(r ? "translate-y-0" : "translate-y-[-100%]"),
        children: c.jsxs("form", {
          action: "/search",
          className: "relative w-full",
          onSubmit: (d) => f(d),
          children: [
            c.jsx("input", {
              type: "search",
              name: "query",
              placeholder: "ابحث عن منتجاتك ...",
              className:
                "w-full h-full border border-primary rounded-md px-3 py-1",
              value: o,
              onChange: (d) => i(d.target.value),
            }),
            c.jsx("button", {
              type: "submit",
              className:
                "absolute bg-primary top-1/2 -translate-y-1/2 w-11 left-0 h-full rounded-l-md flex items-center justify-center",
              children: c.jsx(Dc, {
                className: "text-3xl text-white text-center",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function VR() {
  var s;
  const [e, t] = x.useState(
      new URLSearchParams(window.location.search).get("query") || ""
    ),
    r = Dt((l) => l);
  x.useEffect(() => {
    t(new URLSearchParams(window.location.search).get("query") || "");
  }, []);
  const {
      isLoading: n,
      error: o,
      data: i,
    } = eo(
      ["search", e],
      () =>
        fetch("".concat(Wr, "/products/search"), {
          method: "POST",
          headers: {
            Authorization: "Bearer ".concat(r.token),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: e }),
        }).then((l) => l.json()),
      { staleTime: 1 / 0, refetchOnWindowFocus: !1, refetchOnReconnect: !1 }
    ),
    a = (s = i == null ? void 0 : i.products) != null ? s : [];
  return (
    i != null &&
      i.favorites &&
      a.forEach((l) => {
        i.favorites.find((f) => f.product === l.id) &&
          Object.assign(l, { isFavorite: !0 });
      }),
    a.length === 0
      ? c.jsx("main", {
          children: c.jsx("h1", { children: "No products found" }),
        })
      : n
      ? c.jsx("p", { children: "Loading..." })
      : o
      ? c.jsxs("p", { children: ["An error has occurred: ", o.message] })
      : c.jsxs("main", {
          className: "grid place-items-center",
          children: [
            c.jsxs("h1", { children: ["تم البحث عن: ", e] }),
            c.jsx("div", {
              className:
                "products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5",
              children: a.map((l) =>
                c.jsx(
                  Su,
                  {
                    product: l,
                    inFavorites: !1,
                    isAuthenticated: r.isAuthenticated,
                  },
                  l.id
                )
              ),
            }),
          ],
        })
  );
}
function qR() {
  const e = Ke((r) => r),
    t = Ka().pathname;
  return t === "/cart" || t === "/order"
    ? null
    : c.jsxs("div", {
        className:
          "fixed bottom-10 right-4 z-30 bg-white p-3 shadow-lg rounded flex flex-col gap-3",
        children: [
          c.jsxs("p", {
            children: ["عدد المنتجات في سلة التسوق: ", e.getTotalQuantity()],
          }),
          c.jsx(Ja, {
            href: "/cart",
            className: "bg-primary font-bold",
            children: "انتقل إلى عربة التسوق لإكمال الطلب",
          }),
        ],
      });
}
const KR = new hE();
function YR() {
  const e = Dt((n) => n),
    t = Ke((n) => n),
    r = t.getTotalQuantity();
  return (
    e.initlize(),
    t.initlize(),
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(QR, {}),
        c.jsxs("div", {
          className: " max-w-screen-2xl mx-auto xl:px-8",
          children: [r > 0 ? c.jsx(qR, {}) : null, c.jsx(N2, {})],
        }),
      ],
    })
  );
}
const GR = D2([
  {
    path: "/",
    element: c.jsx(YR, {}),
    children: [
      { index: !0, element: c.jsx(_R, {}) },
      { path: "company/:name", element: c.jsx(zR, {}) },
      { path: "category/:name", element: c.jsx(wR, {}) },
      { path: "contact", element: c.jsx(OR, {}) },
      { path: "about", element: c.jsx(EE, {}) },
      { path: "complaint", element: c.jsx(TR, {}) },
      { path: "products/:id", element: c.jsx(AR, {}) },
      { path: "order", element: c.jsx(MR, {}) },
      { path: "ordersuccess/:order", element: c.jsx(IR, {}) },
      { path: "order/history", element: c.jsx(DR, {}) },
      { path: "favorites", element: c.jsx(RR, {}) },
      { path: "coupons", element: c.jsx($R, {}) },
      { path: "cart", element: c.jsx(NR, {}) },
      { path: "search", element: c.jsx(VR, {}) },
    ],
  },
]);
function XR() {
  return c.jsxs(bE, {
    client: KR,
    children: [
      c.jsx(IN, { position: "bottom-right", expand: !1, richColors: !0 }),
      c.jsx(W2, { router: GR }),
    ],
  });
}
Ic.createRoot(document.getElementById("root")).render(
  c.jsx(V.StrictMode, { children: c.jsx(XR, {}) })
);
export { JR as __vite_legacy_guard };
