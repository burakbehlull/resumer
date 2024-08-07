import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { IExperincePartType } from '@types'
import { WorkExperience } from '@profile'
import { setKeep } from '~/store/slices/keepSlice'

const ExperiencePart = () => {
    const [values, setValues] = useState<IExperincePartType>({
        name: '', type: '', link: '', date: '', position: '', description: ''
    })
    const [experiences, setExperiences] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    const dispatch = useDispatch()

    const IFilter = contents.filter((content:any)=> content?.payload.name == "WorkExperience")
    if(IFilter.length==1) return

    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddExperience(){
        setExperiences([...experiences, {
            name:values.name, 
            type:values.type, 
            link:values.link, 
            date:values.date, 
            position:values.position, 
            description:values.description
        }])
    }
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: 'WorkExperience',
                component: WorkExperience({experiences: experiences})
            }
        }))
    }
    
    return (
        <>
            <input type="text" name='name' value={values.name} onChange={handleChange} placeholder='name' />
            <input type="text" name='description' value={values.description} onChange={handleChange} placeholder='description' />
            <input type="text" name='type' value={values.type} onChange={handleChange} placeholder='type' />
            <input type="text" name='link' value={values.link} onChange={handleChange} placeholder='link' />
            <input type="text" name='position' value={values.position} onChange={handleChange} placeholder='position' />
            <input type="text" name='date' value={values.date} onChange={handleChange} placeholder='date' />
            
            
            <button onClick={AddExperience}>Deneyim Ekle</button>
            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default ExperiencePart