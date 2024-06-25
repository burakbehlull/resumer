import React from 'react'
import { LanguageType } from '../../types/index'



const Language : React.FC<LanguageType> = ({name, level}) =>{
    return (
        <div className='language'>
            <h4> {name} </h4>
            <pre> {level} </pre>
        </div>
    )
}

export default Language