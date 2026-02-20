document.getElementById("btnfortransfer").addEventListener("click",function(){
const accountnumber = getvaluefrominput("useraccountNUmber");
if(accountnumber !== "01619050716"){
alert("Invalid account Number");
return;
}
const totalbalance =parseInt(gettextfromtag("balance"));

const amount = getvaluefrominput("Transferamount");
if(amount > totalbalance || amount<=0){
    alert("Invalid amount");
    return;
}
const pinnumber = getvaluefrominput("pinfortransfer");
if(pinnumber !== "5696"){
    alert("Invalid Pin");
    return;
}
 const newbalance = totalbalance - amount ;
 document.getElementById("balance").innerText=newbalance;
 alert("Money Transfer success");
 
})