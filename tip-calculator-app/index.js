function handleInput() {
    let total = document.getElementById("total").value;
    let numberPpl = document.getElementById("number-ppl").value;
    let definedTip = document.querySelector('input[name="defined-tip"]:checked');
    let customTip = document.getElementById('custom-tip').value;


    if (definedTip) {
        document.getElementById('custom-tip').value = '';
    }
    
    if (customTip) {
        resetDefinedTips()
    }

    if (total && numberPpl && (definedTip || customTip)) {
        let tip = definedTip ? definedTip.value :  customTip;
    calcAmount(total, numberPpl, tip ) 
    }

}

function resetDefinedTips() {
    let definedTipsInputs = document.querySelectorAll('input[name="defined-tip"]');
    definedTipsInputs.forEach(item => {
        item.checked = false;
    });
}


function calcAmount(total, numberPpl, tip) {

    let tipResult = document.getElementById('total-tip');
    let totalPerPersonResult = document.getElementById('total-per-person');
    let totalTipSum;

    if (tip == 0) {
        totalTipSum = 0; 
    } else {
        totalTipSum = ((Number(total)) * (Number(tip)));
    }

    let totalAmountPerPerson = (Number(total) + totalTipSum) / Number(numberPpl);
    tipResult.innerText = totalTipSum;
    totalPerPersonResult.innerText = totalAmountPerPerson; 
}

function resetForm() {
    document.getElementById("total").value = '';
    document.getElementById("number-ppl").value = '';
    resetDefinedTips();
    document.getElementById('custom-tip').value = '';
    document.getElementById('total-tip').innerText = '$0.00';
    document.getElementById('total-per-person').innerText = '$0.00';

}