const log = () => {
    console.log('app.js');
}
const component = () => {
    const element = document.createElement('div');

    element.innerHTML = 'written in JavaScript';

    return element;
}

document.body.appendChild(component());

export { log, component };
