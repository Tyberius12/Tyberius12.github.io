// script.js

// Function to fetch recipe details and display them
function displayRecipeDetails(recipeId) {
    // Simulated data for demonstration purposes
    const recipes = [
        {
            id: 1,
            title: 'Recipe 1',
            ingredients: ['Ing', 'Ingredient 2', 'Ingredient 3'],
            instructions: '',
            image: 'grilled chicken.jpg'
        },
        {
            id: 2,
            title: 'Recipe 2',
            ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
            instructions: 'Step A: Do this. Step B: Do that. Step C: Do something else.',
            image: 'recipe2.jpg'
        }
    ];

    // Find the recipe by its ID
    const recipe = recipes.find(recipe => recipe.id === recipeId);

    if (recipe) {
        // Construct HTML for recipe details
        const html = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

        // Display recipe details in a modal or on a separate page
        alert(html); // For demonstration, replace with your preferred method of displaying the details
    } else {
        alert('Recipe not found.');
    }
}

// Event listener for clicking on a recipe link
document.addEventListener('DOMContentLoaded', function() {
    const recipeLinks = document.querySelectorAll('.recipe a');
    recipeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const recipeId = parseInt(this.getAttribute('data-id'));
            displayRecipeDetails(recipeId);
        });
    });
});
