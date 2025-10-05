<<<<<<< HEAD
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
=======
if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const c=e=>n(e,t),a={module:{uri:t},exports:l,require:c};s[t]=Promise.all(i.map((e=>a[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-f79ddba6"],(function(e){"use strict";e.enable(),e.setCacheNameDetails({prefix:"Talagtna-2.0.0"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7-fPuXja.css",revision:null},{url:"assets/index-Baah7NWr.js",revision:null},{url:"assets/index-legacy-D-YRI96j.js",revision:null},{url:"assets/polyfills-legacy-CXIdGgm_.js",revision:null},{url:"index.html",revision:"9f186571be09f6da00cf2b0b9f1f32e4"},{url:"registerSW.js",revision:"cee46e7419a52c7c172b57eea3d50c1f"},{url:"manifest.webmanifest",revision:"3a6fbf3e6a152e9e8e07c21cf3493563"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"navigate"===e.mode),new e.NetworkFirst({cacheName:"pages-cache-2.0.0",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:259200})]}),"GET"),e.registerRoute(/\.(?:js|css|png|jpg|jpeg|svg|gif|ico)$/,new e.StaleWhileRevalidate({cacheName:"assets-cache-1759014345608",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200})]}),"GET")}));
>>>>>>> ece16dc0faeadfc6c783b89e7f6c2afbb42464cd
