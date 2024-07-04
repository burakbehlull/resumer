import { Reorder } from 'framer-motion'
import { useState } from 'react'
import { WorkExperience } from './Profile/index'
const Draggable = ()=> {
    const [fruits, setFruits] = useState<any[]>([{
        id: 1,
        name: ()=> {},
    }, {id: 2, name: ()=> {}}, {id:3, name: ()=> {}}])

    console.log(fruits)
    return (
        <>
            <h3> {JSON.stringify(fruits)} </h3>
            <Reorder.Group
            style={{padding: "5px"}}
            values={fruits}
            onReorder={setFruits}
            axis="y"
            >
                {fruits?.map((item:any, key:number)=><Reorder.Item
                    value={item}
                    key={item.id}
                    exit={{opacity: 0}}
                    style={{padding: '10px'}}
                >
                    {item.name()}
                </Reorder.Item>)}
            </Reorder.Group>

            <button
                onClick={()=> setFruits([...fruits, {
                    id: fruits.length+1,
                    name: ()=> <h1>xd {fruits.length + 1} </h1>
                }])}
            >
                x
            </button>
        </>
    )
}

export default Draggable