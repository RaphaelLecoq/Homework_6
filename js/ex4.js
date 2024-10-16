const addLink = () => {
    const link = document.getElementById('links');
    const is = document.getElementById('is');

    const newLinkList = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = 'https://www.csulb.edu/college-of-business';
    newLink.textContent = 'College of Business';

    newLinkList.appendChild(newLink);

    link.insertBefore(newLinkList, is);
}

addLink();