

export default function DrinkItem({ drink }) {


    return (
        <div className="drinkitem">
            <img className="drinkitem__thumnail" src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail`} />
            <div className="drinkitem__name">            
                {drink.strDrink} ({drink.strAlcoholic})
            </div>
            <div>

            </div>
        </div>
    )
}