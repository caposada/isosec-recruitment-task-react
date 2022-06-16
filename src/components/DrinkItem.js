import { useState, useEffect } from 'react'

export default function DrinkItem({ drink }) {


    return (
        <div>
            {drink.strDrink}
        </div>
    )
}