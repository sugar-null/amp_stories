/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "docs/assets/AMP-Brand-White-Icon.svg",
    "revision": "a83a5115789c916f0cf2da0003cf9c4c"
  },
  {
    "url": "docs/assets/bookend_flower.jpg",
    "revision": "a29cb6625dd8b192807d48a630441f0e"
  },
  {
    "url": "docs/assets/bookend_flower2.jpg",
    "revision": "2a2c24503d22a6c2a0ad162bbaaf5cd2"
  },
  {
    "url": "docs/assets/bookend_flower3.jpg",
    "revision": "8e8587164cce09b5ebeabeb4c2dbe14c"
  },
  {
    "url": "docs/assets/cover_flower.jpg",
    "revision": "a29cb6625dd8b192807d48a630441f0e"
  },
  {
    "url": "docs/assets/page_flower1.jpg",
    "revision": "fcf19fcfac9663e60de8c20cec654dae"
  },
  {
    "url": "docs/assets/page_flower2.jpg",
    "revision": "2a2c24503d22a6c2a0ad162bbaaf5cd2"
  },
  {
    "url": "docs/assets/page_flower3.jpg",
    "revision": "8e8587164cce09b5ebeabeb4c2dbe14c"
  },
  {
    "url": "docs/bookend.json",
    "revision": "d1390745383ffeb631cdeb0beafbacd6"
  },
  {
    "url": "docs/images/icons/icon-128x128.png",
    "revision": "ee5d4b567aaac173112a649f8ed7df37"
  },
  {
    "url": "docs/images/icons/icon-144x144.png",
    "revision": "34784426b594d289f434723f49346563"
  },
  {
    "url": "docs/images/icons/icon-152x152.png",
    "revision": "883289cddbfdbe3a3d1bf7d3c2b410a7"
  },
  {
    "url": "docs/images/icons/icon-192x192.png",
    "revision": "b049625cb5a56c84d65724568e98711d"
  },
  {
    "url": "docs/images/icons/icon-384x384.png",
    "revision": "b259090851a489e72577315528e260c3"
  },
  {
    "url": "docs/images/icons/icon-512x512.png",
    "revision": "7a3ca571bbe40997bf457aca8e7cd119"
  },
  {
    "url": "docs/images/icons/icon-72x72.png",
    "revision": "77b8d6ff405991c0648fcabeeccf0ce6"
  },
  {
    "url": "docs/images/icons/icon-96x96.png",
    "revision": "09005e682922f64cc29f0d7cc3b86578"
  },
  {
    "url": "docs/index.html",
    "revision": "10284645f598f4741877c3e0fa1242fd"
  },
  {
    "url": "docs/manifest.json",
    "revision": "167b5606cec1c2c9ddd6d986ea536f51"
  },
  {
    "url": "docs/sw.html",
    "revision": "cf0cca61c0591885deadde4adc277641"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
