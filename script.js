const tankChange = document.getElementById("tankButton");
const healChange = document.getElementById("healButton");
const dpsChange = document.getElementById("dpsButton");

function changeTankClass(){
    document.getElementById("heidi").src = "img/Hydira/WAR.png";
}

function changeHealClass(){
    document.getElementById("heidi").src = "img/Hydira/SCH.png";
}

function changeDpsClass(){
    document.getElementById("heidi").src = "img/Hydira/NIN.png";
}

tankChange.addEventListener('click',changeTankClass);
healChange.addEventListener('click',changeHealClass);
dpsChange.addEventListener('click',changeDpsClass);