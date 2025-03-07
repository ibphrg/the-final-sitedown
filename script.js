const tankChange = document.getElementById("tankButton");
const healChange = document.getElementById("healButton");
const dpsChange = document.getElementById("dpsButton");
const baseChange = document.getElementById("heidi");
const flameButt = document.getElementById("flameButton");

function changeTankClass(){
    document.getElementById("heidi").src = "img/Hydira/WAR.png";
}

function changeHealClass(){
    document.getElementById("heidi").src = "img/Hydira/SCH.png";
}

function changeDpsClass(){
    document.getElementById("heidi").src = "img/Hydira/NIN.png";
}

function changeToBase(){
    document.getElementById("heidi").src = "img/Hydira/BASE.png";
}

function buttAlert(){
    alert('Have you heard of the critically acclaimed MMORPG Final Fantasy XIV? With an expanded free trial which you can play through the entirety of A Realm Reborn and the award-winning Heavensward expansion up to level 60 for free with no restrictions on playtime.');
}

tankChange.addEventListener('click',changeTankClass);
healChange.addEventListener('click',changeHealClass);
dpsChange.addEventListener('click',changeDpsClass);
baseChange.addEventListener('click', changeToBase);
flameButt.addEventListener('click', buttAlert);