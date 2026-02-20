function getvaluefrominput(id){
    const idtext = document.getElementById(id);
    const idvalue = idtext.value;
    return idvalue;

}
function gettextfromtag(id){
    const dtext = document.getElementById(id);
    const text = parseInt(dtext.innerText);
    return text;
}
const permanent = document.getElementById("state");
const secound = document.getElementById("secondcashout");
const first = document.getElementById("fistaddmoney");
const third = document.getElementById("thirdtransfer");
const fourth = document.getElementById("fourthbonus");
const five = document.getElementById("fivepay");
const six = document.getElementById("sixtransaction");


document.getElementById("addmoney").addEventListener("click",function(){
    permanent.classList.add("hidden");
    first.classList.remove("hidden");
    secound.classList.add("hidden");
     third.classList.add("hidden");
      fourth.classList.add("hidden");
       five.classList.add("hidden");
       six.classList.add("hidden");
})


document.getElementById("cashout").addEventListener("click",function(){
    permanent.classList.add("hidden");
    first.classList.add("hidden");
    secound.classList.remove("hidden");
     third.classList.add("hidden");
      fourth.classList.add("hidden");
       five.classList.add("hidden");
       six.classList.add("hidden");
})


document.getElementById("transfermoney").addEventListener("click",function(){
    permanent.classList.add("hidden");
   first.classList.add("hidden");
    secound.classList.add("hidden");
     third.classList.remove("hidden");
      fourth.classList.add("hidden");
       five.classList.add("hidden");
       six.classList.add("hidden");
})


document.getElementById("getbonus").addEventListener("click",function(){
    permanent.classList.add("hidden");
   first.classList.add("hidden");
    secound.classList.add("hidden");
     third.classList.add("hidden");
      fourth.classList.remove("hidden");
       five.classList.add("hidden");
       six.classList.add("hidden");
})


document.getElementById("paybill").addEventListener("click",function(){
    permanent.classList.add("hidden");
   first.classList.add("hidden");
    secound.classList.add("hidden");
     third.classList.add("hidden");
      fourth.classList.add("hidden");
       five.classList.remove("hidden");
       six.classList.add("hidden");
})


document.getElementById("transaction").addEventListener("click",function(){
    permanent.classList.add("hidden");
    first.classList.add("hidden");
    secound.classList.add("hidden");
     third.classList.add("hidden");
      fourth.classList.add("hidden");
       five.classList.add("hidden");
       six.classList.remove("hidden");
})