import React from 'react'
import { IProps } from '../../types/propsTypes'

const About : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileAbout'>
            <h2>About</h2>
            <div>
                <p>As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.</p>
            </div>
        </article>
    )
}

export default About