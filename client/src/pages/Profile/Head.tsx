import React from 'react'
import {IHeadProps} from '../../types/propsTypes'

const Profile : React.FC<IHeadProps> = ({data}) =>{
    
    return (
        <article className='profileHead'>
            <div>
                <h3> {data?.displayName} </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <pre>TURKEY, İSTANBUL</pre>
                <ul>
                    <li>x</li>
                    <li>x</li>
                    <li>x</li>
                    <li>x</li>
                </ul>
            </div>
            <div></div>
        </article>
    )
}

export default Profile