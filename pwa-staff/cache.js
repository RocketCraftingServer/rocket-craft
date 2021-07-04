
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function (e) {
    navigator.serviceWorker.register('worker.js');
  });
}
