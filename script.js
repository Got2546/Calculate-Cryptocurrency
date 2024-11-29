function calculateCryptoValue() {
    const cryptoAmount = parseFloat(document.getElementById('crypto-amount').value);
    const cryptoPrice = parseFloat(document.getElementById('crypto-price').value);
  
    if (isNaN(cryptoAmount) || isNaN(cryptoPrice) || cryptoAmount <= 0 || cryptoPrice <= 0) {
      document.getElementById('result').innerText = 'Please enter valid inputs.';
      return;
    }
  
    // Calculate total value
    const totalValue = cryptoAmount * cryptoPrice;
  
    document.getElementById('result').innerText = `Total Value: $${totalValue.toFixed(2)}`;
  }
  