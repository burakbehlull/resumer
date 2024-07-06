import React, { useState } from "react"

interface IModal {
    name?: string,
    children: any,
}


const Modal : React.FC<IModal> = ({
    children
})=>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <>
            <br />
            {isOpen && children}
            <br /><br />
            <button onClick={()=> setIsOpen(!isOpen)}>Aç</button>
            <br />
        </>
    )
}

export default Modal