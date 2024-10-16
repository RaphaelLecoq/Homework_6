const bodyNodes = () => {
    const nodes = (node) => {
        console.log(node);
        node.childNodes.forEach(child => nodes(child));
    };
    nodes(document.body);
}

bodyNodes();
