import React from 'react'
import {IProps} from '../../types/propsTypes'

const EducationChapter : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className='chapter'>
            <div>
                <h4>Fullstack Web Developer</h4>
                <p>2021 - Present</p>
            </div>
            <p>Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js</p>
        </div>
    )
}

export default EducationChapter