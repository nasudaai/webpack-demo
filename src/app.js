import { printMe } from './print.js';

const log = () => {
    console.log('app.js');
}

const component = () => {
    const element = document.createElement('div');
    element.style.margin = "20px";
    element.style.padding = "20px";
    element.style.backgroundColor = "rgb(220,240,235)";
    element.style.borderStyle = "dashed";
    element.style.borderColor = "green"

    const header = document.createElement('h1');
    header.innerHTML = 'written in JavaScript';

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    btn.style.display = 'block';

    element.appendChild(header);
    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());
const body = document.querySelector('body');
body.style.backgroundColor = "rgb(245,255,250)";

export { log, component };
