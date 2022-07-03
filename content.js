

function img_find() {
    //var imgs = document.images;
    var imgs = document.querySelectorAll("img");
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        
        url = imgs[i].src
        
      
        console.log(url)
        imgSrcs.push(url);
    }
    
    console.log(imgSrcs.length)
    return imgSrcs;
}

//console.log(img_find())
chrome.runtime.sendMessage(img_find());




