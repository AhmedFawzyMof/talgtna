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
    const f = (e) => i(e, t),
      l = { module: { uri: t }, exports: o, require: f };
    s[t] = Promise.all(n.map((e) => l[e] || f(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "talgtna/assets/index-BmlAQuv5.js", revision: null },
        { url: "talgtna/assets/index-WqOB3CH3.css", revision: null },
        {
          url: "talgtna/frontend/index.html",
          revision: "e2efe4f8fd9d7fae8f6769218527b5f4",
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
