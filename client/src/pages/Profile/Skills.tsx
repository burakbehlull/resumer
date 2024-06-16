import React from 'react'
import { IProps } from '../../types/propsTypes'

const Skills : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileSkills'>
            <h1>Skils</h1>
            <div>
                <pre>Javascript</pre>
                <pre>Typescript</pre>
                <pre>NodeJS</pre>
                <pre>React</pre>
                <pre>C#</pre>
            </div>
        </article>
    )
}

export default Skills