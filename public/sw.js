if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const l =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[l]) return;
    let t = {};
    const o = (e) => i(e, l),
      d = { module: { uri: l }, exports: t, require: o };
    s[l] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "talgtna/assets/index-5mvvWGw8.css", revision: null },
        { url: "talgtna/assets/index-DrEIi9Ki.js", revision: null },
        { url: "talgtna/assets/index-legacy-jdQ8YuXp.js", revision: null },
        { url: "talgtna/assets/polyfills-legacy-B0mWexPD.js", revision: null },
        {
          url: "talgtna/index.html",
          revision: "6d8545b6c3448a89ed851a4863232550",
        },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "manifest.webmanifest",
          revision: "dab643ef016a5f87d25ea8d63b726c69",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(
        e.createHandlerBoundToURL("talgtna/frontend/index.html")
      )
    );
});
