const hourHand = document.querySelector('.hour__hand');
const minutesHand = document.querySelector('.mins__hand');
const secondsHand = document.querySelector(".sec__hand");

function setDate() {
  const now = new Date();
  const hour = now.getHours();
  const hoursDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  if(secondsDegree === 450) { // Needs ajustment seconds hand glitches backwards after 450deg
    secondsHand.style.transition == '0s';
  } else{ secondsHand.style.transform = `rotate(${secondsDegree}deg)`;}
}

setInterval(setDate, 1000);