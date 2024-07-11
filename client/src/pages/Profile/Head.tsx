import React from 'react'
import { HeadType } from '@types'
import Kevin from './kevin.jpg'

const Head : React.FC<HeadType> = ({displayName, description, location, links}) =>{
    return (
        <article className='profileHead'>
            <div>
                <h3> {displayName} </h3>
                <p> {description} </p>
                <pre> {location} </pre>
                <ul>
                    {links?.map((link, key)=><li key={key}><a href={link.uri}>x</a></li>)}
                </ul>
            </div>
            <div>
                <img src={Kevin} alt="Profile Picture" />
            </div>
        </article>
    )
}

export default Head