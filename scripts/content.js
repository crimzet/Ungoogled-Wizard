chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.method && (request.method === "getDOM")) {
        const img = document.querySelector("div.e-f-n-Va > img");
        const name = document.querySelector("div.e-f-n-Va > div > h1");
        sendResponse({ "src": img.src, "text": name.innerHTML});
    }
});
