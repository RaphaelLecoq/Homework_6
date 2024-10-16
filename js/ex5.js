const DisplayTable = () => {
    const output = document.getElementById('output');
    const table = document.createElement('table');

    for (let i = 1; i <= 12; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');

        cell.textContent = i;
        cell.classList.add('centerText');

        if (i % 4 == 0) {
            cell.classList.add('background');
        }

        row.appendChild(cell);
        table.appendChild(row);
    }
    output.appendChild(table);
}

DisplayTable();
