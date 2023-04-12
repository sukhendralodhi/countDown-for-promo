let time = 1;
let promoTime = time * 60;

let coutingEle = document.getElementById("counting");

const startCountDown = () => {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      coutingEle.innerText = "Promo code ended!";
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime % 60);

      coutingEle.innerText = `Time: ${hours}hr : ${min}min : ${sec}sec Left`;
    }
  }, 1000);
};
startCountDown();
