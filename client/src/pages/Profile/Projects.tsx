import React from 'react'
import { IProps } from '@types'
import { Project } from '@profile'

const Projects : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className="profileProjects">
            <h2>Projects</h2>
            <div className='container'>
                <Project 
                    name='Live Chat'
                    description='askdoağkosdkaskopdjpaosd'
                    badges={["js", "py"]}
                    link="https://google.com"
                />
            </div>
        </div>
    )
}

export default Projects