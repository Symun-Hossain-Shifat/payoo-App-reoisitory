document.getElementById("btnforadd").addEventListener("click",function(){
   const bankselect = getvaluefrominput("Bank");
   if(bankselect === "Select Bank"){
    alert("Please Select A Bank");
    return;
   }
   const account = getvaluefrominput("accountNUmber");
   if(account !== "01619050716"){
    alert("Invalid Account");
    return;
   }
   const amounts =parseInt(getvaluefrominput("Addamount"));
   if(isNaN(amounts) || amounts <= 0){
    alert("Invalid Amount");
    return;
   }
   const pin = getvaluefrominput("pinforadd");
   if(pin!=="5696"){
    alert("Invalid pIn");
    return;
   }
   const getbalance = parseInt(gettextfromtag("balance"));
const newbalance = getbalance + amounts;
document.getElementById("balance").innerText = newbalance;
   alert("Add money successfull");
})