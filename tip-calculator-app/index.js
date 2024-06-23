
function handleSubmit() {
    let total = document.getElementById("total").value;
    let numberPpl = document.getElementById("number-ppl").value;
    let definedTip = document.querySelector('input[name="defined-tip"]:checked');
    let customTip = document.getElementById('custom-tip').value;
    
    // results
    let tipResult = document.getElementById('total-tip');
    let totalPerPersonResult = document.getElementById('total-per-person');
    let totalTipSum;

    // calculating Tip amount
    if (definedTip) {
        totalTipSum = Number(total)* Number(definedTip.value)/100;
    } else if (definedTip == null && customTip) {
        totalTipSum = ((Number(total)) * (Number(customTip)))/100;
    } else {
        totalTipSum = 0;
    }

    // calc total amount
  
    let totalAmountPerPerson = (Number(total) + totalTipSum) / Number(numberPpl);
    tipResult.innerText = totalTipSum;
    totalPerPersonResult.innerText = totalAmountPerPerson; 
}
