// event listeners
document.querySelector("button").addEventListener("click", zodiac)
document.querySelector(".reset").addEventListener("click", reset)

// zodiac function
function zodiac(){
const input = (document.querySelector("#month").value).toLowerCase();
const date = Number(document.querySelector("#date").value);

console.log(input)
if ((input === "december"&&(date>=22 && date<=31))||(input === "january"&&(date>=1 && date<=19))){
    document.querySelector("#result").innerText = "Capricorn";

}else if ((input === "january"&&(date>=20 && date<=31))||(input === "february"&&(date>=1 && date<=18))){
    document.querySelector("#result").innerText = "Aquarius";

}else if ((input === "february"&&(date>=19 && date<=28))||(input === "march"&&(date>=1 && date<=19))){
    document.querySelector("#result").innerText = "Pisces";

}else if ((input === "march"&&(date>=20 && date<=31))||(input === "april"&&(date>=1 && date<=19))){
    document.querySelector("#result").innerText = "Aries";

}else if ((input === "april"&&(date>=20 && date<=30))||(input === "may"&&(date>=1 && date<=20))){
    document.querySelector("#result").innerText = "Taurus";

}else if ((input === "may"&&(date>=21 && date<=31))||(input === "june"&&(date>=1 && date<=20))){
    document.querySelector("#result").innerText = "Gemini";

}else if ((input === "june"&&(date>=21 && date<=30))||(input === "july"&&(date>=1 && date<=22))){
    document.querySelector("#result").innerText = "Cancer";

}else if ((input === "july"&&(date>=23 && date<=31))||(input === "august"&&(date>=1 && date<=22))){
    document.querySelector("#result").innerText = "Leo";

}else if ((input === "august"&&(date>=23 && date<=31))||(input === "september"&&(date>=1 && date<=22))){
    document.querySelector("#result").innerText = "Virgo";

}else if ((input === "september"&&(date>=23 && date<=31))||(input === "october"&&(date>=1 && date<=22))){
    document.querySelector("#result").innerText = "Libra";

}else if ((input === "october"&&(date>=23 && date<=31))||(input === "november"&&(date>=1 && date<=21))){
    document.querySelector("#result").innerText = "Scorpio";

}else if ((input === "november"&&(date>=22 && date<=31))||(input === "december"&&(date>=1 && date<=21))){
    document.querySelector("#result").innerText = "Sagittarius";

}else{
    document.querySelector("#result").innerText = "please enter birth date";
}
}

// reset function
function reset(){
document.querySelector("#month").value = "";
document.querySelector("#date").value ="";
document.querySelector("#result").innerText ="";
}

// Worked on with classmates mau,angy, marjorie, winnie, jazzi, justin jimierz, ken and erica also used the career class weekend template from @leon noel and codecademy as refernce.
