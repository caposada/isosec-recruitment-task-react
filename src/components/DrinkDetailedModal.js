import { getRecipe } from "../helpers/utils";

export default function DrinkDetailedModal({ drink, onClose }) {


    const recipe = getRecipe(drink);
    console.log(recipe);

    return (
        <div className="drinkdetailed">
            <div className="closeButton" onClick={onClose}>X</div>
            <img className="drinkdetailed__thumnail" src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail`} />
            <div className="drinkdetailed__name">            
                {drink.strDrink} 
            </div>
            <div className="drinkdetailed__alcoholic">  
                ({drink.strAlcoholic})  
            </div>
            <div className="drinkdetailed__ingredients">
                {
                    recipe.map((ingredient, index) => {
                        return (
                            <div key={index} className="ingredient drinkdetailed__ingredient">
                                <i>{ingredient}</i>
                            </div>
                        )
                    })
                }
            </div>
            <div className="drinkdetailed__instructions">
                {drink.strInstructions}
            </div>
        </div>
    )
}