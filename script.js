const container = document.querySelector(".container");

for (let i = 0 ; i < 16 ; i++) {
    const row = document.createElement("div");
    row.classList.add("flexbox");
    for (let j = 0 ; j < 16 ; j++) {
        const column = document.createElement("div");
        column.classList.add("insideDiv");
        row.appendChild(column);
    }
    container.appendChild(row);
}