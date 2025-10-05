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
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let o = {};
    const c = (e) => i(e, t),
      f = { module: { uri: t }, exports: o, require: c };
    s[t] = Promise.all(n.map((e) => f[e] || c(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "talgtna/assets/index-BMdE5akr.js", revision: null },
        { url: "talgtna/assets/index-Bq3c2WoQ.css", revision: null },
        {
          url: "talgtna/frontend/index.html",
          revision: "1677da26defb4d8dd7fc206cf29cf2bf",
        },
        { url: "registerSW.js", revision: "cee46e7419a52c7c172b57eea3d50c1f" },
        {
          url: "manifest.webmanifest",
          revision: "3a6fbf3e6a152e9e8e07c21cf3493563",
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
