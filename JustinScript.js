function showMessage(){
document.getElementById("messageSecret").innerHTML="Hello World!"; 
}

 var clicks=0;
function countClicks(){
   
    clicks +=1;
    document.getElementById("nombreDeCliques").innerHTML=clicks;
}