import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import elephant from '../assets/elephant.jpeg'

const Elephant =()=>{

const {ref}=useWebAnimations({
    keyframes:[
        {transform:'translate(0,0)'},
        {transform:'translate(1600px,0)'}
    ],
    timing:{
        duration:16000,
        iterations:Infinity
    }
})

    return(
        <div ref={ref}>
            <img src={elephant} alt="elephant"/>
            

        </div>
    )
}
export default Elephant