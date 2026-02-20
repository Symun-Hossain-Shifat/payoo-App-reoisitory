document.getElementById("btnforpay").addEventListener("click",function(){
    const bankname = getvaluefrominput("Bankforpay");
    if( bankname === "Select Bank"){
        alert("please select a bank");
        return;
    }
    const accountnumver = getvaluefrominput("accountpay");
    if(accountnumver !=="01619050716"){
        alert("Invalid account Number");
        return;
    }
const balanceamount = parseInt(gettextfromtag("balance"));


    const payamount = parseInt(getvaluefrominput("Pay"));
    if(payamount  > balanceamount || payamount<=0){
alert("Invalid amount");
return;
    }
    const pinnumber = getvaluefrominput("pinforpay");
    if(pinnumber !== "5696"){
        alert("Invalid Pin");
        return;
    }
    const lastbalance = balanceamount - payamount ;
    document.getElementById("balance").innerText = lastbalance;
    alert("Pay Complete");
})