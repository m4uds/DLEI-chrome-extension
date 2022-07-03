

function img_find() {
    var imgs = document.images;
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        
        url = imgs[i].currentSrc
        
      
        console.log(url)
        imgSrcs.push(url);
    }
    
    console.log(imgSrcs.length)
    return imgSrcs;
}

//console.log(img_find())
chrome.runtime.sendMessage(img_find());




