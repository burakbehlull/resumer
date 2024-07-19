import { useSelector } from "react-redux"

const { contents } = useSelector((state:any)=> state.keep)
function Limit(name:string){
    const IFilter = contents.filter((content:any)=> content?.payload.name == name)
    if(IFilter.length==1) return
}


export {
    Limit
}

