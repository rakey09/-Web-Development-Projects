const recipes = [
  {
      title: "Spaghetti Bolognese",
      ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Olive Oil", "Salt", "Pepper"],
      instructions: "1. Cook the spaghetti according to the package instructions. 2. In a large pan, heat the olive oil over medium heat. Add the onion and garlic, and cook until softened. 3. Add the ground beef and cook until browned. 4. Stir in the tomato sauce, salt, and pepper. Simmer for 20 minutes. 5. Serve the sauce over the spaghetti."
  },
  {
      title: "Chicken Curry",
      ingredients: ["Chicken Breast", "Coconut Milk", "Curry Powder", "Onion", "Garlic", "Ginger", "Vegetable Oil", "Salt"],
      instructions: "1. Cut the chicken into bite-sized pieces. 2. In a large pan, heat the vegetable oil over medium heat. Add the onion, garlic, and ginger, and cook until softened. 3. Add the chicken and cook until browned. 4. Stir in the curry powder and cook for 2 minutes. 5. Add the coconut milk and salt. Simmer for 15 minutes. 6. Serve the curry with rice."
  },
  {
      title: "Caesar Salad",
      ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing", "Chicken Breast (optional)"],
      instructions: "1. Wash and chop the romaine lettuce. 2. In a large bowl, toss the lettuce with the Caesar dressing. 3. Add the croutons and Parmesan cheese. 4. If using, grill the chicken breast and slice it into strips. Add to the salad. 5. Serve immediately."
  }
];

const recipeList = document.getElementById('recipeList');
const recipeDetail = document.getElementById('recipeDetail');
const searchInput = document.getElementById('searchInput');

function displayRecipes(recipes) {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
      const recipeItem = document.createElement('div');
      recipeItem.className = 'recipe-item';
      recipeItem.textContent = recipe.title;
      recipeItem.onclick = () => displayRecipeDetail(index);
      recipeList.appendChild(recipeItem);
  });
}

function displayRecipeDetail(index) {
  const recipe = recipes[index];
  recipeDetail.innerHTML = `
      <h2>${recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <h3>Instructions:</h3>
      <p>${recipe.instructions}</p>
  `;
  recipeDetail.style.display = 'block';
}

function filterRecipes() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
  displayRecipes(filteredRecipes);
}

displayRecipes(recipes);
