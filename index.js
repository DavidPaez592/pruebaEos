var input = document.querySelector(".search-bar2 input[type='text']");
var day = "Tuesday";
var numbers = "215,523 pcs";
var spaceInPixels = 143;

function updateSpaceInPixels() {
  if (window.innerWidth >= 393 && window.innerHeight <= 1320) {
    spaceInPixels = 143;
  } else {
    spaceInPixels = 74;
  }
}

function updatePlaceholder() {
  var value = day + " ".repeat(spaceInPixels) + numbers;
  input.placeholder = value;
}

window.addEventListener('DOMContentLoaded', function () {
  updateSpaceInPixels();
  updatePlaceholder();

  window.addEventListener('resize', function () {
    updateSpaceInPixels();
    updatePlaceholder();
  });

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const authors = data.map(item => item.author);
      const elements = document.querySelectorAll('[class^="textoImagen"]');
      elements.forEach((element, index) => {
        if (authors[index] && element) {
          element.textContent = authors[index];
        }
      });
    })
    .catch(error => {
      console.log('Error al cargar el archivo JSON:', error);
    });

  fetch('https://picsum.photos/v2/list?page=2&limit=100')
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);
      // Aquí puedes realizar las operaciones que necesites con los datos recibidos
    })
    .catch(error => {
      console.log('API Error:', error);
    });
});
