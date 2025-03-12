const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size-btn");
const resetBtn = document.querySelector(".reset-btn");
const checkBoxRgb = document.querySelector("#checkbox");

let buttonClicked = false;
container.addEventListener("mousedown", () => {
    buttonClicked = true;
})

container.addEventListener("mouseup", () => {
    buttonClicked = false;
})

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("flexbox");
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement("div");
            column.classList.add("insideDiv");
            column.addEventListener("mouseenter", (e) => {
                if(buttonClicked){
                    if(isRgbOn){
                        e.target.style.backgroundColor = generateRandomColor();
                    }
                    else {
                        e.target.style.backgroundColor = "black";
                    }
                   
                }
            })
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

function clearContainer(){
    while(container.firstChild)
        container.removeChild(container.firstChild);
}

sizeBtn.addEventListener("click",() => {
    let gridSize = prompt("Number of squares per side [1,100]");
    if(gridSize > 100 || gridSize < 1)
    {
        alert("INVALID INPUT!\nPick a size between 1 and 100!");
        return;
    }
    clearContainer();
    createGrid(gridSize);
    resetBtn.addEventListener("click", () => {
        clearContainer();
        createGrid(gridSize);
        buttonClicked = false;
    })
})

let isRgbOn = false;

function changeToRgbDrawing(){
    if(checkBoxRgb.checked == true)
        isRgbOn = true;
    else
        isRgbOn = false;
}

function generateRandomColor() {
    const randomColor = Math.round((Math.random() * 0xFFFFFF)).toString(16);
    return "#" + randomColor;
}