

export function getIngredients(data) {
    const ingredients = [];
    for (let index = 1; index <= 15; index++) {
        const item = data[`strIngredient${index}`];
        if (item !== null) {
            ingredients.push(item);
        }
    }
    return ingredients;
}