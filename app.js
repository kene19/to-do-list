let inp = document.querySelector('.inp');
let gon = document.querySelector('.gon');


function my(){
    if(inp.value === ''){
    
     inp.classList.add("er")
    }
    else{
    let dd = document.createElement("li");
    dd.textContent = inp.value;
    gon.appendChild(dd);
    let img = document.createElement("img")
    img.src = "d.png";
    img.className = "delete";
    dd.appendChild(img);
    inp.classList.remove("er")
}
inp.value = "";
dataa();
}
gon.addEventListener("click",function(e){
if(e.target.tagName === "IMG"){
  e.target.parentElement.remove();
  dataa();
}
else if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    dataa();
}
},false)

function dataa(){
  localStorage.setItem("task", gon.innerHTML);
}
function showw(){
   gon.innerHTML = localStorage.getItem("task");
}
showw();


