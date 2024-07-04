import React, { Fragment } from 'react'
import { IEducation } from '@types'
import { EducationChapter } from '@profile'

const Education : React.FC<IEducation> = ({educations}) =>{
    
    return (
        <article className='profileEducation'>
            <h2>Education</h2>
            {educations?.map((education:any, key: number)=><Fragment key={key}>
            <EducationChapter {...education} />
            </Fragment>)}
        </article>
    )
}

export default Education