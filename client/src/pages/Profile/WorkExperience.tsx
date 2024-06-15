import React from 'react'
import { IProps } from '../../types/propsTypes'
import { Experience } from './index'

const WorkExperience : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileWorkExperience'>
            <h2>Work Experience</h2>
            <Experience data={data} />
        </article>
    )
}

export default WorkExperience