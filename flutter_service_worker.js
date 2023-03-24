'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a6f328e3c61a3d1562b5bc75afd5d6d1",
"assets/assets/guides/Installation_W365_Android.pdf": "10020fcde643d274ce8c62970a5b56ab",
"assets/assets/icons/aroundtheworldicon.png": "dac19acf503b72da746b327d0f23b19e",
"assets/assets/icons/bartsimpsonicon.png": "53819904293217fc9c51b4d41a33bc0d",
"assets/assets/icons/darkerdarkmodeicon.png": "d455697736bfd468057177874a600ae9",
"assets/assets/icons/darkmodeicon.png": "c87b1118b9fe62d47e2f78cdf0dd2466",
"assets/assets/icons/leuchtstoffroehreicon.png": "3cb99f8a33ce812726424865c5a83951",
"assets/assets/icons/pinkicon.png": "7a25d42201604284d2d71bc7618d964e",
"assets/assets/icons/standardicon.png": "8e41020c20b463d3d0f93ff92cd4e15a",
"assets/assets/icons/whiteicon.png": "a0e81ff769a9ed3ceb0a3a52757c49c3",
"assets/assets/images/dont-know.gif": "588e63eefea38348aaf395fd6c35105a",
"assets/assets/images/empty_dark.png": "d4f03f7312332d453b944eee63dfe7d2",
"assets/assets/images/empty_light.png": "d4f03f7312332d453b944eee63dfe7d2",
"assets/assets/images/gotthard.jpeg": "1ce5bdb1e64dcd677b1310d071c46171",
"assets/assets/images/icon_learnon.png": "d20fe58e69f8ef6c0e55439150006142",
"assets/assets/images/learnon1.7.8update.mp4": "b54eb3f6fd07f8ae4f708aca40b6ccdd",
"assets/assets/images/LearnOn_Tasks_ohne_Background.png": "afcd5863053ebef5dbbd8f75e759c900",
"assets/assets/images/logo.png": "38e3b08e057c271c6cda38db34ae04f2",
"assets/assets/images/noprofilepic.png": "922dde69be08fa8b62e97282616e430f",
"assets/assets/images/sgglogowhitemode.png": "44c36d3cba60b25a9ae67ec2f3f2424e",
"assets/assets/images/Sgglogo_sw.jpg": "2e89e8831d664decaf09c13c90e86981",
"assets/assets/images/Sgglogo_sw.png": "6544bf2e7e08cfb01790a249245e19af",
"assets/assets/images/Sgglogo_sw_white.png": "523dcf92dd02c0c4f9c73a46d5b59b49",
"assets/assets/images/to-do-list.svg": "7149a699bc43496b3103b8ef8d84f670",
"assets/assets/images/undraw_ideas.svg": "6b08bc8787328668bf47577142f22652",
"assets/assets/images/undraw_no_data.svg": "b031df326978c99f644084a437eb40a5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ec51b83d3c7279c334d08fbcd30e33e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d47d8646385d4ca77d7c4a5bd51261b2",
"/": "d47d8646385d4ca77d7c4a5bd51261b2",
"main.dart.js": "48823652728b72fc6ed3bc1a77b50a1c",
"manifest.json": "3c517efae61abdc88b3cef318e34ed14",
"splash/img/dark-1x.png": "d439a65e27fe7e13508cafd406740338",
"splash/img/dark-2x.png": "1693af675945b3e48c06e012cb063f94",
"splash/img/dark-3x.png": "77d04a9be040aa60a6808b398bfcea0c",
"splash/img/dark-4x.png": "7bcad1ec899b7a4b94c41cacac25c9f2",
"splash/img/light-1x.png": "d439a65e27fe7e13508cafd406740338",
"splash/img/light-2x.png": "1693af675945b3e48c06e012cb063f94",
"splash/img/light-3x.png": "77d04a9be040aa60a6808b398bfcea0c",
"splash/img/light-4x.png": "7bcad1ec899b7a4b94c41cacac25c9f2",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "7a7bce2afaec1d5c008dc01335c3e655",
"version.json": "1980b7533ab623e83dfca99b500003e7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
