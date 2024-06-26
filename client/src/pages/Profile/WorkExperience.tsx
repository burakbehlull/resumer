import React from 'react'
import { IProps } from '@types'
import { Experience } from '@profile'

const WorkExperience : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileWorkExperience'>
            <h2>Work Experience</h2>
            <Experience name='Github' 
                date='2021 - Now' 
                description='asdladlaslğdaskdaoaskdaoskdasdsakosdasdas'
                link='https://github'
                position='web developer'
                type='remote'
            />
        </article>
    )
}

export default WorkExperience