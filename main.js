const textDiv = document.querySelector("#main_text");
const speedE1 = document.querySelector ("#speed");

const text = "PRIMER NEKOG TEKSTA ZA VEZBU AUTO-TEXT ";

let i = 1;
let speed = 1000;

const writeText = function() {
textDiv.innerHTML = text.slice(0, i);
i++;

if( i > text.length)  {
    i = 1;
}

//console.log(speed);

setTimeout( writeText , speed);

};

writeText();

speedE1.addEventListener("input", (e) => {
    speed = 1000 / e.target.value;
});