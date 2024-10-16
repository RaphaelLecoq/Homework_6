const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const displayDictionary = () => {
    const content = document.getElementById('content');
    const dl = document.createElement('dl');

    words.forEach(word => {
        const dt = document.createElement('dt');
        dt.innerHTML = `<strong>${word.term}</strong>`;

        const dd = document.createElement('dd');
        dd.textContent = word.definition;

        dl.appendChild(dt);
        dt.appendChild(dd);
    })
    content.appendChild(dl);
}

displayDictionary();
