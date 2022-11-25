let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let css = document.querySelector('h3');
let body = document.querySelector('body');

const setGradient = () => {
	body.style.background = 'linear-gradient(to right,'+ color1.value +', '+ color2.value+')';
	css.textContent = body.style.background +';';
}
color1.oninput = setGradient;
color2.oninput = setGradient;