const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    randomBg();
});

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
};

//hsl(hue, saturation, lightness)