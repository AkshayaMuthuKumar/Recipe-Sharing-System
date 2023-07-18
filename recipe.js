
document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-btn");
  const closeButtons = document.querySelectorAll("#close-btn");
  const popups = document.querySelectorAll(".popup");

  viewButtons.forEach((viewBtn, index) => {
    viewBtn.addEventListener("click", () => {
      openPopup(index);
    });
  });

  closeButtons.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
      closePopup(index);
    });
  });

  function openPopup(index) {
    popups[index].classList.remove("hidden");
  }

  function closePopup(index) {
    popups[index].classList.add("hidden");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('card-container');
  const recipeForm = document.getElementById('recipe-form');
  const imageInput = document.getElementById('imageInput');
  const previewImage = document.getElementById('previewImage');


  imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function () {
        previewImage.src = reader.result;
        previewImage.style.display = 'block';
      });
      reader.readAsDataURL(file);
    }
  });

  recipeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const ingredientsInput = document.getElementById('ingredients');

    const newstartCard = document.createElement('div');
    const newCard = document.createElement('div');
    newstartCard.classList.add('newrecipe-listings');
    newCard.classList.add('newrecipe-card');

    const image = document.createElement('img');
    image.src = previewImage.src;
    newCard.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = titleInput.value;
    newCard.appendChild(title);

    const description = document.createElement('p');
    description.textContent = descriptionInput.value;
    newCard.appendChild(description);

    const ingredients = document.createElement('p');
    ingredients.textContent = 'Ingredients: ' + ingredientsInput.value;
    newCard.appendChild(ingredients);

    cardContainer.appendChild(newCard);

    recipeForm.reset();
  });
});

