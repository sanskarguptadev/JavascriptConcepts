document.querySelector("#grand").addEventListener('click', () => {
    console.log('grandparent');
}, true); //capturing

document.querySelector("#parent").addEventListener('click', () => {
    console.log('parent');
}, true); //bubling

document.querySelector("#child").addEventListener('click', (e) => {
    console.log('child');
    //e.stopPropagation(); stop the code from execution
}, true); //capturing

//if dont pass the argument by default it will be false and event bubling will happen