
function highlight(el){
    //el.style.backgroundColor='blue';

    if(el.atyle.backgroundColor == 'white'){//white,then turn Blue
        (el.style.backgroundColor='blue';
    }else{//turn white
        el.style.backgroundColor='white';
    }
}

function myAlert(){
     alert("I'm clicked!");
}

let spans = document.querySelectorAll("#play span");
 
console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click",myAlert);
}





















<!-- Toggle between adding removing the "responsive" class tonav when 
the user clicks on the icon --.
<script>
//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
    
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}  