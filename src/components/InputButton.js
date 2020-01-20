import React, { useContext, useEffect, useState } from 'react';

import { PizzaContext } from '../context/pizzaSizeProvider';

const InputButton = (props) => {

    const [ totalPrice, setTotalPrice ] = useState(null);

    const pizzaSizeChoosen = useContext(PizzaContext);

    useEffect(() => {
        const { small, medium, large } = pizzaSizeChoosen.valueGlobalState;

        let tp = small + medium + large;

        setTotalPrice(tp);

    }, [pizzaSizeChoosen.valueGlobalState])

    const savageOrder = (type, minuOrPlus) => {
        const { small, medium, large, adult, child } = pizzaSizeChoosen.valueGlobalState;

        if (minuOrPlus === "plus") {
            if (totalPrice <= 1000) {
                if (type === "small" || type === "child") {
                    if ((150 + small) % 300 === 0) {
                        let numberOfMedium = (50 + small), numberOfSmall = (150 + small) / 2, numberOfChild = numberOfMedium / 200;
        
                        pizzaSizeChoosen.pizzaSize("mediumOverSmall", { numberOfMedium, numberOfSmall, numberOfChild })
                    }
                    else {
                        pizzaSizeChoosen.pizzaSize(type, { child: 1, small: 150 })
                    }
                }
        
                else if (type === "medium" || type === "adult") {
                    if ((200 + medium) % 400 === 0) {
                        let numberOfLarge = ((200 + medium) / 400) * 300, numberOfMedium = (200 + medium) / 2, numberOfAdult = numberOfLarge / 300;
        
                        pizzaSizeChoosen.pizzaSize("largeOverMedium", { numberOfLarge, numberOfMedium, numberOfAdult })
                    }
                    else {
                        pizzaSizeChoosen.pizzaSize(type, { adult: 1, child: 0, medium: 200 })
                    }
                }
        
                else if (type === "large") {
                    pizzaSizeChoosen.pizzaSize(type, { adult: 1, child: 2, large: 300 })
                }

            }
        }

        else {
            if (adult > 1 ) {
                if (type === "small" && small > 0) pizzaSizeChoosen.pizzaSize(type, { child: -1, small: -150 });
                else if (type === "medium" && medium > 0) pizzaSizeChoosen.pizzaSize(type, { adult: -1, child: 0, medium: -200 })
                else if (type === "large") {
                    if (child >= 2) pizzaSizeChoosen.pizzaSize(type, { adult: -1, child: -2, large: -300 })
                    else if (adult >= 2) pizzaSizeChoosen.pizzaSize(type, { adult: -2, child: 0, large: -300 })
                }
                else if (type === "adult") {
                    if (medium >= 200) pizzaSizeChoosen.pizzaSize(type, { adult: -1, child: 0, medium: -200 });
                    else if (large >= 300) {
                        if (child > adult) pizzaSizeChoosen.pizzaSize("large", { adult: -1, child: -2, large: -300 })
                    }
                }
                else if (type === "child" && child > 0 && small > 0) pizzaSizeChoosen.pizzaSize(type, { child: -1, small: -150 });
            } 

            else if (adult === 1) {
                if ((type === "small" || type === "child") && child > 0 && small > 0) pizzaSizeChoosen.pizzaSize(type, { child: -1, small: -150 });
                else if (type === "medium" && (small + large) > 200) pizzaSizeChoosen.pizzaSize(type, { adult: 0, child: -2, medium: -200 });
                else if (type === "large" && (small + medium) > 300) pizzaSizeChoosen.pizzaSize(type, { adult: 0, child: -2, large: -300 });
            }
        }
    }

    const handleValue = (type) => {
        const { small, medium, large, adult, child } = pizzaSizeChoosen.valueGlobalState;

        if (type === "small") return (small/150)
        if (type === "medium") return (medium/200)
        if (type === "large") return (large/300)
        if (type === "adult") return (adult)
        if (type === "child") return (child)
    }

    const handleClassName = (type) => {
        const { small, medium, large, adult, child } = pizzaSizeChoosen.valueGlobalState;

        if (type === "small" && small/150 !== 0) return "minus"
        if (type === "medium" && medium/200 !== 0) return "minus"
        if (type === "large" && large/300 !== 0) return "minus"
        if (type === "adult" && adult > 1) return "minus"
        if (type === "child" && child !== 0) return "minus"

        else return "disabled"
    }

    const handlePlus = () => {
        const { small, medium, large } = pizzaSizeChoosen.valueGlobalState;

        let totalPrice = small + medium + large;

        if (totalPrice <= 1000) return "plus"
        else return "disabled"
    }

    return (
        <div>
            <span 
                className={handleClassName(props.type)}
                onClick={() => savageOrder(props.type, "minus")}
            >
                -
            </span>
            <input 
                type="text" 
                value={handleValue(props.type)}
                onChange={() => {}}
            />
            <span 
                className={handlePlus()}
                onClick={() => savageOrder(props.type, "plus")}
            >
                +
            </span>
        </div>
    )
}

export default InputButton;