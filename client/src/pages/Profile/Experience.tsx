import React from 'react'
import {IProps} from '../../types/propsTypes'

const Experience : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className='experience'>
            <div>
                <div>
                    <h3><a href='#'>Github</a></h3>
                    <pre>Remote</pre>
                </div>
                <p>2021 - Present</p>
            </div>
            <h4>Fullstack Web Developer</h4>
            <p>Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js</p>
        </div>
    )
}

export default Experience