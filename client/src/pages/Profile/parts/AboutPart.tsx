import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '~/store'
import { setKeep } from '~/store/slices/keepSlice'
import { useState } from 'react'
import { About } from '@profile'

const AboutPart = () => {
    const [value, setValue] = useState<string>('')
    const dispatch : AppDispatch = useDispatch()

    const { contents } = useSelector((state:any)=> state.keep)

    const IFilter = contents.filter((content:any)=> content?.payload.name == "About")
    if(IFilter.length==1) return

    function handleClick(){
        dispatch(setKeep({
            id: contents.length + 1,
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