const name = "lavosted"
var cached = [
    "./lavosted.js"
];

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(name).then(function (cache) {
            return cache.addAll(cached)
        })
    );
});
function showNotification(title,data)
{
    new Notification(data);
}