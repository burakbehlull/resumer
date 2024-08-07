import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Skills } from '@profile'
import { setKeep } from '~/store/slices/keepSlice'

const SkillsPart = () => {

    const [values, setValues] = useState<{name: string}>({
        name: ''
    })
    const [skills, setSkills] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    const dispatch = useDispatch()
    const IFilter = contents.filter((content:any)=> content?.payload.name == "Skills")
    if(IFilter.length==1) return

    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddLanguage(){
        setSkills([...skills, {name: values.name}])
    }
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: "Skills",
                component: Skills({skills: skills})
            }
        }))
    }
    
    return (
        <>
            <input type="text" name='name' value={values.name} onChange={handleChange} placeholder='Skills Name Here' />
            <button onClick={AddLanguage}>Skill Ekle</button>
            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default SkillsPart