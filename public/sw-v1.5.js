if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[r]) return;
    let l = {};
    const o = (e) => n(e, r),
      c = { module: { uri: r }, exports: l, require: o };
    s[r] = Promise.all(i.map((e) => c[e] || o(e))).then((e) => (t(...e), l));
  };
}
define(["./workbox-f79ddba6"], function (e) {
  "use strict";
  e.enable(),
    e.setCacheNameDetails({ prefix: "talgtna-1.5" }),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-4InYS1hV.css", revision: null },
        { url: "assets/index-CYeWpjue.js", revision: null },
        { url: "assets/index-legacy-jPmnULNj.js", revision: null },
        { url: "assets/polyfills-legacy-B0mWexPD.js", revision: null },
        { url: "index.html", revision: "1f309504ed5498cb4f3f6ed37128876e" },
        { url: "registerSW.js", revision: "869e341444e428dfb09681cac92b09f8" },
        {
          url: "manifest.webmanifest",
          revision: "0d6fa79e2d7f1ab3c35ab9101436e2b1",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    ),
    e.registerRoute(
      ({ request: e }) => "navigate" === e.mode,
      new e.NetworkFirst({
        cacheName: "pages-cache-1.5",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 259200 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js|css|png|jpg|jpeg|svg|gif|ico)$/,
      new e.StaleWhileRevalidate({
        cacheName: "assets-cache-1746976776785",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 259200 }),
        ],
      }),
      "GET"
    );
});
