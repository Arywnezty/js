const root =document.getElementById("root");
const filtersContainer=document.getElementById("filter");

const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 7,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 8,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]

const selectedAuthors=[];
const selectedlanguages=[];

function render(bookslist){
    const template=bookslist.map((book)=>{
      return`
      <div class="card">

      <img class="image" src="./image/${book.imgSrc}";
      <h2 class="title">${book.title}</h2>

      </div>
            `
    ;}).join("");
    root.innerHTML=template;
}
render(BOOKS);

function handlecheckboxes(event){
if(event.target.checked){
    selectedAuthors.push(event.target.value);
}else{
    const findindex=selectedAuthors.findIndex(item=>item === event.target.value);
    selectedAuthors.splice(findindex,1);
}
filterbooks();
}
function handleLangboxes(event){
    if(event.target.checked){
        selectedlanguages.push(event.target.value);
    }else{
        const findindex=selectedlanguages.findIndex(item=>item === event.target.value);
        selectedlanguages.splice(findindex,1);
    }
    filterbooks();
    }

function renderFilters(bookslist){
    const authors=[];
    for (const book of bookslist) {
        if(!authors.includes(book.author)){
            authors.push(book.author);
        }
    }
    let template=authors.map((author,index)=>{
        return `
        <div>
        <label for="${index}">${author}</label>
        <input onchange="handlecheckboxes(event)" class="author-checkbox" id="${index}" type="checkbox" value="${author}"/>
        </div>
        `;
    }).join("");
    filtersContainer.innerHTML=template;

    


const languages=[];

for (const item of BOOKS) {
    if(!languages.includes(item.language)){
        languages.push(item.language)
    }
}
 template=languages.map((lang,index)=>{
    return `
    <div>
    <label for="${index}}">${lang}</label>
    <input onchange="handleLangboxes(event)" class="lang-checkbox" id="${index}" type="checkbox" value="${lang}"/>
    </div>
    `;
}).join("");
filtersContainer.innerHTML+=template;

}
renderFilters(BOOKS);


function filterbooks(){
    let Result=[];
    if(selectedAuthors.length > 0){
Result= BOOKS.filter((book)=>selectedAuthors.includes(book.author));
}else{
    Result = BOOKS;
}

if(selectedlanguages.length > 0){
 Result=Result.filter((book)=>selectedlanguages.includes(book.language))
}

render(Result);

// if(authorfilterResult.length > 0){
//     render(langfilterResult);
// }else{
//     render(BOOKS);
// }
}
