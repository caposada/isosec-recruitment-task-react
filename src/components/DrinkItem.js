import { getIngredients } from "../helpers/utils";

export default function DrinkItem({ drink }) {


    const ingredients = getIngredients(drink);
    console.log(ingredients);

    return (
        <div className="drinkitem">
            <img className="drinkitem__thumnail" src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail`} />
            <div className="drinkitem__details fade">
                <div className="drinkitem__name">            
                    {drink.strDrink} ({drink.strAlcoholic})
                </div>
                <div className="drinkitem__ingredients">
                    {
                        ingredients.map((ingredient) => {
                            return (
                                <div className="drinkitem__ingredient">
                                    <i>{ingredient}</i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}