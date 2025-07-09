let containerForInputAndAddButton = document.querySelector(
  ".containerForInputAndAddButton");

let inputBox = document.querySelector(".inputBox");

let addButton = document.querySelector(".addButton");

let orderedList = document.querySelector(".orderedList");

let taskArray = []; // array to store To-dos

//Function that adds task in an array

function addsTaskToArray() {
  if (inputBox.value === "" || inputBox.value.trim() === "") {
    alert("Please enter a task!!!");
  } else {
    let taskText = inputBox.value.trim();
    taskArray.push(taskText); // Pushes the value of inputBox into the array

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
