import React from 'react'
import { IProps } from '../../types/propsTypes'
import { EducationChapter } from './index'

const Education : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className='profileEducation'>
            <h2>Education</h2>
            <EducationChapter data={data} />
        </div>
    )
}

export default Education