const displayText400 = () => {
    const selector = document.querySelectorAll('li[class="400level"]');

    selector.forEach(course => {
        console.log(course.textContent);
    });
}

displayText400();