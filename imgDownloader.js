


      chrome.runtime.onMessage.addListener(function(message,sendResponse) {
        console.log(message.length)
        download(message)
        
       
      
      }
      );

      async function download(message){
        for (let i = 0; i < message.length; i++) {
          try {
            chrome.downloads.download({
              url: message[i]
                });
            
          }
          catch(err) {
            console.log("nah")
          }
          console.log((i+1)+" of "+message.length+" collected")
         
        }
      }