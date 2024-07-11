import React, { Fragment } from 'react'
import { IProps } from 'types'
import { Modal } from '@components'
import { useSelector } from 'react-redux'

import AboutPart from './parts/AboutPart'
import LanguagePart from './parts/LanguagesPart'
import ExperiencePart from './parts/ExperiencePart'

const CreateProfile : React.FC<IProps> = ({data}) =>{
   
    const { contents } = useSelector((state:any)=> state.keep)

    return (
        <section className='CreateProfile'>
            <button onClick={()=> console.log(contents)}>x</button>

            <br />
            <h1>Create Profile</h1>
            <Modal 
                children={<AboutPart />}
            />
            <br />
            <Modal 
                children={<LanguagePart />}
            />

            <Modal 
                children={<ExperiencePart />}
            />
            
        
            <br />
            <br />
            <div>
                {contents?.map((item:any, key:number)=><Fragment key={key}>
                    {item.payload.component}
                </Fragment>)}
            </div>
        </section>
    )
}

export default CreateProfile