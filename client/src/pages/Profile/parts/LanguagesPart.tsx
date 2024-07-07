import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '~/store'
import { setKeep } from '~/store/slices/keepSlice'
import { useState } from 'react'
import { Languages } from '@profile'
import { IAboutPartType } from '@types'

const LanguagePart = () => {

    const [values, setValues] = useState<IAboutPartType>({
        languageName: '',
        languageLevel: ''
    })
    const [languages, setLanguages] = useState<any[]>([])
    const dispatch : AppDispatch = useDispatch()

    const { contents } = useSelector((state:any)=> state.keep)


    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddLanguage(){
        setLanguages([...languages, {name: values.languageName, level: values.languageLevel}])
    }
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: 'Languages',
                component: Languages({languages: languages})
            }
        }))
    }
    
    return (
        <>
            {JSON.stringify(languages)}
            {JSON.stringify(values)}
            <input type="text" name='languageName' value={values.languageName} onChange={handleChange} placeholder='Langugage Name Here' />
            <input type="text" name='languageLevel' value={values.languageLevel} onChange={handleChange} placeholder='Language Level Here' />
            <button onClick={AddLanguage}>Dil Ekle</button>

            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default LanguagePart