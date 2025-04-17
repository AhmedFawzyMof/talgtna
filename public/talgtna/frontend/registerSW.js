if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/talgtna/frontend/sw.js", { scope: "/" });
  });
}
