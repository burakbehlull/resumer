import React from 'react'
import { IProps } from '../../types/propsTypes'
const Project : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className='project'>
            <h3><a href="#">Live Chat</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos possimus consequuntur iusto dolores</p>
            <div className='badges'>
                <pre>javascript</pre>
                <pre>javascript</pre>
            </div>
        </div>
        
    )
}

export default Project