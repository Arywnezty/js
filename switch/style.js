const number= +prompt("please enter your number:");

switch (true) {
    case (number>=0 && number<30):
        document.body.style.background="blue";
        alert(number)
        break;
    case (number>=30 && number<60):
        document.body.style.background="red";
        alert(number)
        break;
    case (number>=60 && number<=100):
        document.body.style.background="green";
        alert(number)
        break;
    default:
        alert("invalid number")
}