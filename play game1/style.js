const prevBoxes=document.querySelectorAll(".box");
const container=document.getElementById("container");
const boxes=[];

for(let i=0 ; i<prevBoxes.length; i++){
    boxes.push(prevBoxes[i]);
}

for(let i=0; i<boxes.length; i++){
    const randomIndex=Math.floor(Math.random()* boxes.length);
    const temp=boxes[randomIndex];
    boxes[randomIndex]=boxes[i];
    boxes[i]=temp;
}
container.innerHTML="";
for (const box of boxes) {
    container.appendChild(box);
}

const selectedboxes=[];

let matchcount=0;

function hiddenAll(){
    for (const box of boxes) {
        box.classList.add("hidden");
    }
}

setTimeout(hiddenAll,2000);

function selected(event){
if(selectedboxes.length<2){
    event.target.classList.remove("hidden");
    selectedboxes.push(event.target);
    event.target.removeEventListener("click",selected);
}
if(selectedboxes.length===2){
    if(selectedboxes[0].textContent === selectedboxes[1].textContent){
     matched();
    }else{
   notmached();

}

}
}

const matched=() =>{
    alert("matched");
    // selectedboxes[0].classList.add("disable");
    // selectedboxes[1].classList.add("disable");
    selectedboxes[0].removeEventListener("click",selected);
    selectedboxes[1].removeEventListener("click",selected);
    selectedboxes.length=0;
    matchcount++;
    if(matchcount=== boxes.length/2){
        alert("you win");
    }
}

const notmached=() =>{
    disableAll();
    alert("not matched");

    setTimeout(()=>{
        selectedboxes[0].classList.add("hidden");
        selectedboxes[1].classList.add("hidden");  

        selectedboxes[0].addEventListener("click",selected);
        selectedboxes[1].addEventListener("click",selected);
        selectedboxes.length=0;
        undisableAll();
    },2000);

}

const disableAll= () =>{
    for (const box of boxes) {
        box.classList.add("disable");
    }
}

const undisableAll = () =>{
    for (const box of boxes) {
        box.classList.remove("disable");
    }
}
for (const box of boxes) {
    box.addEventListener("click",selected);
}
