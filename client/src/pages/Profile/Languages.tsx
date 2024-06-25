import React from 'react'
import { IProps } from '../../types/propsTypes'
import { Language } from './index'

const Languages : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileLanguages'>
            <h2>Languages</h2>
            <Language name='English' level='advanced' />
        </article>
    )
}

export default Languages