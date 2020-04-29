document.querySelector("#grand").addEventListener('click', () => {
    console.log('grandparent');
});

document.querySelector("#parent").addEventListener('click', () => {
    console.log('parent');
});

document.querySelector("#child").addEventListener('click', () => {
    console.log('child');
});