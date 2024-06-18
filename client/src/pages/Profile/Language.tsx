import React from 'react'
import {IProps} from '../../types/propsTypes'

const Language : React.FC<IProps> = ({data}) =>{
    
    return (
        <div className='language'>
            <h4>English</h4>
            <pre>Beginner</pre>
        </div>
    )
}

export default Language