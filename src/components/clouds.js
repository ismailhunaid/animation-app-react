import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import clouds from '../assets/clouds.jpg'


const style= {
    width:150
}
const Clouds=()=>{

const {ref}=useWebAnimations({
    keyframes:[
        {transform:'translate(0,0)'},
        {transform:'translate(1600px,0)'},
    
    ],
    timing:{
        duration:9000,
        iterations:Infinity,
    }
})

    return(
        <div ref={ref}>
            <img style={style}src={clouds} alt="clouds"/>
            

        </div>
    )
}
export default Clouds