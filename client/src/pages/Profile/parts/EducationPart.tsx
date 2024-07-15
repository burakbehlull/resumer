import { useSelector } from 'react-redux'
import { useState } from 'react'
import { IEducationPartType } from '@types'
import { Education } from '@profile'
import { Limit, AddContent } from '@/helpers'
const EducationPart = () => {

    const [values, setValues] = useState<IEducationPartType>({
        name: '',
        date: '',
        description: ''
    })
    const [educations, setEducations] = useState<any[]>([])

    const { contents } = useSelector((state:any)=> state.keep)
    Limit('Education')
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
        AddContent({
            title: 'Education',
            element: Education({educations: educations})
        })
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