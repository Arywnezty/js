const input=document.getElementById("input");
const ul=document.getElementById("root");


const todoname= [];

function addtodo(){
const inputval=input.value;

todoname.push(inputval);

render();
input.value = "";
}

function deletetodo(itemindex){
todoname.splice(itemindex,1);
render();
}
function render(){
let template= "";
for(let i=0; i<todoname.length;i++){
template += `
<li class="rooter">
       ${todoname[i]}
       <button onclick="deletetodo(${i})">Delete</button>
       <button>edit</button>
</li>
            `;
}

ul.innerHTML=template;
}