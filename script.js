document.getElementById("btn").addEventListener("click",function(){
   const numbers = document.getElementById("number");
   const numberValue = numbers.value;
   const pins = document.getElementById("pin");
   const pinValue = pins.value;
   if( numberValue === "01619050716" &&  pinValue === "5696" ){
    alert( "Login is successful");
   }
   else{
    alert("Login failed");
    return;
   }
})