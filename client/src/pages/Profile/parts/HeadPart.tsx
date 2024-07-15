import { useSelector } from 'react-redux'
import { useState } from 'react'
import { IHeadPartType } from '@types'
import { Head } from '@profile'
import { Limit, AddContent } from '@/helpers'

const HeadPart = () => {


    const [links, setLinks] = useState<any[]>([])
    const [values, setValues] = useState<IHeadPartType>({
        displayName: '',
        description: '',
        location: '',
        type: '',
        uri: '',
    })

    const { contents } = useSelector((state:any)=> state.keep)
    Limit('Head')
    function handleChange(e:any){
        setValues({...values, [e.target.name]: e.target.value})
    }
    function AddLink(){
        setLinks([...links, {
            type: values.type,
            uri: values.uri
        }])
        values.type = ''
        values.uri = ''

    }
    function handleClick(){
        AddContent({
            name: 'Head',
            component: Head({...values, links: links})
        })
    }
    
    return (
        <>
            <input type="text" name='displayName' value={values.displayName} onChange={handleChange} placeholder='displayName' />
            <input type="text" name='description' value={values.description} onChange={handleChange} placeholder='description' />
            <input type="text" name='location' value={values.location} onChange={handleChange} placeholder='location' />
            <br /><br />
            <input type="text" name='type' value={values.type} onChange={handleChange} placeholder='type' />
            <input type="text" name='uri' value={values.uri} onChange={handleChange} placeholder='uri' />
            
            <button onClick={AddLink}>Link Ekle</button>
            <br />
            <button onClick={handleClick}>Tamamla</button>

        </>
    )
}

export default HeadPart