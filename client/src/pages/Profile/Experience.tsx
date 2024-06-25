import React from 'react'
import { ExperienceType } from '../../types/index'

const Experience : React.FC<ExperienceType> = ({name, type, link, date, position, description}) =>{
    
    return (
        <div className='experience'>
            <div>
                <div>
                    <h3><a href={link}>{name}</a></h3>
                    <pre> {type} </pre>
                </div>
                <p> {date}</p>
            </div>
            <h4> {position} </h4>
            <p>{description}</p>
        </div>
    )
}

export default Experience