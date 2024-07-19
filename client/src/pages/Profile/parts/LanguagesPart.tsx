import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Languages } from '@profile'
import { IAboutPartType } from '@types'
import { setKeep } from '~/store/slices/keepSlice'

const LanguagePart = () => {

    const [values, setValues] = useState<IAboutPartType>({
        languageName: '',
        languageLevel: ''
    })
    const [languages, setLanguages] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    const dispatch = useDispatch()

    const IFilter = contents.filter((content:any)=> content?.payload.name == "Languages")
    if(IFilter.length==1) return

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
                name: "Languages",
                component: Languages({languages: languages})
            }
        }))
    }
    
    return (
        <>
            <input type="text" name='languageName' value={values.languageName} onChange={handleChange} placeholder='Langugage Name Here' />
            <input type="text" name='languageLevel' value={values.languageLevel} onChange={handleChange} placeholder='Language Level Here' />
            <button onClick={AddLanguage}>Dil Ekle</button>
            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default LanguagePart