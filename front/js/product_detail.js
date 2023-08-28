function count(type)  {

    const resultElement = document.getElementById('result');
    const totalPrice = document.getElementById('totalPrice');
    const priceElement = document.getElementById('price');
    
  
    let count = resultElement.innerText;
    let totalPriceResult = totalPrice.innerText;
    let price = priceElement.innerText;
  
    if(type === 'plus') {
        count = parseInt(count) + 1;
      totalPriceResult = price * count;
    }else if(type === 'minus')  {
        count = parseInt(count) - 1;
      totalPriceResult = price * count;
    }
  
    if (count < 0) {
        count = 0;
      totalPriceResult = price * count;
    }
    
    resultElement.innerText = count;
    totalPrice.innerText = totalPriceResult;
  }


function reset() {
  const resultElement = document.getElementById('result');
  const totalPrice = document.getElementById('totalPrice');

  let count = resultElement.innerText;
  let totalPriceResult = totalPrice.innerText;

  count = 0;
  totalPriceResult = 0;

  resultElement.innerText = count;
  totalPrice.innerText = totalPriceResult;
}