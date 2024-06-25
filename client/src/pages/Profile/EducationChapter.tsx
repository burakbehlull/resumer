import React from 'react'
import { EducationType } from '../../types/index'


const EducationChapter : React.FC<EducationType> = ({name, date, description}) =>{
    
    return (
        <div className='chapter'>
            <div>
                <h4> {name} </h4>
                <p> {date} </p>
            </div>
            <p> {description} </p>
        </div>
    )
}

export default EducationChapter