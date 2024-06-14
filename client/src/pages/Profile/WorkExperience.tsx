import React from 'react'
import {IProps} from '../../types/propsTypes'

const WorkExperience : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileWorkExperience'>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div>
                    <div>
                        <h3><a href='#'>Github</a></h3>
                        <pre>Remote</pre>
                    </div>
                    <p>2021 - Present</p>
                </div>
                <h4>Fullstack Web Developer</h4>
                <p>Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js</p>
            </div>
        </article>
    )
}

export default WorkExperience