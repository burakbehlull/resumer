import React from 'react'
import { IProps } from '@types'
import { EducationChapter } from '@profile'

const Education : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileEducation'>
            <h2>Education</h2>
            <EducationChapter name='fullstack developer' date='2020 - Present' 
            description='aspdlaslğdaksodapskdjasıdsa' />
        </article>
    )
}

export default Education