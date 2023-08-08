function modeChange(){
    if(document.getElementById("tdBG").style.background =="black"){
        document.getElementById("tdBG").style.background = "#fff";
        document.getElementById('iconImg').src = "Images/icon.jpg"; 
        document.getElementById("todoTitle").style.color = "#002765";
        document.getElementById("md").innerHTML = "&#x263C";
        document.getElementById("btnBG").style.background = "#ff584588";
        saveData();
    }
    else{
        document.getElementById("tdBG").style.background = "black";
        document.getElementById('iconImg').src = "Images/iChange.png"; 
        document.getElementById("inputBG").style.background = "lightgray";
        document.getElementById("todoTitle").style.color = "lightgreen";
        document.getElementById("md").innerHTML = "&#x263E";
        document.getElementById("btnBG").style.background = "#b5ee2fe0";
        saveData();
    }
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Opps! You didn't write anything??");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();