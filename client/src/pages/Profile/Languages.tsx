import React from 'react'
import { IProps } from '../../types/propsTypes'
import { Language } from './index'
const Languages : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileLanguages'>
            <h2>Languages</h2>
            <Language data={data} />
        </article>
    )
}

export default Languages