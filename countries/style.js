const countries=["Argentina","armenia","Brazil","bahrein","zombia","espania","Pakistan", "USA", "Iran", "Iraq"]

function renderitem(list){
const sortedlist=[...list];
sortedlist.sort((a,b)=>{
    const CharA=a[0].toUpperCase().charCodeAt(0);
    const CharB=b[0].toUpperCase().charCodeAt(0);
    return CharA-CharB;
});

while(sortedlist.length>0){
const character=sortedlist[0][0].toUpperCase();
const filter=sortedlist.filter((item)=>item[0].toUpperCase()===character);

const h2=`<h2>${character}(${filter.length})</h2>`;
const liitem=filter.map((item)=>`<li>${item}</li>`).join("");
const ulitem=`<ul>${liitem}</ul>`;

document.body.innerHTML+=h2;
document.body.innerHTML+=ulitem;

sortedlist.splice(0,filter.length);
}
}
renderitem([...countries]);