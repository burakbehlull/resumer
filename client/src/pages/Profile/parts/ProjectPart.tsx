import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Projects } from '@profile'
import { IProjectPartType } from '@types'
import { Limit, AddContent } from '@/helpers'


const LanguagePart = () => {
    const [values, setValues] = useState<IProjectPartType>({
        name: '',
        description: '',
        link :'',
        badges: [],
        badgeName: ''
    })
    const [projects, setProjects] = useState<any[]>([])
    const [badges, setBadges] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    Limit('Projects')
    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddProject(){
        setProjects([...projects, {name: values.name, description: values.description, link: values.link}])
    }
    function handleClick(){
        AddContent({
            name: 'Projects',
            component: Projects({projects: projects})
        })
    }
    function AddBadge(){
        setBadges([...badges, {name: values.badgeName}])
    }
    
    return (
        <>
            <input type="text" name='badgeName' value={values.badgeName} onChange={handleChange} placeholder='Badge Name Here' />
            <button onClick={AddBadge}>Badge Ekle</button>
            <br />
            <input type="text" name='name' value={values.name} onChange={handleChange} placeholder='Name Here' />
            <input type="text" name='description' value={values.description} onChange={handleChange} placeholder='Description' />
            <input type="text" name='link' value={values.link} onChange={handleChange} placeholder='Link Here' />
            <button onClick={AddProject}>Project Ekle</button>

            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default LanguagePart