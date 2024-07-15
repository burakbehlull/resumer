import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '~/store'
import { setKeep } from '~/store/slices/keepSlice'
import { useState } from 'react'
import { IEducationPartType } from '@types'
import { Education } from '@profile'

const EducationPart = () => {



    const [values, setValues] = useState<IEducationPartType>({
        name: '',
        date: '',
        description: ''
    })
    const [educations, setEducations] = useState<any[]>([])
    const dispatch : AppDispatch = useDispatch()

    const { contents } = useSelector((state:any)=> state.keep)
    const IFilter = contents.filter((content:any)=> content?.payload.name == "Education")
    if(IFilter.length==1) return
    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddEducation(){
        setEducations([...educations, {
            name: values.name,
            date: values.date,
            description: values.description,
        }])
    }
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: 'Education',
                component: Education({educations: educations})
            }
        }))
    }
    
    return (
        <>
            <input type="text" name='name' value={values.name} onChange={handleChange} placeholder='name' />
            <input type="text" name='description' value={values.description} onChange={handleChange} placeholder='description' />
            <input type="text" name='date' value={values.date} onChange={handleChange} placeholder='date' />
            
            
            <button onClick={AddEducation}>Eğitim Ekle</button>
            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default EducationPart