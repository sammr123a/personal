let listOfStuff = JSON.parse(localStorage.getItem("listOfStuff")) || [];

const form=document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();
    const input=document.querySelector(".input-1");

    listOfStuff.push(input.value);
    localStorage.setItem("listOfStuff", JSON.stringify(listOfStuff));
    displayList(listOfStuff);

});

function displayList(listOfStuff){
    let showList = "";

    for (let i = 0; i < listOfStuff.length; i++) {
        showList += `<div class="display-inputs">
            ${listOfStuff[i]}
        </div>`;
    }

    document.getElementById("listStuff").innerHTML = showList;
}


displayList(listOfStuff);