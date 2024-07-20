/// Array de xpaths que serão calculados
function calcularTroncos() {
    const xpaths = [
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[1]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[2]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[3]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[4]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[5]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[5]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[8]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[9]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[10]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span',
      '//*[@id="single-spa-application:@vonix/v1"]/div/div/main/div/div[2]/div/div/div/div[2]/div/div/span/div[11]/div/div[1]/div[1]/div/div[2]/div[8]/div/div/div[1]/div/span'

    ];
    let sum = 0;

  xpaths.forEach(xpath => {
    try {
      let result = document.evaluate(xpath, document, null, XPathResult.STRING_TYPE, null).stringValue;

      // Verifica se o resultado não é vazio ou null
      if (result) {
        let numberBeforeSlash = result.split('/')[0].trim(); // Pegando o número antes da barra
        sum += parseInt(numberBeforeSlash, 10) || 0; // Garante que apenas números válidos sejam somados
      }
    } catch (e) {
      // Ignora erros ao tentar avaliar o XPath
      console.warn(`XPath ${xpath} não encontrado. Ignorando...`);
    }
  });

  chrome.runtime.sendMessage({type: 'CALCULATION_RESULT', result: sum});
}

calcularTroncos();
  
  
  
  