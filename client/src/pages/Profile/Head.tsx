import React from 'react'
import {IProps} from '../../types/propsTypes'
import Kevin from './kevin.jpg'
const Head : React.FC<IProps> = ({data}) =>{
    
    return (
        <article className='profileHead'>
            <div>
                <h3> {data?.displayName } </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <pre>TURKEY, İSTANBUL</pre>
                <ul>
                    <li>x</li>
                    <li>x</li>
                    <li>x</li>
                    <li>x</li>
                </ul>
            </div>
            <div>
                <img src={Kevin} alt="Profile Picture" />
            </div>
        </article>
    )
}

export default Head