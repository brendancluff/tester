document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

// const menuButton = document.getElementById('menu');
// const navMenu = document.getElementById('navMenu');

// menuButton.addEventListener('click', () => {
//   navMenu.classList.toggle('open');
//   menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
// });

document.querySelectorAll('#filterNav button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterTemples(filter);
  });
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

   {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/208x117/salt-lake-temple-159320.jpg"
  },
  {
    templeName: "Gilbert Arizona Temple",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 76000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/33e19ea3cba5f4aa250fab5e170af503d7bf667f/full/320%2C/0/default"
  },
  {
    templeName: "Fresno California Temple",
    location: "Fresno, California, United States",
    dedicated: "2000, October, 1",
    area: 20000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/afe9eb9888bd6c7a011b33a41aac6e03fdc39282/full/320%2C/0/default"
  }
];

function displayTemples(templeArray) {
  const container = document.getElementById('templeList');
  container.innerHTML = ''; // Clear previous content

  templeArray.forEach((temple) => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy"; 

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    container.appendChild(card);
  });
}

displayTemples(temples);

function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case 'old':
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
      });
      break;

    case 'new':
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
      });
      break;

    case 'large':
      filtered = temples.filter(t => t.area > 90000);
      break;

    case 'small':
      filtered = temples.filter(t => t.area < 10000);
      break;

    case 'home':
    default:
      filtered = temples;
      break;
  }

  displayTemples(filtered);
}
