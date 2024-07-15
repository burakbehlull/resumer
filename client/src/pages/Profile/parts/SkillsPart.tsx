import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Skills } from '@profile'
import { Limit, AddContent } from '@/helpers'

const SkillsPart = () => {

    const [values, setValues] = useState<{name: string}>({
        name: ''
    })
    const [skills, setSkills] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    Limit('Skills')
    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddLanguage(){
        setSkills([...skills, {name: values.name}])
    }
    function handleClick(){
        AddContent({
            name: 'Skills',
            component: Skills({skills: skills})
        })
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