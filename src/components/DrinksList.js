import { useState, useEffect } from 'react'
import DrinkItem from './DrinkItem'

export default function DrinksList({ cocktailName }) {
    const [ drinks, setDrinks ] = useState([]);

    useEffect(() => {        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
            .then(response => response.json())
            .then(data => setDrinks(data.drinks));
    }, [cocktailName]);

    return (
        <div>
            {
                drinks.map((drink, index) => {
                    return (
                        <DrinkItem
                            key={index}
                            drink={drink} />
                    )
                })
            }
        </div>
    )
}