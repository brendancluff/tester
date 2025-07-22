document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("lastModified").textContent = document.lastModified;

  function calculateWindChill(tempF, speed) {
    if (tempF <= 50 && speed > 3) {
      return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16)
      ).toFixed(1);
    } else {
      return "N/A";
    }
  }

  const temp = 40; 
  const windSpeed = 5; 

  document.getElementById("temp").textContent = `${temp}°F`;
  document.getElementById("wind").textContent = `${windSpeed} mph`;
  document.getElementById("windchill").textContent = `${calculateWindChill(temp, windSpeed)}°F`;

  function setHeroHeight() {
    const hero = document.querySelector('.hero');
    hero.style.height = `${window.innerHeight}px`;
  }

  window.addEventListener('resize', setHeroHeight);
  setHeroHeight();
});