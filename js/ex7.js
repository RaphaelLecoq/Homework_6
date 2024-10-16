const sumOfTwoInt = () => {
    const input1 = prompt("Number1:");
    const input2 = prompt("Number2:");

    const content = document.getElementById('content');

    const Number1 = parseFloat(input1);
    const Number2 = parseFloat(input2);

    content.innerHTML = '';

    if (isNaN(Number1) || !Number.isInteger(Number1) || isNaN(Number2) || !Number.isInteger(Number2)) {
        const result = document.createElement('span');
        const message = document.createElement('span');

        result.style.color = 'red';
        result.style.fontWeight = 'bold';

        result.textContent = `Error! `;
        message.textContent = `You must enter integers. You entered "${input1}" and "${input2}". Try again.`;

        content.appendChild(result);
        content.appendChild(message);
    } else {
        const sum = Number1 + Number2;
        const result = document.createElement('span');
        const message = document.createElement('span');

        result.style.color = 'red';
        result.style.fontWeight = 'bold';

        message.textContent = `${Number1} + ${Number2} = `;
        result.textContent = `${sum}`;

        content.appendChild(message);
        content.appendChild(result);
    }
}

sumOfTwoInt();