

export function getIngredients(data) {
    const ingredients = [];
    for (let index = 1; index <= 15; index++) {
        const ingredient = data[`strIngredient${index}`];
        if (ingredient !== null) {
            ingredients.push(ingredient);
        }
    }
    return ingredients;
}

export function getRecipe(data) {
    const recipe = [];
    for (let index = 1; index <= 15; index++) {
        const ingredient = data[`strIngredient${index}`];
        const measure = data[`strMeasure${index}`];
        if (ingredient !== null && measure !== null) {
            recipe.push(`${ingredient} - ${measure}`);
        } else if (ingredient !== null) {
            recipe.push(`${ingredient}`);
        }
    }
    return recipe;
}