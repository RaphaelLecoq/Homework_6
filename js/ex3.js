const changeStyle = () => {
    const paragraphe = document.querySelectorAll('p');

    paragraphe.forEach(p => {
        p.style.fontWeight = 'bold';
        p.style.backgroundColor = 'yellow';
    });
}

changeStyle();