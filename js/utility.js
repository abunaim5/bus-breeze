// get element by id
function getElementsById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

// get elements by class name
function getElementsByClassName(className) {
    const element = document.querySelectorAll(className);
    return element;
}

// get elements inner text by id
function getElementsInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// set elements inner text by id
function setElementsInnerTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

// get elements input value by id
function getInputValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = element.value;
    return value;
}

// set elements background color by id
function setElementsBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#1DD100';
}

// set elements attribute by id
function setElementsAttributeById(elementId, attributeName) {
    const element = document.getElementById(elementId);
    element.setAttribute(attributeName, true);
}

// remove elements attribute by id
function removeElementsAttributeById(elementId, attributeName) {
    const element = document.getElementById(elementId);
    element.removeAttribute(attributeName);
}

// append table data by element id
function appendTableDataById(elementId, td1, td2, td3) {
    const element = document.getElementById(elementId);
    const newRow = document.createElement('tr');
    const newData1 = document.createElement('td');
    const newData2 = document.createElement('td');
    const newData3 = document.createElement('td');
    newData1.appendChild(document.createTextNode(td1));
    newData2.appendChild(document.createTextNode(td2));
    newData3.appendChild(document.createTextNode(td3));
    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    newRow.appendChild(newData3);
    element.appendChild(newRow);
}