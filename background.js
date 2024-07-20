
// Observa o site em segundo plano para atulizar 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'CALCULATION_RESULT') {
      chrome.storage.local.set({calculationResult: message.result});
    } else if (message.type === 'GET_CALCULATION_RESULT') {
      chrome.storage.local.get(['calculationResult'], function(result) {
        sendResponse({result: result.calculationResult});
      });
      return true;
    }
  });
  
  