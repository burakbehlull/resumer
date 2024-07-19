import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { About } from '@profile'
import { setKeep } from '~/store/slices/keepSlice'


const AboutPart = () => {
    const [value, setValue] = useState<string>('')

    const { contents } = useSelector((state:any)=> state.keep)
    const dispatch = useDispatch()


    const IFilter = contents.filter((content:any)=> content?.payload.name == "About")
    if(IFilter.length==1) return

    function handleClick(){
        dispatch(setKeep({
            type: 'ADD_CONTENT',
            payload: {
                id: contents.length + 1,
                name: "About",
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