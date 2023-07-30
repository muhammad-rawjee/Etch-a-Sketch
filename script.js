let boxSize = parseInt(prompt("Enter box size"));
const container = document.querySelector('.container')

console.log(container)
for (let i = 0; i < boxSize; i++){
    const div = document.createElement('div');
    div.classList.add('box-cont');
    container.appendChild(div);
}

const boxContainers = document.querySelectorAll('.container > .box-cont')
boxContainers.forEach((boxContainer) => {
    for (let i = 0; i < boxSize; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        boxContainer.appendChild(div);
    }
});

const boxes = document.querySelectorAll('.box-cont > .box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hover');
        });
    });