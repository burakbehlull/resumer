import React from 'react'
import { ProjectType } from '@types'


const Project : React.FC<ProjectType> = ({name, description, link, badges}) =>{
    
    return (
        <div className='project'>
            <h3><a href={link}> {name} </a></h3>
            <p> {description} </p>
            <div className='badges'>
                {badges?.map((badge, key)=> <pre key={key}> {badge.name} </pre>)}
            </div>
        </div>
        
    )
}

export default Project