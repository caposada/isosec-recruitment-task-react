import { getIngredients } from "../helpers/utils";

export default function DrinkItem({ drink, itemClicked }) {

    const ingredients = getIngredients(drink);

    return (
        <div className="drinkitem" onClick={() => itemClicked(drink)}>
            <img className="drinkitem__thumnail" src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail`} />
            <div className="drinkitem__details fade">
                <div className="drinkitem__name">            
                    {drink.strDrink} ({drink.strAlcoholic})
                </div>
                <div className="drinkitem__ingredients">
                    {
                        ingredients.map((ingredient, index) => {
                            return (
                                <div key={index} className="ingredient drinkitem__ingredient">
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