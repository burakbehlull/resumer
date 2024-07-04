import React, { Fragment } from 'react'
import { ILanguageComponentType } from '@types'
import { Language } from '@profile'



const Languages : React.FC<ILanguageComponentType> = ({languages}) =>{
    
    return (
        <article className='profileLanguages'>
            <h2>Languages</h2>
            {languages?.map((language:any, key: number)=>
            <Fragment key={key}>
                <Language {...language} />
            </Fragment>
            )}
        </article>
    )
}

export default Languages