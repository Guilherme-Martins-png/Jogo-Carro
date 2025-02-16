const tartarugas1 = document.getElementById('tartarugas1');
const tartarugas2 = document.getElementById('tartarugas2');
const acelerarBtn = document.getElementById('acelerar');
const freiarBtn = document.getElementById('freiar');

let position = 0;
let velo = 2;
let pausar = false;
let animacaoID;

function animacao() {
    if (!pausar) {
        position -= velo;
        if (position < -100) {
            position = 0
        }
        tartarugas1.style.transform = `translateX(${position}%) translateY(-50%)`;
        tartarugas2.style.transform = `translateX(${position}%) translateY(-50%)`;
    }

    animacaoID = requestAnimationFrame(animacao);
}


animacao();

acelerarBtn.addEventListener('click', () => {
    if (pausar) {
        pausar = false;
        animacao();
    }
    if (velo < 10) {
        velo += 1;
    }
});

freiarBtn.addEventListener('click', () => {
    if (velo > 0) {
        velo -= 1;
    }
    if (velo === 0) {
        pausar = true;
        cancelAnimationFrame(animacaoID);
    }
});
