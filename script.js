const container = document.querySelector(".container");

for (let i = 0; i < 80; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("flexbox");
    for (let j = 0; j < 80; j++) {
        const column = document.createElement("div");
        column.classList.add("insideDiv");
        column.addEventListener("mouseenter", (e) => {
            e.target.classList.add("bg-black")
        })
        row.appendChild(column);
    }
    container.appendChild(row);
}