import React, { Fragment } from 'react'
import { WorkExperienceType } from '@types'
import { Experience } from '@profile'




const WorkExperience : React.FC<WorkExperienceType> = ({experiences}) =>{
    return (
        <article className='profileWorkExperience'>
            <h2>Work Experience</h2>
            {experiences?.map((data:any, key:number)=><Fragment key={key}>
                <Experience {...data}/>
            </Fragment>)}
            
        </article>
    )
}

export default WorkExperience