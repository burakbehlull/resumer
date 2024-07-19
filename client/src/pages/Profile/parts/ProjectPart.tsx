import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Projects } from '@profile'
import { IProjectPartType } from '@types'
import { Limit } from '@/helpers'
import { setKeep } from '~/store/slices/keepSlice'


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
    const dispatch = useDispatch()

    Limit('Projects')
    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddProject(){
        setProjects([...projects, {name: values.name, description: values.description, link: values.link}])
    }
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: "Projects",
                component: Projects({projects: projects})
            }
        }))
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