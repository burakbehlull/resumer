import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/store'
import { setKeep } from '~/store/slices/keepSlice'
import { useState } from 'react'
import { About } from '@profile'

const AboutPart = () => {
    const [value, setValue] = useState<string>('')
    const dispatch : AppDispatch = useDispatch()
    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                name: 'About',
                component: About({text: value})
            }
        }))
    }
    
    return (
            <>
                <input type="text" name='aboutText' value={value} onChange={(e:any)=> setValue(e.target.value)} placeholder='about text'/>
                <button onClick={handleClick}>Ekle</button>
            </>
    )
}

export default AboutPart