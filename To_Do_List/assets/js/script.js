const FirstIn = document.getElementById("first_in");
const SecondIn = document.getElementById("second_in");
const ThirdIn = document.getElementById("third_in");
const ColorChoice = document.getElementById("colorChoice");
const ItemList = document.getElementById("table_1");

function add_task() {
    if (FirstIn.value === "") {
        alert("Can't be empty");
    } else {
        const newRow = ItemList.insertRow(1);


        const taskCell = newRow.insertCell(0);
        taskCell.textContent = FirstIn.value;

        const dateCell = newRow.insertCell(1);
        dateCell.textContent = SecondIn.value;

        const priorityCell = newRow.insertCell(2);
        priorityCell.textContent = ColorChoice.options[ColorChoice.selectedIndex].text;

        const timeCell = newRow.insertCell(3);
        timeCell.textContent = ThirdIn.value;

        const deleteButtonCell = newRow.insertCell(4);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            deleteRow(this);
        };
        deleteButtonCell.appendChild(deleteButton);

        FirstIn.value = "";
        SecondIn.value = "";
        ThirdIn.value = "";

        if (ColorChoice.value === "red") {
            ItemList.insertBefore(newRow, ItemList.rows[1]);
        } else if (ColorChoice.value === "green") {
            const highPriorityIndex = Array.from(ItemList.rows).findIndex((row) => row.cells[2].textContent === "Urgent");
            ItemList.insertBefore(newRow, ItemList.rows[highPriorityIndex + 1]);
        } else if (ColorChoice.value === "blue") {
            ItemList.appendChild(newRow);
        }
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
