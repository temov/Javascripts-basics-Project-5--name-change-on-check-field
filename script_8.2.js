var ime = document.getElementById("span");
var izbran = document.getElementById("check");
function prikazi(){
    if (izbran.checked == true){
           ime.innerHTML = " you ticked the checkbox";
    }else { 
     ime.innerHTML = "please tick the checkbox";
    }
}
    prikazi();
