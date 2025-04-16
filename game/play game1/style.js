const boxes=document.querySelectorAll(".box");
const selectedboxes=[];

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
}
if(selectedboxes.length===2){
    if(selectedboxes[0].textContent === selectedboxes[1].textContent){
        alert("matched");
    }else{
        alert("not matched");
        selectedboxes[0].classList.add("hidden");
        selectedboxes[1].classList.add("hidden");


        selectedboxes.length=0;
    }

}

}

for (const box of boxes) {
    box.addEventListener("click",selected);
}


