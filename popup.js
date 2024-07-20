// Captura os eventos so site com o DOM (document object model) e retorna a quantidade de troncos dessa forma TIM: ()

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript(
        {
          target: {tabId: tabs[0].id},
          files: ['content.js']
        },
        () => {
          chrome.runtime.sendMessage({type: 'GET_CALCULATION_RESULT'}, (response) => {
            document.getElementById('result').textContent = 'TIM: ' + response.result;
          });
        }
      );
    });
  });
  