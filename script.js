let boxSize = parseInt(prompt("Enter box size"));
const container = document.querySelector('.container')

let randomColor = () => {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

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

const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = randomColor();
            event.target.style.borderColor = randomColor();
            });
        });
})

const bw = document.querySelector('#bw')
bw.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'rgb(57, 37, 37)';
            event.target.style.borderColor = 'rgb(57, 37, 37)';
            });
        });
})