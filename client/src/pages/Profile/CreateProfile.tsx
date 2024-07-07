import React, { Fragment, useState } from 'react'
import { IProps } from 'types'
import { About,Languages } from '@profile'
import { Modal } from '@components'

import AboutPart from './parts/AboutPart'
import { useSelector } from 'react-redux'

const CreateProfile : React.FC<IProps> = ({data}) =>{
    interface ValuesStateTypes {
        languages: any[],
        languageName: string,
        languageLevel: string
    }


    const [contentsx, setContentsx] = useState<any[]>([])
    
    const [values, setValues] = useState<ValuesStateTypes>({
            languages: [],
            languageName: '',
            languageLevel: ''
        })

    const { contents } = useSelector((state:any)=> state.keep)

    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    function LanguageAdd(){
        values.languages.push({
            name: values.languageName,
            level: values.languageLevel,
        })
        values.languageLevel = ''
        values.languageName = ''
    }
    return (
        <section className='CreateProfile'>
            CONTENS: {JSON.stringify(contents)}
            <button onClick={()=> console.log(contents)}>x</button>

            <br />
            {JSON.stringify(values)}
            <h1>Create Profile</h1>
            <Modal 
                children={<AboutPart />}
            />
            <br /><br /><br />
            <Modal 
                children={<>
                    <input type="text" name='languageName' value={values.languageName} onChange={handleChange} placeholder='Langugage Name Here' />
                    <input type="text" name='languageLevel' value={values.languageLevel} onChange={handleChange} placeholder='Language Level Here' />
                    <button onClick={LanguageAdd}>Dili Ekle</button>

                    <button onClick={()=> setContentsx([...contentsx, {
                        name: 'Languages',
                        component: Languages({languages: values.languages})
                    }])}>Languages</button>
                </>}
            />
            
        
            <br /><br />
            <div>
                {contents?.map((item:any, key:number)=><Fragment key={key}>
                    {item.payload.component}
                </Fragment>)}
            </div>
        </section>
    )
}

export default CreateProfile