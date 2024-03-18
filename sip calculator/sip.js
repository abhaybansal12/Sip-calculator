function calculate() {
    const investment = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
  
    const monthlyRate = rate / 12;
    const months = years * 12;
  
    const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    document.getElementById('result').textContent = futureValue.toFixed(2);
  }
  