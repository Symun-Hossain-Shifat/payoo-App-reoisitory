document.getElementById('btn').addEventListener("click",function(){
    const mobile = document.getElementById("number");
    const mobileValue = mobile.value;
    if(mobileValue !== "01619050716"){
        alert("Invalid Mobile Number");
        return;
    }
    const balances = document.getElementById("balance");
    const balancetext = parseInt(balances.innerText);
    const amounts = document.getElementById("amount");
    const amountValue = parseInt(amounts.value);
    if(amountValue > balancetext){
        alert("Invalid Amount");
        return;
    }
    const pins = document.getElementById("pin");
    const pinValue = pins.value;
    if(pinValue!== "5696"){
        alert("Invalid Pin");
        return;
    }
    const newbalance = balancetext - amountValue;
    balances.innerText = newbalance;
    alert("Cashout Successful")
    
})
document.getElementById("logout").addEventListener("click",function(){
    alert("Logout From Home Page");
    window.location.assign("index.html");
})