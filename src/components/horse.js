import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import horse from '../assets/horse.jpeg'

const Horse=()=>{


const {ref}=useWebAnimations({
    keyframes:[
        {transform:'translate(0,0)'},
        {transform:'translate(1600px,0)'}
    ],
    timing:{
        duration:15000,
        iterations:Infinity
    }
})

    return(
        <div ref={ref}>
            <img src={horse} alt="horse"/>
            

        </div>
    )
}
export default Horse