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
      f = { module: { uri: l }, exports: t, require: o };
    s[l] = Promise.all(n.map((e) => f[e] || o(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-BIasp25M.js", revision: null },
        { url: "assets/index-BsJ3RGOz.css", revision: null },
        { url: "assets/index-legacy-BNwXoMcF.js", revision: null },
        { url: "assets/polyfills-legacy-B0mWexPD.js", revision: null },
        { url: "index.html", revision: "03ec8cfe844d834af3118bd04f744d00" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "192.png", revision: "b90248ae7fff8e979ff771bb6b294528" },
        { url: "512.png", revision: "a53d1c19b89bab56f7366b496eebd65a" },
        {
          url: "manifest.webmanifest",
          revision: "a553f5fc5834f504314cba98435fddaf",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
