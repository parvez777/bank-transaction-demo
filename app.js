function handleLogin(){
    document.getElementById('transection-area').style.display = "block"
    document.getElementById('main').style.display = "none"
}
function handleDeposit(){
    var depositAmount = document.getElementById('deposit-input').value;
    var depositAmount2 = parseInt(depositAmount);

    var depositBalance = document.getElementById('deposit-balance').innerText;
    var depositBalance2 = parseInt(depositBalance)
    var totalDeposit = depositAmount2 + depositBalance2;

    document.getElementById('deposit-balance').innerText = totalDeposit;

    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalance2 = parseInt(totalBalance);

    var totalBalanceAmount = totalBalance2 + depositAmount2;

    document.getElementById('total-balance').innerText = totalBalanceAmount;
    document.getElementById('deposit-input').value = '';
}

document.getElementById('withdraw').addEventListener("click", function(){
    var withdrawAmount = document.getElementById('withdraw-input').value;
    var withdrawAmount2 = parseInt(withdrawAmount)
    var withdrawBalance1 = document.getElementById('withdraw-balance').innerText;
    var withdrawBalance2 = parseInt(withdrawBalance1)

    var withdrawBalance = withdrawAmount2 + withdrawBalance2;
    document.getElementById('withdraw-balance').innerText = withdrawBalance;

    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalance2  = parseInt(totalBalance)

    var totalAmountBalance = totalBalance2 - withdrawAmount2;

    document.getElementById('total-balance').innerText = totalAmountBalance;
    document.getElementById('withdraw-input').value = '';
})
