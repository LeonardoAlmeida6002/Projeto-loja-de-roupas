const imgs =document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrosel, 1800);

const inaugurationDate = new Date('2024-07-20T19:45:00');

function updateCountdown() {
  const currentDate = new Date();
  const difference = inaugurationDate - currentDate;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
      <div>${days} Dias</div>
      <div>${hours} Horas</div>
      <div>${minutes} Minutos</div>
      <div>${seconds} Segundos</div>
    `;
  } else {
    document.getElementById('countdown').innerHTML = "A inauguração já ocorreu!";
  }
}

setInterval(updateCountdown, 1000);

