function getTime() {
  const printTime = document.querySelector("#today");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  printTime.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function leftTime() {
  const printTime = document.querySelector("#xmas");
  const xmas = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  let leftDay = xmas - now;
  leftDay = Math.floor(leftDay / 1000); // milisec
  const seconds = leftDay % 60;
  leftDay = Math.floor(leftDay / 60); // minute
  const minutes = leftDay % 60;
  leftDay = Math.floor(leftDay / 60); // hour
  const hours = leftDay % 24;
  leftDay = Math.floor(leftDay / 24);
  const days = leftDay;

  printTime.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
  setInterval(getTime, 1000);
  setInterval(leftTime, 1000);
}

init();
