
const downloadList = []
function downloadImgs(URL){
  try{
    
    chrome.downloads.download({
      url: URL});
        console.log(URL);

      }catch (e) {
          console.log(e); 
          
          
        };
  };              


chrome.runtime.onMessage.addListener(function(message,sendResponse) {
  console.log(message.length);
  for (let i = 0; i < message.length; i++) {
    downloadImgs(message[i])
    };
  });
        


        
      