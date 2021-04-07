import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import babu from '../assets/babu.jpg'


const style= {
    width:150
}
const Babu=()=>{

const {ref}=useWebAnimations({
    keyframes:[
        {transform:'translate(-900px,0)'},
        {transform:'translate(1800px,0)'},
    
    ],
    timing:{
        duration:12000,
        iterations:Infinity,
    }
})

    return(
        <div ref={ref}>
            <img style={style}src={babu} alt="babu"/>
            

        </div>
    )
}
export default Babu