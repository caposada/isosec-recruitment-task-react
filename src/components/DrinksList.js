import { useState, useEffect } from 'react'
import DrinkItem from './DrinkItem'
import DrinkDetailedModal from "./DrinkDetailedModal";

export default function DrinksList({ cocktailName }) {
    const [ drinks, setDrinks ] = useState([]);
    const [ detailed, setDetailed ] = useState(null);

    useEffect(() => {        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
            .then(response => response.json())
            .then(data => setDrinks(data.drinks));
    }, [cocktailName]);

    return (
        <div className="drinkslist">
            {
                drinks.map((drink, index) => {
                    return (
                        <DrinkItem
                            key={index}
                            drink={drink}
                            itemClicked={(drink) => setDetailed(drink)} />
                    )
                })
            }
            { detailed !== null ?
                <DrinkDetailedModal 
                drink={detailed}
                onClose={() => setDetailed(null)}/> :
                <></> }
        </div>
    )
}