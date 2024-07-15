import { useSelector } from 'react-redux'
import { useState } from 'react'
import { About } from '@profile'
import { Limit, AddContent } from '@/helpers'


const AboutPart = () => {
    const [value, setValue] = useState<string>('')

    const { contents } = useSelector((state:any)=> state.keep)

    Limit('About')

    function handleClick(){
        AddContent({
            name: 'About',
            component: About({text: value})
        })
    }
    
    return (
            <>
                <input type="text" name='aboutText' value={value} onChange={(e:any)=> setValue(e.target.value)} placeholder='about text'/>
                <button onClick={handleClick}>Ekle</button>
            </>
    )
}

export default AboutPart