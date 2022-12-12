
document.getElementById("btn").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        document.getElementById("btn").classList.add("load");
        document.getElementById("ci-d").classList.add("load");

        if (tabs[0].url !== undefined) {
            setTimeout(function () {
                const url = tabs[0].url.split("/");
                const ver = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];

                chrome.tabs.create({
                    url: "https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&prodversion="+ ver +"&x=id%3D"+ url[url.length-1] + "%26installsource%3Dondemand%26uc",
                    selected: true
                })
            }, 2001);
        }
    });
});

window.addEventListener("DOMContentLoaded", function() {

    const img = document.querySelector("#ex > img");
    const name = document.querySelector("#ex > p");
    const ex = document.getElementById("ex");

    chrome.tabs.query({
        active: true, currentWindow: true}, function(tabs) {

            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    method: "getDOM"
                }, function(response) {

                    if (chrome.runtime.lastError) {
                        ex.classList.remove("valid");
                    } else {
                        ex.classList.add("valid");

                        img.src = response.src;
                        name.innerText = response.text;
                    }
                })
            }
        })

});
