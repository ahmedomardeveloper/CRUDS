const displayFunction = (parent, ele, txt = null, classes = null, attr = null) => {
    const myElement = document.createElement(ele);
    parent.appendChild(myElement)
    if (txt)
        myElement.innerText = txt;
    if (classes)
        myElement.classList = classes;

    if (attr)
        attr.array.forEach(at => {
            myElement.setAttribute(at.key, at.value)
        });
    return myElement;

}


displayFunction(document.querySelector('body'), "p", "ahmed", "x text-center", [{ key: 'id', value: '1' }])