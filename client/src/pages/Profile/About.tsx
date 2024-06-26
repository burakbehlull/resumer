import React from 'react'
import { AboutType } from '@types'


const About : React.FC<AboutType> = ({text}) =>{
    
    return (
        <article className='profileAbout'>
            <h2>About</h2>
            <div>
                <p> {text} </p>
            </div>
        </article>
    )
}

export default About