let container = document.getElementById("container");
let resetButton = document.getElementById("btn");
resetButton.addEventListener("click", resetGrid);
createClickableGrid(15,15);


function resetGrid() {
    let tdColor = document.querySelectorAll("td");
    tdColor.forEach(cell => cell.bgColor = "white");
    let newGrid = prompt("New grid size? (eg. format: 12x12)")
    let newRows;
    let newCols;
    if (newGrid.length == 5) {
        newRows = newGrid.slice(0,2);
        newCols = newGrid.slice(3,5);
    }
    else if (newGrid.length < 5) {
        newRows = newGrid.slice(0,1);
        newCols = newGrid.slice(2,3);
    }
    document.querySelector("table").remove();
    createClickableGrid(newRows, newCols);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (var i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16) + 1];
    }
    return randomColor;
}

function getColorFromInput() {
    let colorSelect = document.getElementsByName("color");
    let color = "";
    colorSelect.forEach(function(e) {
        if (e.checked) {
            if (e.value === "rainbow") {
                color = getRandomColor();
            } else if (e.value === "black") {
                color = "black";
            }
        } 
    })
    return color;
}

function createClickableGrid(rows, cols) {
    let grid = document.createElement("table");
    grid.className = "grid";
    container.appendChild(grid);
    for (let r = 0; r < rows; ++r) {
        let tr = grid.appendChild(document.createElement("tr"));
        for (let c = 0; c < cols; ++c) {
            let cell = tr.appendChild(document.createElement("td"));
            cell.addEventListener("mouseover", function(e) {
                e.target.bgColor = getColorFromInput();
            })
        }
    }
}
