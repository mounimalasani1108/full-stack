document.querySelector("form").addEventListener("submit",todolist);


function todolist() {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    let itemname = document.querySelector("#name").value;
    let quan = document.querySelector("#qty").value;
    let priority = document.querySelector("#priority").value;
    
    // Create table cells and row
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    
    // Assign values to cells
    td1.innerText = itemname;
    td2.innerText = quan;
    td3.innerText = priority;
    
    // Append cells to the row
    tr.append(td1, td2, td3);
    
    // Append the row to the table body
    document.querySelector("tbody").append(tr);
    document.querySelector("#name").value="";
    document.querySelector("#qty").value="";
}