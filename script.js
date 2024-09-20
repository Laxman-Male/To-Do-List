const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')
// const format=inputBox.value;
function AddTask() {
    if (inputBox.value === "") {
        alert('Please write something')
    }
    else if (inputBox.value.length > 8) {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        inputBox.value.split(/\r?\n/)

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

        console.log(inputBox.value)
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to store the data as it is
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

//to show the data which is saved
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();