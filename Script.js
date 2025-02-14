const road1 = document.querySelector('.estrada_um .tartarugas');
const road2 = document.querySelector('.estrada_dois .tartarugas');
const acelerarBtn = document.getElementById('botao_acelerar');
const freiarBtn = document.getElementById('botao_freiar');

let speed = 2;

function updateSpeed() {
    road1.style.animationDuration = '${speed}s';
    road2.style.animationDuration = '${speed}s';
}

acelerarBtn.addEventListener ('click' , () => {
    if (speed > 0.5) {
        speed -= 0.2;
        updateSpeed();
    }
}

);

freiarBtn.addEventListener('click', () => {
    if (speed < 5 ) {
        speed += 0.2;
        updateSpeed();
    }

});