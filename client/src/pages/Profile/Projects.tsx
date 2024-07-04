import React, { Fragment } from 'react'
import { IProjectsComponentType } from '@types'
import { Project } from '@profile'


const Projects : React.FC<IProjectsComponentType> = ({projects}) =>{
    
    return (
        <div className="profileProjects">
            <h2>Projects</h2>
            <div className='container'>
                {projects?.map((project:any, key:number)=> <Fragment key={key}>
                    <Project {...project} />
                </Fragment>)}
            </div>
        </div>
    )
}

export default Projects