// Version 2 : Store Todos in Local Storage in an Array
// This version stores the To-Do items in an array and saves them to local storage,
// allowing the tasks to persist even after the page is refreshed.

/** Before adding tasks , taking the string from local storage as arrays using JSON.parse so that the tasks persists on reload as well**/

let orderedList = document.querySelector(".orderedList");

let savedTasks=localStorage.getItem("task");

let taskArray = []; // array to store To-dos

if(savedTasks)
{
  taskArray=JSON.parse(savedTasks); // This converts string to array 

  taskArray.forEach(taskText=>{

    let list = document.createElement("li"); // recreating the same thing 
    list.textContent = taskText;

    let remove = document.createElement("span");

    orderedList.appendChild(list); // appending the list inside ordered list
    list.appendChild(remove); //appends remove inside the list
    remove.textContent = "remove";

    //Function that removes the task from array

    function removesTheTaskFromArray() {
      let index = taskArray.indexOf(taskText);
      if (index != -1) {
        taskArray.splice(index, 1);
      }
      orderedList.removeChild(list);
      localStorage.setItem("task", JSON.stringify(taskArray));
    }

    //same styling here as well 
     Object.assign(remove.style, {
      color: "white",
      backgroundColor: "red",
      borderRadius: "2rem",
      marginLeft: "2rem",
      cursor: "pointer",
    });

    list.style.color = "white";
    orderedList.style.listStylePosition = "inside";


    remove.addEventListener("click", removesTheTaskFromArray);
  })
}





// other Functionality For to-do list starts here , i.e. adding and removing tasks from array and displaying , etc.

let containerForInputAndAddButton = document.querySelector(
  ".containerForInputAndAddButton"
);

let inputBox = document.querySelector(".inputBox");

let addButton = document.querySelector(".addButton");





//Function that adds task in an array

function addsTaskToArray() {
  if (inputBox.value === "" || inputBox.value.trim() === "") {
    alert("Please enter a task!!!");
  } else {
    let taskText = inputBox.value.trim();
    taskArray.push(taskText); // Pushes the value of inputBox into the array
    localStorage.setItem("task", JSON.stringify(taskArray));

    let list = document.createElement("li"); // 'list' is which combines task and remove both
    list.textContent = taskText;

    let remove = document.createElement("span");

    orderedList.appendChild(list); // appending the list inside ordered list
    list.appendChild(remove); //appends remove inside the list
    remove.textContent = "remove";

    //Function that removes the task from array

    function removesTheTaskFromArray() {
      let index = taskArray.indexOf(taskText);
      if (index != -1) {
        taskArray.splice(index, 1);
      }
      orderedList.removeChild(list);
      localStorage.setItem("task", JSON.stringify(taskArray));
    }

    //triggers task remove
    remove.addEventListener("click", removesTheTaskFromArray);

    //styling
    Object.assign(remove.style, {
      color: "white",
      backgroundColor: "red",
      borderRadius: "2rem",
      marginLeft: "2rem",
      cursor: "pointer",
    });

    list.style.color = "white";
    orderedList.style.listStylePosition = "inside";

    inputBox.value = ""; // Resets the value of inputBox as blank for other tasks as well
  }
  console.log(`Array is : ${taskArray}`);
}

// Triggers when 'plus' button is clicked , calls the addTaskToArray() function

addButton.addEventListener("click", addsTaskToArray);
