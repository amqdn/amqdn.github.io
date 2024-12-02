'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "c5faf3ec3c84e6958b414568c9aaa298",
".git/refs/remotes/origin/main": "c5faf3ec3c84e6958b414568c9aaa298",
".git/objects/b3/329e41167816a0501c3545c2e69ca5ed134881": "5091cab6589c1143953130be35e622a6",
".git/objects/a4/a15e9604b2e71d4b9ec6cd498d63d6354fb6ac": "079d794c757de1cf741469f437d1e67f",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/8a/8795190a5c3094163dd05c13595aae9215dc92": "c6a0ab08b4abcfd9ab491d3169d89353",
".git/objects/88/5b77d3c1ed97384a7c38e99374c364e3165075": "7b040b42b8a8f52b8129de8cf692d313",
".git/objects/b2/d2d623de14525d71a77e1a2ad63f129cc081d1": "30c2e672a5c3dfaa3b3e3032e86e09ef",
".git/objects/49/3e69ba39249c56586e6bf65e9992d1775ed85d": "653e499e148027075d94169b1bc71342",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/fb/15ea8bb3dd99a0a1364b7264afe8c650fc8ec1": "f03ff20e71ad3a073e01229e4e1b0fe6",
".git/objects/7a/da73abfa3044cdd61406445596e4186377a1ed": "925cfafda3cc9733687d46cbae07f2df",
".git/objects/4a/4698032a40c2db5c2d2acf3c7c05d226de3ef3": "681a8f28cc6c9305d59e154499e12375",
".git/objects/4a/8d3838c6a23892587b2bd591977d84866ab8a8": "0cadfe315763b43b32daae7061aa244b",
".git/objects/db/43ba46f02a0fcfe0d1dc909a262002ab5091dc": "5df42503ed64c3d09ae2acae4cc50a2b",
".git/objects/5a/e67d99df062195c5f5cc0b3f9b11f8a7b6c9a3": "348398694753fd4902301bd982ed7ad3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/e6/9f26698d9937f57454382ed69b6bed09ccc7f1": "ef065335aa7cb947d36f634876afafea",
".git/objects/51/8aa1e7fd2fc1da21744dc52aa7b5acb39f669e": "0becddcc13f61adc87aa65034ab75af8",
".git/objects/42/fa86490e93a4aef4682f989f07c9450b96a77c": "c030ba45de7973fc9387ce4cb91145ed",
".git/objects/8c/724fc65f257841a750172078984e8150a548c8": "72bb65381e0f0972df1e9190a99dd0d0",
".git/objects/61/d804fd32a648e134cfeb81bda667bc6d9f634e": "9381f2d19fec1343149681b0a950ddc6",
".git/objects/ad/da3bc64a0fa3a920f7f3b0eff0954d1e7656f7": "71f2bcd6c67d3e0f6554221ff304149e",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/94/2c27520b9074adb674ab3b5f63213d9ca1e487": "fe8d269e7fa693d0aba45d354a7bcaff",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/03/7f0ac20bd643624ba2ad7ecf3a4a4de43bdbc4": "d8a07302e07a0d9e459d7d9047fbbfba",
".git/objects/85/7355acd5277a2e3187635b7d5756dc1b1367f2": "e829b409f30d9e77dcba60de0c473a7c",
".git/objects/67/ada11fd8dc49fcda906f8832ccc416b2968905": "89f66f025b397d82234c305baeaa556f",
".git/objects/d3/1d8f55d4cd5af5d8db6c29153de437b5777332": "06d55d168db940422d47cbd9e76f5aa7",
".git/objects/82/924b3e8d2b1955e8e21c2f81b0842141853eeb": "258fbf9a857fa95f158fe0bd18abb5e7",
".git/objects/7b/0b1e5143a4eb03af9b5fc1734e8cfa32b0be8c": "654f60310e1b1156a469511ff136aaaa",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/48/ab04c828feed6db2e13e63927aff4dcd5488e0": "022f67ac211d3dbc7d0d7c8d75c44c89",
".git/objects/b5/0c31aefbed9447ea76b7195a8b30e243ffc0d0": "0f14d22c143789996b4841924b22cf56",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/60/ba202b585fcddc8e8ce50f149e8a832e4fa396": "a6a468ea1da123175db842ffc064b447",
".git/objects/af/5626b4a114abcb82d63db7c8082c3c4756e51b": "206e462c3fbe91415d39489383be41ea",
".git/objects/f8/cdca3335d40609fddd4594b2b777361d05c41f": "2dfa90a6bcb1c6caf377d23487b756d0",
".git/objects/2a/0684f3892c6990e3984a600484c57136dc01b2": "af35afe7c399874fd3b5e98fb27def98",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "fc6fa9d414b1047715612843a2bd71df",
".git/FETCH_HEAD": "7838264b8af17044ebedb74723246b52",
".git/logs/refs/remotes/origin/main": "1621dd6aadf8e46b148e3dc8533843b8",
".git/logs/refs/heads/main": "1142feda932f27b51bb93d15d26fb9a3",
".git/logs/HEAD": "1142feda932f27b51bb93d15d26fb9a3",
".git/index": "c8735812728a5dfa578b5e2908b5128d",
"CNAME": "5c544a952c8522d955a22f24d2399761",
"assets/AssetManifest.bin": "e2818a5f233a7a771062495f0194643c",
"assets/AssetManifest.bin.json": "03d3a94d877fdc07d3e1cc3f505ef1bf",
"assets/AssetManifest.json": "79396adaa150a1693154f0e3c9d49d59",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "ff11e7d015db74a1ccbac05a08128f18",
"assets/assets/amqdn-bubble.png": "bf9ca20d956fb15b069d2f25e01186f1",
"assets/fonts/MaterialIcons-Regular.otf": "7d04a4eb248a4df18f981ea7b70a5815",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c241272ae64c1591ea72eef931a26a2e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "54d99ce8e9429ed3e20bdbe708ff7b9a",
"icons/icon-192-maskable.png": "768c97a9d61f84c78d07b613fd0c43c1",
"icons/icon-192.png": "68985801406f6c3e728dc039625d03c9",
"icons/icon-512-maskable.png": "8e5b0179936008928f7be2afa73ef03d",
"icons/icon-512.png": "b227b49a22a27d333711fb47e5c16cc3",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "02ae7917c22e3c1d3dba1d89f1298767",
"manifest.json": "89383a850e20378a3b95aff384fd1711",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
