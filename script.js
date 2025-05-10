let butt = document.querySelector("#addButt");
let inp = document.querySelector("#inp");
let task = document.querySelector("#tasks");

// Load tasks from local storage on page load
window.addEventListener("load", function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskObj => {
        createTask(taskObj.text, taskObj.completed);
    });
});

// Add event listener to the "Add" button
butt.addEventListener("click", function () {
    if (inp.value === "") {
        alert("No value entered");
    } else {
        let val = inp.value;
        createTask(val, false);

        // Save to local storage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push({ text: val, completed: false });
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        inp.value = ""; // Clear input field
    }
});

// Function to create a task
function createTask(val, isCompleted) {
    let nDiv = document.createElement("div");
    task.prepend(nDiv);
    nDiv.id = "nDiv";

    let newEl = document.createElement("h3");
    newEl.id = "newEl";
    newEl.innerText = val;
    nDiv.prepend(newEl);

    let newImg = document.createElement("img");
    newImg.src = isCompleted ? "images/tick.png" : "images/empty.png";
    newImg.id = "newImg";
    nDiv.insertBefore(newImg, newEl);

    let newcross = document.createElement("img");
    newcross.id = "crossId";
    newcross.src = "images/cross.png";
    nDiv.append(newcross);

    // Apply completed styles if the task is already completed
    if (isCompleted) {
        newEl.style.textDecoration = "line-through";
    }

    // Mark task as completed or uncompleted
    newImg.addEventListener("click", function () {
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        let taskIndex = savedTasks.findIndex(taskObj => taskObj.text === val);

        if (newImg.src.includes("images/empty.png")) {
            newImg.src = "images/tick.png";
            newEl.style.textDecoration = "line-through";
            if (taskIndex !== -1) savedTasks[taskIndex].completed = true;
        } else if (newImg.src.includes("images/tick.png")) {
            newImg.src = "images/empty.png";
            newEl.style.textDecoration = "none";
            if (taskIndex !== -1) savedTasks[taskIndex].completed = false;
        }

        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });

    // Remove task
    newcross.addEventListener("click", function () {
        nDiv.remove();

        // Remove from local storage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks = savedTasks.filter(taskObj => taskObj.text !== val);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
}

//GSAP
let tl = gsap.timeline()
tl.from("#card",{
    opacity:"0",
    y:50,
    duration:.8,
    delay:.4,
})

tl.from("#head",{
    opacity:0,
    x:50,
    duration:.4,
})

tl.from(".inp",{
    opacity:0,
    x:50,
    duration:.4,
})



