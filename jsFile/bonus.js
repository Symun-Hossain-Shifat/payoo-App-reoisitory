document.getElementById("btnforbonus").addEventListener("click",function(){
    const bonustext =parseInt(getvaluefrominput("bonus"));
    if(bonustext <= 0 ){
        alert("Invalid Bonus");
        return;
    }
    const thisbalance = gettextfromtag("balance");
    const presentbalance  = bonustext + thisbalance;
    document.getElementById("balance").innerText = presentbalance;
    alert("Get Bonus");
})



