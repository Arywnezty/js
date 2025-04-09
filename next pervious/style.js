const nextbtn=document.getElementById("next");
const prevbtn=document.getElementById("prev");
const image=document.getElementById("mainImage");
const description=document.getElementById("desc");

const slider=[
    {
        images:"./images/1.jpg",
        descriptions:
        "Real Madrid are one of the most successful football clubs in he world and most successful in Europe. In domestic football, the club has won 71 trophies; a record 36 La Liga titles, 20 Copa del Rey, 13 Supercopa de España, a Copa Eva Duarte and a Copa de la Liga."
    }
    ,
    {
        images:"./images/2.jpg",
        descriptions:"Liverpool FC is an English professional football (soccer) club based in Liverpool, England. It is the most successful English team in European football tournament history, having won six European Cup/Champions League trophies. The club has also won the English top-division league title 19 times."
    }
    ,
    {
        images:"./images/3.jpg",
        descriptions:"Manchester City Football Club is a professional football club based in Manchester, England, that competes in the Premier League, the top flight of English football. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894."
    }
    ,
    {
        images:"./images/4.jpg",
        descriptions:"Football Club Internazionale Milano S.p.A. Founded in 1908 following a schism within the Milan Foot-Ball and Cricket Club (now AC Milan), Inter won its first championship in 1910. Since its formation, the club has won 37 domestic trophies, including 20 league titles, nine Coppa Italia, and eight Supercoppa Italiana."
    }
    ,
    {
        images:"./images/5.jpg",
        descriptions:"The team has won many tournaments, which is why Barcelona is considered one of the best teams in the world. Their home stadium, Camp Nou, is the largest stadium in Europe with a capacity of 99,354. Barcelona have won 97 official titles. They are the most successful club in Spain, with 75 titles."
    }
]

let index=0;
function uppdate(){
    image.src=slider[index].images;
    description.textContent=slider[index].descriptions;
}

function nextimage(){
    if(index===slider.length-1){
        index=0;
    }else{
        index++;
    }
    uppdate();
}
function previmage(){
    if(index===0){
        index=slider.length-1;
    }else{
        index--;
    }
    uppdate();
}

nextbtn=addEventListener("click",nextimage);
prevbtn=addEventListener("click",previmage);
uppdate();
