import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import kaboo from '../assets/kabotar.jpg'

const style= {
    width:200
}

const Kaboo=()=>{

const {ref}=useWebAnimations({
    keyframes:[
        {transform:'translate(0,0)'},
        {transform:'translate(1600px,0)'}
    ],
    timing:{
        duration:10000,
        iterations:Infinity
    }
})

    return(
        <div ref={ref}>
            <img style={style} src={kaboo} alt="kaboo"/>
            

        </div>
    )
}
export default Kaboo