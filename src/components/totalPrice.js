import React, { useContext, useEffect, useState } from 'react';

import { PizzaContext } from '../context/pizzaSizeProvider';

const TotalPrice = () => {
    
    const [ totalPrice, setTotalPrice ] = useState(null);
    const pizzaSizeChoosen = useContext(PizzaContext);

    useEffect(() => {
        const { small, medium, large } = pizzaSizeChoosen.valueGlobalState;

        let tp = small + medium + large;

        setTotalPrice(tp);

    }, [pizzaSizeChoosen.valueGlobalState])
    
    return (
        <div>
            <p>{totalPrice}</p>
        </div>
    )
}

export default TotalPrice;