/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/23/hello-world/index.html","bba0f2e5d6e193b6802e686a229c5012"],["/2022/08/25/GitTeach/index.html","0b167b47b8d2e4d10b3ecd11dc8d3443"],["/2022/08/25/equals与hashcode/index.html","6a3828214ec80ec81782ef3ef1875870"],["/404.html","691f4495a3751662731bd193f35cc1b5"],["/MD_IMG/GitTeach/175da03433c20d9e95ffdda1887a62d5.png","175da03433c20d9e95ffdda1887a62d5"],["/MD_IMG/GitTeach/620021e94ced6a11920118b7a1e55c56.png","620021e94ced6a11920118b7a1e55c56"],["/MD_IMG/GitTeach/6bb9b74431e0f77e36dc822ee99a7c43.png","6bb9b74431e0f77e36dc822ee99a7c43"],["/MD_IMG/GitTeach/750ab46eba78755c566d4e18985cea46.png","750ab46eba78755c566d4e18985cea46"],["/MD_IMG/GitTeach/7608390310b82b0c126b9b3edf82779e.png","7608390310b82b0c126b9b3edf82779e"],["/MD_IMG/GitTeach/962276a466393cb7f6175cf1dfb05916.png","962276a466393cb7f6175cf1dfb05916"],["/MD_IMG/GitTeach/b7f94ef0e9d0814f53c0fb6f9f8d7751.png","b7f94ef0e9d0814f53c0fb6f9f8d7751"],["/MD_IMG/GitTeach/c3faae67fee0445aef5d3d6488691087.png","c3faae67fee0445aef5d3d6488691087"],["/MD_IMG/GitTeach/c47d3f611c1e76b1f9bcf1cf4b27aab6.png","c47d3f611c1e76b1f9bcf1cf4b27aab6"],["/MD_IMG/GitTeach/c64e490140a228604337cc6f40f0fc30.png","c64e490140a228604337cc6f40f0fc30"],["/MD_IMG/GitTeach/d2b2a09aaca5a218cfebb399de45a438.png","d2b2a09aaca5a218cfebb399de45a438"],["/MD_IMG/equals与hashcode/0762b37d556e0e84d5fa27057b1a9fe2.png","0762b37d556e0e84d5fa27057b1a9fe2"],["/MD_IMG/equals与hashcode/13b91bc0c15ff6972c896a0355d73d2e.png","13b91bc0c15ff6972c896a0355d73d2e"],["/MD_IMG/equals与hashcode/2d092cae20f194c3f12f72f32dcaff02.png","2d092cae20f194c3f12f72f32dcaff02"],["/MD_IMG/equals与hashcode/89430bbe03a371165a50dc1eef064589.png","89430bbe03a371165a50dc1eef064589"],["/MD_IMG/equals与hashcode/9137e95716bfba740f2d6712e3206ee2.png","9137e95716bfba740f2d6712e3206ee2"],["/MD_IMG/equals与hashcode/cf2a2abfef64f78f50a6e487bd6704e5.png","cf2a2abfef64f78f50a6e487bd6704e5"],["/archives/2022/08/index.html","a72f3dbff2dd7ac685796d62ae82d34c"],["/archives/2022/index.html","fab576e55ad356f36886c4167c77d541"],["/archives/index.html","e8ab9435c18a2f7df1a7ea20909b2004"],["/categories/index.html","e0caa925cd760dac41d752a42362f845"],["/categories/学习笔记/index.html","e4143055ff568558f481d2f44dfa3324"],["/css/index.css","d12b42e8ffc121678b2d96ff920a0ec4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/973119.jpg","a032f17d51acc79a295cc0407003337b"],["/img/Black_Widow.jpg","e554c738a2bd4e004a64632b2df5105f"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/tou1.png","5e2b98f8d236b815393a56428bf6bfed"],["/img/头像Naruto.jpg","77e18e0d85d7c414983a0884a58038cd"],["/img/微信图片_20220206140647.jpg","6dde8be88896ffbf600ef9d049fef01c"],["/index.html","b35e490b3201e453ae4232072f777487"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1844fbf8b4cf3a8d8fbc2fe3d5a351aa"],["/music/index.html","a70eed379e14f027a40426a7b8497ca6"],["/mycss/mine.css","f0caca4a85b722e8fc4b32a34fc7bbc4"],["/photo/index.html","7074669d4c5ea29329d1dbf370f122f7"],["/photo/ohmygirl/index.html","6808a0ed0d52db7b55aeb930d4322274"],["/photo/seen/001812I4nYl.jpg","773cd72f0e5ea32d130cb915eb27bbc7"],["/photo/seen/205524-1566651324f88b.jpg","09642641eabc153976c127cac9591226"],["/photo/seen/973119.jpg","a032f17d51acc79a295cc0407003337b"],["/photo/seen/Black_Widow.jpg","e554c738a2bd4e004a64632b2df5105f"],["/photo/seen/index.html","a3875649d6fcfc932941237ab235cfed"],["/sw-register.js","8f23d0832fee55afa138bcb728bd1a17"],["/tags/index.html","8267b867141dd820efe0d06919e24ee0"],["/tags/源码解读/index.html","b93ea533656a7604f1b059a9c0dcf19e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
