document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("lastModified").textContent = document.lastModified;

  const tempC = 10; // Celsius
  const windSpeedKmh = 5; // km/h

  function calculateWindChillC(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
      const windChill =
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16);
      return windChill.toFixed(1);
    } else {
      return "N/A";
    }
  }

  const windChill = calculateWindChillC(tempC, windSpeedKmh);

  document.getElementById("temp").textContent = `${tempC} °C`;
  document.getElementById("wind").textContent = `${windSpeedKmh} km/h`;
  document.getElementById("windchill").textContent =
    windChill === "N/A" ? windChill : `${windChill} °C`;

  function setHeroHeight() {
    const hero = document.querySelector('.hero');
    if (window.innerWidth > 768) {
      hero.style.height = `${window.innerHeight}px`;
    } else {
      hero.style.height = "auto";
    }
  }

  window.addEventListener('resize', setHeroHeight);
  setHeroHeight();
});
