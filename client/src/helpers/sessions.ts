import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "~/store"
import { setKeep } from '~/store/slices/keepSlice'

const { contents } = useSelector((state:any)=> state.keep)
const dispatch : AppDispatch = useDispatch()

interface IAddContentType {
    title : string,
    element: any
}

function Limit(name:string){
    const IFilter = contents.filter((content:any)=> content?.payload.name == name)
    if(IFilter.length==1) return
}


function AddContent({title, element}:IAddContentType){
    dispatch(setKeep({
        type: 'ADD_CONTENT',
        payload: {
            id: contents.length + 1,
            name: title,
            component: element
        }
    }))
}
export {
    Limit,
    AddContent
}

