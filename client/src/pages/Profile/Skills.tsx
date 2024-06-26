import React from 'react'
import { SkillsType } from '@types'



const Skills : React.FC<SkillsType> = ({skills}) =>{
    
    return (
        <article className='profileSkills'>
            <h1>Skils</h1>
            <div>
                {skills?.map((skill, key)=><pre key={key}>{skill}</pre>)}
            </div>
        </article>
    )
}

export default Skills