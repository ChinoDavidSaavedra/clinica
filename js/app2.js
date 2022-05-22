var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="idiomas/index2.html"
    }else{
        location.href="../index2.html"
    }
   
}

var check2=document.querySelector(".check2");
check.addEventListener('click', idioma2);

function idioma2(){
    let id2=check.checked;
    if(id2==true){
        location.href="idiomas/index2.html"
    }else{
        location.href="../index2.html"
    }
   
}