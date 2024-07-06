import React, { Fragment, useState } from 'react'
import { IProps } from 'types'
import { About,Languages } from '@profile'
import { Modal } from '@components'

const CreateProfile : React.FC<IProps> = ({data}) =>{
    interface ValuesStateTypes{
        aboutText: string,
        languages: any[],
        languageName: string,
        languageLevel: string
    }


    const [contents, setContents] = useState<any[]>([])
    
    const [values, setValues] = useState<ValuesStateTypes>({
            aboutText: '',
            languages: [],
            languageName: '',
            languageLevel: ''
        })


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
            {JSON.stringify(values)}
            <h1>Create Profile</h1>
            <Modal 
                children={<>
                    <input type="text" name='aboutText' value={values.aboutText} onChange={handleChange} placeholder='about text'/>
                    <button onClick={()=> setContents([...contents, {
                        name: 'About',
                        component: About({text: values.aboutText})
                    }])}>About</button>
                </>}
            />
            <br /><br /><br />
            <Modal 
                children={<>
                    <input type="text" name='languageName' value={values.languageName} onChange={handleChange} placeholder='Langugage Name Here' />
                    <input type="text" name='languageLevel' value={values.languageLevel} onChange={handleChange} placeholder='Language Level Here' />
                    <button onClick={LanguageAdd}>Dili Ekle</button>

                    <button onClick={()=> setContents([...contents, {
                        name: 'Languages',
                        component: Languages({languages: values.languages})
                    }])}>Languages</button>
                </>}
            />
            
        
            <br /><br />
            <div>
                {contents?.map((item:any, key:number)=><Fragment key={key}>
                    {item.component}
                </Fragment>)}
            </div>
        </section>
    )
}

export default CreateProfile